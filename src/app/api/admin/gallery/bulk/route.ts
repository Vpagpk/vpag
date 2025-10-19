import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { galleryPhotos } from '@/db/schema';
import { inArray } from 'drizzle-orm';
import { getCurrentUser } from '@/lib/auth';
import { createAuditLog } from '@/lib/audit';
import { rateLimit } from '@/lib/rate-limit';
import { revalidateTag } from 'next/cache';
import { z } from 'zod';

const limiter = rateLimit({
  interval: 60 * 1000,
  maxRequests: 50,
});

const bulkUpdateSchema = z.object({
  ids: z.array(z.number().int().positive()).min(1).max(50),
  action: z.enum(['show', 'hide', 'delete']),
});

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const user = await getCurrentUser(request);
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Rate limiting
    const rateCheck = limiter.check(request, user.id);
    if (!rateCheck.success) {
      return NextResponse.json(
        { error: 'Too many requests', resetAt: rateCheck.reset },
        { status: 429 }
      );
    }

    const body = await request.json();
    const validation = bulkUpdateSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors[0].message },
        { status: 400 }
      );
    }

    const { ids, action } = validation.data;

    let result;
    let auditAction: 'bulk_update' | 'bulk_delete';

    if (action === 'delete') {
      result = await db
        .delete(galleryPhotos)
        .where(inArray(galleryPhotos.id, ids))
        .returning();
      
      auditAction = 'bulk_delete';
    } else {
      const isVisible = action === 'show';
      result = await db
        .update(galleryPhotos)
        .set({ 
          isVisible,
          updatedAt: new Date().toISOString()
        })
        .where(inArray(galleryPhotos.id, ids))
        .returning();
      
      auditAction = 'bulk_update';
    }

    // Create audit log
    await createAuditLog({
      userId: user.id,
      action: auditAction,
      resourceType: 'gallery_photo',
      resourceId: ids.join(','),
      details: { action, count: ids.length },
      request,
    });

    // Revalidate gallery cache
    revalidateTag('gallery');

    return NextResponse.json({
      success: true,
      action,
      affected: result.length,
      items: result,
    }, { status: 200 });
  } catch (error) {
    console.error('Bulk operation error:', error);
    return NextResponse.json(
      { error: 'Bulk operation failed' },
      { status: 500 }
    );
  }
}
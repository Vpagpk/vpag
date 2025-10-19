import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { galleryPhotos } from '@/db/schema';
import { eq, and, desc, asc } from 'drizzle-orm';
import { revalidateTag } from 'next/cache';
import { z } from 'zod';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const limit = Math.min(parseInt(searchParams.get('limit') || '100'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const isVisible = searchParams.get('isVisible');
    const category = searchParams.get('category');

    let query = db.select().from(galleryPhotos);

    const conditions = [];

    if (isVisible !== null) {
      const visibleValue = isVisible === 'true';
      conditions.push(eq(galleryPhotos.isVisible, visibleValue));
    }

    if (category) {
      conditions.push(eq(galleryPhotos.category, category));
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    const results = await query
      .orderBy(asc(galleryPhotos.displayOrder), desc(galleryPhotos.createdAt))
      .limit(limit)
      .offset(offset);

    return NextResponse.json(results, { 
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      }
    });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

const createPhotoSchema = z.object({
  title: z.string().min(1).max(255),
  imageUrl: z.string().url(),
  description: z.string().max(1000).optional().nullable(),
  category: z.string().max(100).optional().nullable(),
  displayOrder: z.number().int().optional(),
  isVisible: z.boolean().optional(),
  width: z.number().int().positive().optional().nullable(),
  height: z.number().int().positive().optional().nullable(),
  sizeKB: z.number().int().positive().optional().nullable(),
});

export async function POST(request: NextRequest) {
  try {
    // Get bearer token for authentication
    const bearerToken = request.headers.get('authorization')?.replace('Bearer ', '');
    
    if (!bearerToken) {
      return NextResponse.json(
        { error: 'Unauthorized - No token provided' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const validation = createPhotoSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors[0].message },
        { status: 400 }
      );
    }

    const data = validation.data;
    const now = new Date().toISOString();

    const newPhoto = await db.insert(galleryPhotos)
      .values({
        title: data.title.trim(),
        imageUrl: data.imageUrl.trim(),
        description: data.description ? data.description.trim() : null,
        category: data.category ? data.category.trim() : null,
        displayOrder: data.displayOrder !== undefined ? data.displayOrder : 0,
        isVisible: data.isVisible !== undefined ? data.isVisible : true,
        width: data.width || null,
        height: data.height || null,
        sizeKB: data.sizeKB || null,
        uploadedBy: 'admin', // Simplified for now
        createdAt: now,
        updatedAt: now,
      })
      .returning();

    // Revalidate gallery cache
    revalidateTag('gallery');

    return NextResponse.json(newPhoto[0], { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
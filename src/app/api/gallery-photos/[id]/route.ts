import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { galleryPhotos, session, user } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { revalidateTag } from 'next/cache';
import { z } from 'zod';

import { getCurrentUser } from '@/lib/auth';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const photo = await db
      .select()
      .from(galleryPhotos)
      .where(eq(galleryPhotos.id, parseInt(id)))
      .limit(1);

    if (photo.length === 0) {
      return NextResponse.json(
        { error: 'Gallery photo not found', code: 'PHOTO_NOT_FOUND' },
        { status: 404 }
      );
    }

    return NextResponse.json(photo[0], { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

const updatePhotoSchema = z.object({
  title: z.string().min(1).max(255).optional(),
  description: z.string().max(1000).nullable().optional(),
  imageUrl: z.string().url().optional(),
  category: z.string().max(100).nullable().optional(),
  displayOrder: z.number().int().optional(),
  isVisible: z.boolean().optional(),
  width: z.number().int().positive().nullable().optional(),
  height: z.number().int().positive().nullable().optional(),
  sizeKB: z.number().int().positive().nullable().optional(),
});

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check authentication
    const currentUser = await getCurrentUser(request);
    if (!currentUser) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = await params;

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const validation = updatePhotoSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.issues[0].message },
        { status: 400 }
      );
    }

    const existingPhoto = await db
      .select()
      .from(galleryPhotos)
      .where(eq(galleryPhotos.id, parseInt(id)))
      .limit(1);

    if (existingPhoto.length === 0) {
      return NextResponse.json(
        { error: 'Gallery photo not found', code: 'PHOTO_NOT_FOUND' },
        { status: 404 }
      );
    }

    const data = validation.data;
    const updateData: any = {
      updatedAt: new Date().toISOString(),
    };

    if (data.title !== undefined) updateData.title = data.title.trim();
    if (data.description !== undefined) updateData.description = data.description ? data.description.trim() : null;
    if (data.imageUrl !== undefined) updateData.imageUrl = data.imageUrl.trim();
    if (data.category !== undefined) updateData.category = data.category ? data.category.trim() : null;
    if (data.displayOrder !== undefined) updateData.displayOrder = data.displayOrder;
    if (data.isVisible !== undefined) updateData.isVisible = data.isVisible;
    if (data.width !== undefined) updateData.width = data.width;
    if (data.height !== undefined) updateData.height = data.height;
    if (data.sizeKB !== undefined) updateData.sizeKB = data.sizeKB;

    const updatedPhoto = await db
      .update(galleryPhotos)
      .set(updateData)
      .where(eq(galleryPhotos.id, parseInt(id)))
      .returning();

    // Revalidate gallery cache
    revalidateTag('gallery');

    return NextResponse.json(updatedPhoto[0], { status: 200 });
  } catch (error) {
    console.error('PATCH error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check authentication
    const currentUser = await getCurrentUser(request);
    if (!currentUser) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = await params;

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const existingPhoto = await db
      .select()
      .from(galleryPhotos)
      .where(eq(galleryPhotos.id, parseInt(id)))
      .limit(1);

    if (existingPhoto.length === 0) {
      return NextResponse.json(
        { error: 'Gallery photo not found', code: 'PHOTO_NOT_FOUND' },
        { status: 404 }
      );
    }

    const deletedPhoto = await db
      .delete(galleryPhotos)
      .where(eq(galleryPhotos.id, parseInt(id)))
      .returning();

    // Revalidate gallery cache
    revalidateTag('gallery');

    return NextResponse.json(
      {
        message: 'Gallery photo deleted successfully',
        photo: deletedPhoto[0],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
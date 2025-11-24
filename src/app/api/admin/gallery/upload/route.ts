import { NextRequest, NextResponse } from 'next/server';
import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';
import { getCurrentUser } from '@/lib/auth';
import { rateLimit } from '@/lib/rate-limit';
import { z } from 'zod';

// Rate limit: 30 uploads per minute per user
const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  maxRequests: 30,
});

const uploadSchema = z.object({
  filename: z.string().min(1).max(255),
});

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const user = await getCurrentUser(request);
    if (!user || user.email !== process.env.ADMIN_EMAIL) {
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
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': rateCheck.limit.toString(),
            'X-RateLimit-Remaining': rateCheck.remaining.toString(),
            'X-RateLimit-Reset': new Date(rateCheck.reset).toISOString(),
          }
        }
      );
    }

    const body = (await request.json()) as HandleUploadBody;

    // Type guard to check if payload has pathname (client upload request)
    if (!body.payload || !('pathname' in body.payload)) {
      return NextResponse.json(
        { error: 'Invalid upload request' },
        { status: 400 }
      );
    }

    // Validate upload request
    const validation = uploadSchema.safeParse({
      filename: body.payload.pathname || '',
    });

    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.issues[0].message },
        { status: 400 }
      );
    }

    // Generate presigned URL for client upload
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        // Additional security checks can go here
        return {
          allowedContentTypes: ['image/webp'],
          tokenPayload: JSON.stringify({
            userId: user.id,
            uploadedAt: new Date().toISOString(),
          }),
        };
      },
      onUploadCompleted: async ({ blob }) => {
        console.log('Upload completed:', blob.url);
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    );
  }
}
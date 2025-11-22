import { db } from '@/db';
import { auditLogs } from '@/db/schema';
import { NextRequest } from 'next/server';

export type AuditAction = 'create' | 'update' | 'delete' | 'visibility_toggle' | 'bulk_update' | 'bulk_delete';

export interface AuditLogOptions {
  userId: string;
  action: AuditAction;
  resourceType: string;
  resourceId: string;
  details?: Record<string, any>;
  request?: NextRequest;
}

export async function createAuditLog(options: AuditLogOptions) {
  const { userId, action, resourceType, resourceId, details, request } = options;

  const ipAddress = request?.headers.get('x-forwarded-for') || request?.headers.get('x-real-ip') || 'unknown';
  const userAgent = request?.headers.get('user-agent') || 'unknown';

  try {
    await db.insert(auditLogs).values({
      userId,
      action,
      resourceType,
      resourceId,
      details: details ? JSON.stringify(details) : null,
      ipAddress,
      userAgent,
      createdAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Failed to create audit log:', error);
  }
}

export async function getAuditLogs(filters?: {
  userId?: string;
  resourceType?: string;
  resourceId?: string;
  limit?: number;
}) {
  // This can be expanded with proper filtering logic
  // For now, keeping it simple
  return [];
}
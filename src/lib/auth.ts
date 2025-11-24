import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    },
  },
  secret: process.env.BETTER_AUTH_SECRET || "fallback-secret-for-development",
});

import { NextRequest } from 'next/server';
import { eq } from 'drizzle-orm';
import { session, user } from '@/db/schema';

export async function getCurrentUser(request: NextRequest) {
  try {
    const cookieToken = request.cookies.get('better-auth.session_token')?.value;
    const bearerToken = request.headers.get('authorization')?.replace('Bearer ', '');
    const token = cookieToken || bearerToken;

    if (!token) return null;

    const sessionData = await db
      .select()
      .from(session)
      .where(eq(session.token, token))
      .limit(1);

    if (!sessionData || sessionData.length === 0 || sessionData[0].expiresAt < new Date()) {
      return null;
    }

    const userData = await db
      .select()
      .from(user)
      .where(eq(user.id, sessionData[0].userId))
      .limit(1);

    return userData && userData.length > 0 ? userData[0] : null;
  } catch (error) {
    return null;
  }
}
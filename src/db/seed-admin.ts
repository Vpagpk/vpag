
import { db } from './index';
import { user } from './schema';
import { eq } from 'drizzle-orm';
import { auth } from '@/lib/auth';

async function seedAdmin() {
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD || 'admin123';
    const name = 'Admin User';

    if (!email) {
        console.error('ADMIN_EMAIL environment variable is not set.');
        process.exit(1);
    }

    console.log(`Seeding admin user: ${email}`);

    try {
        // Delete existing user if exists to ensure clean slate
        const existingUser = await db.select().from(user).where(eq(user.email, email)).limit(1);
        if (existingUser.length > 0) {
            console.log('Deleting existing admin user...');
            await db.delete(user).where(eq(user.email, email));
        }

        console.log('Creating new admin user...');

        // Use better-auth API to create user (handles hashing correctly)
        const res = await auth.api.signUpEmail({
            body: {
                email,
                password,
                name,
            }
        });

        if (res) {
            console.log('Admin user created successfully.');
        } else {
            console.error('Failed to create admin user (no response).');
        }

    } catch (error) {
        console.error('Error seeding admin user:', error);
        process.exit(1);
    }
}

seedAdmin();

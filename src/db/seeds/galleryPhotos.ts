import { db } from '@/db';
import { galleryPhotos } from '@/db/schema';

async function main() {
    const newPhoto = {
        title: 'CEO & Founder Portrait',
        description: 'Meet the visionary founder and CEO behind VPAG - leading Pakistan\'s cultural dance renaissance with passion and dedication',
        imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Google-Gemini-Image-2-1760911061941.png',
        category: 'Leadership',
        displayOrder: 21,
        isVisible: true,
        width: null,
        height: null,
        sizeKB: null,
        uploadedBy: 'admin',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };

    await db.insert(galleryPhotos).values(newPhoto);
    
    console.log('✅ Gallery photo seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});
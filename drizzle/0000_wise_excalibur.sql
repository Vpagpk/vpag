CREATE TABLE `gallery_photos` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`image_url` text NOT NULL,
	`category` text,
	`display_order` integer DEFAULT 0,
	`is_visible` integer DEFAULT true,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);

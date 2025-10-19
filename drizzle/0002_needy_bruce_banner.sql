CREATE TABLE `audit_logs` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text NOT NULL,
	`action` text NOT NULL,
	`resource_type` text NOT NULL,
	`resource_id` text NOT NULL,
	`details` text,
	`ip_address` text,
	`user_agent` text,
	`created_at` text NOT NULL
);
--> statement-breakpoint
ALTER TABLE `gallery_photos` ADD `width` integer;--> statement-breakpoint
ALTER TABLE `gallery_photos` ADD `height` integer;--> statement-breakpoint
ALTER TABLE `gallery_photos` ADD `size_kb` integer;--> statement-breakpoint
ALTER TABLE `gallery_photos` ADD `uploaded_by` text;
ALTER TABLE "order_items" DROP CONSTRAINT "order_items_order_id_orders_id_fk";
--> statement-breakpoint
ALTER TABLE "order_items" ALTER COLUMN "qty" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "order_items" ALTER COLUMN "qty" SET DEFAULT 1;--> statement-breakpoint
ALTER TABLE "order_items" ALTER COLUMN "qty" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "order_items" ALTER COLUMN "price" SET DATA TYPE numeric(12, 2);--> statement-breakpoint
ALTER TABLE "order_items" ALTER COLUMN "price" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_order_id_orders_id_fk" FOREIGN KEY ("order_id") REFERENCES "public"."orders"("id") ON DELETE cascade ON UPDATE no action;
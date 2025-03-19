import { media, products } from "@/db/schemas";
import { relations } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";

export const productImages = pgTable("product_images", {
  id: text()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  productId: text("product_id").references(() => products.id, { onDelete: "cascade" }),
  mediaId: text("media_id").references(() => media.id, { onDelete: "cascade" })
});

export const productImageRelations = relations(productImages, ({ one }) => ({
  product: one(products, {
    fields: [productImages.productId],
    references: [products.id]
  }),
  media: one(media, {
    fields: [productImages.mediaId],
    references: [media.id]
  })
})); 
import { relations } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";
import { images, products } from "@/db/schemas";

export const categories = pgTable("categories", {
  id: text()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  slug: text("slug").unique(),
  imageId: text("image_id")
});

export const categoryRelations = relations(categories, ({ many, one }) => ({
  products: many(products),
  categoryImage: one(images, {
    fields: [categories.imageId],
    references: [images.id]
  })
}));

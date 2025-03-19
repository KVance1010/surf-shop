import {
  categories,
  media,
  orderItems,
  productImages,
  productOptions,
  reviews
} from "@/db/schemas";
import { relations } from "drizzle-orm";
import { boolean, decimal, integer, pgTable, text } from "drizzle-orm/pg-core";
import { timestamps } from "./timestamps";

export const products = pgTable("products", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  slug: text("slug").unique(),
  categoryId: text("category_id"),
  brand: text("brand"),
  costOfItem: decimal("cost_of_item", { precision: 12, scale: 2 }).default(
    "0.00"
  ),
  description: text("description"),
  price: decimal("price", { precision: 12, scale: 2 }).default("0.00"),
  rating: decimal("rating", { precision: 3, scale: 2 }).default("0.00"),
  numReviews: integer("num_reviews").default(0),
  isFeatured: boolean("is_featured").default(false),
  mainImage: text("main_image"),
  banner: text("banner"),
  ...timestamps
});

export const productRelations = relations(products, ({ many, one }) => ({
  orders: many(orderItems),
  reviews: many(reviews),
  mainImage: one(media, {
    fields: [products.mainImage],
    references: [media.id]
  }),
  galleryImages: many(productImages),
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id]
  }),
  productOptions: many(productOptions)
}));

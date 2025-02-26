import { relations } from "drizzle-orm";
import { boolean, decimal, integer, pgTable, text } from "drizzle-orm/pg-core";
import { categories, orderItems, productOptions, reviews } from "@/db/schemas";
import { timestamps } from "./timestamps";

export const products = pgTable("products", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  slug: text("slug").unique(),
  categoryId: text("category_id").references(() => categories.id, {
    onDelete: "set null"
  }),
  images: text("images"),
  brand: text("brand"),
  description: text("description"),
  rating: decimal("rating", { precision: 3, scale: 2 }).default("0.00"),
  numReviews: integer("num_reviews").default(0),
  isFeatured: boolean("is_featured").default(false),
  banner: text("banner"),
  ...timestamps
});

export const productRelations = relations(products, ({ many, one }) => ({
  orders: many(orderItems),
  reviews: many(reviews),
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id]
  }),
  productOptions: many(productOptions)
}));

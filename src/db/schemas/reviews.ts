import { relations } from "drizzle-orm";
import { integer, pgTable, text } from "drizzle-orm/pg-core";
import { products, users } from "@/db/schemas";
import { timestamps } from "./timestamps";

export const reviews = pgTable("reviews", {
  id: text()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  rating: integer("rating").default(5),
  title: text("title"),
  description: text("description"),
  isVerifiedPurchase: text("is_verified_purchase"),
  userId: text("user_id").references(() => users.id, { onDelete: "cascade" }),
  productId: text("product_id").references(() => products.id, { onDelete: "cascade" }),
  ...timestamps
});

export const reviewRelations = relations(reviews, ({ one }) => ({
  user: one(users, { fields: [reviews.userId], references: [users.id] }),
  product: one(products, {
    fields: [reviews.productId],
    references: [products.id]
  })
}));

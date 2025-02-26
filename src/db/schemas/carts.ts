import { relations } from "drizzle-orm";
import { decimal, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { users, products } from "@/db/schemas";

export const carts = pgTable("carts", {
  id: text()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("user_id").references(() => users.id, { onDelete: "cascade" }),
  itemsPrice: decimal("items_price", { precision: 12, scale: 2 }).default(
    "0.00"
  ),
  totalPrice: decimal("total_price", { precision: 12, scale: 2 }).default(
    "0.00"
  ),
  shippingPrice: decimal("shipping_price", { precision: 12, scale: 2 }).default(
    "0.00"
  ),
  taxPrice: decimal("tax_price", { precision: 12, scale: 2 }).default("0.00"),
  createdAt: timestamp("created_at").defaultNow()
});

export const cartRelations = relations(carts, ({ one, many }) => ({
  user: one(users, { fields: [carts.userId], references: [users.id] }),
  items: many(products)
}));

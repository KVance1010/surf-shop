import { carts, products } from "@/db/schemas";
import { relations } from "drizzle-orm";
import { decimal, integer, pgTable, text } from "drizzle-orm/pg-core";

export const cartItems = pgTable("cart_items", {
  id: text()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  cartId: text("cart_id").references(() => carts.id, { onDelete: "cascade" }),
  productId: text("product_id").references(() => products.id),
  quantity: integer("quantity").notNull().default(1),
  price: decimal("price", { precision: 12, scale: 2 }).notNull()
});

export const cartItemRelations = relations(cartItems, ({ one }) => ({
  cart: one(carts, { fields: [cartItems.cartId], references: [carts.id] }),
  product: one(products, { fields: [cartItems.productId], references: [products.id] })
})); 
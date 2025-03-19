import { orders, products } from "@/db/schemas";
import { relations } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";

export const orderItems = pgTable("order_items", {
  id: text()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  orderId: text("order_id").references(() => orders.id, { onDelete: "cascade" }),
  productId: text("product_id").references(() => products.id),
  qty: text("qty").notNull().default("1"),
  price: text("price").notNull().default("0.00")
});

export const orderItemRelations = relations(orderItems, ({ one }) => ({
  order: one(orders, { fields: [orderItems.orderId], references: [orders.id] }),
  product: one(products, { fields: [orderItems.productId], references: [products.id] })
}));

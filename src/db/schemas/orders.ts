import { addresses, orderItems, users } from "@/db/schemas";
import { relations } from "drizzle-orm";
import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const OrderStatus = pgEnum("status", [
  "PENDING",
  "CONFIRMED",
  "SHIPPED",
  "DELIVERED",
  "CANCELLED"
]);

export const orders = pgTable("orders", {
  id: text()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("user_id").references(() => users.id),
  name: text("name"),
  shippingAddress: text("shipping_address").references(() => addresses.id),
  paymentMethod: text("payment_method"),
  paymentResult: text("payment_result"),
  subTotal: text("sub_total"),
  shippingPrice: text("shipping_price"),
  taxPrice: text("tax_price"),
  totalPrice: text("total_price"),
  status: OrderStatus().default("PENDING").notNull(),
  deliveredAt: text("delivered_at"),
  orderDate: timestamp("order_date", { mode: "date" }).defaultNow().notNull()
});

export const orderRelations = relations(orders, ({ many, one }) => ({
  items: many(orderItems),
  user: one(users, {
    fields: [orders.userId],
    references: [users.id]
  }),
  shippingAddress: one(addresses, {
    fields: [orders.shippingAddress],
    references: [addresses.id]
  })
}));

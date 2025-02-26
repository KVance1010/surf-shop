import { pgTable, text } from "drizzle-orm/pg-core";
import { orders, products} from "@/db/schemas";

export const orderItems = pgTable("order_items", {
  id: text()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  orderId: text("order_id").references(() => orders.id),
  productId: text("product_id").references(() => products.id),
  qty: text("qty"),
  price: text("price"),
});

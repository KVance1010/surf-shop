import { boolean, decimal, pgTable, text, unique } from "drizzle-orm/pg-core";
import { products } from "@/db/schemas/products";

export const productOptions = pgTable(
  "product_options",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    productId: text("product_id").references(() => products.id, {
      onDelete: "cascade"
    }),
    isActive: boolean("is_active").default(true),
    price: decimal("price", { precision: 12, scale: 2 }).default("0.00"),
    stock: text("stock"),
    size: text("size"),
    color: text("color"),
    colorHexValue: text("hex_value")
  },
  (table) => ({
    uniqueProductOption: unique("product_option").on(
      table.productId,
      table.size,
      table.color
    )
  })
);

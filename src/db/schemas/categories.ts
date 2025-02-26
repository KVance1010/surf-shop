import {text, pgTable} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { products } from "@/db/schemas/products";

export const categories = pgTable("categories", {
  id: text()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  slug: text("slug").unique(),
});

export const categoryRelations = relations(categories, ({ many }) => ({
  products: many(products),
}));
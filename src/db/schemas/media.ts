import { productImages } from "@/db/schemas";
import { relations } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";
import { timestamps } from "./timestamps";

export const media = pgTable("media", {
  id: text()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  url: text("url").unique(),
  alt: text("alt"),
  type: text("type"),
  ...timestamps
});

export const mediaRelations = relations(media, ({ many }) => ({
  productGallery: many(productImages)
}));

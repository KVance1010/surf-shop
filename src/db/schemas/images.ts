import {text, pgTable} from "drizzle-orm/pg-core";

export const images = pgTable("images", {
  id: text()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  url: text("url").unique(),
  alt: text("alt"),
});
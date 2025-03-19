import { pgTable, text } from "drizzle-orm/pg-core";

export const states = pgTable("states", {
  id: text()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name").unique(),
  code: text("code").unique()
});

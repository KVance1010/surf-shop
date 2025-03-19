import { states, users } from "@/db/schemas";
import { relations } from "drizzle-orm";
import { pgTable, text, unique } from "drizzle-orm/pg-core";

export const addresses = pgTable(
  "addresses",
  {
    id: text()
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    userId: text("user_id").references(() => users.id, { onDelete: "cascade" }),
    address: text("address"),
    city: text("city"),
    postalCode: text("postal_code"),
    stateId: text("state").references(() => states.id, { onDelete: "cascade" })
  },
  (table) => {
    return {
      uniqueAddress: unique("unique_address").on(
        table.address,
        table.city,
        table.stateId
      )
    };
  }
);

export const addressRelations = relations(addresses, ({ one }) => ({
  user: one(users, {
    fields: [addresses.userId],
    references: [users.id]
  }),
  state: one(states, {
    fields: [addresses.stateId],
    references: [states.id]
  })
}));

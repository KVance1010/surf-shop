import { pgTable, text, unique } from "drizzle-orm/pg-core";
import {states} from "@/db/schemas";

export const addresses = pgTable(
  "addresses",
  {
    id: text()
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    address: text("address"),
    city: text("city"),
    postalCode: text("postal_code"),
    stateId: text("state").references(() => states.id, { onDelete: "cascade" }),
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

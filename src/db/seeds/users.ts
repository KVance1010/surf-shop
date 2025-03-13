import bcrypt from "bcryptjs";
import type { DB } from "@/db";
import * as schema from "@/db/schemas";
// import { UserRoles } from "@/db/schemas/users";
import users from "./data/usersData.json";

export default async function seed(db: DB) {
  await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      // const roleIndex = UserRoles.enumValues.findIndex(
      //   (role: string) => role === user.role
      // );
      return await db
        .insert(schema.users)
        .values({
          ...user,
          role: user.role as "USER" | "ADMIN" | "MODERATOR",
          // role: UserRoles.enumValues[roleIndex],
          emailVerified: new Date(),
          password: hashedPassword
        })
        .returning();
    })
  );
}

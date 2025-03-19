import "server-only";
import db from "@/db";
// import { media } from "@/db/schemas";
// import { eq } from "drizzle-orm";
import { media } from "@/db/schemas";

export const createMedia = async (imageContent: typeof media.$inferInsert) => {
  const [createdMedia] = await db.insert(media).values(imageContent).returning();
  return createdMedia;
};




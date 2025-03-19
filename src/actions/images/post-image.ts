"use server";
import { currentUser } from "@/utils/auth-session";
import { createMedia } from "@/db/queries/media";

export const postImage = async ({url, alt, type}: {url: string, alt: string, type: string}) => {
    const userSession = await currentUser();

    if (!userSession) {
        return {
            error: "Unauthorized"
        }
    }

  const media = await createMedia({
  url, 
  alt,
  type
  });
  
  return media;
};


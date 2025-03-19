"use server";
import { createMedia } from "@/db/queries/media";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import crypto from "crypto";
import { currentUser } from "@/utils/auth-session";
import env from "@/validations/env";

const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

const s3 = new S3Client({
  region: env.AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: env.AWS_ACCESS_KEY,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY
  }
});

// used for edge runtime
// const generateFileName= (bytes=32) => {
//   const array = new Uint8Array(bytes);
//   crypto.getRandomValues(array);
//   return [...array].map(b => b.toString(16).padStart(2, '0')).join('');
// }

const acceptedTypes = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "video/mp4",
  "video/quicktime",
  "video/webm",
  "video/avi",
  "video/mov",
  "video/wmv",
  "video/flv",
  "video/mpeg"
];

const maxFileSize = 1024 * 1024 * 10;

export const getSignedURL = async (
  type: string,
  fileSize: number,
  checksum: string,
  alt: string = "user supplied content"
) => {
  const user= await currentUser();

  if (!user) {
    return { failure: "not authenticated" };
  }

  if (!acceptedTypes.includes(type)) {
    return { failure: "invalid file type" };
  }

  if (fileSize > maxFileSize) {
    return { failure: "file too large" };
  }

  const putObjectCommand = new PutObjectCommand({
    Bucket: env.AWS_BUCKET_NAME,
    Key: generateFileName(),
    ContentType: type,
    ContentLength: fileSize,
    ChecksumSHA256: checksum,
    Metadata: {
      userId: user.id
    }
  });

  const signedURL = await getSignedUrl(s3, putObjectCommand, { expiresIn: 60 });

  const media = await createMedia({
    url: signedURL.split("?")[0], 
    alt: alt,
    type: type.startsWith("image/") ? "image" : "video"
    });

  return { success: { url: signedURL, mediaId: media.id } };
};

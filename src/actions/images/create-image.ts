"use server";
import { auth } from "@/auth";
import env from "@/validations/env";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import crypto from "crypto";

const generateFileName= (bytes=32) => crypto.randomBytes(bytes).toString("hex");

const s3 = new S3Client({
  region: env.AWS_BUCKET_REGION
  , credentials:{
    accessKeyId: env.AWS_ACCESS_KEY,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY
  }
})

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
]

const maxFileSize = 1024 * 1024 * 10;

export const getSignedURL = async (type: string, fileSize: number, checksum: string) => {
  const session = await auth();

  if (!session) {
    return { failure: "not authenticated" };
  }
  
  if(!acceptedTypes.includes(type)){
    return {failure: "invalid file type"}
  }

  if(fileSize > maxFileSize){
    return {failure: "file too large"}
  }

  const putObjectCommand = new PutObjectCommand({
    Bucket: env.AWS_BUCKET_NAME,
    Key: generateFileName(),
    ContentType: type,
    ContentLength: fileSize,
    ChecksumSHA256: checksum,
    Metadata: {
      userId: session.user.id
    }
  })

  const signedURL = await getSignedUrl(s3, putObjectCommand, { expiresIn: 60 });


  return { success: { url: signedURL } };
};

import { createUploadthing, type FileRouter } from "uploadthing/next";
import { auth } from "@clerk/nextjs/server";
 
const f = createUploadthing();
 
 const handleAuth = () => {
  const {userId } = auth();
  if (!userId) throw new Error("Unauthorized")
    return {userId}
 }
export const ourFileRouter = {
  photo: f({image: {maxFileSize: "4MB", maxFileCount: 1 } }).middleware(() => handleAuth()).onUploadComplete(() => {})
 
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;
"use client";
// import { getSignedURL } from "@/actions/images/sign-headers";
// import { getChecksumSHA256 } from "@/utils/checksum";
import { convertToWebM } from "@/utils/convert-to-webm";
import { convertToWebP } from "@/utils/convert-webp";
import Image from "next/image";
import { useState } from "react";

export function AddMediaForm({
    user
}: {
    user: { name?: string | null };
}) {
    const [altText, setAltText] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [statusMessage, setStatusMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [conversionProgress, setConversionProgress] = useState(0);

    const handleFileSelect = (selectedFile: File | null) => {
        setFile(selectedFile);
        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }
        if (selectedFile) {
            const url = URL.createObjectURL(selectedFile);
            setPreviewUrl(url);
            setStatusMessage("");
            setIsSuccess(true);
            setConversionProgress(0);
        } else {
            setPreviewUrl(null);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (file) {
                setStatusMessage("Uploading...");
                setLoading(true);
                setConversionProgress(0);

                let fileToUpload = file;

                if (file.type.startsWith('image/')) {
                    fileToUpload = await convertToWebP(file);
                } else if (file.type.startsWith('video/')) {
                    try {
                        fileToUpload = await convertToWebM(file, (progress) => {
                            setConversionProgress(Math.round(progress));
                            setStatusMessage(`Converting video: ${Math.round(progress)}%`);
                        });
                    } catch (error) {
                        setStatusMessage("Video conversion failed");
                        throw error;
                    }
                }
                console.log(fileToUpload)
                // const checksum = await getChecksumSHA256(fileToUpload);
                // const signedURLResult = await getSignedURL(
                //     fileToUpload.type,
                //     fileToUpload.size,
                //     checksum
                // );

                // if (signedURLResult.failure !== undefined) {
                //     setStatusMessage("Upload failed");
                //     throw new Error(signedURLResult.failure);
                // }

                // const { url, mediaId } = signedURLResult.success;

                // await fetch(url, {
                //     method: "PUT",
                //     body: fileToUpload,
                //     headers: { "Content-Type": fileToUpload.type }
                // });

                // console.log(mediaId)
                // setStatusMessage("Upload successful!");
                // setIsSuccess(true);
                // setPreviewUrl(null);
                // setFile(null);
                // setAltText("");
                // setConversionProgress(0);
            }
            else {
                setIsSuccess(false);
                setStatusMessage("Please select a file");
            }
        } catch (e) {
            setStatusMessage("Upload failed");
            setIsSuccess(false);
            console.error(e);
        } finally {
            setLoading(false);
            setConversionProgress(0);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleFileSelect(e.target.files?.[0] ?? null);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        handleFileSelect(e.dataTransfer.files[0] ?? null);
    };

    return (
        <form
            className={`p-6 transition-all h-[120px] duration-200 ${isDragging ? 'border-2 border-dashed border-primary bg-primary/5' : ''
                }`}
            onSubmit={handleSubmit}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <div className="pb-4 w-full">
                <div className="flex items-center justify-between gap-2 w-full">
                    <label className="">
                        <input
                            className="bg-transparent flex-1 border-none outline-none"
                            type="text"
                            placeholder="alt text"
                            value={altText}
                            onChange={(e) => setAltText(e.target.value)}
                        />
                    </label>
                    <label className="flex p-5 flex-col items-center cursor-pointer">
                        <Image
                            src="/icons/upload.svg"
                            alt="Upload"
                            width={58}
                            height={30}
                            className="text-primary"
                            unoptimized
                        />
                        <span className="text-xs text-primary mt-1">Select or drop</span>

                        <input
                            className="bg-transparent flex-1 border-none outline-none hidden"
                            name="media"
                            type="file"
                            accept="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/quicktime,video/webm,video/avi,video/mov,video/wmv,video/flv,video/mpeg"
                            onChange={handleFileChange}
                        />
                    </label>
                    <div className="mt-4">
                        {previewUrl && file && (
                            <div className="flex items-center gap-2">
                                {file.type.startsWith("image/") ? (
                                    <img src={previewUrl} alt="Selected file" height="100px" width="100px" />
                                ) : file.type.startsWith("video/") ? (
                                    <video src={previewUrl} controls height="100px" width="100px" />
                                ) : null}
                                <button
                                    className="text-red-600 hover:cursor-pointer hover:bg-red-600 hover:text-white py-0.5 px-1 rounded-lg h-full"
                                    onClick={() => handleFileSelect(null)}
                                    disabled={loading}
                                >
                                    Delete
                                </button>
                                <button
                                    className="text-green-600 hover:cursor-pointer hover:bg-green-600 hover:text-white py-[5px] px-[10px] rounded-lg h-full"
                                    type="submit"
                                    disabled={loading}
                                >
                                    Add
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                {statusMessage && (
                    <div className="mt-4">
                        <p className={isSuccess ? "bg-green-100 border border-green-500 text-green-500 px-4 py-3 rounded relative" : "bg-red-200 border border-red-500 text-red-500 px-4 py-3 rounded relative"}>
                            {statusMessage}
                        </p>
                        {conversionProgress > 0 && file?.type.startsWith('video/') && (
                            <div className="mt-2">
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div
                                        className="bg-primary h-2.5 rounded-full transition-all duration-300"
                                        style={{ width: `${conversionProgress}%` }}
                                    ></div>
                                </div>
                                <p className="text-sm text-gray-600 mt-1 text-center">
                                    {conversionProgress}% complete
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </form>
    );
} 
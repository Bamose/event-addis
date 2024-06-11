"use server";
import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
  cloud_name: "ddq2jimve",
  api_key:"846833435572651",
  api_secret: "kDzxTv9Sv-Tjp8GX2B4gbNHKTzM",
});
export async function  cloudinaryUploadImage (formData: FormData) {
  try {
    const file = formData.get('file') as File;
    const buffer = await file.arrayBuffer();
    const bufferBase64 = Buffer.from(buffer).toString('base64');

    const result = await cloudinary.uploader.upload(`data:${file.type};base64,${bufferBase64}`, {
      resource_type: 'auto',
    });

    return { url: result.secure_url };
  } catch (error) {
    console.error('Failed to upload file:', error);
    throw new Error('Failed to upload file to Cloudinary');
  }
};
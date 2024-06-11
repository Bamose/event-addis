"use client";
import React, { useState } from "react";
import {
  Group,
  Text,
  rem,
  Image,
  Loader,
  Overlay,
  Box,
  LoadingOverlay,
} from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { cloudinaryUploadImage } from "../_actions/upload";
import { useDisclosure } from "@mantine/hooks";
type ImageDropProps = Partial<DropzoneProps> & {
  onImageUpload: (image: string | null) => void;
  value?: string | null;
  className?: string;
  label?: React.ReactElement | string;
};

export function ImageDrop({
  onImageUpload,
  value,
  className,
  label,
  ...props
}: ImageDropProps) {
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [visible, { toggle }] = useDisclosure(false);
  const handleDrop = async (files: File[]) => {
    setUploading(true);
    try {
      const file = files[0];
      const formData = new FormData();
      formData.append("file", file);

      const result = await cloudinaryUploadImage(formData);
      setUploadedImageUrl(result.url);
      onImageUpload(result.url)
      console.log(result);
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    
    <div style={{ position: "relative" }}>
    
        <Box pos="relative">
         <LoadingOverlay visible={uploading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
        </Box>
      { uploadedImageUrl ? (
        <Image
          src={uploadedImageUrl}
          alt="Uploaded"
          style={{ maxWidth: '100%', borderRadius: '8px', height:'70vh' }}
        />
      ) : ( 
        <Dropzone
          onDrop={handleDrop}
          onReject={(files) => console.log("rejected files", files)}
          maxSize={5 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
          {...props}
        >
          <Group
            justify="center"
            gap="xl"
            mih={220}
            style={{ pointerEvents: "none" }}
          >
            <Dropzone.Accept>
              <IconUpload
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: "var(--mantine-color-blue-6)",
                }}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: "var(--mantine-color-red-6)",
                }}
                stroke={1.5}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconPhoto
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: "var(--mantine-color-dimmed)",
                }}
                stroke={1.5}
              />
            </Dropzone.Idle>

            <div>
              <Text size="xl" inline>
                Drag images here or click to select files
              </Text>
              <Text size="sm" c="dimmed" inline mt={7}>
                Attach as many files as you like, each file should not exceed
                5mb
              </Text>
            </div>
          </Group>
        </Dropzone>
      )}
    </div>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import { Suspense } from "react";
import RootStyleRegistry from "@/providers/Mantine.provider";



export const metadata = {
  title: 'Event Addis',
  description: 'I am using Mantine with Next.js!',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>  <RootStyleRegistry>{children}</RootStyleRegistry></body> 
    </html>
  );
}

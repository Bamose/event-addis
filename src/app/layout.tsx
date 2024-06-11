import type { Metadata } from "next";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import { Suspense } from "react";
import RootStyleRegistry from "@/providers/Mantine.provider";
import StoreProvider from "@/providers/StoreProvider";

export const metadata = {
  title: "Event Addis",
  description: "I am using Mantine with Next.js!",
  // icons: {
  //   icon: '/eventaddis-logo.png',
  // },

};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {" "}
        <link rel="shortcut icon" href="/eventaddis-logo.png" type="image/png" sizes="any" />
        <StoreProvider>
          <RootStyleRegistry>{children}</RootStyleRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}

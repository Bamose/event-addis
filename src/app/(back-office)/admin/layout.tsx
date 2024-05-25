import { DashNavbar } from "@/components/adminsnavbar/dashnav";
import { DashboardMenu } from "@/components/side-menu/SideMenu";
import { Box } from "@mantine/core";
import React from "react";

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Box className="bg-white h-[100vh]">
        <Box className="fixed top-0 w-full z-10">
          <DashNavbar />
        </Box>

        <Box className="container  pt-16  flex gap-4 bg-white ">
          <Box className="hidden md:block bg-white border border-gray-400/20 ml-[5%] h-auto rounded ">
            <DashboardMenu />
          </Box>
          <Box className="flex-grow bg-white">{children}</Box>
        </Box>
        <Box className="absolute bottom-0 w-full"></Box>
      </Box>
    </>
  );
}

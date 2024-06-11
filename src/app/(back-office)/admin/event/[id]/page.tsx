import { Navbar } from "@/components/header/Navbar";
import { Box, Stack } from "@mantine/core";
import React from "react";

import Footer from "@/components/footer/footer";
import { cn } from "@/utils/cn";
import { getEventByUser } from "../_actions/event.user.query";
import UserTable from "../_components/UserTable";

async function EventDetailsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await getEventByUser(id);
  return (
    <Stack className={cn("bg-white")}>
        
      <UserTable data={data} />
   
    </Stack>
  );
}

export default EventDetailsPage;

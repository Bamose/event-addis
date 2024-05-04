import { Navbar } from "@/components/header/Navbar";
import { Box } from "@mantine/core";
import React from "react";
import { EventDetail } from "./_components/eventDetail";

function EventDetailsPage() {
  return (
    <Box>
      <Navbar />
      <EventDetail />
    </Box>
  );
}

export default EventDetailsPage;

import { Navbar } from "@/components/header/Navbar";
import { Box } from "@mantine/core";
import React from "react";
import { EventDetail } from "./_components/eventDetail";
import Footer from "@/components/footer/footer";

function EventDetailsPage() {
  return (
    <Box >
      <Navbar />
      <EventDetail />
      <Footer />
    </Box>
  );
}

export default EventDetailsPage;

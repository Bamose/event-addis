import { Navbar } from "@/components/header/Navbar";
import { Stack } from "@mantine/core";
import React from "react";
import { EventDetail } from "./_components/eventDetail";
import Footer from "@/components/footer/footer";

function EventDetailsPage() {
  return (
    <Stack>
      <Navbar />
      <EventDetail />
      <Footer />
    </Stack>
  );
}

export default EventDetailsPage;

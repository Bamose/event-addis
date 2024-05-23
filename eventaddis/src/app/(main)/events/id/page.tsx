import { Navbar } from "@/components/header/Navbar";
import { Stack } from "@mantine/core";
import React from "react";
import { EventDetail } from "./_components/eventDetail";
import Footer from "@/components/footer/footer";
import { cn } from "@/utils/cn";

function EventDetailsPage() {
  return (
    <Stack className={cn('bg-white')}>
      <Navbar />
      <EventDetail />
      <Footer />
    </Stack>
  );
}

export default EventDetailsPage;

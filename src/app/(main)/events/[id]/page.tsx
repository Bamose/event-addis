import { Navbar } from "@/components/header/Navbar";
import { Stack } from "@mantine/core";
import React from "react";
import { EventDetail } from "./_components/eventDetail";
import Footer from "@/components/footer/footer";
import { cn } from "@/utils/cn";
import { getEventById } from "../_actions/event.query";

async function EventDetailsPage({
  params: { id },
}: {
  params: { id: string };
}
) {
  const data = await getEventById(id)
  return (
    <Stack className={cn('bg-white')}>
      <Navbar />
      <EventDetail data={data} />
      <Footer />
    </Stack>
  );
}

export default EventDetailsPage;

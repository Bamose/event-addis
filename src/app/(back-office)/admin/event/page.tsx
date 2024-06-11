import { Box, Stack, Title } from "@mantine/core";
import React from "react";
import { EventList } from "./_components/event";
import { getEventData } from "./_actions/event.user.query";

export default async function eventpage() {
  const data = await getEventData();
  return (
    <Stack>
      <Title>Events</Title>
      <EventList data={data} />
    </Stack>
  );
}

"use client";
import {
  Box,
  Stack,
  Title,
  Text,
  Flex,
  Button,
  Group,
  TextInput,
} from "@mantine/core";
import { DatePickerInput, DateTimePicker } from "@mantine/dates";
import {
  IconArrowRight,
  IconDropletDollar,
  IconHeartHandshake,
  IconReceiptDollar,
} from "@tabler/icons-react";
import React, { useState } from "react";

export function Detail() {
  const [isPanelOpen, setPanelOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const togglePanel = (buttonType:string) => {
    setPanelOpen(true);
    setSelectedButton(buttonType);
  };

  return (
    <>
      <Stack className="w-2/3">
        <Title size={"h2"}> Create Ticket</Title>
        <Text c={"gray"}>
          Choose a ticket type or build a section with multiple ticket types.
        </Text>
        <Button unstyled onClick={() => togglePanel('paid')}>
          <Group
            justify={"space-between"}
            className={`border border-gray rounded-2xl p-3 ${
              selectedButton === 'paid' ? 'bg-blue-200/20' : ''
            }`}
          >
            <Group>
              <Box className="p-5 bg-blue-400/30 rounded-xl">
                <IconReceiptDollar size={32} />
              </Box>

              <Flex direction={"column"} align={"flex-start"}>
                <Title>Paid</Title>
                <Text>Create ticket that people have to pay</Text>
              </Flex>
            </Group>
            <IconArrowRight />
          </Group>
        </Button>
        <Button unstyled onClick={() => togglePanel('free')}>
          <Group
            justify={"space-between"}
            className={`border border-gray rounded-2xl p-3 ${
              selectedButton === 'free' ? 'bg-blue-200/20' : ''
            }`}
          >
            <Group>
              <Box className="p-5 bg-blue-400/30 rounded-xl">
                <IconDropletDollar size={32} />
              </Box>

              <Flex direction={"column"} align={"flex-start"}>
                <Title>Free</Title>
                <Text>Create ticket that people have to pay</Text>
              </Flex>
            </Group>
            <IconArrowRight />
          </Group>
        </Button>
        <Button unstyled onClick={() => togglePanel('donation')}>
          <Group
            justify={"space-between"}
            className={`border border-gray rounded-2xl p-3 ${
              selectedButton === 'donation' ? 'bg-blue-200/20' : ''
            }`}
          >
            <Group justify={"flex-start"}>
              <Box className="p-5 bg-blue-400/30 rounded-xl">
                <IconHeartHandshake size={32} />
              </Box>

              <Flex direction={"column"} align={"flex-start"}>
                <Title>Donation</Title>
                <Text>Create ticket that people have to pay</Text>
              </Flex>
            </Group>
            <IconArrowRight />
          </Group>
        </Button>
        <Stack
          className={`fixed top-[7vh] right-0 h-full w-80 bg-white shadow-lg transform transition-transform ${
            isPanelOpen ? "translate-x-0" : "translate-x-full"
          } p-5`}
        >
          <Title size={"h2"}>Add tickets</Title>
          <Group>
            <Button variant={selectedButton === 'paid' ? 'filled' : 'outline'} onClick={() => togglePanel('paid')}>Paid</Button>
            <Button variant={selectedButton === 'free' ? 'filled' : 'outline'} onClick={() => togglePanel('free')} >Free</Button>
            <Button variant={selectedButton === 'donation' ? 'filled' : 'outline'} onClick={() => togglePanel('donation')}>Donation</Button>
          </Group>
          <form>
            <Stack>
              <TextInput placeholder="Name" />
              <TextInput placeholder="Availability quantity" />{" "}
              <TextInput placeholder="Price" disabled = {selectedButton !== 'paid' && selectedButton !== 'donation'}/>
              <Group grow>
                <DatePickerInput placeholder="Sales start Date" />
                <DateTimePicker placeholder="Sales start Time" />
              </Group>
              <Group grow>
                <DatePickerInput placeholder="Sales end Date" />
                <DateTimePicker placeholder="Sales end Time" />
              </Group>

              <Group justify="flex-start">
                <Button variant="filled" color={"gray"} onClick={()=> setPanelOpen(false)}>
                  Cancel
                </Button>
                <Button variant="filled" color={"orange"}>
                  Save
                </Button>
              </Group>
            </Stack>
          </form>
        </Stack>
      </Stack>
    </>
  );
}

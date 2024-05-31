'use client'
import {
    Box,
    Button,
    Collapse,
    Flex,
    Group,
    Stack,
    Text,
    TextInput,
    Textarea,
    Title,
  } from "@mantine/core";
  import React, { useState } from "react";
  import { ImageDrop } from "./imageDrop";
  import { IconCircleLetterX, IconCirclePlus } from "@tabler/icons-react";
import { RichTextEditorInput } from "./RichTextEditor";
import { useRouter } from "next/navigation";
import { modals } from "@mantine/modals";
 
  export function FormDetail() {
    const [eventDetailsOpen, setEventDetailsOpen] = useState(false);
    const [dateTimeOpen, setDateTimeOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const router = useRouter();

    const handleCreate = () =>{
      modals.openConfirmModal({
        title: 'Create a ticket',
        centered: true,
        children: (
          <Text size="sm">
            Are you sure you want to save and create your ticket?
          </Text>
        ),
        labels: { confirm: 'Create ticket', cancel: "cancel" },
        confirmProps: { color: 'orange' },
        onCancel: () => console.log('Cancel'),
        onConfirm: () => router.push("/admin/tickets"),
      });
      
    }
    return (
      <Stack gap={20} className="pt-[10vh] px-[20vw]">
        <Text>Back to event</Text>
        <Title size={"h2"}>Build your event page</Title>
        <Text>
          Add all of your event details and let attendees know what to expect
        </Text>
        <Box className="border border-gray rounded-lg bg-gray-400/20 cursor-pointer">
          <ImageDrop />
        </Box>
  
        {/* Event Details Section */}
        <Box className="p-5 border border-gray rounded-lg ">
          {!eventDetailsOpen && (
            <Button className="w-full" unstyled onClick={() => setEventDetailsOpen(true)}>
              <Group justify="space-between">
                <Title>Event Title</Title>
                <IconCirclePlus color="#3E42B1" size={32} />
              </Group>
          
                <Text className="text-left" c="gray">
                  A short and sweet sentence about your event
                </Text>
          
            </Button>
          )}
  
          <Collapse className="w-full" in={eventDetailsOpen}>
            <Stack>
              <Group justify="space-between">
                <Title>Event Overview</Title>
                <IconCircleLetterX color="#3E42B1" size={28} onClick={() => setEventDetailsOpen(false)} />
              </Group>
              <TextInput label='Event title' className="w-full" />
              <Textarea label='Summary' placeholder="Grab people's attention with a short description about your event." className="w-full" />
            </Stack>
          </Collapse>
        </Box>
  
        {/* Date and Time Section */}
        <Box className="p-5 border border-gray rounded-lg ">
          {!dateTimeOpen && (
            <Button className="w-full" unstyled onClick={() => setDateTimeOpen(true)}>
              <Group justify="space-between">
                <Title>Date and Time</Title>
                <IconCirclePlus color="#3E42B1" size="32" />
              </Group>
            </Button>
          )}
  
          <Collapse className="w-full" in={dateTimeOpen}>
            <Stack>
              <Group justify="space-between">
                <Title>Date and Time Details</Title>
                <IconCircleLetterX color="#3E42B1" size="28" onClick={() => setDateTimeOpen(false)} />
              </Group>
              <TextInput label='Date' className="w-full" />
              <Textarea label='Time' placeholder="Specify the time of the event." className="w-full" />
            </Stack>
          </Collapse>
        </Box>
        <Box className="p-5 border border-gray rounded-lg ">
          {!aboutOpen && (
            <Button className="w-full" unstyled onClick={() => setAboutOpen(true)}>
              <Group justify="space-between">
                <Title>About This Event</Title>
                <IconCirclePlus color="#3E42B1" size="32" />
              </Group>
             
                <Text className="text-left" c="gray">
                use this section to provide more  details about your event. you can include things to know, venue information, parking, accessbility options-anything that will help people know what to expect.
                </Text>
             
            </Button>
          )}
  
          <Collapse className="w-full" in={aboutOpen}>
            <Stack>
              <Group justify="space-between">
                <Title>About this event</Title>
                <IconCircleLetterX color="#3E42B1" size="28" onClick={() => setAboutOpen(false)} />
              </Group>
              <RichTextEditorInput />
            </Stack>
          </Collapse>
        </Box>
        <Flex justify="flex-end" >
            <Button bg={'orange'}
              onClick={handleCreate}
            > 
              Save and Continue
            </Button>
        </Flex>
      </Stack>
    );
  }
  
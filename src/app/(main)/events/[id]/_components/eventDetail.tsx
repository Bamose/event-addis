"use client";
import { Event } from "@/app/(main)/create-event/_actions/event.schema";
import { cn } from "@/utils/cn";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconCalendar, IconClock, IconWorldWww } from "@tabler/icons-react";
import React from "react";
import { RegisterModal } from "./registration";
interface EventListProps {
  data: Event;
}
export function EventDetail({ data }: EventListProps) {
  const [opened, { open, close }] = useDisclosure(false);

  const register = () => {};
  return (
    <>
      <Stack className={cn("pt-[7vh] px-40")}>
        <Box className={cn(" py-10  rounded-lg ")}>
          <Image
            src={data.image ? data.image : "/inter.jpg"}
            alt="My Image"
            className={cn(" w-full h-[50vh] rounded-lg")}
            style={{ borderRadius: "10px" }}
          />
        </Box>
        <Flex>
          <Stack className={cn("w-full")}>
            <Box w={700}>
              <text className="text-base pt-1 text-gray-500 font-medium px-2 pb-3 w-full t">
                {new Date(data.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </text>
              <Title>{data.eventname}</Title>
            </Box>
            <Group
              justify={"space-between"}
              className={cn("bg-gray-400/20 p-5 rounded-lg w-2/3")}
            >
              <Group>
                <Avatar />
                <Flex gap={10} direction={"column"}>
                  <Text>
                    {" "}
                    <b>By Rise up Hiking</b> 7.2k followers
                  </Text>
                  <Box
                    size={"sm"}
                    className={cn(
                      "bg-orange-400/40 rounded-full p-2 w-[10vw] pl-5"
                    )}
                  >
                    <Text>72.1k attendess</Text>
                  </Box>
                </Flex>
              </Group>
              <Box className={cn("")}>
                <Button variant="filled"> Follow </Button>
              </Box>
            </Group>
            <Stack>
              <Title size={"h3"}>Date and Time</Title>
              <Group>
                <IconCalendar />
                <Text>
                  {new Date(data.date).toLocaleString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZoneName: "short",
                  })}
                </Text>
              </Group>
            </Stack>

            <Stack>
              <Title size={"h3"}>Location</Title>
              <Group>
                <IconWorldWww />
                <Text>{data.location}</Text>
              </Group>
            </Stack>

            <Stack>
              <Title size={"h3"}>About this event</Title>
              <Group>
                <IconClock color="blue" />
                <Text>1 hour</Text>
              </Group>
              <Text w={700}>
                Are you ready to Jounrey into the Sacred Feminine within you and
                claim your true power?Join us in this immersive masterclass:
                From Mundane to Magical Activate and Claim Your Power NOW With
                our S.H.E Method Source Heart Earth Activation
              </Text>
            </Stack>
          </Stack>
          <Box className="shadow-lg border border-gray rounded-lg h-[30vh] w-[30vw] flex flex-col justify-center items-center p-4 space-y-4">
            <Text className={cn("self-center ")}>Free Reservation</Text>
            <Button
              color={"orange"}
              className={cn("bg-orange-600 px-10")}
              onClick={open}
            >
              Reserve Spot
            </Button>
          </Box>
        </Flex>
      </Stack>
      <RegisterModal isOpen={opened} onClose={close} id={data.id} />
    </>
  );
}

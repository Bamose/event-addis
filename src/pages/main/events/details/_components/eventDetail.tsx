import { cn } from "@/utils/cn";
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconCalendar,
  IconClock,
  IconClock12,
  IconWorldWww,
} from "@tabler/icons-react";
import React from "react";

export function EventDetail() {
  return (
    <Stack className={cn("pt-[7vh] px-40")}>
      <Box className={cn(" py-10  rounded-lg ")}>
        <Image
          src="/inter.jpg"
          alt="My Image"
          className={cn(" w-full h-[50vh] rounded-lg")}
        />
      </Box>
      <Flex>
        <Stack className={cn("w-full")}>
          <Box w={700}>
            <Text>Wednesday, May 29</Text>
            <Title>Journey into the Sacred Feminine - The S.H.E Method</Title>
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
              <Text>Wednesday, May 29 · 4 - 5am EAT</Text>
            </Group>
          </Stack>

          <Stack>
            <Title size={"h3"}>Location</Title>
            <Group>
              <IconWorldWww />
              <Text>Online</Text>
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
              claim your true power?Join us in this immersive masterclass: From
              Mundane to Magical Activate and Claim Your Power NOW With our
              S.H.E Method Source Heart Earth Activation
            </Text>
          </Stack>
        </Stack>
        <Box className="shadow-lg border border-gray rounded-lg h-[30vh] w-[30vw] flex flex-col justify-center items-center p-4 space-y-4">
          <Text className={cn("self-center ")}>Free Reservation</Text>
          <Button color={"orange"} className={cn("bg-orange-600 px-10")}>
            Reserve Spot
          </Button>
        </Box>
      </Flex>
    </Stack>
  );
}

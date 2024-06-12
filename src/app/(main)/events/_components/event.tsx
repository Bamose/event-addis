"use client";
import React from "react";
import classes from "./evenlist.module.css";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Text, Image, Group } from "@mantine/core";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";
import { Event } from "@/app/(main)/create-event/_actions/event.schema";
interface EventListProps {
  data: Event[];
}
export function EventList({ data }: EventListProps) {
  const router = useRouter();
  const handleRedirect = (id: string) => {
    router.push(`/events/${id}`);
  };
  return (
  
      <Group>
        {data.map((event) => (
          <Button
            key={event.id}
            unstyled
            onClick={() => handleRedirect(event.id)}
            className={cn("cursor-pointer px-[2vw]")}
          >
            <Box className={`${classes.box} ${classes.shadow} overflow-clip `}>
              <Box className="h-[27vh] mb-2  w-[18vw] ">
                <Image
                  src={event.image ? event.image : "/inter.jpg"}
                  alt="Event Image"
                  style={{ height: "27vh" }}
                />
              </Box>
              <div className="flex flex-col justify-start fa-align-left">
                <text className="text-xl text-left font-medium px-2 w-full t">
                  {event.eventname}
                </text>

                <text className="text-base text-left pt-1 text-red-500 font-medium px-2 pb-3 w-full t">
                  {new Date(event.date).toLocaleString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZoneName: "short",
                  })}
                </text>
                <Box className="rounded-lg bg-orange-700/20 w-16 ml-4 pb-2 ">
                <Text className={cn("cursor-pointer p-5 py-7")}>{event.tickettype}</Text>
                  
                </Box>
                <Box className="flex flex-row  pt-4 px-2">
                  <Box className="h-4 w-4 ">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-2xl bg-gray "
                    />
                  </Box>
                  <text className=" text-left text-md font-medium  px-2 py-2 w-full t">
                    {event.location}
                  </text>
                </Box>
              </div>
            </Box>
          </Button>
        ))};
      </Group>
  
  );
}

import { eventtypes } from "@/types/types";
import Image from "next/image";
import React from "react";
import classes from "./evenlist.module.css";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button } from "@mantine/core";
import { useRouter } from "next/navigation";

type eventprops = {
  event: eventtypes;
};
export const Event = (/* { event }: eventprops */) => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push('/main/events/details');
  };
  return (
    <Button unstyled onClick={handleNavigation}>
    
    <Box className={`${classes.box} ${classes.shadow} overflow-clip`}>
      <Box className="h-[27vh] mb-2  w-[18vw] ">
        <Image src="/inter.jpg" alt="My Image" width={400} height={200} />
      </Box>
      <Box className="flex flex-col">
        <text className="text-xl font-medium px-2 w-full t">
          Intro to App & Web Development{" "}
        </text>
        <text className="text-base pt-1 text-red-500 font-medium px-2 pb-3  w-full t">
          Fri, Nov 24, 2023 8:30 PM EAT{" "}
        </text>
        <Box className="flex flex-row  pt-3 px-2">
          <Box className="h-6 w-6 ">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-2xl bg-gray "
            />
          </Box>
          <text className="text-base  font-medium  px-2 py-2 w-full t">
            CSEC ASTU LAB
          </text>
        </Box>
      </Box>
    </Box>
    </Button>
  );
};

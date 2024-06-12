import React from "react";
import { Title, Text, Anchor, Box, Flex, Group, Image } from "@mantine/core";
import classes from "./image.module.css";
import { cn } from "@/utils/cn";
import {
  IconCamera,
  IconHandLoveYou,
  IconHeadphones,
  IconMicrophone,
  IconPizza,
  IconTournament,
  IconWorld,
} from "@tabler/icons-react";
function Imagecontent() {
  const icons = [
    { id: 1, IconComponent: IconMicrophone, color: "gray" },
    { id: 2, IconComponent: IconPizza, color: "gray" },
    { id: 3, IconComponent: IconCamera, color: "gray" },
    { id: 4, IconComponent: IconWorld, color: "gray" },
    { id: 5, IconComponent: IconHandLoveYou, color: "gray" },
    { id: 6, IconComponent: IconHeadphones, color: "gray" },
    { id: 7, IconComponent: IconTournament, color: "gray" },
    { id: 8, IconComponent: IconMicrophone, color: "gray" },
  ];
  return (
    <Box>
      <Box className={classes.image}>
        <Image src="image.png" alt="image" className="" />
      </Box>
      <Group gap={"64"} className={cn("px-20 pb-10")}>
        {icons.map((iconItem) => (
          <Group key={iconItem.id}>
            <Box
              className={cn(
                "h-28 w-28 rounded-full border border-gray hover:bg-slate-400/20 cursor-pointer"
              )}
            >
              <Flex
                justify={"center"}
                align={"center"}
                className={cn("h-full w-full")}
              >
                <iconItem.IconComponent />
              </Flex>
            </Box>
          </Group>
        ))}
      </Group>
    </Box>
  );
}

export default Imagecontent;

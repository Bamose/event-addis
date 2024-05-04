import React from "react";
import { Title, Text, Anchor, Box, Flex, Group } from "@mantine/core";
import classes from "./image.module.css";
import { cn } from "@/utils/cn";
import { IconCamera, IconMicrophone } from "@tabler/icons-react";

function Imagecontent() {
  const icons = [
    { id: 1, IconComponent: IconMicrophone },
    { id: 2, IconComponent: IconCamera },
    { id: 3, IconComponent: IconCamera },
    { id: 4, IconComponent: IconCamera },
    { id: 5, IconComponent: IconMicrophone },
    { id: 6, IconComponent: IconMicrophone },
    { id: 7, IconComponent: IconMicrophone },
    { id: 8, IconComponent: IconMicrophone },

  ];
  return (
    <Box className="pt-[7vh]">
      <Box className={classes.image}>imagecontent</Box>
      <Group gap={'64'} className={cn('px-20 pb-10')}>
      {icons.map((iconItem) => (
        <Group  key={iconItem.id} >
          <Box className={cn("h-28 w-28 rounded-full border border-gray hover:bg-slate-400/20 cursor-pointer")}>
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

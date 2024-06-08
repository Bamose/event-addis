import { Box, Divider, Stack, Title, Text, Flex } from "@mantine/core";
import React from "react";
import SignInForm from "../_components/signInForm";



export default function signupPage() {
  return (
    <Stack
      className="px-2 pt-[20vh] "
      bg={"white"}
    >
      <Title className="text-center font-semibold" size={24}>
        Login to Event Addis
      </Title>
      <Box className="px-[38vw]">
      <Divider />
      </Box>
        <Box className="px-[40vw] h-full w-full ">
      <SignInForm />
      </Box>
    </Stack>
  );
}

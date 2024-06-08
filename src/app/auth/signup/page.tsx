import { Box, Divider, Stack, Title, Text, Flex } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { GoogleButton } from "./_components/googleButton";
import SignUpForm from "./_components/signUpForm";

export default function signupPage() {
  return (
    <Stack
      className="px-2 pt-[20vh] "
      bg={"white"}
    >
      <Title className="text-center font-semibold" size={24}>
        Welcome, Sign up to Event Addis
      </Title>
      <Box className="px-[38vw]">
      <Divider />
      </Box>
        <Box className="px-[40vw] h-full w-full ">
      <SignUpForm />
      </Box>
    </Stack>
  );
}

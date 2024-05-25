import Footer from "@/components/footer/footer";
import { Navbar } from "@/components/header/Navbar";
import { Box, Button, Stack, Text } from "@mantine/core";
import { FormDetail } from "./_components/FormDetail";

export default function Homeage() {
  return (
    <>
      <Stack bg={'white'}>
        <Navbar />
        <FormDetail />
        <Footer />
      </Stack>
    </>
  );
}

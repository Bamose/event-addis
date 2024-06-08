import EventList from "@/components/event/EventList";
import Footer from "@/components/footer/footer";
import { Navbar } from "@/components/header/Navbar";
import Imagecontent from "@/components/imagecontent/Imagecontent";
import DepTabs from "@/components/tabs/tabs";
import { Box, Button } from "@mantine/core";

export default function HomePage() {
  return (
    <>
      <Box className="overflow-y:auto bg-white ">
        <Navbar />
        <Imagecontent />
        <DepTabs />
        <EventList />
        <Footer />
      </Box>
    </>
  );
}

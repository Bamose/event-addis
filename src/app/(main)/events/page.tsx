
import Footer from "@/components/footer/footer";
import { Navbar } from "@/components/header/Navbar";
import Imagecontent from "@/components/imagecontent/Imagecontent";
import DepTabs from "@/components/tabs/tabs";
import { Box, Button } from "@mantine/core";
import { EventList } from "./_components/event";
import { getEventData } from "./_actions/event.query";

export default async function HomePage() {
  const data = await getEventData()
  return (
    <>
      <Box className="overflow-y:auto bg-white ">
        <Navbar />
        <Imagecontent />
        <DepTabs />
        <Box className='h-max mb-10 rounded-md pl-5 py-5'  >
        <EventList data={data} />
        </Box>
        <Footer />
      </Box>
    </>
  );
}

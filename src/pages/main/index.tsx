import EventList from "@/components/event/EventList";
import Footer from "@/components/footer/footer";
import { Navbar } from "@/components/header/Navbar";
import Imagecontent from "@/components/imagecontent/Imagecontent";
import DepTabs from "@/components/tabs/tabs";
import { Box, Button } from "@mantine/core";


export default function HomePage() {
  return (
    <>
    <div className="overflow-y:auto">
        <Navbar />
        <Imagecontent />
        <Box w={'full'}>
         <DepTabs />
         </Box>
         <EventList />
         <Button variant="filled"> 
          save
         </Button>
          <Footer /> 
    </div>
    </>
  );
}

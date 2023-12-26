import EventList from "@/components/event/EventList";
import Footer from "@/components/footer/footer";
import { Navbar } from "@/components/header/Navbar";
import Imagecontent from "@/components/imagecontent/Imagecontent";
import DepTabs from "@/components/tabs/tabs";
import { Container } from "@mantine/core";

export default function HomePage() {
  return (
    <>
    <div className="overflow-y:auto">
        <Navbar />
    
        <Imagecontent />

         <DepTabs />

         <EventList />
          <Footer /> 
         </div>
    </>
  );
}

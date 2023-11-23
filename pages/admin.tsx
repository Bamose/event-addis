import { AdminNavbar } from "@/components/adminsnavbar/adminsnavbar";
import EventList from "@/components/eventlist/EventList";
import Footer from "@/components/footer/footer";
import { Navbar } from "@/components/header/Navbar";
import Imagecontent from "@/components/imagecontent/Imagecontent";
import DepTabs from "@/components/tabs/tabs";
import { Container } from "@mantine/core";

export default function HomePage() {
  return (
    <>
    <div className="overflow-y:auto">
     <AdminNavbar />
         </div>
    </>
  );
}

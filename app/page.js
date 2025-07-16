
import HomeSec from "../components/HomeSec";
import Navbar from "../components/Navbar";
import AnimatedBg from "../components/AnimatedBg";
import ServicesSec from "@/components/ServicesSec";
import ProjectsSection from "@/components/ProjectSection";
import ContactSec from "@/components/ContactComp";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <AnimatedBg>
        <HomeSec />
      </AnimatedBg>
      <ServicesSec />
      <ProjectsSection />
      <ContactSec />
      <Footer />
    </>

  );
}


import AnimatedBg from '@/components/AnimatedBg'
import ContactSec from '@/components/ContactComp'
import HomeSec from '@/components/HomeSec'
import Navbar from '@/components/Navbar'
import ProjectsSection from '@/components/ProjectSection'
import ServicesSec from '@/components/ServicesSec'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <AnimatedBg>
        <HomeSec />
      </AnimatedBg>
      <ServicesSec />
      <ProjectsSection />
      <ContactSec />
    </>
  )
}

export default page

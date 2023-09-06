import React from 'react'

import HeroSection from '../components/index/HeroSection'
import MobileAppSection from '../components/index/MobileAppSection'
import SiteSearch from '../components/index/SiteSearch'
import SustainabilityReportSection from '../components/index/Sustainability'
import NoticeAndDisclosureSection from '../components/index/NoticeAndDisclosure'
import ContactPanel from '../components/index/ContactPanel'

import HeroCSS from '../components/css/Index.css'
import NavCSS from '../components/css/Navbar.css'
import footerCSS from '../components/css/Footer.css'

export default function Index() {
  return (
    <>
      <HeroSection />
      <MobileAppSection />
      <SiteSearch />
      <SustainabilityReportSection />
      <NoticeAndDisclosureSection />
      <ContactPanel />
    </>
  )
}

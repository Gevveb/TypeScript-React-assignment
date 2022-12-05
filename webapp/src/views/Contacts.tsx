import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ContactFormSection from '../sections/ContactFormSection'
import MainMenuSection from '../sections/MainMenuSection'
import MapSection from '../sections/MapSection'

const Contacts: React.FC = () => {
  document.title = 'Contacts | Fixxo.'

  return (
    <>
    <MainMenuSection />
    <BreadcrumbSection currentPage="Contacts" />
    <MapSection />
    <ContactFormSection />
    </>
  )
}

export default Contacts
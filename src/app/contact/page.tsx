import React from 'react'
import ProductHero from '../components/productsHero'
import ContactForm from './components/contact-form'

const Contact = () => {
  return (
    <>
    <ProductHero
    bgImage='https://www.ileafdoors.com/wp-content/uploads/2025/04/hero-contact.webp'
    />
    <ContactForm/>
    </>
  )
}

export default Contact
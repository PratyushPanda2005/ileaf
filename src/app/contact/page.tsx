import React from 'react'
import ProductHero from '../components/productsHero'
import ContactForm from './components/contact-form'

const Contact = () => {
  return (
    <>
    <ProductHero
    bgImage='https://res.cloudinary.com/db4zbyipc/image/upload/v1752412754/contact-hero_1_qbxoan.webp'
    />
    <ContactForm/>
    </>
  )
}

export default Contact
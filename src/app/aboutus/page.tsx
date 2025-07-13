'use client'
import React from 'react'
import ProductHero from '../components/productsHero'
import Parallax from '../pages/parallax'
import Info from './components/info'
import ProductCategory from '../components/product-category'

const AboutUs = () => {
  return (
    <div>
      <ProductHero
      bgImage='https://res.cloudinary.com/db4zbyipc/image/upload/v1752403214/about-hero-1-scaled_iikyso.webp'
      />
      <Parallax
      className='hidden'
      bgImage='https://res.cloudinary.com/db4zbyipc/image/upload/v1752403559/about-hero-2-scaled_hetv9f.webp'
      />
      <Info/>
      <ProductCategory/>
    </div>
  )
}

export default AboutUs
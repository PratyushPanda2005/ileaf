import React from 'react'
import ProductHero from '../components/productsHero'
import Parallax from '../pages/parallax'
import Info from './components/info'
import ProductCategory from '../components/product-category'

const AboutUs = () => {
  return (
    <div>
      <ProductHero
      headingOne='About Us'
      bgImage='https://www.ileafdoors.com/wp-content/uploads/2025/06/about-hero-1-scaled.webp'
      />
      <Parallax
      bgImage='https://www.ileafdoors.com/wp-content/uploads/2025/06/about-hero-2-scaled.webp'
      />
      <Info/>
      <ProductCategory/>
    </div>
  )
}

export default AboutUs
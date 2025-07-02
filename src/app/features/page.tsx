import React from 'react'
import ProductHero from '../components/productsHero'
import Parallax from '../pages/parallax'
import FeatureDescription from './components/feature-description'

const FeaturesPage = () => {
  return (
    <>
    <ProductHero
    bgImage='https://www.ileafdoors.com/wp-content/uploads/2025/06/feature-hero-1-scaled.webp'
    />
    <Parallax
    bgImage='https://www.ileafdoors.com/wp-content/uploads/2025/06/feature-hero-2-scaled.webp'
    />
    <FeatureDescription/>
    </>
  )
}

export default FeaturesPage
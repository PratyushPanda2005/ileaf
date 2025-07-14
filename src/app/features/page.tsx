import React from 'react'
import ProductHero from '../components/productsHero'
import Parallax from '../pages/parallax'
import FeatureDescription from './components/feature-description'

const FeaturesPage = () => {
  return (
    <>
    <ProductHero
    position='0%'
    bgImage='https://res.cloudinary.com/db4zbyipc/image/upload/v1752412625/feature-hero_1_i9zptd.webp'
    />
    <Parallax
    bgImage='https://res.cloudinary.com/db4zbyipc/image/upload/v1752412687/feature-hero_2_kexzfm.webp'
    className='hidden'
    />
    <FeatureDescription/>
    </>
  )
}

export default FeaturesPage
import React from 'react'
import ProductHero from '../components/productsHero'
import Parallax from '../pages/parallax'
import ProductCategory from '../components/product-category'
import ProductGrid from './components/product-grid'

const ProductsPage = () => {
  return (
   <>
   <ProductHero
   bgImage='https://www.ileafdoors.com/wp-content/uploads/2025/01/hero-03.webp'
   headingOne=''
   />
   <ProductCategory/>
   <Parallax
   bgImage='https://www.ileafdoors.com/wp-content/uploads/2025/06/products-hero-2-scaled.webp'
   />
   <ProductGrid/>
   </>
  )
}

export default ProductsPage
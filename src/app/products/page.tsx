import React from 'react'
import ProductHero from '../components/productsHero'
import Parallax from '../pages/parallax'
import ProductCategory from '../components/product-category'
import ProductGrid from './components/product-grid'
import Button from '../components/button'

const ProductsPage = () => {
  return (
   <>
   <ProductHero
   bgImage='https://www.ileafdoors.com/wp-content/uploads/2025/01/hero-03.webp'
   headingOne='Discover'
   headingTwo='unmatched'
   headingThree='Strength'
   headingFour='And Style'
   />
   <ProductCategory/>
   <Parallax
   bgImage='https://www.ileafdoors.com/wp-content/uploads/2025/06/products-hero-2-scaled.webp'
   />
   <ProductGrid/>
   <div className="lg:hidden bg-[#707070] p-10 flex justify-center items-center">
          <Button title="Enquiry" border={1} borderColor="black" />
   </div>
   </>
  )
}

export default ProductsPage
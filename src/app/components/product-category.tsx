import Link from 'next/link'
import React from 'react'

const ProductCategory = () => {
  return (
    <div className='hidden lg:flex items-center justify-center bg-black'>
        <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row p-[120px] justify-evenly items-center w-full'>
        <Link href="/product-category/luxury" className='text-[#707070] text-lg font-serif italic'>Luxury Doors</Link>
        <Link href="/product-category/gldoors" className=' text-[#707070] text-lg font-serif italic'>GL Doors</Link>
        <Link href="/product-category/gidoors" className=' text-[#707070] text-lg font-serif italic'>Gi Doors</Link>
        <Link href="/product-category/windows" className=' text-[#707070] text-lg font-serif italic'>Windows</Link>
        <Link href="/product-category/fibredoors" className=' text-[#707070] text-lg font-serif italic'>Fibre Doors</Link>
        <Link href="/product-category/wpcdoors" className=' text-[#707070] text-lg font-serif italic'>WPC Doors</Link>
        </div>
    </div>
  )
}

export default ProductCategory
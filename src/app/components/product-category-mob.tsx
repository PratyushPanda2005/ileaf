import React from 'react'
import Button from './button'

const ProductCategoryMob = () => {
  return (
    <div className='max-sm:flex hidden justify-center items-center bg-black py-20'>
        <div className='flex flex-col gap-4 items-center justify-center'>
            <Button
            borderColor='#707070'
            border={1}
            bgColor=''
            textColor='#FFBF00'
            routeLink='/product-category/luxury'
            title='luxury doors'
            className='w-full !flex !justify-center items-center'
            />
            <Button
            borderColor='#707070'
            border={1}
            bgColor=''
            textColor='#FFBF00'
            routeLink='/product-category/gidoors'
            title='gi doors'
            className='w-full !flex !justify-center !items-center'
            />
            <Button
            borderColor='#707070'
            border={1}
            bgColor=''
            textColor='#FFBF00'
            routeLink='/product-category/gldoors'
            title='gl doors'
            className='w-full !flex !justify-center !items-center'
            />
            <Button
            borderColor='#707070'
            border={1}
            bgColor=''
            textColor='#FFBF00'
            routeLink='/product-category/windows'
            title='windows'
            className='w-full !flex !justify-center !items-center'
            />
            <Button
            borderColor='#707070'
            border={1}
            bgColor=''
            textColor='#FFBF00'
            routeLink='/product-category/fibredoors'
            title='fibre doors'
            className='w-full !flex !justify-center !items-center'
            />
            <Button
            borderColor='#707070'
            border={1}
            bgColor=''
            textColor='#FFBF00'
            routeLink='/product-category/wpcdoors'
            title='wpc doors'
            className='w-full !flex !justify-center !items-center'
            />
        </div>
    </div>
  )
}

export default ProductCategoryMob
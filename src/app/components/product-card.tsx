import React from 'react'

const ProductCard = ({ heading1,heading2,description,doorImage}: {doorImage: string;heading1: string;heading2: string;description:string}) => {
  return (
    <div className='w-full min-h-screen flex  flex-col md:flex-row bg-[#dbdbdb] justify-evenly py-20 px-6 inset-0'>
        <div className='text-center md:w-1/3 '>
            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-blafhyglibs tracking-[4px] lg:tracking-[7px] italic leading-[120%]'>{heading1}</h1>
            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-blafhyglibs tracking-[4px] lg:tracking-[7px] italic leading-[120%]'>{heading2}</h1>
            <div className='flex w-full justify-center items-center mt-4'>
        <div className='w-4 h-2 bg-amber-300 transform skew-x-[-200deg]'/>
    </div>
        </div>
        <div className='md:w-1/3  flex md:hidden justify-center items-center mt-6 mb-6'>
            <img src={doorImage} alt='' width={500} height={500} className='h-[320px] md:h-[30vw] w-auto'/>
        </div>
        
        <div className='flex-1 flex flex-col gap-10 justify-center items-center md:w-1/3 '>
            <p className='text-center text-sm md:text-base italic text-black max-w-sm font-raleway'>{description}</p>
            <button className='uppercase p-3 px-6 lg:p-4 lg:px-8 transform -skew-x-12 text-sm lg:text-base bg-amber-400 font-raleway font-bold'>Explore now</button>
        </div>
        <div className='md:w-1/3 hidden md:flex justify-center items-center '>
            <img src={doorImage} alt='' width={500} height={500} className='h-[120px] md:h-[30vw] w-auto'/>
        </div>
    </div>
  )
}

export default ProductCard
import React from 'react'

const CardsSection = () => {
  return (
    <section className='h-screen bg-black p-10 lg:p-20'>
        <div className='grid lg:grid-cols-3 gap-20 h-full w-full lg:p-20'>
        <div className='grid-cols-1 h-full bg-[#707070]'></div>
        <div className='grid-cols-1 h-full bg-[#707070]'></div>
        <div className='grid-cols-1 h-full bg-[#707070]'></div>
        </div>
    </section>
  )
}

export default CardsSection
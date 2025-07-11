import React from 'react'
import { ChevronUp } from 'lucide-react'

const MobileMenu = () => {
  return (
    <div className='flex justify-evenly w-full'>
   
        <div className='bg-amber-400 rounded-full'>
        <ChevronUp strokeWidth={1.5}/>
        </div>
    </div>
  )
}

export default MobileMenu
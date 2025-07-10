import Image from 'next/image'
import React from 'react'
import MenuLogo from '@/../public/assets/logos/home.svg'
import { ChevronUp } from 'lucide-react'

const MobileMenu = () => {
  return (
    <div className='flex justify-evenly w-full'>
        <Image src={MenuLogo} alt=''/>
        <div className='bg-amber-400 rounded-full'>
        <ChevronUp strokeWidth={1.5}/>
        </div>
    </div>
  )
}

export default MobileMenu
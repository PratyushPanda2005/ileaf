import Link from 'next/link'
import React from 'react'

const EnquiryMob = () => {
  return (
    <Link href="/enquiry"  className="w-full flex justify-center sm:hidden items-center p-10 bg-[#707070]">
    <div   
     className="uppercase p-3 px-6 lg:px-8 transform border -skew-x-[20deg] text-sm  font-raleway tracking-[2px] font-[300]"
   >
     <span className="inline-block transform skew-x-[20deg]">Enquiry</span>
   </div>
    </Link>
  )
}

export default EnquiryMob
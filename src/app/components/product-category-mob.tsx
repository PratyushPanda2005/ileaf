'use client'
import React, { MouseEvent } from 'react'
import { useTransitionRouter } from "next-view-transitions";
import Button from './button'

const ProductCategoryMob = () => {
  const router = useTransitionRouter();

  const handleNavigation = (e: MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    router.push(url, {
      onTransitionReady: pageAnimation,
    });
  };

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
            bgHoverColor='#000000'
            onNavigation={handleNavigation}
            />
            <Button
            borderColor='#707070'
            border={1}
            bgColor=''
            textColor='#FFBF00'
            routeLink='/product-category/gidoors'
            title='gi doors'
            className='w-full !flex !justify-center !items-center'
            bgHoverColor='#000000'
            onNavigation={handleNavigation}
            />
            <Button
            borderColor='#707070'
            border={1}
            bgColor=''
            textColor='#FFBF00'
            routeLink='/product-category/gldoors'
            title='gl doors'
            className='w-full !flex !justify-center !items-center'
            bgHoverColor='#000000'
            onNavigation={handleNavigation}
            />
            <Button
            borderColor='#707070'
            border={1}
            bgColor=''
            textColor='#FFBF00'
            routeLink='/product-category/windows'
            title='windows'
            className='w-full !flex !justify-center !items-center'
            bgHoverColor='#000000'
            onNavigation={handleNavigation}
            />
            <Button
            borderColor='#707070'
            border={1}
            bgColor=''
            textColor='#FFBF00'
            routeLink='/product-category/fibredoors'
            title='fibre doors'
            className='w-full !flex !justify-center !items-center'
            bgHoverColor='#000000'
            onNavigation={handleNavigation}
            />
            <Button
            borderColor='#707070'
            border={1}
            bgColor=''
            textColor='#FFBF00'
            routeLink='/product-category/wpcdoors'
            title='wpc doors'
            className='w-full !flex !justify-center !items-center'
            bgHoverColor='#000000'
            onNavigation={handleNavigation}
            />
        </div>
    </div>
  )
}

const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0.5,
        scale: 1,
        transform: "translateY(-100px)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};

export default ProductCategoryMob
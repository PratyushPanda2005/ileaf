'use client'
import Image from "next/image";
import { useState } from "react";

export default function ImageZoom({ 
    src, 
    alt, 
    className 
  }: { 
    src: string; 
    alt: string; 
    className?: string; 
  }) {
    const [isZoomed, setIsZoomed] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    };
  
    const handleMouseEnter = () => {
      setIsZoomed(true);
    };
  
    const handleMouseLeave = () => {
      setIsZoomed(false);
    };
  
    return (
      <div
        className={`relative overflow-hidden cursor-crosshair ${className}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      
      >
        <Image
          src={src}
          width={300}
          height={300}
          alt={alt}
          className={`transition-transform duration-300 ease-out object-cover w-full h-full ${
            isZoomed ? 'scale-200' : 'scale-100'
          }`}
          style={
            isZoomed
              ? {
                  transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                }
              : {}
          }
        />
      </div>
    );
  }
  
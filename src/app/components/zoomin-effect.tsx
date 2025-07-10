"use client";
import Image from "next/image";
import { useState } from "react";
import ZoomIn from "@/../public/assets/logos/zoomin.svg";
export default function ImageZoom({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          isZoomed ? "lg:scale-200" : "scale-100"
        }`}
        style={
          isZoomed
            ? {
                transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
              }
            : {}
        }
      />
      <button
        onClick={() => setIsModalOpen(true)}
        className="absolute top-4 right-4 cursor-pointer"
      >
        <Image src={ZoomIn} alt="Zoom in" />
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 text-white text-2xl p-2"
            >
              ×
            </button>
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={800}
              className="object-contain max-h-[80vh]"
            />
          </div>
        </div>
      )}
    </div>
  );
}

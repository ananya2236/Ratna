import React from 'react'

const Hero = ({ bgImages, current }) => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {bgImages.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
          style={{ zIndex: 1 }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 z-10"></div>

      {/* Content */}
      <div className="relative text-center text-white px-6 z-20">
        <div className="flex items-center gap-2 justify-center">
          <div className="w-8 md:w-11 h-[2px] bg-white"></div>
          <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
        </div>
        <h1 className="prata-regular text-4xl sm:py-3 lg:text-6xl leading-relaxed">
          Latest Arrivals
        </h1>
        <div className="flex items-center gap-2 justify-center">
          <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
          <div className="w-8 md:w-11 h-[1px] bg-white"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
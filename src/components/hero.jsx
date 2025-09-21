import React from 'react'

const Hero = ({ bgImages, current, setCurrent }) => {
  // Handler for next image
  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % bgImages.length)
  }

  // Handler for previous image
  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + bgImages.length) % bgImages.length)
  }

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Backgrounds with fade animation */}
<div className="absolute inset-0 w-full h-full z-[1]">
  {bgImages.map((img, idx) => (
    <div
      key={idx}
      className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        opacity: idx === current ? 1 : 0,
      }}
    ></div>
  ))}
</div>

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

      {/* Prev Arrow Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white rounded-full p-3 transition"
        aria-label="Previous image"
        style={{ outline: 'none', border: 'none' }}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Next Arrow Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white rounded-full p-3 transition"
        aria-label="Next image"
        style={{ outline: 'none', border: 'none' }}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {bgImages.map((_, idx) => (
          <span
            key={idx}
            className={`block w-3 h-3 rounded-full transition-all duration-300
              ${idx === current ? 'bg-white scale-110 shadow-lg' : 'bg-white/50'}
            `}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default Hero
import React, { useEffect, useState } from 'react'
import Hero from '../components/hero.jsx'
import LatestCollection from '../components/LatestCollection.jsx'
import BestSeller from '../components/BestSeller.jsx'
import OurPolicy from '../components/OurPolicy.jsx'
import NewsLetter from '../components/NewsLetter.jsx'
import Navbar from '../components/Navbar.jsx'
import { assets } from '../assets/assets.js'

const bgImages = [
  assets.model1,
  assets.model2,
  assets.model3,
  assets.model4,
  assets.model5,
  assets.model6,
  assets.model7,
]

const Home = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % bgImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

return (
  <div>
    <Navbar bgImages={bgImages} current={current} />
    <Hero bgImages={bgImages} current={current} setCurrent={setCurrent} />
    <div className="px-4 sm:px-8 md:px-16 lg:px-24">
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetter />
    </div>
  </div>
)
}

export default Home
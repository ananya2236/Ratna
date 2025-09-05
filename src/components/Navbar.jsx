import React, { useContext, useState, useEffect } from 'react'
import { assets } from '../assets/assets.js'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext.js'

const Navbar = () => {
    const [visible, setVisible] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { setShowSearch } = useContext(ShopContext)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/') {
            const handleScroll = () => {
                setScrolled(window.scrollY > 50)
            }
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
        } else {
            setScrolled(true)
        }
    }, [location.pathname])

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-1000 ${
                scrolled
                    ? 'bg-white text-black shadow'
                    : location.pathname === '/' 
                        ? 'bg-black/0 text-white'
                        : 'bg-white text-black shadow'
            }`}
            style={{ minHeight: '64px' }}
        >
            <div className="relative z-20 flex items-center justify-between py-1 font-medium max-w-7xl mx-auto px-4">
                <Link to='/'><img src={assets.logo} className='w-30' alt="" /></Link>
                <ul className='hidden sm:flex gap-5 text-sm text-inherit'>
                    <NavLink to='/' className='flex flex-col items-center gap-1'><p>HOME</p></NavLink>
                    <NavLink to='/collection' className='flex flex-col items-center gap-1'><p>COLLECTION</p></NavLink>
                    <NavLink to='/about' className='flex flex-col items-center gap-1'><p>ABOUT</p></NavLink>
                    <NavLink to='/contact' className='flex flex-col items-center gap-1'><p>CONTACT</p></NavLink>
                </ul>
                <div className='flex items-center gap-6'>
                    <img onClick={() => setShowSearch(true)} src={assets.search} className='w-5 cursor-pointer' alt="" />
                    <div className='group relative'>
                        <img src={assets.about} className='w-5 cursor-pointer' alt="" />
                        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                            <div className=' flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                                <p className='cursor-pointer hover:text-black'>My Profile</p>
                                <p className='cursor-pointer hover:text-black'>Orders</p>
                                <p className='cursor-pointer hover:text-black'>Log Out</p>
                            </div>
                        </div>
                    </div>
                    <Link to='/cart' className='relative'>
                        <img src={assets.shopping_cart} className='w-5 min-w-5' alt='' />
                        <p className='absolute right-[-10px] bottom-[-4px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
                    </Link>
                    <img onClick={() => setVisible(true)} src={assets.menu} className='w-5 cursor-pointer sm:hidden' alt="" />
                </div>
                {/* Sidebar Menu for Small Screen */}
                {visible && (
                  <div className="fixed inset-0 z-50 bg-white flex flex-col text-gray-600 transition-all sm:hidden">
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                      <img src={assets.down_arrow} className='h-4 rotate-90' alt="" />
                      <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-4 pl-8 border-b' to='/'>Home</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-4 pl-8 border-b' to='/collection'>Collection</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-4 pl-8 border-b' to='/about'>About</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-4 pl-8 border-b' to='/contact'>Contact</NavLink>
                  </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
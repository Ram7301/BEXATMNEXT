'use client'
import { navLinks } from '@/app/api/navlink'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useEffect, useRef, useState, useCallback } from 'react'
import NavLink from './Navigation/NavLink'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useContentManage } from '@/app/context/ContentManageContext'
import { FaAt } from 'react-icons/fa'

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false)
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [productOpen, setProductOpen] = useState(false) // 👈 dropdown toggle
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const { SignOut } = useContentManage()

  const sideMenuRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (sideMenuRef.current && !sideMenuRef.current.contains(event.target as Node)) {
      setNavbarOpen(false)
    }
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setProductOpen(false)
    }
  }


  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleScroll])

  const isHomepage = pathname === '/'

  return (
    <header
      className={`fixed py-2 z-50 w-full bg-transparent transition-all duration-300 lg:px-0 px-4 ${sticky ? "top-1" : "top-1"
        }`}
    >

      <nav
        className={`container mx-auto max-w-7xl flex items-center justify-between h-22 px-4 duration-300 ${sticky
          ? "shadow-lg bg-white rounded-full dark:bg-dark"
          : "shadow-none"
          }`}
      >
        <div className='flex justify-between items-center gap-2 w-full'>
          {/* ------------------- Logo ------------------- */}
          <div className="flex justify-between items-center">
            <Link href='/'>
              <Image
                src={'/images/header/BexatmLogo.png'}
                alt='logo'
                width={200}
                height={200}
                unoptimized={true}
                className={`object-contain ${isHomepage ? sticky ? "block dark:hidden" : "hidden" : sticky ? "block dark:hidden" : "block dark:hidden"}`}
              />
              <Image
                src={'/images/header/BexatmLogo.png'}
                alt='logo'
                width={200}
                height={200}
                unoptimized={true}
                className={`object-contain ${isHomepage ? sticky ? "hidden dark:block" : "block" : sticky ? "dark:block hidden" : "dark:block hidden"}`}
              />
            </Link>
          </div>

          {/* ------------------- Center Navigation Links ------------------- */}
          {/* <div className="hidden md:flex items-center gap-8 text-base font-medium">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProductOpen(!productOpen)}
                className="hover:text-primary transition flex items-center gap-1"
              >
                Products
                <Icon
                  icon={productOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'}
                  width={20}
                  height={20}
                />
              </button>
              {productOpen && (
                <div className="absolute top-full left-0 bg-white dark:bg-dark shadow-lg rounded-md mt-2">
                  <ul className="min-w-[150px] py-2">
                    <li>
                      <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">POS</Link>
                    </li>
                    <li>
                      <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Invoice</Link>
                    </li>
                    <li>
                      <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Purchase</Link>
                    </li>
                    <li>
                      <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Tasks</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <Link href="#" className="hover:text-primary transition">About Us</Link>
            <Link href="#" className="hover:text-primary transition">Careers</Link>
          </div> */}

          {/* ------------------- Right Side Icons ------------------- */}
          <div className='flex items-center gap-2 sm:gap-6'>
            {/* <button
              className='hover:cursor-pointer'
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Icon
                icon={'solar:sun-bold'}
                width={32}
                height={32}
                className={`dark:hidden block ${isHomepage
                  ? sticky
                    ? 'text-dark'
                    : 'text-dark'
                  : 'text-dark'
                  }`}
              />
              <Icon
                icon={'solar:moon-bold'}
                width={32}
                height={32}
                className='dark:block hidden text-white'
              />
            </button> */}

            <div className={`hidden md:block`}>
              <Link href='#' className={`text-base text-inherit flex items-center gap-2 border-r pr-6 ${isHomepage
                ? sticky
                  ? 'text-dark dark:text-white hover:text-primary border-dark dark:border-white'
                  : 'text-dark hover:text-primary'
                : 'text-dark hover:text-primary'
                }`}
              >
                <Icon icon={'ph:phone-bold'} width={24} height={24} />
                (+91)94444 08804
              </Link>
            </div>

            <div>
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className={`group flex items-center gap-2 p-1 sm:px-3 sm:py-2 rounded-full font-medium text-sm hover:cursor-pointer border
    ${isHomepage
                    ? sticky
                      ? 'bg-[#F6A800] border-[#F6A800] dark:bg-[#F6A800] dark:border-[#F6A800]'
                      : 'bg-[#F6A800] border-[#F6A800]'
                    : 'bg-[#F6A800] border-[#F6A800] dark:bg-[#F6A800] dark:border-[#F6A800]'
                  }`}
                aria-label="Toggle mobile menu"
              >
                <span>
                  <Icon icon={'ph:list'} width={16} height={16} />
                </span>
                <span
                  className={`
      hidden sm:block
      text-black dark:text-black
      transition-colors duration-300
    `}
                >
                  Key Features
                </span>
              </button>


            </div>
          </div>
        </div>
      </nav>

      {/* ------------------- Overlay ------------------- */}
      {navbarOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
      )}

      {/* ------------------- Side Menu ------------------- */}
      <div
        ref={sideMenuRef}
        className={`fixed top-0 right-0 h-full w-[90%] sm:w-50 md:w-56 bg-dark shadow-lg transition-transform duration-300 ${navbarOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50 px-4 sm:px-6 overflow-auto no-scrollbar`}
      >

        <div className="flex flex-col h-full justify-between">
          <div className="">
            <div className='flex items-center justify-start py-1'>
              <button
                onClick={() => setNavbarOpen(false)}
                aria-label='Close mobile menu'
                className='bg-white p-1 rounded-full hover:cursor-pointer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='14'
                  height='14'
                  viewBox='0 0 24 24'>
                  <path
                    fill='none'
                    stroke='black'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col items-start gap-2">
              <ul className="w-full text-xs sm:text-sm md:text-base font-medium">
                {navLinks.map((item, index) => (
                  <NavLink
                    key={index}
                    item={item}
                    onClick={() => setNavbarOpen(false)}
                  />
                ))}

                <li className="flex items-center gap-2 mt-2">
                  <Link
                    href="/signin"
                    className="py-1 px-3 bg-primary text-xs sm:text-1*2 leading-4 block w-fit text-white rounded-full border border-primary font-medium hover:bg-transparent hover:text-primary duration-300"
                  >
                    Sign In
                  </Link>
                  <button
                    onClick={SignOut}
                    className="py-1 px-3 bg-transparent border border-primary text-xs sm:text-1*2 leading-4 block w-fit text-primary rounded-full font-medium hover:bg-primary hover:text-white duration-300"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <div className='flex flex-col gap-1 my-3 text-white'>
            <p className='text-sm sm:text-1*2 font-normal text-white/40'>
              Contact
            </p>
            <Link
              href="mailto:contact@bexatm.com"
              className="flex items-center gap-4 group"
            >

              <p className="text-sm font-normal text-white group-hover:text-primary">
                contact&#64;bexatm.com
              </p>
            </Link>


            <Link href="#" className='text-sm sm:text-1*2 font-medium text-inherit hover:text-primary'>
              (+91) 94444 08804{' '}
            </Link>
          </div>
        </div>
      </div>
    </header >
  )
}

export default Header

import React from 'react'
import { useState } from 'react'

function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 ease-in-out bg-slate-950/20 backdrop-blur-sm">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

        <div className='flex justify-between items-center h-14 sm:h-16 md:h-20'>

          <div className='flex items-center space-x-1 group cursor-pointer'>
            {/* <img src='./logo.png' className='w-6 h-6 sm:w-8 sm:h-8' alt='codeFlow' /> */}

            <span className='text-lg sm:text-xl md:text-2xl font-medium'>
              <span className='text-white'>Pro</span>
              <span className='text-blue-400'>dex</span>
            </span>
          </div>

          <div className='hidden md:flex items-center space-x-4 lg:space-x-8'>
            <a href='#' className='text-gray-400 hover:text-white text-sm lg:text-base'>Features</a>
            <a href='#' className='text-gray-400 hover:text-white text-sm lg:text-base'>Pricing</a>
            <a href='#' className='text-gray-400 hover:text-white text-sm lg:text-base'>Testimonials</a>
          </div>

          <button
            className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={() => setMobileMenuIsOpen(prev => !prev)}
            aria-expanded={mobileMenuIsOpen}
          >
            {mobileMenuIsOpen ? (
              <i className="fas fa-times text-xl sm:text-2xl"></i>
            ) : (
              <i className="fas fa-bars text-xl sm:text-2xl"></i>
            )}
          </button>

        </div>

        {mobileMenuIsOpen && (
          <div className='md:hidden bg-slate-900/80 backdrop-blur-sm border-t border-slate-800 slide-in-from-top transition-all duration-300'>
            <div className='px-4 py-4 sm:py-6 space-y-4'>
              <a href='#' onClick={() => setMobileMenuIsOpen(false)} className='block text-gray-400 hover:text-white'>Features</a>
              <a href='#' onClick={() => setMobileMenuIsOpen(false)} className='block text-gray-400 hover:text-white'>Pricing</a>
              <a href='#' onClick={() => setMobileMenuIsOpen(false)} className='block text-gray-400 hover:text-white'>Testimonials</a>
            </div>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar

import React from 'react'
import { useState, useEffect } from 'react'

function Navbar() {
    const [MobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
    return (
        <nav className="fixed top-0 w-full transition-all duration-300 ease-in-out bg-slate-950/20 backdrop-blur-sm">
            <div className='max-w-7xl mx-auot px-4 sm:px-6 lg:px-8 '>

                <div className='flex justify-between items-center h-14 sm:h16 md:h-20'>

                    <div className='flex items-center space-x-1 group cursor-pointer '>

                        {/* <div>
                            <img src='./logo.png' className='w-6 h-6 sm:w-8 sm:h-8' alt='codeFlow' />
                        </div> */}

                        <span className='text-lg sm:text-xl md:text-2xl font-medium' >
                            <span className='text-white'>Pro</span>
                            <span className='text-blue-400'>dex</span>
                        </span>

                    </div>


                    <div className='hidden  md:flex items-center space-x-1 lg:space-x-8'>
                        <a href='#' className='text-gray-400 hover:text-white text-sm lg:text-base'>Features</a>
                        <a href='#' className='text-gray-400 hover:text-white text-sm lg:text-base'>Pricing</a>
                        <a href='#' className='text-gray-400 hover:text-white text-sm lg:text-base'>Testimonials</a>
                    </div>



                    <button className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={() => setMobileMenuIsOpen(prev => !prev)} >
                        {MobileMenuIsOpen ? (<i className="fas fa-times text-xl sm:text-2xl"></i>) : (<i className="fas fa-bars text-xl sm:text-2xl"></i>)}

                    </button>



                </div>

                {MobileMenuIsOpen &&

                    <div className='md:hidden bg-slate-900/20 backdrop-blur-sm border-t border-slate-800 animate-in slide-in-from-top duration-500 ease-in-out'>
                        <div className='px-4 py-4 sm:py-6 space-y-3 sm:space-y-4 '>
                            <a href='#' onClick= { () => setMobileMenuIsOpen(false) } className=' block  text-gray-400 hover:text-white text-sm lg:text-base'>Features</a>
                            <a href='#' onClick= { () => setMobileMenuIsOpen(false) } className='block  text-gray-400 hover:text-white text-sm lg:text-base'>Pricing</a>
                            <a href='#' onClick= { () => setMobileMenuIsOpen(false) } className=' block  text-gray-400 hover:text-white text-sm lg:text-base'>Testimonials</a>
                        </div>
                    </div>

                }


            </div>


        </nav>
    )
}

export default Navbar

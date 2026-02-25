import { useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { codeExample, floatingCard } from '../data/CodeExample';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';


function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeTab, setActiveTab] = useState('App.jsx')

  useEffect(() => {
    let animationId
    const handleMouseMove = (event) => {
      animationId = requestAnimationFrame(() => {

        setMousePosition({ x: event.clientX, y: event.clientY })

      })

    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.18), transparent 70%)`,
          transition: 'background 0.15s ease',
        }}
      />


      <div className='absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse' />
      <div className='absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000' />


      <div className='max-w-7xl mx-auto text-center relative w-full'>
        <div className='max-w-7xl mx-auto flex flex-col lg:grid grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative'>
          

          
          <div>
            <div>

              <div>
                <div className='inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full sm:mb-6 animate-in slide-in-from-bottom duration-700'>
                  <i className="fas fa-star w-4 h-4 text-blue-400"></i>
                  <span className='text-xs sm:text-sm text-blue-300'>Introducing ProDex AI</span>
                </div>
              </div>

            </div>
          </div>

          <div className='relative order-2 w-full'>
            <div className='relative bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10'>
              <div className='bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[289px] sm:w-[350px] lg:h-[450px] border border-white/5'  >
                {/* IDE HEADER */}
                <div className='flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10 '>

                  <div className='flex items-center space-x-1'>
                    <div className='flex items-center space-x-1 sm:space-x-2 mt-1'>
                      <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500' />
                      <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500' />
                      <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500' />
                    </div>
                    <span className='text-xs sm:text-sm text-gray-300'>AI-Powered</span>
                  </div>

                  <span>
                    <i className=" w-3 h-3 sm:w-4 sm:h-4 fas fa-chevron-down text-gray-400"></i>
                  </span>

                </div>

                <div className='p-3 sm:p-4 relative h-full'>
                  {/* file tabs */}
                  <div className='flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto'>

                    <button onClick={() => setActiveTab('App.jsx')} className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === "App.jsx" ? "bg-blue-500/30 text-white border-blue-400" : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"}   transition-all duration-200 whitespace-nowrap `}>App.jsx</button>
                    <button onClick={() => setActiveTab('Hero.jsx')} className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === "Hero.jsx" ? "bg-blue-500/30 text-white border-blue-400" : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"}   transition-all duration-200 whitespace-nowrap `}>Navbar.jsx</button>
                    <button onClick={() => setActiveTab('Navbar.jsx')} className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === "Navbar.jsx" ? "bg-blue-500/30 text-white border-blue-400" : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"}   transition-all duration-200 whitespace-nowrap `}>Hero.jsx</button>

                  </div>

                  {/* code content */}
                  <div className='relative overflow-hidden flex-grow'>
                    <SyntaxHighlighter
                      language="javascript"
                      style={nightOwl}
                      customStyle={{
                        margin: 0,
                        borderRadius: "8px",
                        fontSize: "11px",
                        lineHeight: "1.3",
                        height: '100%',
                        padding: '16px',
                        border: '1px solid #3c3c3c',

                      }}
                    >
                      {codeExample[activeTab]}

                    </SyntaxHighlighter>
                  </div>

                </div>


              </div>
              <div className={`hidden lg:block absolute bottom-4 right-4 transform translate-x-8 translate-y-8 w-72 ${floatingCard[activeTab].bgColor} backdrop-blur-xl rounded-lg p-4 border border-white/20 shadow-lg`}>
                <div className='flex items-center space-x-2 mb-2'>
                  <div className={`w-6 h-6 ${floatingCard[activeTab].iconColor} flex items-center justify-center text-sm font-bold `} >{floatingCard[activeTab].icon}</div>
                  <span className={`text-sm  font-medium ${floatingCard[activeTab].textColor} `} >{floatingCard[activeTab].title}</span>
                </div>
                <div className={`text-sm  text-left ${floatingCard[activeTab].contentColor} `}> {`text-sm ${floatingCard[activeTab].content}`} </div>
              </div>


            </div>
          </div>

        </div>
      </div>






    </section>
  )
}

export default Hero

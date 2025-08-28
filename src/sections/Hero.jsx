'use client'

import { useState } from 'react'

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section
      id="section"
      className={`bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] h-full ${
        menuOpen ? 'overflow-hidden' : ''
      }`}
    >
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-6 w-full">
        <a href="#" className="uppercase text-4xl font-bold text-gray-900">
          ebrahim
        </a>

        {/* Navigation */}
        <nav
          className={`items-center justify-center flex-col md:flex-row flex gap-8 text-gray-900 text-sm font-normal transition-[width] 
            max-md:absolute max-md:top-0 max-md:left-0 max-md:overflow-hidden max-md:h-full max-md:bg-white/50 backdrop-blur 
            ${menuOpen ? 'max-md:w-full' : 'max-md:w-0'}`}
        >
          <a className="hover:text-indigo-600" href="#">
            Home
          </a>
          <a className="hover:text-indigo-600" href="#">
            About
          </a>
          <a className="hover:text-indigo-600" href="#">
            Skills
          </a>
          <a className="hover:text-indigo-600" href="#">
            Experience
          </a>
          <a className="hover:text-indigo-600" href="#">
            Education
          </a>
          <a className="hover:text-indigo-600" href="#">
            Contact
          </a>
          {/* Close Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </nav>

        {/* Open Menu Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen(true)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Main Section */}
      <section className="">
        <div className='flex flex-col gap-12 md:flex-row items-center max-md:text-center justify-between mt-16 pb-16 px-6 sm:px-10 md:px-24 max-w-7xl mx-auto w-full'>
          <div className="flex flex-col items-center md:items-start">

            <h1 className="capitalize text-gray-900 font-bold text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-tight">
              md {' '}
              <span className="text-indigo-600 capitalize">ebrahim</span>
              {' '}hossen khan
            </h1>

            <p className="capitalize font-semibold mt-1 text-gray-600 max-w-md text-[20px] sm:text-base leading-relaxed">
              junior network engineer
            </p>
            <p className="mt-4 text-gray-600 max-w-md text-sm sm:text-base leading-relaxed">
              “Helping businesses build secure and reliable IT infrastructures.”
            </p>

            <div className="flex flex-col md:flex-row items-center mt-8 gap-3">
              <a
                className="text-indigo-600 bg-indigo-100 px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 transition"
                href="#"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Side Images */}
          <div
            aria-label="Photos of leaders"
            className="flex justify-center items-center"
          >
            <img
              alt=""
              className="w-90 max-lg:w-70 rounded-lg hover:scale-105 transition duration-300 object-cover flex-shrink-0 shadow-lg"
              src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=735&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>
    </section>
  )
}

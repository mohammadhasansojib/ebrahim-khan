'use client'
import userPlaceholder from '../images/profile-pic.jpg'


export default function Hero() {
  

  return (
    <section
      id="section"
      className={`bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] h-full`}
    >

      {/* Main Section */}
      <section id="home" className="">
        <div className='flex flex-col gap-12 md:flex-row items-center max-md:text-center justify-between py-16 px-6 sm:px-10 md:px-24 max-w-7xl mx-auto w-full'>

          <div className="flex flex-col items-center md:items-start">

            <h1 className="capitalize text-gray-900 font-bold text-3xl sm:text-4xl md:text-6xl max-w-2xl leading-tight">
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
                href="#contact"
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
              src={userPlaceholder}
            />
          </div>
        </div>
      </section>
    </section>
  )
}

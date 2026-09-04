'use client'
import darkMode from '@/assets/img/intro/dark-mode.jpg'
import lightMode from '@/assets/img/intro/light-mode.jpg'
import { Icon } from '@iconify/react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'

const Comparison = () => {
  return (
    <>
      <section className="relative flex w-full overflow-hidden">
        <div className="relative shrink-0 z-20 start-1/2 -translate-x-1/2 -mt-1 -mb-2 max-w-full sm:max-w-[1200px] lg:max-w-[1600px] 2xl:max-w-[1920px]">
          <div className="sm:-mx-2 lg:-mx-5 2xl:mx-0">
            <ReactCompareSlider
              className="focus:outline-none text-primary -mx-2 sm:-mx-3 lg:-mx-5 2xl:mx-0"
              itemOne={
                <figure>
                  <ReactCompareSliderImage src={darkMode.src} alt="Dark Mode" style={{ objectFit: 'cover' }} />
                  <figcaption className="absolute top-0 start-1/2 -translate-x-1/2 pt-2 sm:pt-3 md:pt-4 lg:pt-5 xl:mt-3 2xl:mt-5 pe-12 sm:pe-20 md:pe-[200px]" data-bs-theme="dark">
                    <span className="inline-flex items-center text-sm sm:text-base bg-neutral-900 text-white rounded px-3 py-2">
                      <Icon icon="lucide:moon" className="text-lg me-2 -ms-1" />
                      Dark mode
                    </span>
                  </figcaption>
                </figure>
              }
              itemTwo={
                <figure>
                  <ReactCompareSliderImage src={lightMode.src} alt="Light Mode" style={{ objectFit: 'cover' }} />
                  <figcaption className="absolute top-0 start-1/2 -translate-x-1/2 pt-2 sm:pt-3 md:pt-4 lg:pt-5 xl:mt-3 2xl:mt-5 ps-12 sm:ps-20 md:ps-[200px]">
                    <span className="inline-flex items-center text-sm sm:text-base bg-white text-gray-900 rounded px-3 py-2">
                      <Icon icon="lucide:sun" className="text-lg me-2 -ms-1" />
                      Light mode
                    </span>
                  </figcaption>
                </figure>
              }
              handle={
                <div slot="handle" className="w-8 sm:w-[42px]" style={{ marginTop: '22%' }}>
                  <svg className="text-primary rounded-full" width={42} height={42} viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                    <circle fill="currentColor" cx={21} cy={21} r={21} />
                    <path fill="white" d="M25.5019 19.7494H15.9147V15.9146L11.1211 20.7081L15.9147 25.5017V21.6669H25.5019V25.5017L30.2955 20.7081L25.5019 15.9146V19.7494Z" />
                  </svg>
                </div>
              }
            />
          </div>
        </div>

        <div className="absolute top-0 start-0 w-1/2 h-full bg-neutral-900" />
        <div className="absolute top-0 end-0 w-1/2 h-full bg-[#eef1f6]" />
      </section>
    </>
  )
}

export default Comparison

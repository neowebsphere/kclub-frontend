import herov3 from '@/assets/img/help/v3/hero.jpg'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
      <section className="lg:mt-22 mt-17 lg:mb-8 py-12 bg-[#30536b]">
        <div className="container">
          <div className="lg:py-8 grid md:grid-cols-12 grid-cols-1 gap-6 items-center">
            <div className="md:col-span-7 col-span-1">
              <h1 className="mb-6 text-white font-bold lg:text-4.8xl md:text-3.5xl text-2.5xl">How can we help you?</h1>
              <div className="bg-white border rounded-md p-2">
                <form className="flex flex-col md:flex-row gap-2 p-1">
                  <input type="search" className="w-full border-0 px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500" placeholder="What do you need help with?" />
                  <div>
                    <button type="submit" className="flex items-center justify-center rounded-lg bg-primary md:w-12 h-12 w-full text-white font-medium hover:bg-primary-700 transition">
                      <Icon icon="lucide:search" className="md:text-xl text-lg md:me-0 me-2" />
                      <span className="md:hidden inline-block">Search</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex gap-2 fs-sm pt-6 flex-wrap">
                <span className="text-white/70 text-sm me-2">Popular searches:</span>
                <Link className="hover:underline text-white text-sm font-medium me-2" href="">
                  Sell car
                </Link>
                <Link className="hover:underline text-white text-sm font-medium me-2" href="">
                  Buy car
                </Link>
                <Link className="hover:underline text-white text-sm font-medium me-2" href="">
                  Insurance
                </Link>
                <Link className="hover:underline text-white text-sm font-medium me-2" href="">
                  Legal issues
                </Link>
              </div>
            </div>
            <div className="md:col-span-5 col-span-1">
              <div className="relative w-full ms-auto" style={{ maxWidth: 416 }}>
                <div className="ratio bg-body-secondary" style={{ aspectRatio: 'calc(344 / 416 * 100%)', WebkitClipPath: 'url(#mask)', clipPath: 'url(#mask)' }}>
                  <Image src={herov3} alt="Image" />
                </div>
                <svg className="absolute" xmlns="http://www.w3.org/2000/svg" width={0} height={0} viewBox="0 0 416 344" fill="none">
                  <defs>
                    <clipPath id="mask" clipPathUnits="objectBoundingBox" transform="scale(0.0024, 0.0029)">
                      <path d="M298.045 0.00804178C263.343 -0.177193 230.353 15.0453 208 41.558C185.786 14.8641 152.705 -0.40169 117.954 0.00804178C52.8095 0.00804178 0 52.7547 0 117.821C0 229.325 194.835 338.197 202.734 342.405C205.921 344.532 210.078 344.532 213.266 342.405C221.165 338.197 416 230.902 416 117.821C416 52.7547 363.19 0.00804178 298.045 0.00804178Z" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero

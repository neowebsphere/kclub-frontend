'use client'
import hero01 from '@/assets/img/home/real-estate/hero/01.jpg'
import hero02 from '@/assets/img/home/real-estate/hero/02.png'
import hero03 from '@/assets/img/home/real-estate/hero/03.jpg'
import { Icon } from '@iconify/react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const Nouislider = dynamic(() => import('nouislider-react'), { ssr: false })

const Hero = () => {
  return (
    <>
      <section className="lg:pt-34 md:pt-10 pt-10 pb-12 relative">
        <div className="container">
          <span className="absolute top-0 start-0 size-full bg-default-100 -z-10 md:hidden block" />
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div className="col-span-1 mt-12">
              <div className="md:w-lg">
                <h1 className="lg:text-5.5xl md:text-4.8xl text-3.5xl lg:mb-8 mb-5 font-bold text-default-900">Easy way to find a perfect property</h1>
                <p className="text-secondary text-lg lg:mb-20 mb-6">We provide a complete service for the sale, purchase or rental of real estate.</p>
              </div>
              <div className="md:-ms-40 relative md:block hidden">
                <Image src={hero01} alt="Image" className="rounded-xl" />
                <div className="text-9xl absolute text-body-bg end-0 top-0 z-10 font-bold mt-[-45px] me-[96px]">Buy</div>
                <div className="border border-border rounded-xl p-2 bg-body-bg absolute lg:start-1/2 start-105 lg:ms-60 w-auto top-1/2 -translate-x-1/2 -translate-y-1/2 md:flex items-center hidden">
                  <div className="border-e border-border">
                    <select className="block w-40 border-none py-2.5 pe-12 ps-4.5 bg-transparent">
                      <option defaultChecked className="bg-white hover:bg-black">
                        For rent
                      </option>
                      <option className="bg-white hover:bg-black">For sell</option>
                    </select>
                  </div>
                  <div className="border-e border-border">
                    <select className="block w-40 border-none py-2.5 pe-12 ps-4.5 bg-transparent">
                      <option value="">Location</option>
                      <option value="New York">New York</option>
                      <option value="Los Angeles">Los Angeles</option>
                      <option value="Chicago">Chicago</option>
                      <option value="Houston">Houston</option>
                      <option value="Phoenix">Phoenix</option>
                      <option value="Philadelphia">Philadelphia</option>
                      <option value="San Antonio">San Antonio</option>
                      <option value="San Diego">San Diego</option>
                      <option value="Dallas">Dallas</option>
                      <option value="San Jose">San Jose</option>
                    </select>
                  </div>
                  <div className="border-e border-border">
                    <select className="block w-40 border-none py-2.5 pe-12 ps-4.5 bg-transparent">
                      <option value="">Property type</option>
                      <option value="Houses">Houses</option>
                      <option value="Apartments">Apartments</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Daily rental">Daily rental</option>
                      <option value="Offices">Offices</option>
                      <option value="Townhouses">Townhouses</option>
                    </select>
                  </div>
                  <div className="flex items-center w-2xs gap-2 ps-2">
                    <span className="text-sm text-default-700">Price</span>
                    <div className="w-full">
                      <Nouislider start={2000} connect={[true, false]} tooltips={[true]} range={{ min: 500, max: 4000 }} className="slider" id="slider-first-tooltips" />
                    </div>
                  </div>
                  <div className="inline-flex ps-4">
                    <button type="submit" className="bg-primary text-white rounded-xl py-3.5 px-6 flex items-center hover:bg-primary-hover transition-all duration-300">
                      Search
                      <Icon icon="lucide:search" className="size-4.5 ms-2" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-xl p-2 bg-body-bg md:hidden block">
                <div className="grid grid-cols-2 border-b border-border pb-2">
                  <div className="border-e border-border ">
                    <select className="block w-40 border-none py-2.5 pe-12 ps-4.5 bg-transparent">
                      <option defaultChecked className="bg-white hover:bg-black">
                        For rent
                      </option>
                      <option className="bg-white hover:bg-black">For sell</option>
                    </select>
                  </div>
                  <div>
                    <select className="block w-40 border-none py-2.5 pe-12 ps-4.5 bg-transparent">
                      <option value="">Location</option>
                      <option value="New York">New York</option>
                      <option value="Los Angeles">Los Angeles</option>
                      <option value="Chicago">Chicago</option>
                      <option value="Houston">Houston</option>
                      <option value="Phoenix">Phoenix</option>
                      <option value="Philadelphia">Philadelphia</option>
                      <option value="San Antonio">San Antonio</option>
                      <option value="San Diego">San Diego</option>
                      <option value="Dallas">Dallas</option>
                      <option value="San Jose">San Jose</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1">
                  <div className="pb-2 border-b border-border">
                    <select className="md:block hidden w-full bg-body-bg! border-none py-2.5 pe-12 ps-4.5">
                      <option value="">Property type</option>
                      <option value="Houses">Houses</option>
                      <option value="Apartments">Apartments</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Daily rental">Daily rental</option>
                      <option value="Offices">Offices</option>
                      <option value="Townhouses">Townhouses</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1">
                  <div className="pb-2">
                    <select className="md:hidden block w-full bg-body-bg! border-border border-none border-b py-2.5 pe-12 ps-4.5">
                      <option value="">Property type</option>
                      <option value="Houses">Houses</option>
                      <option value="Apartments">Apartments</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Daily rental">Daily rental</option>
                      <option value="Offices">Offices</option>
                      <option value="Townhouses">Townhouses</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1">
                  <button type="submit" className="bg-primary/95 w-full justify-center text-white rounded-xl py-3.5 px-6 inline-flex items-center hover:bg-primary transition-all duration-300">
                    Search
                    <Icon icon="lucide:search" className="size-4.5 ms-2" />
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:grid grid-cols-12 gap-6 lg:-me-40 hidden">
              <div className="col-span-5">
                <div className="relative bg-info rounded-xl h-auto">
                  <Image src={hero02} alt="Image" />
                  <div className="lg:text-9xl absolute top-9 -start-21 text-body-bg text-6xl font-bold origin-center rotate-[-90deg]"> Sell </div>
                </div>
              </div>
              <div className="col-span-7 lg:mt-25">
                <div className="relative">
                  <Image src={hero03} alt="Image" className="rounded-xl object-cover" />
                  <div className="text-9xl absolute text-body-bg top-0 -start-3 z-10 font-bold mt-[-45px]"> Rent </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero

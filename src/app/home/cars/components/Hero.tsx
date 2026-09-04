import layer01 from '@/assets/img/home/cars/hero/layer01.png'
import layer02 from '@/assets/img/home/cars/hero/layer02.png'
import layer03 from '@/assets/img/home/cars/hero/layer03.png'
import { Icon } from '@iconify/react'
import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
      <section className="lg:py-42 md:py-18 py-14 lg:mt-20 mt-15 bg-info dark relative overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 items-center relative z-10">
            <div className="lg:col-span-2 col-span-1 lg:order-1 order-2 md:mt-8 lg:mt-0">
              <div className="lg:w-200">
                <div className="bg-white/8 rounded-xl p-6 md:mb-6">
                  <ul className="flex md:gap-4 gap-2 mb-6">
                    <li>
                      <Link href="" className="py-2.5 px-5 inline-flex rounded-full text-white/90 border border-white/20 text-sm font-semibold focus:text-white focus:border-white">
                        All
                      </Link>
                    </li>
                    <li>
                      <Link href="" className="py-2.5 px-5 inline-flex rounded-full text-white/90 border border-white/20 text-sm font-semibold focus:text-white focus:border-white">
                        New cars
                      </Link>
                    </li>
                    <li>
                      <Link href="" className="py-2.5 px-5 inline-flex rounded-full text-white/90 border border-white/20 text-sm font-semibold focus:text-white focus:border-white">
                        Used cars
                      </Link>
                    </li>
                  </ul>
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    <select aria-label="Car make select" className="w-full rounded-md border border-white bg-white px-3 py-2.25 text-sm text-default-400">
                      <option value="">Make</option>
                      <option value="Toyota">Toyota</option>
                      <option value="Mercedes-Benz">Mercedes-Benz</option>
                      <option value="BMW">BMW</option>
                      <option value="Honda">Honda</option>
                      <option value="Ford">Ford</option>
                      <option value="Chevrolet">Chevrolet</option>
                      <option value="Audi">Audi</option>
                      <option value="Tesla">Tesla</option>
                      <option value="Mazda">Mazda</option>
                      <option value="Nissan">Nissan</option>
                      <option value="Volkswagen">Volkswagen</option>
                    </select>
                    <select aria-label="Car location select" className="w-full rounded-md border border-white bg-white px-3 py-2.25 text-sm text-default-400">
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
                    <select aria-label="Car model select" className="w-full rounded-md border border-white bg-white px-3 py-2.25 text-sm text-default-400">
                      <option value="">Model</option>
                      <option value="A-Class">A-Class</option>
                      <option value="C-Class">C-Class</option>
                      <option value="E-Class">E-Class</option>
                      <option value="S-Class">S-Class</option>
                      <option value="A205">A205</option>
                      <option value="GLA">GLA</option>
                      <option value="GLC">GLC</option>
                      <option value="GLE">GLE</option>
                      <option value="GLS">GLS</option>
                      <option value="AMG GT">AMG GT</option>
                    </select>
                    <div className="grid grid-cols-2 bg-white border border-white rounded-md">
                      <div className="border-e border-default-700">
                        <select aria-label="Car year from select" className="w-full  px-3 py-2.25 text-sm text-default-400 rounded-tl-md rounded-bl-md bg-white border border-white">
                          <option value="">Year from</option>
                          <option value={2025}>2025</option>
                          <option value={2024}>2024</option>
                          <option value={2023}>2023</option>
                          <option value={2023}>2023</option>
                          <option value={2021}>2021</option>
                          <option value={2020}>2020</option>
                        </select>
                      </div>
                      <div>
                        <select aria-label="Car year to select" className="w-full  px-3 py-2.25 text-sm text-default-400 rounded-tl-md rounded-bl-md bg-white border border-white">
                          <option value="">Year from</option>
                          <option value={2025}>2025</option>
                          <option value={2024}>2024</option>
                          <option value={2023}>2023</option>
                          <option value={2023}>2023</option>
                          <option value={2021}>2021</option>
                          <option value={2020}>2020</option>
                        </select>
                      </div>
                    </div>
                    <select aria-label="Car body type select" className="w-full rounded-md border border-white bg-white px-3 py-2.25 text-sm text-default-400">
                      <option value="">Body type</option>
                      <option value="Sedan">Sedan</option>
                      <option value="Convertible">Convertible</option>
                      <option value="SUV">SUV</option>
                      <option value="Coupe">Coupe</option>
                      <option value="Pickup">Pickup</option>
                    </select>
                    <div className="flex flex-nowrap w-full">
                      <div className="relative w-full">
                        <Icon icon="lucide:dollar-sign" className="absolute top-1/2 start-3 -translate-y-1/2 text-gray-600" />
                        <input type="text" placeholder="Price from" className="w-full rounded-l-md border border-gray-300 bg-white ps-10 pe-3 py-2 text-sm text-default-400 " />
                      </div>
                      <div className="relative w-full">
                        <Icon icon="lucide:dollar-sign" className="absolute top-1/2 start-3 -translate-y-1/2 text-gray-600" />
                        <input type="text" placeholder="Price to" className="w-full rounded-r-md border border-gray-300 bg-white ps-10 pe-3 py-2 text-sm text-default-400" />
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-6">
                    <button type="submit" className="rounded-md text-white bg-primary inline-flex text-sm font-semibold items-center justify-center gap-2 py-2.5 px-5 transition duration-300 ease-in-out hover:bg-primary-hover">
                      Search <Icon icon="lucide:search" className="size-4" />
                    </button>
                    <Link href="" className="text-sm font-semibold text-white/80 ps-5 py-2.5 inline-flex items-center hover:underline">
                      Advance Search
                      <Icon icon="lucide:chevron-right" className="ms-1 size-4" />
                    </Link>
                  </div>
                </div>
                <p className="text-white/80 md:text-start text-center">
                  Finder is a <span className="fw-semibold">leading digital marketplace</span> for the automotive industry.
                </p>
              </div>
            </div>
            <div className="col-span-1 lg:order-2 order-1">
              <div className="lg:w-sm mx-auto">
                <h1 className="lg:text-5.5xl md:text-4.8xl text-3.5xl md:text-start text-center font-semibold mb-4 text-white">Easy way to find the right car</h1>
                <div className="flex items-center justify-center lg:justify-start text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none">
                    <path d="M25.176 14.273c0-.79-.064-1.585-.201-2.362h-10.97v4.479h6.281c-.129.715-.401 1.397-.8 2.005a5.38 5.38 0 0 1-1.524 1.529v2.905h3.747c2.202-2.024 3.465-5.017 3.465-8.555h.001z" fill="#2a84fc" />
                    <path d="M14.008 25.636c3.136 0 5.782-1.029 7.709-2.807l-3.748-2.906c-1.043.709-2.388 1.111-3.957 1.111-3.033 0-5.607-2.046-6.53-4.799H3.614v2.996a11.63 11.63 0 0 0 10.394 6.405z" fill="#00ac47" />
                    <path d="M7.476 16.235c-.487-1.444-.487-3.009 0-4.453V8.785H3.612a11.64 11.64 0 0 0 0 10.445l3.864-2.996v.001z" fill="#ffba00" />
                    <path d="M14.008 6.979a6.32 6.32 0 0 1 4.461 1.743l3.32-3.32a11.18 11.18 0 0 0-7.782-3.025A11.63 11.63 0 0 0 3.614 8.785l3.864 2.998c.918-2.757 3.495-4.804 6.53-4.804z" fill="#fc2c25" />
                  </svg>
                  <div className="text-sm text-white/80 ms-1 me-3">Google</div>
                  <Star className="text-xl fill-warning text-warning me-1" />
                  <div className="text-sm text-white/80">4.9</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute lg:-end-110 -end-70 bottom-0 pb-12 xl:pb-12 -mb-5 xl:mb-4 2xl:mb-5 xl:ms-0 2xl:ms-0 overflow-x-hidden!">
          <div className="flex justify-end xl:justify-end relative bg-info -mb-5 2xl:mb-4">
            <Image src={layer01} width={1308} className="absolute top-0 end-0 opacity-20" alt="Image" />
            <Image src={layer02} width={994} className="me-2 opacity-70" alt="Image" />
            <Image src={layer03} width={1132} className="absolute top-0 start-0 opacity-60" alt="Image" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero

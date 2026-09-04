'use client'
import gallery01 from '@/assets/img/listings/cars/single/gallery/01.jpg'
import gallery02 from '@/assets/img/listings/cars/single/gallery/02.jpg'
import gallery03 from '@/assets/img/listings/cars/single/gallery/03.jpg'
import gallery04 from '@/assets/img/listings/cars/single/gallery/04.jpg'
import gallery05 from '@/assets/img/listings/cars/single/gallery/05.jpg'
import gallery06 from '@/assets/img/listings/cars/single/gallery/06.jpg'
import gallery07 from '@/assets/img/listings/cars/single/gallery/07.jpg'
import gallery08 from '@/assets/img/listings/cars/single/gallery/08.jpg'
import seller from '@/assets/img/listings/cars/single/seller.jpg'
import { Icon } from '@iconify/react'
import { Star } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Feature from './Feature'
import Specifications from './Specifications'

type CarType = {
  image: StaticImageData
}

const carData: CarType[] = [{ image: gallery01 }, { image: gallery02 }, { image: gallery03 }, { image: gallery04 }, { image: gallery05 }, { image: gallery06 }, { image: gallery07 }, { image: gallery08 }]

const CarDetail = () => {
  return (
    <>
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-6">
        <div className="lg:col-span-8 col-span-1">
          <Swiper
            className="group relative"
            spaceBetween={16}
            loop
            navigation={{
              prevEl: '.btn-prev',
              nextEl: '.btn-next',
            }}
            thumbs={{
              swiper: '#thumbs',
            }}
            modules={[Thumbs, Navigation]}
          >
            {carData.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="rounded-md overflow-hidden">
                  <Image src={item.image} alt="Image" />
                </div>
              </SwiperSlide>
            ))}

            <div className="absolute top-1/2 start-0 -translate-y-1/2 z-10 hidden lg:block opacity-0 group-hover:opacity-100 ms-3">
              <button type="button" className="btn-prev size-10 bg-white text-dark rounded-full shadow flex items-center justify-center">
                <Icon icon="lucide:chevron-left" className="text-lg" />
              </button>
            </div>
            <div className="absolute top-1/2 end-0 -translate-y-1/2 z-10 hidden lg:block opacity-0 group-hover:opacity-100 me-3">
              <button type="button" className="btn-next size-10 bg-white text-dark rounded-full shadow flex items-center justify-center">
                <Icon icon="lucide:chevron-right" className="text-lg" />
              </button>
            </div>
          </Swiper>
          <Swiper
            className="swiper-load swiper-thumbs mt-3"
            id="thumbs"
            loop
            spaceBetween={16}
            slidesPerView={3}
            watchSlidesProgress
            breakpoints={{
              340: { slidesPerView: 4 },
              500: { slidesPerView: 5 },
              600: { slidesPerView: 6 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 5 },
              1200: { slidesPerView: 5 },
            }}
          >
            {carData.map((item, idx) => (
              <SwiperSlide key={idx} className="swiper-thumb overflow-hidden">
                <div>
                  <Image src={item.image} className="rounded-md" alt="Thumbnail" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Specifications />
          <Feature />
          <div>
            <h2 className="pt-12 md:mt-2 md:mb-4 mb-2 md:text-2.5xl text-xl font-semibold text-default-900">Features</h2>
            <div className="hs-accordion-group">
              <div className="hs-accordion hs-accordion-active:border-b-default-200 bg-transparent border-b border-border group dark:hs-accordion-active:border-b-default-200" id="headingExterior">
                <button className="hs-accordion-toggle inline-flex justify-between items-center gap-x-3 w-full text-start text-xl font-semibold text-default-900 py-5" aria-expanded="false" aria-controls="exterior">
                  <Link href="" className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300">
                    Exterior
                  </Link>
                  <Icon icon="lucide:plus" className="hs-accordion-active:hidden block size-5 text-default-800" />
                  <Icon icon="lucide:minus" className="hs-accordion-active:block hidden size-5 text-default-800" />
                </button>
                <div id="exterior" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 mb-4" role="region" aria-labelledby="headingExterior">
                  <ul className="flex flex-col gap-2 list-disc list-inside text-default-600">
                    <li className="mt-1">Alloy Wheels</li>
                    <li className="mt-1">Sunroof / Moonroof</li>
                    <li className="mt-1">Tinged glass</li>
                    <li className="mt-1">LED Headlights</li>
                    <li className="mt-1">Foldable Roof</li>
                    <li className="mt-1">Tow Hitch</li>
                  </ul>
                </div>
              </div>
              <div className="hs-accordion active hs-accordion-active:border-b-default-200 bg-transparent border-b border-border group dark:hs-accordion-active:border-b-default-200" id="headingInterior">
                <button className="hs-accordion-toggle inline-flex justify-between items-center gap-x-3 w-full text-start text-xl font-semibold text-default-900 py-5" aria-expanded="true" aria-controls="interior">
                  <Link href="#!" className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-100 after:h-0.25 after:bg-current after:transition-all after:duration-300">
                    Interior
                  </Link>
                  <Icon icon="lucide:plus" className="hs-accordion-active:hidden block size-5 text-default-800" />
                  <Icon icon="lucide:minus" className="hs-accordion-active:block hidden size-5 text-default-800" />
                </button>
                <div id="interior" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 mb-4 grid md:grid-cols-2 grid-cols-1 gap-3" role="region" aria-labelledby="headingInterior">
                  <ul className="flex flex-col gap-2 list-disc list-inside text-default-600">
                    <li className="mt-1">Adjustable Steering Wheel</li>
                    <li className="mt-1">Auto-Dimming Rearview Mirror</li>
                    <li className="mt-1">Driver Adjustable Lumbar</li>
                    <li className="mt-1">Driver Illuminated Vanity Mirror</li>
                    <li className="mt-1">Universal Garage Door Opener</li>
                    <li className="mt-1">Steering Wheel Audio Controls</li>
                  </ul>
                  <ul className="flex flex-col gap-2 list-disc list-inside text-default-600">
                    <li className="mt-1">Heated Front Seats</li>
                    <li className="mt-1">Leather Seats</li>
                    <li className="mt-1">Leather Steering Wheel</li>
                    <li className="mt-1">Pass-Through Rear Seat</li>
                    <li className="mt-1">Passenger Adjustable Lumbar</li>
                    <li className="mt-1">Passenger Illuminated Visor Mirror</li>
                  </ul>
                </div>
              </div>
              <div className="hs-accordion hs-accordion-active:border-b-default-200 bg-transparent border-b border-border group dark:hs-accordion-active:border-b-default-200" id="headingSafety">
                <button className="hs-accordion-toggle inline-flex justify-between items-center gap-x-3 w-full text-start text-xl font-semibold text-default-900 py-5" aria-expanded="false" aria-controls="safety">
                  <Link href="" className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300">
                    Safety
                  </Link>
                  <Icon icon="lucide:plus" className="hs-accordion-active:hidden block size-5 text-default-800" />
                  <Icon icon="lucide:minus" className="hs-accordion-active:block hidden size-5 text-default-800" />
                </button>
                <div id="safety" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 mb-4" role="region" aria-labelledby="headingSafety">
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                    <ul className="flex flex-col gap-2 list-disc list-inside text-default-600">
                      <li className="mt-1">Airbag: Driver</li>
                      <li className="mt-1">Airbag: Passenger</li>
                      <li className="mt-1">Adaptive Cruise Control</li>
                      <li className="mt-1">Blind Spot Monitor</li>
                      <li className="mt-1">Alarm</li>
                      <li className="mt-1">Antilock Brakes</li>
                    </ul>
                    <ul className="flex flex-col gap-2 list-disc list-inside text-default-600">
                      <li className="mt-1">Brake Assist</li>
                      <li className="mt-1">Lane Departure Warning</li>
                      <li className="mt-1">Stability Control</li>
                      <li className="mt-1">Fog Lights</li>
                      <li className="mt-1">Power Door Locks</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="hs-accordion hs-accordion-active:border-b-default-200 bg-transparent border-b border-border group dark:hs-accordion-active:border-b-default-200" id="headingTechnology">
                <button className="hs-accordion-toggle inline-flex justify-between items-center gap-x-3 w-full text-start text-xl font-semibold text-default-900 py-5" aria-expanded="false" aria-controls="technology">
                  <Link href="" className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300">
                    Technology
                  </Link>
                  <Icon icon="lucide:plus" className="hs-accordion-active:hidden block size-5 text-default-800" />
                  <Icon icon="lucide:minus" className="hs-accordion-active:block hidden size-5 text-default-800" />
                </button>
                <div id="technology" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 mb-4" role="region" aria-labelledby="headingTechnology">
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                    <ul className="flex flex-col gap-2 list-disc list-inside text-default-600">
                      <li className="mt-1">Multi-Zone A/C</li>
                      <li className="mt-1">Climate Control</li>
                      <li className="mt-1">Navigation System</li>
                      <li className="mt-1">Remote Start</li>
                      <li className="mt-1">Bluetooth</li>
                      <li className="mt-1">Remote Start</li>
                    </ul>
                    <ul className="flex flex-col gap-2 list-disc list-inside text-default-600">
                      <li className="mt-1">Apple CarPlay</li>
                      <li className="mt-1">Android Auto</li>
                      <li className="mt-1">Backup Camera</li>
                      <li className="mt-1">HomeLink</li>
                      <li className="mt-1">Keyless Start</li>
                      <li className="mt-1">Premium Sound System</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="md:text-2.5xl text-xl font-semibold mb-4 md:mt-2 pt-12 text-default-900">Seller's description</h2>
            <p>
              This stunning convertible blends luxury with performance, featuring a sleek design, advanced technology, and a powerful engine. Enjoy open-air driving with premium comfort and the unmistakable elegance of Mercedes-Benz. Impeccably maintained and ready to provide an
              exhilarating driving experience. Don't miss out on this exceptional vehicle.
            </p>
            <div className="hidden" id="commentsCollapse">
              <p className="my-4">
                This A205 Cabriolet comes equipped with top-of-the-line features, including a responsive infotainment system, advanced safety options, and a finely crafted interior that showcases Mercedes-Benz's commitment to quality. The soft-top roof operates seamlessly,
                allowing you to transition from a cozy cabin to an open-air cruiser in seconds. Whether you're navigating city streets or cruising along the coast, this cabriolet delivers a smooth, refined ride every time.
              </p>
              <p className="mb-4">
                With low mileage and a full service history, this 2021 model remains in excellent condition, both mechanically and aesthetically. The exterior shines in pristine condition, and the interior has been meticulously cared for, ensuring a like-new experience. This
                Mercedes-Benz A205 Cabriolet is the perfect choice for those who desire a blend of sophistication, comfort, and thrilling performance in their next vehicle.
              </p>
            </div>
            <div className="nav">
              <div className="flex">
                <button
                  onClick={() => document.getElementById('commentsCollapse')?.classList.toggle('hidden')}
                  className="w-full text-default-900 inlinr-flex items-center text-start text-sm font-medium py-3 hover:underline"
                  type="button"
                  aria-expanded="false"
                  aria-controls="commentsCollapse"
                >
                  Show more <Icon icon="lucide:chevron-down" />
                </button>
              </div>
            </div>
          </div>
          <div className="md:mt-12 mt-6 pt-6 border-t border-border flex items-center text-sm">
            <div>
              Published: <span className="text-default-800">Jul 15, 2024</span>
            </div>
            <span className="mx-3 h-4 border-l border-default-300" />
            <div>
              Ad number: <span className="text-default-800">681013232</span>
            </div>
            <span className="mx-3 h-4 border-l border-default-300" />
            <div>
              Views: <span className="text-default-800">48</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky lg:top-26">
            <div className="flex gap-2 mb-2 pb-1">
              <div className="bg-info text-white text-xs inline-flex item-center font-medium px-2 py-1 rounded items-center">
                Verified <Icon icon="lucide:shield" className="ms-1" />
              </div>
              <div>
                <p className="bg-warning inline-flex w-auto text-white text-xs px-2 py-1 rounded">Used</p>
              </div>
            </div>
            <div className="text-3.5xl text-default-900 font-semibold mb-2 pb-1">$41 900</div>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-2 mb-6">
              <div className="flex gap-2 items-center text-sm">
                <Icon icon="lucide:map-pin" className="text-body-color" />
                Dallas
              </div>
              <div className="flex gap-2 items-center text-sm">
                <Icon icon="lucide:gauge" className="text-body-color" />
                56K mi
              </div>
              <div className="flex gap-2 items-center text-sm">
                <Icon icon="lucide:fuel" className="text-body-color" />
                Gasoline
              </div>
              <div className="flex gap-2 items-center text-sm">
                <Icon icon="tabler:manual-gearbox" className="text-body-color" />
                Automatic
              </div>
            </div>
            <div className="bg-default-100 dark:bg-white/3 rounded-md md:p-2 mb-6">
              <div className="p-6">
                <div className="flex items-center group justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full overflow-hidden w-18 h-18">
                      <Image src={seller} alt="Avatar" />
                    </div>
                    <div>
                      <Link className="group-hover:underline text-sm font-semibold text-default-900" href="">
                        Darrell Steward
                      </Link>
                      <div className="flex items-center gap-1">
                        <Star className="fill-warning text-warning size-4" />
                        <span className="text-sm font-medium text-default-800">4.9</span>
                        <span className="text-xs text-default-500">(5 reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="ps-4 flex justify-between">
                    <div>
                      <span className="py-1 px-1.5 rounded-md text-default-900 bg-body-bg text-xs font-semibold">Private seller</span>
                    </div>
                  </div>
                </div>
                <div className="flex mb-3">
                  <Link className="relative py-2 flex items-center" href="">
                    <span className="hover-underline text-sm">Other ads by this seller</span>
                    <Icon icon="lucide:chevron-right" className="text-base ms-1" />
                  </Link>
                </div>
                <div className="flex gap-4 flex-wrap">
                  <button type="button" className="rounded-md border border-default-900 text-default-900 bg-transparent hover:text-body-bg hover:bg-default-900 py-2.5 px-5 transition-all duration-500 text-sm font-semibold">
                    (316) *** **** - reveal
                  </button>
                  <Link className="bg-primary text-white py-2.5 px-5 rounded-md hover:bg-primary-hover inline-flex items-center transition-all duration-500 text-sm font-semibold" href="mailto:d.steward@example.com">
                    <Icon icon="lucide:mail" className="text-base me-2" />
                    Send email
                  </Link>
                </div>
              </div>
            </div>
            <div className="border border-border rounded-md md:p-8 p-6">
              <h4 className="text-default-900 font-semibold mb-4">Email me price drops and new listings for these search results:</h4>
              <form className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-2 sm:gap-3 lg:gap-2 xl:gap-3 mb-4" noValidate>
                <div className="relative">
                  <Icon icon="lucide:mail" className="absolute start-3 top-1/2 -translate-y-1/2 text-default-500" />
                  <input type="email" placeholder="Your email" required className="w-full border border-default-300 rounded-md py-2 ps-10 pe-3 text-sm bg-transparent" />
                </div>
                <button type="submit" className="bg-default-100 dark:bg-white/3 text-default-700 text-sm font-semibold px-4 py-2 rounded-md hover:bg-default-200 dark:bg-hover-white/10 transition">
                  Subscribe
                </button>
              </form>
              <div className="flex items-start gap-2">
                <label htmlFor="concent" className="text-xs flex items-center gap-2 text-default-700 cursor-pointer">
                  <input type="checkbox" id="concent" className="w-4 h-4 border-default-300 rounded bg-transparent checked:bg-black checked:border-black" />I agree to receive price drop alerts on this vehicle and helpful shopping information.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarDetail

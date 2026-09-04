'use client'
import new01 from '@/assets/img/home/city-guide/new/01.jpg'
import new02 from '@/assets/img/home/city-guide/new/02.jpg'
import new03 from '@/assets/img/home/city-guide/new/03.jpg'
import { Icon } from '@iconify/react'
import { Star } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { EffectFlip, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type PlaceType = {
  image: StaticImageData
  title: string
  rating: string
  reviews: string
  price: string
  distance: string
  description: string
}

const places: PlaceType[] = [
  {
    image: new01,
    title: "Jardinet D'Aribau Restaurant",
    rating: '4.9',
    reviews: '597',
    price: '$60',
    distance: '0.3 km from center',
    description:
      "Experience authentic Mediterranean flavors at Jardinet D'Aribau, a charming restaurant in the heart of Barcelona. With a focus on quality and creativity, Jardinet D'Aribau offers a diverse menu that blends traditional Mediterranean cuisine with modern culinary techniques. Perfect for a memorable dining experience!",
  },
  {
    image: new02,
    title: 'Barcelona Oceanarium',
    rating: '4.7',
    reviews: '8325',
    price: '$40',
    distance: '1.8 km from center',
    description:
      'Enter a world of aquatic discovery at one of the biggest aquariums in Europe, featuring a five-million-liter main tank and thousands of sea creatures from all over the world. Marvel at the mesmerizing dance of stingrays, the graceful glide of sea turtles, and the vibrant colors of tropical fish.',
  },
  {
    image: new03,
    title: 'VRFun Virtual Reality Park',
    rating: '4.9',
    reviews: '112',
    price: '$25',
    distance: '2.1 km from center',
    description:
      'VRFun on International Drive is an immersive virtual reality park offering cutting-edge VR experiences for all ages. Guests can engage in thrilling multiplayer games, virtual roller coasters, and interactive adventures in a high-tech environment, making it a top attraction for futuristic fun and family entertainment.',
  },
]

const WhatsNewBarcelona = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  return (
    <section className="lg:py-24 md:py-18 py-14 relative">
      <div className="container">
        <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl text-default-900 font-semibold mb-8">What's new in Barcelona</h2>

        <div className="grid md:grid-cols-12 grid-cols-1 gap-6 lg:items-center items-start">
          <div className="md:col-span-5 col-span-1">
            <Swiper
              modules={[EffectFlip, Thumbs]}
              effect="flip"
              loop
              allowTouchMove={false}
              flipEffect={{
                slideShadows: false,
              }}
              onSwiper={setThumbsSwiper}
              className="size-full"
            >
              {places.map((place, idx) => (
                <SwiperSlide key={idx}>
                  <Image src={place.image} alt={place.title} className="size-full rounded-md object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="md:col-span-7 col-span-1 lg:ps-0 md:ps-6">
            <div className="lg:w-160 w-full lg:ms-24">
              <div className="flex gap-2 lg:mb-8 mb-6">
                <button type="button" id="new-prev" aria-label="Prev" className="size-10 flex items-center justify-center border border-default-300 dark:border-white/20 bg-body-bg rounded-full">
                  <Icon icon="lucide:chevron-left" className="size-4.5" />
                </button>

                <button type="button" id="new-next" aria-label="Next" className="size-10 flex items-center justify-center border border-default-300 dark:border-white/20 bg-body-bg rounded-full">
                  <Icon icon="lucide:chevron-right" className="size-4.5" />
                </button>
              </div>

              <Swiper
                modules={[Navigation, Thumbs]}
                loop
                speed={400}
                autoHeight
                spaceBetween={32}
                navigation={{
                  prevEl: '#new-prev',
                  nextEl: '#new-next',
                }}
                thumbs={{
                  swiper: thumbsSwiper,
                }}
                className="lg:py-8"
              >
                {places.map((place, idx) => (
                  <SwiperSlide key={idx}>
                    <h3 className="lg:text-3.5xl md:text-2.5xl text-2xl mb-4">{place.title}</h3>

                    <div className="flex flex-wrap items-center gap-4 md:mb-6 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="fill-warning text-warning size-4" />
                        <span className="text-sm text-default-500">{place.rating}</span>
                        <span className="text-xs text-default-400 self-end">({place.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Icon icon="lucide:credit-card" className="size-3.5" />
                        {place.price}
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Icon icon="lucide:map-pin" className="size-3.5" />
                        <span className="truncate">{place.distance}</span>
                      </div>
                    </div>

                    <p className="lg:mb-8 mb-4">{place.description}</p>
                    <Link href="" className="inline-flex items-center gap-1 bg-primary text-white md:px-6 md:py-3.5 py-2.5 px-5 rounded-full font-semibold md:text-base text-sm transition-all duration-300 hover:bg-primary-hover">
                      View more
                      <Icon icon="lucide:chevron-right" className="text-xl -me-1" />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <span className="absolute bg-primary/20 rounded-full -z-10 hidden lg:block bottom-15 end-122.5 w-15 h-15"></span>

      <span className="absolute bg-emerald-50 dark:bg-default-200 rounded-full -z-10 hidden lg:block bottom-30 end-137.5 w-6.75 h-6.75"></span>
    </section>
  )
}

export default WhatsNewBarcelona

'use client'
import { ChevronRight, CreditCard, MapPin, Star } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import guide01 from '@/assets/img/home/city-guide/restaurants/01.png'
import guide03dark from '@/assets/img/home/city-guide/restaurants/03-dark.png'
import guide03light from '@/assets/img/home/city-guide/restaurants/03-light.png'
import guide08 from '@/assets/img/home/city-guide/restaurants/08.png'

import place01 from '@/assets/img/home/city-guide/places/01.jpg'
import place02 from '@/assets/img/home/city-guide/places/02.jpg'
import place03 from '@/assets/img/home/city-guide/places/03.jpg'
import photographer from '@/assets/img/home/city-guide/places/photographer.png'

type RestaurantType = {
  name: string
  image: StaticImageData
  darkImage?: StaticImageData
  rating: string
  reviews: string
  price: string
  distance: string
}

type PlaceType = {
  name: string
  image: StaticImageData
  rating: string
  reviews: string
  price: string
  distance: string
}

const restaurants: RestaurantType[] = [
  {
    name: 'Sbarro',
    image: guide03light,
    darkImage: guide03dark,
    rating: '4.8',
    reviews: '127',
    price: '$60',
    distance: '5.7 km from center',
  },
  {
    name: 'Mado',
    image: guide01,
    rating: '4.7',
    reviews: '113',
    price: '$50',
    distance: '2.5 km from center',
  },
  {
    name: 'TacoTime',
    image: guide08,
    rating: '4.6',
    reviews: '179',
    price: '$25',
    distance: '4.8 km from center',
  },
]

const places: PlaceType[] = [
  {
    name: 'Sagrada Familia',
    image: place01,
    rating: '4.8',
    reviews: '12694',
    price: '$30',
    distance: '0.5 km from center',
  },
  {
    name: 'Park Güell',
    image: place02,
    rating: '4.9',
    reviews: '113',
    price: '$15',
    distance: '0.7 km from center',
  },
  {
    name: 'Camp Nou Tour',
    image: place03,
    rating: '4.7',
    reviews: '6149',
    price: '$40',
    distance: '5.2 km from center',
  },
]

const BestOfBarcelona = () => {
  return (
    <section className="lg:py-24 md:py-18 py-14">
      <div className="container">
        <div className="flex items-center justify-between md:mb-12 mb-6">
          <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl text-default-900 font-semibold">Best of Barcelona</h2>

          <div className="inline-flex items-center gap-2">
            <Link href="" className="hover:underline flex items-center py-2 font-semibold">
              View all
              <ChevronRight className="size-4.5 ms-1" />
            </Link>
          </div>
        </div>

        <div className="py-8">
          <div className="relative">
            <div className="relative grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-6">
              <div className="lg:col-span-4 col-span-1">
                <div className="bg-default-100 dark:bg-white/3 lg:p-8 p-4 rounded-md">
                  <h3 className="pb-2 text-xl text-default-900 font-semibold">Top restaurants</h3>

                  <hr className="lg:my-6 my-4 text-default-300 dark:text-white/20" />

                  {restaurants.map((restaurant, idx) => (
                    <div key={idx} className={`group ${idx !== restaurants.length - 1 ? 'mb-8' : ''}`}>
                      <Link href="">
                        <div className="flex gap-4">
                          <div className="bg-body-bg rounded-md py-4 px-6">
                            <div className="rounded-md w-16 overflow-hidden relative">
                              {restaurant.darkImage ? (
                                <>
                                  <Image src={restaurant.image} alt={restaurant.name} className="w-64 object-cover transition-transform duration-500 group-hover:scale-105 rounded-md block dark:hidden" />
                                  <Image src={restaurant.darkImage} alt={restaurant.name} className="w-64 object-cover transition-transform duration-500 group-hover:scale-105 rounded-md hidden dark:block" />
                                </>
                              ) : (
                                <Image src={restaurant.image} alt={restaurant.name} className="w-64 object-cover transition-transform duration-500 group-hover:scale-105 rounded-md" />
                              )}
                            </div>
                          </div>

                          <div className="pt-1">
                            <h3 className="text-base font-semibold mb-1">
                              <span className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current after:transition-all after:duration-300">{restaurant.name}</span>
                            </h3>

                            <div className="flex items-center gap-1 mb-2">
                              <Star className="fill-warning text-warning size-4" />
                              <span className="text-sm">{restaurant.rating}</span>
                              <span className="text-xs text-secondary self-end">({restaurant.reviews})</span>
                            </div>

                            <ul className="flex-nowrap flex gap-2 text-sm mb-0">
                              <li className="flex items-center gap-1 me-2">
                                <CreditCard className="size-3.5" />

                                {restaurant.price}
                              </li>

                              <li className="flex items-center gap-1">
                                <MapPin className="size-3.5" />

                                <span className="truncate w-25 lg:w-full">{restaurant.distance}</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-8 col-span-1 bg-default-100 dark:bg-white/3 lg:p-8 p-4 rounded-md relative">
                <h3 className="pb-2 text-xl text-default-900 font-semibold">Places to visit</h3>

                <hr className="lg:my-6 my-4 text-default-300 dark:text-white/20" />

                {places.map((place, idx) => (
                  <div key={idx} className={`group ${idx !== places.length - 1 ? 'mb-8' : ''}`}>
                    <Link href="">
                      <div className="flex gap-4">
                        <div className="rounded-md w-28 overflow-hidden relative">
                          <Image src={place.image} alt={place.name} className="w-28 object-cover transition-transform duration-500 group-hover:scale-105 rounded-md" />
                        </div>

                        <div className="pt-1">
                          <h3 className="text-base font-semibold mb-1">
                            <span className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current after:transition-all after:duration-300">{place.name}</span>
                          </h3>

                          <div className="flex items-center gap-1 mb-2">
                            <Star className="fill-warning text-warning size-4" />
                            <span className="text-sm">{place.rating}</span>
                            <span className="text-xs text-secondary self-end">({place.reviews})</span>
                          </div>

                          <ul className="flex-nowrap flex gap-2 text-sm mb-0">
                            <li className="flex items-center gap-1 me-2">
                              <CreditCard className="size-3.5" />

                              {place.price}
                            </li>

                            <li className="flex items-center gap-1">
                              <MapPin className="size-3.5" />
                              <span className="truncate w-25 lg:w-full">{place.distance}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}

                <div className="absolute end-0 bottom-0 z-10 hidden lg:block ps-5 xl:ps-0 -me-5 xl:-me-4 2xl:me-3 w-97">
                  <span className="absolute bg-primary/20 rounded-full hidden xl:block top-41.25 end-67.5 w-18 h-18" />

                  <span className="absolute rounded-full bg-emerald-100 dark:bg-default-200 hidden xl:block top-37.5 end-86.5 w-6.25 h-6.25" />

                  <Image src={photographer} alt="Photographer" width={388} className="relative z-10 ps-5 xl:ps-0 ms-3 xl:ms-0" />
                </div>
              </div>
            </div>

            <div className="absolute top-0 h-[calc(100%+64px)] w-full -z-10 -mt-8">
              <div className="relative h-full mx-8">
                <div className="absolute top-0 start-0 w-full h-full border border-default-300 dark:border-white/20 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestOfBarcelona

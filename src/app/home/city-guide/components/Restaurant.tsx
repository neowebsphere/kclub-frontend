import { Icon } from '@iconify/react'
import Image, { StaticImageData } from 'next/image'
import { Star } from 'lucide-react'
import Link from 'next/link'

import restaurant01 from '@/assets/img/home/city-guide/restaurants/01.png'
import restaurant02 from '@/assets/img/home/city-guide/restaurants/02.png'
import restaurant03Dark from '@/assets/img/home/city-guide/restaurants/03-dark.png'
import restaurant03Light from '@/assets/img/home/city-guide/restaurants/03-light.png'
import restaurant04 from '@/assets/img/home/city-guide/restaurants/04.png'
import restaurant05Dark from '@/assets/img/home/city-guide/restaurants/05-dark.png'
import restaurant05Light from '@/assets/img/home/city-guide/restaurants/05-light.png'
import restaurant06 from '@/assets/img/home/city-guide/restaurants/06.png'
import restaurant07 from '@/assets/img/home/city-guide/restaurants/07.png'
import restaurant08 from '@/assets/img/home/city-guide/restaurants/08.png'
import restaurant09 from '@/assets/img/home/city-guide/restaurants/09.png'

type RestaurantType = {
  name: string
  image: StaticImageData
  darkImage?: StaticImageData
  rating: string
  reviews: string
  price: string
  distance: string
}

const restaurants: RestaurantType[] = [
  {
    name: 'Mado',
    image: restaurant01,
    rating: '4.7',
    reviews: '113',
    price: '$50',
    distance: '2.5 km from center',
  },
  {
    name: 'Hard Rock Cafe',
    image: restaurant02,
    rating: '3.9',
    reviews: '18',
    price: '$45',
    distance: '6.2 km from center',
  },
  {
    name: 'Sbarro',
    image: restaurant03Light,
    darkImage: restaurant03Dark,
    rating: '4.8',
    reviews: '127',
    price: '$60',
    distance: '5.7 km from center',
  },
  {
    name: "McDonald's",
    image: restaurant04,
    rating: '4.9',
    reviews: '836',
    price: '$25',
    distance: '1.4 km from center',
  },
  {
    name: 'Taco Bell',
    image: restaurant05Light,
    darkImage: restaurant05Dark,
    rating: '4.2',
    reviews: '73',
    price: '$20',
    distance: '2.2 km from center',
  },
  {
    name: 'El Pollo Loco',
    image: restaurant06,
    rating: '4.4',
    reviews: '275',
    price: '$35',
    distance: '2.3 km from center',
  },
  {
    name: 'Jack Restaurant',
    image: restaurant07,
    rating: '4.9',
    reviews: '48',
    price: '$50',
    distance: '1.3 km from center',
  },
  {
    name: 'TacoTime',
    image: restaurant08,
    rating: '4.6',
    reviews: '179',
    price: '$25',
    distance: '4.8 km from center',
  },
  {
    name: "Domino's Pizza",
    image: restaurant09,
    rating: '4.5',
    reviews: '481',
    price: '$30',
    distance: '1.7 km from center',
  },
]

const Restaurant = () => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <h2 className="lg:text-3.5xl md:text-2.5xl text-2xl text-default-900 font-semibold">Where to eat</h2>

          <div className="inline-flex items-center gap-2">
            <Link href="" className="hover:underline flex items-center py-2 font-semibold">
              View all
              <Icon icon="lucide:chevron-right" className="size-4.5 ms-1" />
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {restaurants.map((restaurant, idx) => (
            <div key={idx} className="group">
              <div className="flex gap-4">
                <Link href="">
                  <div className="bg-default-100 dark:bg-white/3 rounded-md py-4 px-6">
                    <div className="rounded-md w-16 overflow-hidden relative">
                      {restaurant.darkImage ? (
                        <>
                          <Image src={restaurant.image} alt={restaurant.name} className="w-64 object-cover overflow-hidden transition-transform duration-500 group-hover:scale-105 rounded-md block dark:hidden" />

                          <Image src={restaurant.darkImage} alt={restaurant.name} className="w-64 object-cover overflow-hidden transition-transform duration-500 group-hover:scale-105 rounded-md hidden dark:block" />
                        </>
                      ) : (
                        <Image src={restaurant.image} alt={restaurant.name} className="w-64 object-cover overflow-hidden transition-transform duration-500 group-hover:scale-105 rounded-md" />
                      )}
                    </div>
                  </div>
                </Link>

                <div className="pt-1">
                  <h3 className="text-base font-semibold mb-1">
                    <Link href="" className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300">
                      {restaurant.name}
                    </Link>
                  </h3>

                  <div className="flex items-center gap-1 mb-2">
                    <Star className="fill-warning text-warning size-4" />

                    <span className="text-sm">{restaurant.rating}</span>

                    <span className="text-xs text-secondary self-end">({restaurant.reviews})</span>
                  </div>

                  <ul className="flex-nowrap flex gap-2 text-sm mb-0">
                    <li className="flex items-center gap-1 me-2">
                      <Icon icon="lucide:credit-card" className="size-3.5" />

                      {restaurant.price}
                    </li>

                    <li className="flex items-center gap-1">
                      <Icon icon="lucide:map-pin" className="size-3.5" />

                      <span>{restaurant.distance}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Restaurant

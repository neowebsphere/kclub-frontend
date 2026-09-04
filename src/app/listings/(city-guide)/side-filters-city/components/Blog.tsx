import guide01 from '@/assets/img/listings/city-guide/v1/01.jpg'
import guide02 from '@/assets/img/listings/city-guide/v1/02.jpg'
import guide03 from '@/assets/img/listings/city-guide/v1/03.jpg'
import guide04 from '@/assets/img/listings/city-guide/v1/04.jpg'
import guide05 from '@/assets/img/listings/city-guide/v1/05.jpg'
import guide06 from '@/assets/img/listings/city-guide/v1/06.jpg'
import guide07 from '@/assets/img/listings/city-guide/v1/07.jpg'
import guide08 from '@/assets/img/listings/city-guide/v1/08.jpg'
import guide09 from '@/assets/img/listings/city-guide/v1/09.jpg'
import guide10 from '@/assets/img/listings/city-guide/v1/10.jpg'
import guide11 from '@/assets/img/listings/city-guide/v1/11.jpg'
import guide12 from '@/assets/img/listings/city-guide/v1/12.jpg'
import { Icon } from '@iconify/react'
import { Star } from 'lucide-react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'

type GuideItem = {
  id: number
  image: StaticImageData
  category: string
  title: string
  description: string
  rating: number
  reviews: number
  distance: string
  price: number
  href: string
}

const guideData: GuideItem[] = [
  {
    id: 1,
    image: guide01,
    category: 'Entertainment',
    title: 'Barcelona National Zoo',
    description: 'Discover fascinating animals and a fun-filled adventure for the whole family.',
    rating: 4.8,
    reviews: 127,
    distance: '5.7 km from center',
    price: 20,
    href: '/listings/entry-city-guide',
  },
  {
    id: 2,
    image: guide02,
    category: 'Entertainment',
    title: 'Mountain Lake Tour',
    description: 'Enjoy breathtaking views, fresh air, and a peaceful escape into the wilderness.',
    rating: 4.5,
    reviews: 214,
    distance: '13 km from center',
    price: 60,
    href: '/listings/entry-city-guide',
  },
  {
    id: 3,
    image: guide03,
    category: 'Entertainment',
    title: 'Jeep Tour with 4x4 Club',
    description: 'Explore the wild side of Barcelona in our reliable off-road 4x4 vehicle!',
    rating: 4.7,
    reviews: 185,
    distance: '9.8 km from center',
    price: 130,
    href: '/listings/entry-city-guide',
  },
  {
    id: 4,
    image: guide04,
    category: 'Entertainment',
    title: 'Sky Views Observatory',
    description: 'Take in breathtaking skyline views from an unparalleled vantage point.',
    rating: 4.3,
    reviews: 3462,
    distance: '1.7 km from center',
    price: 5,
    href: '/listings/entry-city-guide',
  },
  {
    id: 5,
    image: guide05,
    category: 'Entertainment',
    title: 'Museum of Illusions',
    description: 'Challenge your perception with mind-bending and interactive exhibits.',
    rating: 4.6,
    reviews: 1572,
    distance: '2.3 km from center',
    price: 35,
    href: '/listings/entry-city-guide',
  },
  {
    id: 6,
    image: guide06,
    category: 'Entertainment',
    title: 'Barcelona Oceanarium',
    description: 'Enter a world of aquatic discovery at one of the biggest aquariums in Europe.',
    rating: 4.7,
    reviews: 8325,
    distance: '1.8 km from center',
    price: 40,
    href: '/listings/entry-city-guide',
  },
  {
    id: 7,
    image: guide07,
    category: 'Entertainment',
    title: 'Art & Design Museum',
    description: "Europe's most extensive collection of modern and contemporary art.",
    rating: 4.9,
    reviews: 2078,
    distance: '1.4 km from center',
    price: 15,
    href: '/listings/entry-city-guide',
  },
  {
    id: 8,
    image: guide08,
    category: 'Entertainment',
    title: 'Tibidabo Ferris Wheel',
    description: 'Atop the Tibidabo Entertainment Park, you can enjoy a spot of sightseeing.',
    rating: 4.4,
    reviews: 1059,
    distance: '3.6 km from center',
    price: 10,
    href: '/listings/entry-city-guide',
  },
  {
    id: 9,
    image: guide09,
    category: 'Entertainment',
    title: 'VRFun Virtual Reality Park',
    description: 'Immersive virtual reality park offering stunning VR experiences for all ages.',
    rating: 4.9,
    reviews: 112,
    distance: '2.1 km from center',
    price: 25,
    href: '/listings/entry-city-guide',
  },
  {
    id: 10,
    image: guide10,
    category: 'Entertainment',
    title: 'La Sagrada Familia',
    description: "Antoni Gaudí's masterpiece features stunning design and intricate details.",
    rating: 4.8,
    reviews: 12694,
    distance: '0.5 km from center',
    price: 30,
    href: '/listings/entry-city-guide',
  },
  {
    id: 11,
    image: guide11,
    category: 'Entertainment',
    title: 'City Guided Tour',
    description: 'Embark on an interactive city tour around central Barcelona with a guide.',
    rating: 4.7,
    reviews: 389,
    distance: '0.9 km from center',
    price: 42,
    href: '/listings/entry-city-guide',
  },
  {
    id: 12,
    image: guide12,
    category: 'Entertainment',
    title: 'Live Music Boat Tour',
    description: 'Listen to professional musicians onboard as they entertain you on your journey.',
    rating: 4.5,
    reviews: 264,
    distance: '2.7 km from center',
    price: 50,
    href: '/listings/entry-city-guide',
  },
]

interface BlogProps {
  priceRange: number[]
}

const Blog = ({ priceRange }: BlogProps) => {
  const filteredData = guideData.filter((item) => item.price >= priceRange[0] && item.price <= priceRange[1])

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      {filteredData.map((item) => (
        <div key={item.id} className="group">
          <div className="border-default-200 border dark:border-white/20 rounded-md overflow-hidden">
            <Link href={item.href}>
              <div className="overflow-hidden relative">
                <Image src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-0 end-0 z-10 opacity-0 group-hover:opacity-100 transition pt-2 pe-2 mt-2 me-2">
                  <button type="button" className="size-8 bg-white text-dark rounded-full shadow flex items-center justify-center">
                    <Icon icon="lucide:heart" />
                  </button>
                </div>
              </div>
            </Link>

            <div className="pt-4 pb-2 px-4">
              <Link href={item.href}>
                <span className="rounded-md inline-block font-medium text-default-600 bg-default-100 dark:bg-white/3 text-xs px-2 py-1 mb-2">{item.category}</span>
              </Link>
              <h3 className="text-xl font-semibold pt-1 mb-2">
                <Link href={item.href} className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300">
                  {item.title}
                </Link>
              </h3>
              <p className="text-sm">{item.description}</p>
            </div>

            <div className="pb-4 px-4">
              <ul className="flex-nowrap flex gap-4 text-sm items-center">
                <li className="flex items-center gap-1">
                  <Star className="fill-warning text-warning size-4" />
                  <span>{item.rating}</span>
                  <span className="text-xs text-secondary">({item.reviews})</span>
                </li>
                <li className="flex items-center gap-1">
                  <Icon icon="lucide:map-pin" className="size-3.5" />
                  <span>{item.distance}</span>
                </li>
              </ul>
              <div className="text-default-900 font-semibold pt-4">${item.price}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Blog

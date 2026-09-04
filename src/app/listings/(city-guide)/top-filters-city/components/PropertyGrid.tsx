import guide01 from '@/assets/img/listings/city-guide/v2/01.jpg'
import guide02 from '@/assets/img/listings/city-guide/v2/02.jpg'
import guide03 from '@/assets/img/listings/city-guide/v2/03.jpg'
import guide04 from '@/assets/img/listings/city-guide/v2/04.jpg'
import guide05 from '@/assets/img/listings/city-guide/v2/05.jpg'
import guide06 from '@/assets/img/listings/city-guide/v2/06.jpg'
import guide07 from '@/assets/img/listings/city-guide/v2/07.jpg'
import guide08 from '@/assets/img/listings/city-guide/v2/08.jpg'
import guide09 from '@/assets/img/listings/city-guide/v2/09.jpg'
import guide10 from '@/assets/img/listings/city-guide/v2/10.jpg'
import guide11 from '@/assets/img/listings/city-guide/v2/11.jpg'
import guide12 from '@/assets/img/listings/city-guide/v2/12.jpg'
import { Icon } from '@iconify/react'
import { CreditCard, MapPin, Star } from 'lucide-react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'

type PropertyType = {
  id: number
  image: StaticImageData
  title: string
  rating: number
  reviewCount: number
  priceLevel: string
  distance: string
}

const properties: PropertyType[] = [
  {
    id: 1,
    image: guide01,
    title: 'Barcelona Business Hotel',
    rating: 4.8,
    reviewCount: 472,
    priceLevel: '$$$',
    distance: '0.6 km from center',
  },
  {
    id: 2,
    image: guide02,
    title: 'Big Tree Cottage',
    rating: 4.5,
    reviewCount: 73,
    priceLevel: '$$',
    distance: '2.4 km from center',
  },
  {
    id: 3,
    image: guide03,
    title: 'Grand Resort & Spa',
    rating: 4.6,
    reviewCount: 209,
    priceLevel: '$$$',
    distance: '5.3 km from center',
  },
  {
    id: 4,
    image: guide04,
    title: 'Serenity Hotel',
    rating: 4.7,
    reviewCount: 318,
    priceLevel: '$$',
    distance: '1.7 km from center',
  },
  {
    id: 5,
    image: guide05,
    title: 'Merry Berry Motel',
    rating: 4.3,
    reviewCount: 734,
    priceLevel: '$',
    distance: '6.5 km from center',
  },
  {
    id: 6,
    image: guide06,
    title: 'Repose Hotel',
    rating: 4.8,
    reviewCount: 165,
    priceLevel: '$$$',
    distance: '2.1 km from center',
  },
  {
    id: 7,
    image: guide07,
    title: 'Tranquil Hotel',
    rating: 4.5,
    reviewCount: 96,
    priceLevel: '$$',
    distance: '3.8 km from center',
  },
  {
    id: 8,
    image: guide08,
    title: 'Soothe & Stay',
    rating: 4.4,
    reviewCount: 290,
    priceLevel: '$',
    distance: '2.3 km from center',
  },
  {
    id: 9,
    image: guide09,
    title: 'Best Nest Apartment',
    rating: 4.8,
    reviewCount: 37,
    priceLevel: '$$',
    distance: '1.6 km from center',
  },
  {
    id: 10,
    image: guide10,
    title: 'Pine Cottage',
    rating: 4.9,
    reviewCount: 135,
    priceLevel: '$$$',
    distance: '0.8 km from center',
  },
  {
    id: 11,
    image: guide11,
    title: 'Greenpoint Boutique Hotel',
    rating: 4.2,
    reviewCount: 216,
    priceLevel: '$$',
    distance: '1.9 km from center',
  },
  {
    id: 12,
    image: guide12,
    title: 'Crystal Studio Apartment',
    rating: 4.7,
    reviewCount: 26,
    priceLevel: '$$',
    distance: '1.3 km from center',
  },
]

type PropertyGridProps ={
  properties?: PropertyType[]
}

const PropertyGrid = ({ properties: propProperties = properties }: PropertyGridProps) => {
  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6 ">
        {propProperties.map((property) => (
          <div key={property.id} className="group">
            <Link href="/listings/entry-city-guide">
              <div className="rounded-md w-full lg:h-70 h-56.5 overflow-hidden relative">
                <Image src={property.image} alt={property.title} className="w-full lg:h-70 h-56.5 object-cover transition-transform duration-500 group-hover:scale-110 rounded-md" />
                <div className="absolute top-0 end-0 z-10 opacity-0 group-hover:opacity-100 transition pt-2 pe-2 mt-2 me-2">
                  <button type="button" className="size-8 bg-white text-dark rounded-full shadow flex items-center justify-center">
                    <Icon icon="lucide:heart" />
                  </button>
                </div>
              </div>
            </Link>
            <div className="pt-4 pb-2">
              <Link href="/listings/entry-city-guide"></Link>
              <h3 className="text-xl font-semibold text-default-900">
                <Link href="/listings/entry-city-guide"></Link>
                <Link className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300" href="/listings/entry-city-guide">
                  {property.title}
                </Link>
              </h3>
            </div>
            <div className="flex items-center gap-3 bg-transparent">
              <div className="flex items-center gap-1">
                <Star className="fill-warning text-warning size-4" />
                <span className="text-sm text-default-500">{property.rating}</span>
                <span className="text-xs text-default-400 self-end">({property.reviewCount})</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <CreditCard className="size-3.5" />
                {property.priceLevel}
              </div>
              <div className="flex items-center gap-1 text-sm">
                <MapPin className="size-3.5" />
                <span className="text-truncate">{property.distance}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default PropertyGrid

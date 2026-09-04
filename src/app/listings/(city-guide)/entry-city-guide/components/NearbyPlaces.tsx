import place01 from '@/assets/img/home/city-guide/places/01.jpg'
import place02 from '@/assets/img/home/city-guide/places/02.jpg'
import place03 from '@/assets/img/home/city-guide/places/03.jpg'
import place04 from '@/assets/img/home/city-guide/places/04.jpg'
import { CreditCard, MapPin, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const NearbyPlaces = () => {
  return (
    <>
      <div className="md:col-span-5 col-span-1 md:ps-6 ps-0">
        <div className=" sticky top-26">
          <div className="lg:w-104 w-full ms-auto">
            <h3 className="text-xl mb-6 text-default-900 font-semibold">Top places nearby</h3>
            <div className="flex flex-col gap-8">
              <div className="group">
                <Link href="/listings/entry-city-guide"></Link>
                <div className="flex gap-4">
                  <Link href="/listings/entry-city-guide">
                    <div className="rounded-md w-28 overflow-hidden relative">
                      <Image src={place01} alt="Image" className="w-28 object-cover overflow-hidden transition-transform duration-500 group-hover:scale-105 z-0 rounded-md" />
                    </div>
                  </Link>
                  <div className="pt-1">
                    <Link href="/listings/entry-city-guide"></Link>
                    <h3 className="text-base font-semibold mb-1">
                      <Link href="/listings/entry-city-guide"></Link>
                      <Link className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300" href="/listings/entry-city-guide">
                        Sagrada Familia
                      </Link>
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="fill-warning text-warning size-4" />
                      <span className="text-sm">4.8</span>
                      <span className="text-xs text-secondary self-end">(12694)</span>
                    </div>
                    <ul className="flex-nowrap flex gap-2 text-sm mb-0">
                      <li className="flex items-center gap-1 me-2">
                        <CreditCard className="size-3.5" />
                        $30
                      </li>
                      <li className="flex items-center gap-1">
                        <MapPin className="size-3.5" />
                        <span className="truncate w-15 lg:w-full">0.5 km from center</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="group">
                <Link href="/listings/entry-city-guide"></Link>
                <div className="flex gap-4">
                  <Link href="/listings/entry-city-guide">
                    <div className="rounded-md w-28 overflow-hidden relative">
                      <Image src={place02} alt="Image" className="w-28 object-cover overflow-hidden transition-transform duration-500 group-hover:scale-105 z-0 rounded-md" />
                    </div>
                  </Link>
                  <div className="pt-1">
                    <Link href="/listings/entry-city-guide"></Link>
                    <h3 className="text-base font-semibold mb-1">
                      <Link href="/listings/entry-city-guide"></Link>
                      <Link className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300" href="/listings/entry-city-guide">
                        Park Güell
                      </Link>
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="fill-warning text-warning size-4" />
                      <span className="text-sm">4.9</span>
                      <span className="text-xs text-secondary self-end">(113)</span>
                    </div>
                    <ul className="flex-nowrap flex gap-2 text-sm mb-0">
                      <li className="flex items-center gap-1 me-2">
                        <CreditCard className="size-3.5" />
                        $15
                      </li>
                      <li className="flex items-center gap-1">
                        <MapPin className="size-3.5" />
                        <span className="truncate w-15 lg:w-full">0.7 km from center</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="group">
                <Link href="/listings/entry-city-guide"></Link>
                <div className="flex gap-4">
                  <Link href="/listings/entry-city-guide">
                    <div className="rounded-md w-28 overflow-hidden relative">
                      <Image src={place03} alt="Image" className="w-28 object-cover overflow-hidden transition-transform duration-500 group-hover:scale-105 z-0 rounded-md" />
                    </div>
                  </Link>
                  <div className="pt-1">
                    <Link href="/listings/entry-city-guide"></Link>
                    <h3 className="text-base font-semibold mb-1">
                      <Link href="/listings/entry-city-guide"></Link>
                      <Link className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300" href="/listings/entry-city-guide">
                        Camp Nou Tour
                      </Link>
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="fill-warning text-warning size-4" />
                      <span className="text-sm">4.7</span>
                      <span className="text-xs text-secondary self-end">(6149)</span>
                    </div>
                    <ul className="flex-nowrap flex gap-2 text-sm mb-0">
                      <li className="flex items-center gap-1 me-2">
                        <CreditCard className="size-3.5" />
                        $40
                      </li>
                      <li className="flex items-center gap-1">
                        <MapPin className="size-3.5" />
                        <span className="w-15 lg:w-full truncate">5.2 km from center</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="group">
                <Link href="/listings/entry-city-guide"></Link>
                <div className="flex gap-4">
                  <Link href="/listings/entry-city-guide">
                    <div className="rounded-md w-28 overflow-hidden relative">
                      <Image src={place04} alt="Image" className="w-28 object-cover overflow-hidden transition-transform duration-500 group-hover:scale-105 z-0 rounded-md" />
                    </div>
                  </Link>
                  <div className="pt-1">
                    <Link href="/listings/entry-city-guide"></Link>
                    <h3 className="text-base font-semibold mb-1">
                      <Link href="/listings/entry-city-guide"></Link>
                      <Link className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300" href="/listings/entry-city-guide">
                        Barcelona National Zoo
                      </Link>
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="fill-warning text-warning size-4" />
                      <span className="text-sm">4.6</span>
                      <span className="text-xs text-secondary self-end">(7523)</span>
                    </div>
                    <ul className="flex-nowrap flex gap-2 text-sm mb-0">
                      <li className="flex items-center gap-1 me-2">
                        <CreditCard className="size-3.5" />
                        $20
                      </li>
                      <li className="flex items-center gap-1">
                        <MapPin className="size-3.5" />
                        <span className=" w-15 lg:w-full truncate">3.2 km from center</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NearbyPlaces

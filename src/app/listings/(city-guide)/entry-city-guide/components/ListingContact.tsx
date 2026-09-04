import { Circle, Clock, Globe, MapPin, Smartphone } from 'lucide-react'
import Link from 'next/link'

const ListingContact = () => {
  return (
    <>
      <ul className="flex flex-wrap items-center gap-3 mb-6 text-default-700 text-sm">
        <li>
          <Link href="" className="relative inline-flex items-center gap-1 hover:underline">
            <MapPin className="size-4" />
            <span>Carrer de la Lluna 28, Barcelona, Spain</span>
          </Link>
        </li>
        <li className="flex items-center mx-1">
          <Circle className="size-0.75 fill-default-800 text-default-800" />
        </li>
        <li>
          <Link href="tel:+34931234567" className="relative inline-flex items-center gap-1 hover:underline">
            <Smartphone className="size-3.5" />
            <span>+34&nbsp;931&nbsp;234&nbsp;567</span>
          </Link>
        </li>
        <li className="flex items-center mx-1">
          <Circle className="size-0.75 fill-default-800 text-default-800" />
        </li>
        <li>
          <Link href="" className="relative inline-flex items-center gap-1 hover:underline">
            <Globe className="size-3.5" />
            <span>Website</span>
          </Link>
        </li>
        <li className="flex items-center mx-1">
          <Circle className="size-0.75 fill-default-800 text-default-800" />
        </li>
        <li>
          <span className="relative inline-flex items-center gap-1 text-default-700">
            <Clock className="size-3.5" />
            <span>
              <span className="font-semibold">Open now</span> 07:00 AM - 10:30 AM, 12:00 PM - 11:00 PM
            </span>
          </span>
        </li>
      </ul>
    </>
  )
}

export default ListingContact

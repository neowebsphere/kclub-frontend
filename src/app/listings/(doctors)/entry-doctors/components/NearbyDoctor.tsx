'use client'
import doctor18 from '@/assets/img/listings/doctors/18.jpg'
import doctor19 from '@/assets/img/listings/doctors/19.jpg'
import doctor20 from '@/assets/img/listings/doctors/20.jpg'
import doctor21 from '@/assets/img/listings/doctors/21.jpg'
import { Icon } from '@iconify/react'
import { Baby, MapPin, Star, User } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type DoctorType = {
  id: number
  name: string
  specialty: string
  image: StaticImageData
  rating: number
  reviews: number
  distance: string
  price: number
  patientType: string[]
}

const doctors: DoctorType[] = [
  {
    id: 1,
    name: 'Dr. Peter Parker',
    specialty: 'Orthopedic Surgeon',
    image: doctor18,
    rating: 4.5,
    reviews: 176,
    distance: '1.5 mi',
    price: 80,
    patientType: ['Adults'],
  },
  {
    id: 2,
    name: 'Dr. Gloria Fox',
    specialty: 'Pediatrician',
    image: doctor19,
    rating: 4.7,
    reviews: 112,
    distance: '1.3 mi',
    price: 40,
    patientType: ['Children'],
  },
  {
    id: 3,
    name: 'Dr. Peter Grokovski',
    specialty: 'Dermatologist',
    image: doctor20,
    rating: 5.0,
    reviews: 43,
    distance: '1.4 mi',
    price: 55,
    patientType: ['Adults'],
  },
  {
    id: 4,
    name: 'Dr. Emily Johnson',
    specialty: 'General Practitioner',
    image: doctor21,
    rating: 4.8,
    reviews: 95,
    distance: '1.3 mi',
    price: 35,
    patientType: ['Adults', 'Children'],
  },
]

const NearbyDoctor = () => {
  return (
    <div className="lg:pb-12">
      <div className="flex items-start justify-between gap-4 lg:my-4 mb-4 pt-12 pb-4">
        <h2 className="lg:text-4.5xl md:text-2.5xl text-2xl font-semibold text-default-900">Doctors nearby</h2>

        <div className="inline-flex items-center gap-2">
          <Link href="/listings/grid-doctors" className="hover:underline flex items-center text-nowrap me-1 font-semibold">
            View all
            <Icon icon="lucide:chevron-right" className="text-lg" />
          </Link>
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          500: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
        }}
        className="pb-12"
      >
        {doctors.map((doctor) => (
          <SwiperSlide key={doctor.id} className="h-auto">
            <div className="bg-body-bg group rounded-md overflow-hidden h-full">
              <Link href="/listings/grid-doctors">
                <div className="overflow-hidden">
                  <Image src={doctor.image} alt={doctor.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              </Link>

              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="fill-warning text-warning size-4" />
                  <span className="text-sm text-default-700">{doctor.rating}</span>
                  <span className="text-xs text-secondary">({doctor.reviews})</span>
                </div>

                <h3 className="text-xl font-semibold text-default-900 mb-2">
                  <Link href="/listings/real-estate" className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300">
                    {doctor.name}
                  </Link>
                </h3>

                <p className="text-sm font-semibold text-default-900 mb-2">{doctor.specialty}</p>

                <ul className="flex flex-wrap gap-2 text-sm">
                  <li className="flex items-center me-2">
                    <MapPin className="size-3.5 me-1" />
                    {doctor.distance}
                  </li>

                  {doctor.patientType.map((type, index) => (
                    <li key={index} className="flex items-center">
                      {type === 'Children' ? <Baby className="size-3.5 me-1" /> : <User className="size-3.5 me-1" />}
                      {type}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pb-6 px-6">
                <div className="font-semibold text-default-900">${doctor.price.toFixed(2)}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default NearbyDoctor

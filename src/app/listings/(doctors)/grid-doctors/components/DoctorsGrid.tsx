import doctor08 from '@/assets/img/listings/doctors/08.jpg'
import doctor09 from '@/assets/img/listings/doctors/09.jpg'
import doctor10 from '@/assets/img/listings/doctors/10.jpg'
import doctor11 from '@/assets/img/listings/doctors/11.jpg'
import doctor12 from '@/assets/img/listings/doctors/12.jpg'
import doctor13 from '@/assets/img/listings/doctors/13.jpg'
import doctor14 from '@/assets/img/listings/doctors/14.jpg'
import doctor15 from '@/assets/img/listings/doctors/15.jpg'
import doctor16 from '@/assets/img/listings/doctors/16.jpg'
import doctor17 from '@/assets/img/listings/doctors/17.jpg'
import { Icon } from '@iconify/react'
import { Award, Baby, Star, User } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type Doctor = {
  id: number
  name: string
  image: StaticImageData
  rating: number
  reviews: number
  specialty: string
  verified?: boolean
  experience: string
  audience: string[]
  description: string
  clinics: {
    name: string
    distance: string
  }[]
  price: number
  consultation: string[]
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Sophia Davis',
    image: doctor08,
    rating: 4.8,
    reviews: 63,
    specialty: 'Pediatrician',
    verified: true,
    experience: '7 years experience',
    audience: ['Children'],
    description: 'Dr. Davis is highly respected in her field, known for her innovative treatment plans and her ability to connect with young patients and their families.',
    clinics: [
      { name: 'Kids Health Clinic', distance: '3.1 mi' },
      { name: 'Pediatric Medical Center', distance: '5.2 mi' },
    ],
    price: 35,
    consultation: ['Online', 'Offline', 'Home visit'],
  },
  {
    id: 2,
    name: 'Dr. Michael Johnston',
    image: doctor09,
    rating: 4.5,
    reviews: 176,
    specialty: 'Cardiologist',
    verified: true,
    experience: '21 years experience',
    audience: ['Adults', 'Children'],
    description: 'Dr. Michael Johnston, a cardiologist with over two decades of experience, offers advanced cardiovascular care, utilizing cutting-edge techniques and thorough diagnostic analysis.',
    clinics: [
      { name: 'Citywide Heart Clinic', distance: '1.4 mi' },
      { name: 'Pediatric Medical Center', distance: '3.2 mi' },
    ],
    price: 75,
    consultation: ['Online', 'Offline'],
  },
  {
    id: 3,
    name: 'Dr. Gloria Fox',
    image: doctor10,
    rating: 4.7,
    reviews: 112,
    specialty: 'Pediatrician',
    experience: '5 years experience',
    audience: ['Children'],
    description: 'Dr. Gloria Fox has extensive experience in caring for infants, children, and adolescents. Known for her compassionate approach and expertise in child health.',
    clinics: [
      { name: 'Bright Futures Pediatric Clinic', distance: '1.3 mi' },
      { name: "Children's Health Center", distance: '2.5 mi' },
    ],
    price: 30,
    consultation: ['Online', 'Offline', 'Home visit'],
  },
  {
    id: 4,
    name: 'Dr. Michael Williams',
    image: doctor11,
    rating: 4.7,
    reviews: 185,
    specialty: 'Neurologist',
    experience: '13 years experience',
    audience: ['Adults', 'Children'],
    description: 'Dr. Williams is a distinguished neurologist specializing in the diagnosis and treatment of neurological disorders. He provides comprehensive care through advanced diagnostic techniques and tailored treatment plans.',
    clinics: [
      { name: 'Central Neurology Clinic', distance: '0.9 mi' },
      { name: 'Chicago Brain and Spine Center ', distance: '1.8 mi' },
    ],
    price: 70,
    consultation: ['Online', 'Offline', 'Home visit'],
  },
  {
    id: 5,
    name: 'Dr. David McCluskey',
    image: doctor12,
    rating: 4.7,
    reviews: 112,
    specialty: 'Endocrinologist',
    experience: '9 years experience',
    audience: ['Adults', 'Children'],
    description: 'Dr. McCluskey is an experienced endocrinologist specializing in the diagnosis and treatment of hormonal disorders. With a focus on diabetes, thyroid disease, and metabolic imbalances.',
    clinics: [
      { name: 'Lakeshore Endocrine Center', distance: '1.2 mi' },
      { name: 'South Loop Endocrinology Clinic', distance: '3.4 mi' },
    ],
    price: 70,
    consultation: ['Online', 'Offline'],
  },
  {
    id: 6,
    name: 'Dr. Emily Johnson',
    image: doctor13,
    rating: 4.6,
    reviews: 59,
    specialty: 'General Practitioner',
    experience: '11 years experience',
    audience: ['Adults'],
    description: 'Dr. Johnson is a dedicated general practitioner with a focus on providing comprehensive, patient-centered care. With experience in diagnosing and managing a wide range of health conditions, she takes a holistic approach to healthcare.',
    clinics: [
      { name: 'Riverwalk Family Health Clinic', distance: '1.3 mi' },
      { name: 'Southside Wellness Medical Center', distance: '2.7 mi' },
    ],
    price: 40,
    consultation: ['Online', 'Offline', 'Home visit'],
  },
  {
    id: 7,
    name: 'Dr. Thomas Brown',
    image: doctor14,
    rating: 4.8,
    reviews: 95,
    specialty: 'Orthopedic Surgeon',
    experience: '17 years experience',
    audience: ['Adults', 'Children'],
    description: 'Dr. Thomas Brown is a renowned orthopedic surgeon specializing in the treatment of musculoskeletal conditions, including joint replacements, fractures, and sports injuries.',
    clinics: [
      { name: 'Lincoln Park Orthopedic Center', distance: '1.5 mi' },
      { name: 'Windy City Orthopedic Institute', distance: '2.2 mi' },
    ],
    price: 40,
    consultation: ['Online', 'Offline'],
  },
  {
    id: 8,
    name: 'Dr. Peter Grokovski',
    image: doctor15,
    rating: 5,
    reviews: 43,
    specialty: 'Dermatologist',
    experience: '8 years experience',
    audience: ['Adults'],
    description: 'Dr. Grokovski is a skilled dermatologist specializing in the diagnosis and treatment of skin, hair, and nail conditions. With a focus on both medical and cosmetic dermatology.',
    clinics: [
      { name: 'Lakeside Dermatology Clinic', distance: '1.5 mi' },
      { name: 'North Shore Skin Care Center', distance: '2.2 mi' },
    ],
    price: 55,
    consultation: ['Online', 'Offline'],
  },
  {
    id: 9,
    name: 'Dr. Vanessa Thompson',
    image: doctor16,
    rating: 4,
    reviews: 63,
    specialty: 'Endocrinologist',
    experience: '21 years experience',
    audience: ['Adults', 'Children'],
    description: 'Dr. Vanessa Thompson is a highly regarded endocrinologist specializing in the diagnosis of hormonal disorders, including thyroid conditions, diabetes, and metabolic issues.',
    clinics: [
      { name: 'Westside Endocrine Specialists', distance: '1.4 mi' },
      { name: 'Magnolia Endocrinology Center', distance: '2.6 mi' },
    ],
    price: 45,
    consultation: ['Online', 'Offline', 'Home visit'],
  },
  {
    id: 10,
    name: 'Dr. Peter Parker',
    image: doctor17,
    rating: 4,
    reviews: 63,
    specialty: 'Orthopedic Surgeon',
    experience: '6 years experience',
    audience: ['Adults', 'Children'],
    description: 'Dr. Parker is a highly skilled orthopedic surgeon specializing in the diagnosis and surgical treatment of musculoskeletal conditions. He helps patients recover from injuries.',
    clinics: [
      { name: 'Lakeview Orthopedic Institute', distance: '1.5 mi' },
      { name: 'Midtown Joint and Spine Center', distance: '2.3 mi' },
    ],
    price: 80,
    consultation: ['Online', 'Offline'],
  },
]

const DoctorsGrid = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
      {doctors.map((doctor) => (
        <div key={doctor.id} className="bg-body-bg rounded-md">
          <div className="p-6 md:flex group">
            <div className="flex gap-4">
              <div className="lg:w-37.5 lg:h-41 md:w-25 md:h-27.25 w-12 h-13 shrink-0">
                <Image src={doctor.image} alt={doctor.name} className="object-cover rounded-md lg:w-37.5 lg:h-41 md:w-25 md:h-27.25 w-12 h-13" />
              </div>

              <div className="md:hidden flex flex-col gap-1">
                <div className="flex flex-col">
                  <div className="me-2 text-xl text-default-900 font-semibold">
                    <Link href="/listings/entry-doctors" className="group-hover:underline">
                      {doctor.name}
                    </Link>
                  </div>

                  <div className="flex items-center gap-1">
                    <Star className="fill-warning text-warning size-4" />
                    <span className="text-sm text-default-700">{doctor.rating}</span>
                    <span className="text-xs text-secondary self-end">({doctor.reviews})</span>
                  </div>
                </div>

                <div className="text-sm text-default-900 font-semibold">{doctor.specialty}</div>
              </div>
            </div>

            <div className="md:ps-6">
              <div className="md:block hidden">
                <div className="flex flex-wrap items-center mb-2 justify-between">
                  <div className="me-2 text-xl text-default-900 font-semibold">
                    <Link href="" className="group-hover:underline">
                      {doctor.name}
                    </Link>
                  </div>

                  <div className="flex items-center gap-1">
                    <Star className="fill-warning text-warning size-4" />
                    <span className="text-sm text-default-700">{doctor.rating}</span>
                    <span className="text-xs text-secondary">({doctor.reviews})</span>
                  </div>
                </div>

                <div className="text-sm text-default-900 font-semibold">{doctor.specialty}</div>
              </div>

              <ul className="flex items-center flex-wrap mt-4 pb-4 gap-3">
                {doctor.verified && (
                  <li className="bg-info text-white text-xs inline-flex items-center font-medium px-2 py-0.5 rounded">
                    Verified
                    <Icon icon="lucide:shield" className="ms-1" />
                  </li>
                )}

                <li className="flex items-center gap-1 text-sm text-default-600">
                  <Award className="size-4" />
                  {doctor.experience}
                </li>

                {doctor.audience.map((item, index) => (
                  <li key={index} className="flex items-center gap-1 text-sm text-default-600">
                    {item === 'Adults' ? <User className="size-4" /> : <Baby className="size-4" />}
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-sm mb-4">{doctor.description}</p>

              <ul className="flex flex-col text-sm gap-2">
                {doctor.clinics.map((clinic, index) => (
                  <li key={index}>
                    <span className="font-semibold text-default-900 me-1">{clinic.name}</span>
                    {clinic.distance}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pb-6 px-6">
            <hr className="mb-6 text-default-200 dark:text-white/20" />

            <div className="flex justify-between items-center gap-3 flex-wrap">
              <div className="flex flex-wrap items-center gap-2">
                <div className="text-xl me-1 text-default-900 font-semibold">From ${doctor.price.toFixed(2)}</div>

                <div className="text-sm text-body-color">{doctor.consultation.join(' / ')}</div>
              </div>

              <div className="inline-flex md:w-auto w-full">
                <button className="w-full border border-primary text-primary rounded px-5 py-2.5 text-sm font-medium">Book an appointment</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DoctorsGrid

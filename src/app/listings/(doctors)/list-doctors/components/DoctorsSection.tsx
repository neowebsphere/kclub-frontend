import doctor01 from '@/assets/img/listings/doctors/01.jpg'
import doctor02 from '@/assets/img/listings/doctors/02.jpg'
import doctor03 from '@/assets/img/listings/doctors/03.jpg'
import doctor04 from '@/assets/img/listings/doctors/04.jpg'
import doctor05 from '@/assets/img/listings/doctors/05.jpg'
import doctor06 from '@/assets/img/listings/doctors/06.jpg'
import doctor07 from '@/assets/img/listings/doctors/07.jpg'
import { Baby, ChevronRight, Clock, Info, Map, MapPin, Star, User } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type Clinic = {
  name: string
  distance: string
  address: string
}

type Doctor = {
  image: StaticImageData
  rating: number
  name: string
  specialty: string
  reviews: number
  experience: number
  consultationFee: number
  clinicFee: number
  description: string
  treats: string[]
  clinics: Clinic[]
}

const doctors: Doctor[] = [
  {
    image: doctor01,
    rating: 4.5,
    name: 'Dr. Michael Johnston',
    specialty: 'Cardiologist',
    reviews: 176,
    experience: 10,
    consultationFee: 150,
    clinicFee: 50,
    description: 'Dr. Michael Johnston is a renowned cardiologist with over 10 years of experience in the field. He is known for his expertise in treating various heart conditions and his compassionate approach to patient care.',
    treats: ['Heart Disease', 'High Blood Pressure', 'Arrhythmia'],
    clinics: [
      {
        name: 'City General Hospital',
        distance: '2.5 km',
        address: '123 Main Street, City',
      },
    ],
  },
]

const time = ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30']

const DoctorsSection = () => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="bg-body-bg rounded-md">
          <div className="grid lg:grid-cols-3 grid-cols-1">
            <div className="lg:col-span-2 col-span-1">
              <div className="p-6 border-e border-border">
                <div className="md:flex items-start lg:p-2">
                  <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none"></Link>
                  <div className="flex gap-3">
                    <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none">
                      <div className="md:w-41 w-12">
                        <Image src={doctor01} alt="Image" className="rounded-md w-full h-full object-cover" />
                        <div className="md:flex hidden pt-4 justify-center items-center gap-1">
                          <Star className="fill-warning text-warning size-4" />
                          <span className="text-sm text-default-800">4.5</span>
                          <span className="text-xs text-default-500">(176)</span>
                        </div>
                      </div>
                    </Link>
                    <div className="md:hidden block">
                      <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none"></Link>
                      <h3 className="text-xl text-default-900 font-semibold mb-2">
                        <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none"></Link>
                        <Link href="/listings/entry-doctors" className="group-hover:underline">
                          Dr. Michael Johnston
                        </Link>
                      </h3>
                      <div className="flex items-center gap-3 mb-2 pb-1">
                        <div className="text-sm font-medium text-default-900">Cardiologist</div>
                        <div className="flex md:hidden items-center gap-1">
                          <Star className="fill-warning text-warning size-4" />
                          <span className="text-sm text-default-800">4.5</span>
                          <span className="text-xs text-default-500">(176)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:ps-12 md:ps-6 lg:ms-0 md:ms-2 lg:pe-4">
                    <div className="group ">
                      <div className="hidden md:block">
                        <h3 className="text-xl text-default-900 font-semibold mb-2">
                          <Link href="/listings/entry-doctors" className="group-hover:underline">
                            Dr. Michael Johnston
                          </Link>
                        </h3>
                        <div className="flex items-center gap-3 mb-2 pb-1">
                          <div className="text-sm font-medium text-default-900">Cardiologist</div>
                        </div>
                      </div>
                      <ul className="flex flex-wrap items-center gap-3 md:mb-6 mb-4 lg:mt-0 mt-2">
                        <li className="flex items-center gap-2">
                          <span className="px-2 py-0.5 text-xs font-semibold rounded bg-primary text-white">21</span>
                          <span className="text-sm text-default-800">years experience</span>
                        </li>
                        <li className="flex items-center gap-1 text-sm text-default-800">
                          <User className="size-4" /> Adults
                        </li>
                        <li className="flex items-center gap-1 text-sm text-default-800">
                          <Baby className="size-4" /> Children
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm mb-4">
                      Dr. Michael Johnston, a cardiologist with over two decades of experience, offers advanced cardiovascular care, utilizing cutting-edge techniques and thorough diagnostic analysis. Trust his expertise for all your heart health needs.
                    </p>
                    <dl className="space-y-4 text-sm">
                      <div>
                        <dt className="font-semibold text-default-900 mb-2">Citywide Heart Clinic</dt>
                        <dd className="flex flex-wrap gap-2">
                          <div className="flex items-center gap-1 me-2">
                            <MapPin className="size-3.5" />
                            1.4 mi
                          </div>
                          <div className="me-2">201 E Randolph St, Chicago, IL 60602</div>
                          <div className="flex items-center gap-1 text-sm text-default-900">
                            <Map className="size-3.5" />
                            <Link href="#!" className="text-xs hover:underline">
                              Show on map
                            </Link>
                          </div>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-default-900 mb-2">Skyline Medical Center</dt>
                        <dd className="flex flex-wrap gap-2">
                          <div className="flex items-center gap-1 me-2">
                            <MapPin className="size-3.5" />
                            3.2 mi
                          </div>
                          <div className="me-2">233 S Wacker Dr, Chicago, IL 60606</div>
                          <div className="flex items-center gap-1 text-sm text-default-900">
                            <Map className="size-3.5" />
                            <Link href="#!" className="text-xs hover:underline">
                              Show on map
                            </Link>
                          </div>
                        </dd>
                      </div>
                    </dl>
                    <div className="flex lg:hidden mt-6">
                      <button className="w-full border border-primary text-primary rounded px-5 py-2.5 text-sm font-medium">Book an appointment</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 p-6 lg:block hidden">
              <div className="p-2">
                <ul className="text-sm mb-6 space-y-1">
                  <li>
                    <span className="text-primary text-base font-semibold me-1">$75.00</span> Online consultation
                  </li>
                  <li>
                    <span className="text-default-900 text-base font-semibold me-1">$90.00</span> Visiting the clinic
                  </li>
                </ul>
                <div className="flex gap-6 mb-1 pb-2">
                  <label className="flex items-center gap-2 cursor-pointer mb-4">
                    <input type="radio" name="visit-method-1" className="hidden peer" defaultChecked />
                    <span className="w-11 h-6 rounded-full bg-default-300 peer-checked:bg-success relative after:content-[''] after:absolute after:top-0.75 after:start-0.75 after:w-4.5 after:h-4.5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-5" />
                    <span className="text-sm">Online</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer mb-4">
                    <input type="radio" name="visit-method-1" className="hidden peer" />
                    <span className="w-11 h-6 rounded-full bg-default-300 peer-checked:bg-success relative after:content-[''] after:absolute after:top-0.75 after:start-0.75 after:w-4.5 after:h-4.5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-5" />
                    <span className="text-sm">Visit clinic</span>
                  </label>
                </div>
                <div className="flex mb-4 border rounded-md border-info">
                  <label className="flex-1">
                    <input type="radio" name="visit-day-1" className="hidden peer" defaultChecked />
                    <span className="block text-center border-e border-info text-info py-2 px-2 text-sm peer-checked:bg-info peer-checked:text-white peer-checked:border-info">Mon, 11</span>
                  </label>
                  <label className="flex-1">
                    <input type="radio" name="visit-day-1" className="hidden peer" />
                    <span className="block text-center border-e border-info text-info py-2 px-2 text-sm peer-checked:bg-info peer-checked:text-white peer-checked:border-info">Tue, 12</span>
                  </label>
                  <label className="flex-1">
                    <input type="radio" name="visit-day-1" className="hidden peer" />
                    <span className="block text-center border-e border-info text-info py-2 px-2 text-sm peer-checked:bg-info peer-checked:text-white peer-checked:border-info">Wed, 13</span>
                  </label>
                  <button className="block text-center text-info px-2 text-sm hover:bg-info hover:text-white rounded-br-md transition-all duration-300">
                    <ChevronRight className="size-4.5" />
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {time.map((time) => (
                    <label >
                      <input type="radio" name="visit-time-1" className="hidden peer" />
                      <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">{time}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-body-bg rounded-md">
          <div className="grid lg:grid-cols-3 grid-cols-1">
            <div className="lg:col-span-2 col-span-1">
              <div className="p-6 border-e border-border">
                <div className="md:flex items-start lg:p-2">
                  <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none"></Link>
                  <div className="flex gap-3">
                    <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none">
                      <div className="md:w-41 w-12">
                        <Image src={doctor02} alt="Image" className="rounded-md w-full h-full object-cover" />
                        <div className="md:flex hidden pt-4 justify-center items-center gap-1">
                          <Star className="fill-warning text-warning size-4" />
                          <span className="text-sm text-default-800">4.7</span>
                          <span className="text-xs text-default-500">(112)</span>
                        </div>
                      </div>
                    </Link>
                    <div className="md:hidden block">
                      <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none"></Link>
                      <h3 className="text-xl text-default-900 font-semibold mb-2">
                        <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none"></Link>
                        <Link href="/listings/entry-doctors" className="group-hover:underline">
                          Dr. Gloria Fox
                        </Link>
                      </h3>
                      <div className="flex items-center gap-3 mb-2 pb-1">
                        <div className="text-sm font-medium text-default-900">Pediatrician</div>
                        <div className="flex md:hidden items-center gap-1">
                          <Star className="fill-warning text-warning size-4" />
                          <span className="text-sm text-default-800">4.7</span>
                          <span className="text-xs text-default-500">(112)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:ps-12 md:ps-6 lg:ms-0 md:ms-2 lg:pe-4">
                    <div className="group ">
                      <div className="hidden md:block">
                        <h3 className="text-xl text-default-900 font-semibold mb-2">
                          <Link href="/listings/entry-doctors" className="group-hover:underline">
                            Dr. Gloria Fox
                          </Link>
                        </h3>
                        <div className="flex items-center gap-3 mb-2 pb-1">
                          <div className="text-sm font-medium text-default-900">Pediatrician</div>
                        </div>
                      </div>
                      <ul className="flex flex-wrap items-center gap-3 md:mb-6 mb-4 lg:mt-0 mt-2">
                        <li className="flex items-center gap-2">
                          <span className="px-2 py-0.5 text-xs font-semibold rounded bg-primary text-white">5</span>
                          <span className="text-sm text-default-800">years experience</span>
                        </li>
                        <li className="flex items-center gap-1 text-sm text-default-800">
                          <Baby className="size-4" /> Children
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm mb-4">
                      Dr. Gloria Fox has extensive experience in caring for infants, children, and adolescents. Known for her compassionate approach and expertise in child health, she provides comprehensive medical care, from routine check-ups to specialized treatments.
                    </p>
                    <dl className="space-y-4 text-sm">
                      <div>
                        <dt className="font-semibold text-default-900 mb-2">Bright Futures Pediatric Clinic</dt>
                        <dd className="flex flex-wrap gap-2">
                          <div className="flex items-center gap-1 me-2">
                            <MapPin className="size-3.5" />
                            1.3 mi
                          </div>
                          <div className="me-2">412 Oak Street, Chicago, IL 60610</div>
                          <div className="flex items-center gap-1 text-sm text-default-900">
                            <Map className="size-3.5" />
                            <Link href="#!" className="text-xs hover:underline">
                              Show on map
                            </Link>
                          </div>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-default-900 mb-2">Children's Health Center</dt>
                        <dd className="flex flex-wrap gap-2">
                          <div className="flex items-center gap-1 me-2">
                            <MapPin className="size-3.5" />
                            2.5 mi
                          </div>
                          <div className="me-2">785 State Street, Chicago, IL 60605</div>
                          <div className="flex items-center gap-1 text-sm text-default-900">
                            <Map className="size-3.5" />
                            <Link href="#!" className="text-xs hover:underline">
                              Show on map
                            </Link>
                          </div>
                        </dd>
                      </div>
                    </dl>
                    <div className="flex lg:hidden mt-6">
                      <button className="w-full border border-primary text-primary rounded px-5 py-2.5 text-sm font-medium">Book an appointment</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 p-6 lg:block hidden">
              <div className="p-2">
                <ul className="text-sm mb-6 space-y-1">
                  <li>
                    <span className="text-primary text-base font-semibold me-1">$40.00</span> Online consultation
                  </li>
                  <li>
                    <span className="text-default-900 text-base font-semibold me-1">$58.00</span> Visiting the clinic
                  </li>
                </ul>
                <div className="flex gap-6 mb-1 pb-2">
                  <label className="flex items-center gap-2 cursor-pointer mb-4">
                    <input type="radio" name="visit-method-2" className="hidden peer" defaultChecked />
                    <span className="w-11 h-6 rounded-full bg-default-300 peer-checked:bg-success relative after:content-[''] after:absolute after:top-0.75 after:start-0.75 after:w-4.5 after:h-4.5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-5" />
                    <span className="text-sm">Online</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer mb-4">
                    <input type="radio" name="visit-method-2" className="hidden peer" />
                    <span className="w-11 h-6 rounded-full bg-default-300 peer-checked:bg-success relative after:content-[''] after:absolute after:top-0.75 after:start-0.75 after:w-4.5 after:h-4.5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-5" />
                    <span className="text-sm">Visit clinic</span>
                  </label>
                </div>
                <div className="flex mb-4 border rounded-md border-info">
                  <label className="flex-1">
                    <input type="radio" name="visit-day-2" className="hidden peer" defaultChecked />
                    <span className="block text-center border-e border-info text-info py-2 px-2 text-sm peer-checked:bg-info peer-checked:text-white peer-checked:border-info">Mon, 11</span>
                  </label>
                  <label className="flex-1">
                    <input type="radio" name="visit-day-2" className="hidden peer" />
                    <span className="block text-center border-e border-info text-info py-2 px-2 text-sm peer-checked:bg-info peer-checked:text-white peer-checked:border-info">Tue, 12</span>
                  </label>
                  <label className="flex-1">
                    <input type="radio" name="visit-day-2" className="hidden peer" />
                    <span className="block text-center border-e border-info text-info py-2 px-2 text-sm peer-checked:bg-info peer-checked:text-white peer-checked:border-info">Wed, 13</span>
                  </label>
                  <button className="block text-center text-info px-2 text-sm hover:bg-info hover:text-white rounded-br-md transition-all duration-300">
                    <ChevronRight className="size-4.5" />
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <label>
                    <input type="radio" name="visit-time-2" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">10:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-2" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">10:30</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-2" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">11:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-2" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">11:30</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-2" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">12:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-2" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">12:30</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-2" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">13:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-2" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">13:30</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-2" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">14:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-2" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">14:30</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-2" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">15:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-2" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">15:30</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-body-bg rounded-md">
          <div className="grid lg:grid-cols-3 grid-cols-1">
            <div className="lg:col-span-2 col-span-1">
              <div className="p-6 border-e border-border">
                <div className="md:flex items-start lg:p-2">
                  <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none"></Link>
                  <div className="flex gap-3">
                    <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none">
                      <div className="md:w-41 w-12">
                        <Image src={doctor03} alt="Image" className="rounded-md w-full h-full object-cover" />
                        <div className="md:flex hidden pt-4 justify-center items-center gap-1">
                          <Star className="fill-warning text-warning size-4" />
                          <span className="text-sm text-default-800">5.0</span>
                          <span className="text-xs text-default-500">(43)</span>
                        </div>
                      </div>
                    </Link>
                    <div className="md:hidden block">
                      <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none"></Link>
                      <h3 className="text-xl text-default-900 font-semibold mb-2">
                        <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none"></Link>
                        <Link href="/listings/entry-doctors" className="group-hover:underline">
                          Dr. Peter Grokovski
                        </Link>
                      </h3>
                      <div className="flex items-center gap-3 mb-2 pb-1">
                        <div className="text-sm font-medium text-default-900">Dermatologist</div>
                        <div className="flex md:hidden items-center gap-1">
                          <Star className="fill-warning text-warning size-4" />
                          <span className="text-sm text-default-800">5.0</span>
                          <span className="text-xs text-default-500">(43)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:ps-12 md:ps-6 lg:ms-0 md:ms-2 lg:pe-4">
                    <div className="group ">
                      <div className="hidden md:block">
                        <h3 className="text-xl text-default-900 font-semibold mb-2">
                          <Link href="/listings/entry-doctors" className="group-hover:underline">
                            Dr. Peter Grokovski
                          </Link>
                        </h3>
                        <div className="flex items-center gap-3 mb-2 pb-1">
                          <div className="text-sm font-medium text-default-900">Dermatologist</div>
                        </div>
                      </div>
                      <ul className="flex flex-wrap items-center gap-3 md:mb-6 mb-4 lg:mt-0 mt-2">
                        <li className="flex items-center gap-2">
                          <span className="px-2 py-0.5 text-xs font-semibold rounded bg-primary text-white">8</span>
                          <span className="text-sm text-default-800">years experience</span>
                        </li>
                        <li className="flex items-center gap-1 text-sm text-default-800">
                          <User className="size-4" /> Adults
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm mb-4">
                      Dr. Grokovski is a skilled dermatologist specializing in the diagnosis and treatment of skin, hair, and nail conditions. With a focus on both medical and cosmetic dermatology, he provides personalized care using the latest techniques.
                    </p>
                    <dl className="space-y-4 text-sm">
                      <div>
                        <dt className="font-semibold text-default-900 mb-2">Lakeside Dermatology Clinic</dt>
                        <dd className="flex flex-wrap gap-2">
                          <div className="flex items-center gap-1 me-2">
                            <MapPin className="size-3.5" />
                            1.2 mi
                          </div>
                          <div className="me-2">950 Michigan Avenue, Chicago, IL 60611</div>
                          <div className="flex items-center gap-1 text-sm text-default-900">
                            <Map className="size-3.5" />
                            <Link href="#!" className="text-xs hover:underline">
                              Show on map
                            </Link>
                          </div>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-default-900 mb-2">North Shore Skin Care Center</dt>
                        <dd className="flex flex-wrap gap-2">
                          <div className="flex items-center gap-1 me-2">
                            <MapPin className="size-3.5" />
                            3.4 mi
                          </div>
                          <div className="me-2">5230 Irving Park Road, Chicago, IL 60641</div>
                          <div className="flex items-center gap-1 text-sm text-default-900">
                            <Map className="size-3.5" />
                            <Link href="#!" className="text-xs hover:underline">
                              Show on map
                            </Link>
                          </div>
                        </dd>
                      </div>
                    </dl>
                    <div className="flex lg:hidden mt-6">
                      <button className="w-full border border-primary text-primary rounded px-5 py-2.5 text-sm font-medium">Book an appointment</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 p-6 lg:block hidden">
              <div className="p-2">
                <ul className="text-sm mb-6 space-y-1">
                  <li>
                    <span className="text-primary text-base font-semibold me-1">$55.00</span> Online consultation
                  </li>
                  <li>
                    <span className="text-default-900 text-base font-semibold me-1">$70.00</span> Visiting the clinic
                  </li>
                </ul>
                <div className="flex gap-6 mb-1 pb-2">
                  <label className="flex items-center gap-2 cursor-pointer mb-4">
                    <input type="radio" name="visit-method-3" className="hidden peer" defaultChecked />
                    <span className="w-11 h-6 rounded-full bg-default-300 peer-checked:bg-success relative after:content-[''] after:absolute after:top-0.75 after:start-0.75 after:w-4.5 after:h-4.5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-5" />
                    <span className="text-sm">Online</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer mb-4">
                    <input type="radio" name="visit-method-3" className="hidden peer" />
                    <span className="w-11 h-6 rounded-full bg-default-300 peer-checked:bg-success relative after:content-[''] after:absolute after:top-0.75 after:start-0.75 after:w-4.5 after:h-4.5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-5" />
                    <span className="text-sm">Visit clinic</span>
                  </label>
                </div>
                <div className="flex mb-4 border rounded-md border-info">
                  <label className="flex-1">
                    <input type="radio" name="visit-day-3" className="hidden peer" defaultChecked />
                    <span className="block text-center border-e border-info text-info py-2 px-2 text-sm peer-checked:bg-info peer-checked:text-white peer-checked:border-info">Mon, 11</span>
                  </label>
                  <label className="flex-1">
                    <input type="radio" name="visit-day-3" className="hidden peer" />
                    <span className="block text-center border-e border-info text-info py-2 px-2 text-sm peer-checked:bg-info peer-checked:text-white peer-checked:border-info">Tue, 12</span>
                  </label>
                  <label className="flex-1">
                    <input type="radio" name="visit-day-3" className="hidden peer" />
                    <span className="block text-center border-e border-info text-info py-2 px-2 text-sm peer-checked:bg-info peer-checked:text-white peer-checked:border-info">Wed, 13</span>
                  </label>
                  <button className="block text-center text-info px-2 text-sm hover:bg-info hover:text-white rounded-br-md transition-all duration-300">
                    <ChevronRight className="size-4.5" />
                  </button>
                </div>
                <div className="flex items-center text-sm gap-2 pb-6">
                  <Info className="size-4" />
                  There are no available recording slots
                </div>
                <div className="flex justify-center text-default-700 items-center border border-border rounded-md p-1" role="alert">
                  <Clock className="size-4 my-1 me-2" />
                  <div className="text-sm font-medium mb-">The nearest reception: Wed, June 13</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-body-bg rounded-md">
          <div className="grid lg:grid-cols-3 grid-cols-1">
            <div className="lg:col-span-2 col-span-1">
              <div className="p-6 border-e border-border">
                <div className="md:flex items-start lg:p-2">
                  <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none"></Link>
                  <div className="flex gap-3">
                    <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none">
                      <div className="md:w-41 w-12">
                        <Image src={doctor04} alt="Image" className="rounded-md w-full h-full object-cover" />
                        <div className="md:flex hidden pt-4 justify-center items-center gap-1">
                          <Star className="fill-warning text-warning size-4" />
                          <span className="text-sm text-default-800">4.8</span>
                          <span className="text-xs text-default-500">(95)</span>
                        </div>
                      </div>
                    </Link>
                    <div className="md:hidden block">
                      <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none"></Link>
                      <h3 className="text-xl text-default-900 font-semibold mb-2">
                        <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none"></Link>
                        <Link href="/listings/entry-doctors" className="group-hover:underline">
                          Dr. Emily Johnson
                        </Link>
                      </h3>
                      <div className="flex items-center gap-3 mb-2 pb-1">
                        <div className="text-sm font-medium text-default-900">General Practitioner</div>
                        <div className="flex md:hidden items-center gap-1">
                          <Star className="fill-warning text-warning size-4" />
                          <span className="text-sm text-default-800">4.8</span>
                          <span className="text-xs text-default-500">(95)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:ps-12 md:ps-6 lg:ms-0 md:ms-2 lg:pe-4">
                    <div className="group ">
                      <div className="hidden md:block">
                        <h3 className="text-xl text-default-900 font-semibold mb-2">
                          <Link href="/listings/entry-doctors" className="group-hover:underline">
                            Dr. Emily Johnson
                          </Link>
                        </h3>
                        <div className="flex items-center gap-3 mb-2 pb-1">
                          <div className="text-sm font-medium text-default-900">General Practitioner</div>
                        </div>
                      </div>
                      <ul className="flex flex-wrap items-center gap-3 md:mb-6 mb-4 lg:mt-0 mt-2">
                        <li className="flex items-center gap-2">
                          <span className="px-2 py-0.5 text-xs font-semibold rounded bg-primary text-white">11</span>
                          <span className="text-sm text-default-800">years experience</span>
                        </li>
                        <li className="flex items-center gap-1 text-sm text-default-800">
                          <User className="size-4" /> Adults
                        </li>
                        <li className="flex items-center gap-1 text-sm text-default-800">
                          <Baby className="size-4" /> Children
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm mb-4">
                      Dr. Johnson is a dedicated general practitioner with a focus on providing comprehensive, patient-centered care. With experience in diagnosing and managing a wide range of health conditions, she takes a holistic approach to healthcare.
                    </p>
                    <dl className="space-y-4 text-sm">
                      <div>
                        <dt className="font-semibold text-default-900 mb-2">Riverwalk Family Health Clinic</dt>
                        <dd className="flex flex-wrap gap-2">
                          <div className="flex items-center gap-1 me-2">
                            <MapPin className="size-3.5" />
                            1.3 mi
                          </div>
                          <div className="me-2">345 Hubbard Street, Chicago, IL 60654</div>
                          <div className="flex items-center gap-1 text-sm text-default-900">
                            <Map className="size-3.5" />
                            <Link href="#!" className="text-xs hover:underline">
                              Show on map
                            </Link>
                          </div>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-default-900 mb-2">Southside Wellness Medical Center</dt>
                        <dd className="flex flex-wrap gap-2">
                          <div className="flex items-center gap-1 me-2">
                            <MapPin className="size-3.5" />
                            2.7 mi
                          </div>
                          <div className="me-2">1728 Michigan Avenue, Chicago, IL 60616</div>
                          <div className="flex items-center gap-1 text-sm text-default-900">
                            <Map className="size-3.5" />
                            <Link href="#!" className="text-xs hover:underline">
                              Show on map
                            </Link>
                          </div>
                        </dd>
                      </div>
                    </dl>
                    <div className="flex lg:hidden mt-6">
                      <button className="w-full border border-primary text-primary rounded px-5 py-2.5 text-sm font-medium">Book an appointment</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 p-6 lg:block hidden">
              <div className="p-2">
                <ul className="text-sm mb-6 space-y-1">
                  <li>
                    <span className="text-primary text-base font-semibold me-1">$35.00</span> Online consultation
                  </li>
                  <li>
                    <span className="text-default-900 text-base font-semibold me-1">$50.00</span> Visiting the clinic
                  </li>
                </ul>
                <div className="flex gap-6 mb-1 pb-2">
                  <label className="flex items-center gap-2 cursor-pointer mb-4">
                    <input type="radio" name="visit-method-4" className="hidden peer" defaultChecked />
                    <span className="w-11 h-6 rounded-full bg-default-300 peer-checked:bg-success relative after:content-[''] after:absolute after:top-0.75 after:start-0.75 after:w-4.5 after:h-4.5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-5" />
                    <span className="text-sm">Online</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer mb-4">
                    <input type="radio" name="visit-method-4" className="hidden peer" />
                    <span className="w-11 h-6 rounded-full bg-default-300 peer-checked:bg-success relative after:content-[''] after:absolute after:top-0.75 after:start-0.75 after:w-4.5 after:h-4.5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-5" />
                    <span className="text-sm">Visit clinic</span>
                  </label>
                </div>
                <div className="flex mb-4 border rounded-md border-info">
                  <label className="flex-1">
                    <input type="radio" name="visit-day-4" className="hidden peer" defaultChecked />
                    <span className="block text-center border-e border-info text-info py-2 px-2 text-sm peer-checked:bg-info peer-checked:text-white peer-checked:border-info">Mon, 11</span>
                  </label>
                  <label className="flex-1">
                    <input type="radio" name="visit-day-4" className="hidden peer" />
                    <span className="block text-center border-e border-info text-info py-2 px-2 text-sm peer-checked:bg-info peer-checked:text-white peer-checked:border-info">Tue, 12</span>
                  </label>
                  <label className="flex-1">
                    <input type="radio" name="visit-day-4" className="hidden peer" />
                    <span className="block text-center border-e border-info text-info py-2 px-2 text-sm peer-checked:bg-info peer-checked:text-white peer-checked:border-info">Wed, 13</span>
                  </label>
                  <button className="block text-center text-info px-2 text-sm hover:bg-info hover:text-white rounded-br-md transition-all duration-300">
                    <ChevronRight className="size-4.5" />
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <label>
                    <input type="radio" name="visit-time-4" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">10:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-4" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">10:30</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-4" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">11:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-4" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">11:30</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-4" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">12:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-4" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">12:30</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-4" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">13:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-4" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">13:30</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-4" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">14:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-4" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">14:30</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-4" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">15:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-4" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">15:30</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-body-bg rounded-md">
          <div className="grid lg:grid-cols-3 grid-cols-1">
            <div className="lg:col-span-2 col-span-1">
              <div className="p-6 border-e border-border">
                <div className="md:flex items-start lg:p-2">
                  <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none"></Link>
                  <div className="flex gap-3">
                    <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none">
                      <div className="md:w-41 w-12">
                        <Image src={doctor05} alt="Image" className="rounded-md w-full h-full object-cover" />
                        <div className="md:flex hidden pt-4 justify-center items-center gap-1">
                          <Star className="fill-warning text-warning size-4" />
                          <span className="text-sm text-default-800">4.3</span>
                          <span className="text-xs text-default-500">(37)</span>
                        </div>
                      </div>
                    </Link>
                    <div className="md:hidden block">
                      <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none"></Link>
                      <h3 className="text-xl text-default-900 font-semibold mb-2">
                        <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none"></Link>
                        <Link href="/listings/entry-doctors" className="group-hover:underline">
                          Dr. Peter Parker
                        </Link>
                      </h3>
                      <div className="flex items-center gap-3 mb-2 pb-1">
                        <div className="text-sm font-medium text-default-900">Orthopedic Surgeon</div>
                        <div className="flex md:hidden items-center gap-1">
                          <Star className="fill-warning text-warning size-4" />
                          <span className="text-sm text-default-800">4.3</span>
                          <span className="text-xs text-default-500">(37)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:ps-12 md:ps-6 lg:ms-0 md:ms-2 lg:pe-4">
                    <div className="group ">
                      <div className="hidden md:block">
                        <h3 className="text-xl text-default-900 font-semibold mb-2">
                          <Link href="/listings/entry-doctors" className="group-hover:underline">
                            Dr. Peter Parker
                          </Link>
                        </h3>
                        <div className="flex items-center gap-3 mb-2 pb-1">
                          <div className="text-sm font-medium text-default-900">Orthopedic Surgeon</div>
                        </div>
                      </div>
                      <ul className="flex flex-wrap items-center gap-3 md:mb-6 mb-4 lg:mt-0 mt-2">
                        <li className="flex items-center gap-2">
                          <span className="px-2 py-0.5 text-xs font-semibold rounded bg-primary text-white">6</span>
                          <span className="text-sm text-default-800">years experience</span>
                        </li>
                        <li className="flex items-center gap-1 text-sm text-default-800">
                          <User className="size-4" /> Adults
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm mb-4">
                      Dr. Parker is a highly skilled orthopedic surgeon specializing in the diagnosis and surgical treatment of musculoskeletal conditions. With a focus on advanced techniques, he helps patients recover from injuries and other orthopedic concerns.
                    </p>
                    <dl className="space-y-4 text-sm">
                      <div>
                        <dt className="font-semibold text-default-900 mb-2">Lakeview Orthopedic Institute</dt>
                        <dd className="flex flex-wrap gap-2">
                          <div className="flex items-center gap-1 me-2">
                            <MapPin className="size-3.5" />
                            1.5 mi
                          </div>
                          <div className="me-2">2800 Sheridan Road, Chicago, IL 60657</div>
                          <div className="flex items-center gap-1 text-sm text-default-900">
                            <Map className="size-3.5" />
                            <Link href="#!" className="text-xs hover:underline">
                              Show on map
                            </Link>
                          </div>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-default-900 mb-2">Midtown Joint and Spine Center</dt>
                        <dd className="flex flex-wrap gap-2">
                          <div className="flex items-center gap-1 me-2">
                            <MapPin className="size-3.5" />
                            2.3 mi
                          </div>
                          <div className="me-2">1225 Madison Street, Chicago, IL 60607</div>
                          <div className="flex items-center gap-1 text-sm text-default-900">
                            <Map className="size-3.5" />
                            <Link href="#!" className="text-xs hover:underline">
                              Show on map
                            </Link>
                          </div>
                        </dd>
                      </div>
                    </dl>
                    <div className="flex lg:hidden mt-6">
                      <button className="w-full border border-primary text-primary rounded px-5 py-2.5 text-sm font-medium">Book an appointment</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 p-6 lg:block hidden">
              <div className="p-2">
                <ul className="text-sm mb-6 space-y-1">
                  <li>
                    <span className="text-primary text-base font-semibold me-1">$80.00</span> Online consultation
                  </li>
                  <li>
                    <span className="text-default-900 text-base font-semibold me-1">$100.00</span> Visiting the clinic
                  </li>
                </ul>
                <div className="flex gap-6 mb-1 pb-2">
                  <label className="flex items-center gap-2 cursor-pointer mb-4">
                    <input type="radio" name="visit-method-5" className="hidden peer" defaultChecked />
                    <span className="w-11 h-6 rounded-full bg-default-300 peer-checked:bg-success relative after:content-[''] after:absolute after:top-0.75 after:start-0.75 after:w-4.5 after:h-4.5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-5" />
                    <span className="text-sm">Online</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer mb-4">
                    <input type="radio" name="visit-method-5" className="hidden peer" />
                    <span className="w-11 h-6 rounded-full bg-default-300 peer-checked:bg-success relative after:content-[''] after:absolute after:top-0.75 after:start-0.75 after:w-4.5 after:h-4.5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-5" />
                    <span className="text-sm">Visit clinic</span>
                  </label>
                </div>
                <div className="flex mb-4 border rounded-md border-info">
                  <label className="flex-1">
                    <input type="radio" name="visit-day-5" className="hidden peer" defaultChecked />
                    <span className="block text-center border-e border-info text-info py-2 px-2 text-sm peer-checked:bg-info peer-checked:text-white peer-checked:border-info">Mon, 11</span>
                  </label>
                  <label className="flex-1">
                    <input type="radio" name="visit-day-5" className="hidden peer" />
                    <span className="block text-center border-e border-info text-info py-2 px-2 text-sm peer-checked:bg-info peer-checked:text-white peer-checked:border-info">Tue, 12</span>
                  </label>
                  <label className="flex-1">
                    <input type="radio" name="visit-day-5" className="hidden peer" />
                    <span className="block text-center border-e border-info text-info py-2 px-2 text-sm peer-checked:bg-info peer-checked:text-white peer-checked:border-info">Wed, 13</span>
                  </label>
                  <button className="block text-center text-info px-2 text-sm hover:bg-info hover:text-white rounded-br-md transition-all duration-300">
                    <ChevronRight className="size-4.5" />
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <label>
                    <input type="radio" name="visit-time-5" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">10:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-5" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">10:30</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-5" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">11:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-5" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">11:30</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-5" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">12:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-5" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">12:30</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-5" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">13:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-5" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">13:30</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-5" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">14:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-5" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">14:30</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-5" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">15:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-5" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">15:30</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-body-bg rounded-md">
          <div className="grid lg:grid-cols-3 grid-cols-1">
            <div className="lg:col-span-2 col-span-1">
              <div className="p-6 border-e border-border">
                <div className="md:flex items-start lg:p-2">
                  <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none"></Link>
                  <div className="flex gap-3">
                    <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none">
                      <div className="md:w-41 w-12">
                        <Image src={doctor06} alt="Image" className="rounded-md w-full h-full object-cover" />
                        <div className="md:flex hidden pt-4 justify-center items-center gap-1">
                          <Star className="fill-warning text-warning size-4" />
                          <span className="text-sm text-default-800">4.7</span>
                          <span className="text-xs text-default-500">(185)</span>
                        </div>
                      </div>
                    </Link>
                    <div className="md:hidden block">
                      <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none"></Link>
                      <h3 className="text-xl text-default-900 font-semibold mb-2">
                        <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none"></Link>
                        <Link href="/listings/entry-doctors" className="group-hover:underline">
                          Dr. Michael Williams
                        </Link>
                      </h3>
                      <div className="flex items-center gap-3 mb-2 pb-1">
                        <div className="text-sm font-medium text-default-900">Neurologist</div>
                        <div className="flex md:hidden items-center gap-1">
                          <Star className="fill-warning text-warning size-4" />
                          <span className="text-sm text-default-800">4.7</span>
                          <span className="text-xs text-default-500">(185)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:ps-12 md:ps-6 lg:ms-0 md:ms-2 lg:pe-4">
                    <div className="group ">
                      <div className="hidden md:block">
                        <h3 className="text-xl text-default-900 font-semibold mb-2">
                          <Link href="/listings/entry-doctors" className="group-hover:underline">
                            Dr. Michael Williams
                          </Link>
                        </h3>
                        <div className="flex items-center gap-3 mb-2 pb-1">
                          <div className="text-sm font-medium text-default-900">Neurologist</div>
                        </div>
                      </div>
                      <ul className="flex flex-wrap items-center gap-3 md:mb-6 mb-4 lg:mt-0 mt-2">
                        <li className="flex items-center gap-2">
                          <span className="px-2 py-0.5 text-xs font-semibold rounded bg-primary text-white">13</span>
                          <span className="text-sm text-default-800">years experience</span>
                        </li>
                        <li className="flex items-center gap-1 text-sm text-default-800">
                          <User className="size-4" /> Adults
                        </li>
                        <li className="flex items-center gap-1 text-sm text-default-800">
                          <Baby className="size-4" /> Children
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm mb-4">
                      Dr. Williams is a distinguished neurologist specializing in the diagnosis and treatment of neurological disorders. With expertise in managing conditions affecting the brain, spine, and nervous system, Dr. Williams provides comprehensive care through advanced
                      diagnostic techniques and tailored treatment plans.
                    </p>
                    <dl className="space-y-4 text-sm">
                      <div>
                        <dt className="font-semibold text-default-900 mb-2">Central Neurology Clinic</dt>
                        <dd className="flex flex-wrap gap-2">
                          <div className="flex items-center gap-1 me-2">
                            <MapPin className="size-3.5" />
                            0.9 mi
                          </div>
                          <div className="me-2">500 Lake Shore Drive, Chicago, IL 60611</div>
                          <div className="flex items-center gap-1 text-sm text-default-900">
                            <Map className="size-3.5" />
                            <Link href="#!" className="text-xs hover:underline">
                              Show on map
                            </Link>
                          </div>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-default-900 mb-2">Chicago Brain and Spine Center</dt>
                        <dd className="flex flex-wrap gap-2">
                          <div className="flex items-center gap-1 me-2">
                            <MapPin className="size-3.5" />
                            1.8 mi
                          </div>
                          <div className="me-2">2121 Harrison Street, Chicago, IL 60612</div>
                          <div className="flex items-center gap-1 text-sm text-default-900">
                            <Map className="size-3.5" />
                            <Link href="#!" className="text-xs hover:underline">
                              Show on map
                            </Link>
                          </div>
                        </dd>
                      </div>
                    </dl>
                    <div className="flex lg:hidden mt-6">
                      <button className="w-full border border-primary text-primary rounded px-5 py-2.5 text-sm font-medium">Book an appointment</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 p-6 lg:block hidden">
              <div className="p-2">
                <ul className="text-sm mb-6 space-y-1">
                  <li>
                    <span className="text-primary text-base font-semibold me-1">$70.00</span> Online consultation
                  </li>
                  <li>
                    <span className="text-default-900 text-base font-semibold me-1">$90.00</span> Visiting the clinic
                  </li>
                </ul>
                <div className="flex gap-6 mb-1 pb-2">
                  <label className="flex items-center gap-2 cursor-pointer mb-4">
                    <input type="radio" name="visit-method-6" className="hidden peer" defaultChecked />
                    <span className="w-11 h-6 rounded-full bg-default-300 peer-checked:bg-success relative after:content-[''] after:absolute after:top-0.75 after:start-0.75 after:w-4.5 after:h-4.5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-5" />
                    <span className="text-sm">Online</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer mb-4">
                    <input type="radio" name="visit-method-6" className="hidden peer" />
                    <span className="w-11 h-6 rounded-full bg-default-300 peer-checked:bg-success relative after:content-[''] after:absolute after:top-0.75 after:start-0.75 after:w-4.5 after:h-4.5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-5" />
                    <span className="text-sm">Visit clinic</span>
                  </label>
                </div>
                <div className="flex mb-4 border rounded-md border-info">
                  <label className="flex-1">
                    <input type="radio" name="visit-day-6" className="hidden peer" defaultChecked />
                    <span className="block text-center border-e border-info text-info py-2 px-2 text-sm peer-checked:bg-info peer-checked:text-white peer-checked:border-info">Mon, 11</span>
                  </label>
                  <label className="flex-1">
                    <input type="radio" name="visit-day-6" className="hidden peer" />
                    <span className="block text-center border-e border-info text-info py-2 px-2 text-sm peer-checked:bg-info peer-checked:text-white peer-checked:border-info">Tue, 12</span>
                  </label>
                  <label className="flex-1">
                    <input type="radio" name="visit-day-6" className="hidden peer" />
                    <span className="block text-center border-e border-info text-info py-2 px-2 text-sm peer-checked:bg-info peer-checked:text-white peer-checked:border-info">Wed, 13</span>
                  </label>
                  <button className="block text-center text-info px-2 text-sm hover:bg-info hover:text-white rounded-br-md transition-all duration-300">
                    <ChevronRight className="size-4.5" />
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <label>
                    <input type="radio" name="visit-time-6" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">10:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-6" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">10:30</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-6" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">11:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-6" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">11:30</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-6" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">12:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-6" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">12:30</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-6" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">13:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-6" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">13:30</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-6" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">14:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-6" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">14:30</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-6" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">15:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-6" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">15:30</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-body-bg rounded-md">
          <div className="grid lg:grid-cols-3 grid-cols-1">
            <div className="lg:col-span-2 col-span-1">
              <div className="p-6 border-e border-border">
                <div className="md:flex items-start lg:p-2">
                  <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none"></Link>
                  <div className="flex gap-3">
                    <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none">
                      <div className="md:w-41 w-12">
                        <Image src={doctor07} alt="Image" className="rounded-md w-full h-full object-cover" />
                        <div className="md:flex hidden pt-4 justify-center items-center gap-1">
                          <Star className="fill-warning text-warning size-4" />
                          <span className="text-sm text-default-800">4.9</span>
                          <span className="text-xs text-default-500">(65)</span>
                        </div>
                      </div>
                    </Link>
                    <div className="md:hidden block">
                      <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none"></Link>
                      <h3 className="text-xl text-default-900 font-semibold mb-2">
                        <Link href="/listings/entry-doctors" className="shrink-0 text-decoration-none"></Link>
                        <Link href="/listings/entry-doctors" className="group-hover:underline">
                          Dr. Vanessa Thompson
                        </Link>
                      </h3>
                      <div className="flex items-center gap-3 mb-2 pb-1">
                        <div className="text-sm font-medium text-default-900">Endocrinologist</div>
                        <div className="flex md:hidden items-center gap-1">
                          <Star className="fill-warning text-warning size-4" />
                          <span className="text-sm text-default-800">4.9</span>
                          <span className="text-xs text-default-500">(64)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:ps-12 md:ps-6 lg:ms-0 md:ms-2 lg:pe-4">
                    <div className="group ">
                      <div className="hidden md:block">
                        <h3 className="text-xl text-default-900 font-semibold mb-2">
                          <Link href="/listings/entry-doctors" className="group-hover:underline">
                            Dr. Vanessa Thompson
                          </Link>
                        </h3>
                        <div className="flex items-center gap-3 mb-2 pb-1">
                          <div className="text-sm font-medium text-default-900">Endocrinologist</div>
                        </div>
                      </div>
                      <ul className="flex flex-wrap items-center gap-3 md:mb-6 mb-4 lg:mt-0 mt-2">
                        <li className="flex items-center gap-2">
                          <span className="px-2 py-0.5 text-xs font-semibold rounded bg-primary text-white">7</span>
                          <span className="text-sm text-default-800">years experience</span>
                        </li>
                        <li className="flex items-center gap-1 text-sm text-default-800">
                          <User className="size-4" /> Adults
                        </li>
                        <li className="flex items-center gap-1 text-sm text-default-800">
                          <Baby className="size-4" /> Children
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm mb-4">
                      Dr. Vanessa Thompson is a highly regarded endocrinologist specializing in the diagnosis and management of hormonal disorders, including thyroid conditions, diabetes, and metabolic issues. Dr. Thompson is dedicated to helping her patients achieve balanced
                      health and improved quality of life.
                    </p>
                    <dl className="space-y-4 text-sm">
                      <div>
                        <dt className="font-semibold text-default-900 mb-2">Westside Endocrine Specialists</dt>
                        <dd className="flex flex-wrap gap-2">
                          <div className="flex items-center gap-1 me-2">
                            <MapPin className="size-3.5" />
                            1.4 mi
                          </div>
                          <div className="me-2">2300 Madison Street, Chicago, IL 60612</div>
                          <div className="flex items-center gap-1 text-sm text-default-900">
                            <Map className="size-3.5" />
                            <Link href="#!" className="text-xs hover:underline">
                              Show on map
                            </Link>
                          </div>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-default-900 mb-2">Magnolia Endocrinology Center</dt>
                        <dd className="flex flex-wrap gap-2">
                          <div className="flex items-center gap-1 me-2">
                            <MapPin className="size-3.5" />
                            2.6 mi
                          </div>
                          <div className="me-2">1555 Clark Street, Chicago, IL 60610</div>
                          <div className="flex items-center gap-1 text-sm text-default-900">
                            <Map className="size-3.5" />
                            <Link href="#!" className="text-xs hover:underline">
                              Show on map
                            </Link>
                          </div>
                        </dd>
                      </div>
                    </dl>
                    <div className="flex lg:hidden mt-6">
                      <button className="w-full border border-primary text-primary rounded px-5 py-2.5 text-sm font-medium">Book an appointment</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 p-6 lg:block hidden">
              <div className="p-2">
                <ul className="text-sm mb-6 space-y-1">
                  <li>
                    <span className="text-primary text-base font-semibold me-1">$45.00</span> Online consultation
                  </li>
                  <li>
                    <span className="text-default-900 text-base font-semibold me-1">$60.00</span> Visiting the clinic
                  </li>
                </ul>
                <div className="flex gap-6 mb-1 pb-2">
                  <label className="flex items-center gap-2 cursor-pointer mb-4">
                    <input type="radio" name="visit-method-7" className="hidden peer" defaultChecked />
                    <span className="w-11 h-6 rounded-full bg-default-300 peer-checked:bg-success relative after:content-[''] after:absolute after:top-0.75 after:start-0.75 after:w-4.5 after:h-4.5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-5" />
                    <span className="text-sm">Online</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer mb-4">
                    <input type="radio" name="visit-method-7" className="hidden peer" />
                    <span className="w-11 h-6 rounded-full bg-default-300 peer-checked:bg-success relative after:content-[''] after:absolute after:top-0.75 after:start-0.75 after:w-4.5 after:h-4.5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-5" />
                    <span className="text-sm">Visit clinic</span>
                  </label>
                </div>
                <div className="flex mb-4 border rounded-md border-info">
                  <label className="flex-1">
                    <input type="radio" name="visit-day-7" className="hidden peer" defaultChecked />
                    <span className="block text-center border-e border-info text-info py-2 px-2 text-sm peer-checked:bg-info peer-checked:text-white peer-checked:border-info">Mon, 11</span>
                  </label>
                  <label className="flex-1">
                    <input type="radio" name="visit-day-7" className="hidden peer" />
                    <span className="block text-center border-e border-info text-info py-2 px-2 text-sm peer-checked:bg-info peer-checked:text-white peer-checked:border-info">Tue, 12</span>
                  </label>
                  <label className="flex-1">
                    <input type="radio" name="visit-day-7" className="hidden peer" />
                    <span className="block text-center border-e border-info text-info py-2 px-2 text-sm peer-checked:bg-info peer-checked:text-white peer-checked:border-info">Wed, 13</span>
                  </label>
                  <button className="block text-center text-info px-2 text-sm hover:bg-info hover:text-white rounded-br-md transition-all duration-300">
                    <ChevronRight className="size-4.5" />
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <label>
                    <input type="radio" name="visit-time-7" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">10:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-7" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">10:30</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-7" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">11:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-7" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">11:30</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-7" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">12:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-7" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">12:30</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-7" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">13:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-7" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">13:30</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-7" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">14:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-7" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">14:30</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-7" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">15:00</span>
                  </label>
                  <label>
                    <input type="radio" name="visit-time-7" className="hidden peer" />
                    <span className="block text-center border rounded-full py-2.5 px-2 font-semibold border-default-200 dark-border-white/20 text-sm peer-checked:border-default-900">15:30</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DoctorsSection

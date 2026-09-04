import doctor01 from '@/assets/img/listings/doctors/01.jpg'
import { Baby, Circle, Map, MapPin, Star, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <>
      <div className="lg:p-8 p-6 bg-body-bg rounded-md">
        <div className="md:flex">
          <div className="flex gap-4">
            <div className="md:w-43 md:h-53.5 w-12 h-15">
              <Image src={doctor01} className="rounded-md" alt="Image" />
            </div>
            <div className="md:hidden flex flex-col gap-1">
              <div className="flex justify-between ">
                <div className="me-2 text-xl text-default-900 font-semibold">
                  <Link className="group-hover:underline" href="/listings/entry-doctors">
                    Dr. Michael Johnston
                  </Link>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="fill-warning text-warning size-4" />
                  <span className="text-sm text-default-700">4.5</span>
                  <span className="text-xs text-secondary self-end">(176)</span>
                </div>
              </div>
              <div className="text-sm text-default-900 font-semibold">Cardiologist</div>
            </div>
          </div>
          <div className="lg:ps-12 md:ps-6 lg:ms-0 md:ms-2 w-full">
            <div className="md:block hidden">
              <div className="flex flex-wrap items-center mb-2 pb-1 justify-between">
                <div className="me-2 text-2xl text-default-900 font-semibold">
                  <Link className="group-hover:underline" href="/listings/entry-doctors">
                    Dr. Michael Johnston
                  </Link>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="fill-warning text-warning size-4" />
                  <span className="text-sm text-default-700">4.5</span>
                  <span className="text-xs text-secondary self-end">(176)</span>
                </div>
              </div>
              <div className="text-sm text-default-900 font-semibold pb-2 mb-1">Cardiologist</div>
              <ul className="flex flex-wrap items-center gap-3 lg:mt-0 mt-2">
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
              <figure className="pt-6 mt-2">
                <blockquote className=" font-medium mb-4">
                  <p className="text-default-900 font-medium">Dr. Johnston is a very knowledgeable cardiologist. He provided excellent care, improving my heart health. I'm very grateful!</p>
                </blockquote>
                <figcaption className="text-sm flex gap-1 mb-1">— Jerome Bell · Sep 13, 2024</figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div>
          <div className="md:hidden block">
            <ul className="flex flex-wrap items-center gap-3 lg:mt-0 mt-2">
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
            <figure className="pt-6 md:mt-2">
              <blockquote className=" font-medium mb-4">
                <p className="text-default-900 font-medium">Dr. Johnston is a very knowledgeable cardiologist. He provided excellent care, improving my heart health. I'm very grateful!</p>
              </blockquote>
              <figcaption className="text-sm flex mb-1">
                — Jerome Bell
                <Circle className="size-1.5 self-center mx-1" />
                Sep 13, 2024
              </figcaption>
            </figure>
          </div>
          <h2 className="md:pt-12 pt-8 md:mb-6 mb-4 text-xl md:text-2xl font-semibold text-default-900">About doctor</h2>
          <p className="text-sm">
            Dr. Michael Johnston, a highly experienced cardiologist with over two decades in the field, provides comprehensive and advanced cardiovascular care. Known for his expertise in diagnosing and treating a wide range of heart conditions, Dr. Johnston combines cutting-edge
            medical techniques with personalized treatment plans to ensure the best possible outcomes for his patients. Whether it's managing chronic heart disease, performing complex procedures, or offering preventative care, Dr. Johnston's meticulous diagnostic analysis and
            patient-centered approach make him a trusted leader in cardiovascular health. Rely on his expertise to safeguard your heart health and improve your quality of life.
          </p>
          <div className="pt-12">
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
          </div>
          <h2 className="md:pt-12 pt-8 md:mb-6 mb-4 text-xl md:text-2xl font-semibold text-default-900">Procedures</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 text-sm gap-2">
            <ul className="list-disc list-inside flex-col flex gap-2">
              <li>Electrocardiogram (ECG/EKG)</li>
              <li>Echocardiogram</li>
              <li>Stress Test</li>
              <li>Cardiac Catheterization</li>
              <li>Coronary Angiography</li>
            </ul>
            <ul className="list-disc list-inside flex-col flex gap-2">
              <li>Pacemaker Implantation</li>
              <li>Balloon Angioplasty and Stenting</li>
              <li>Holter Monitoring</li>
              <li>Cardioversion</li>
              <li>Heart Valve Repair/Replacement</li>
            </ul>
          </div>
          <h2 className="md:pt-12 pt-8 md:mb-6 mb-4 text-xl md:text-2xl font-semibold text-default-900">Education</h2>
          <ul className="text-sm space-y-2">
            <li>
              <span className="font-medium text-default-900">Harvard Medical School</span> - Doctor of Medicine (MD)
            </li>
            <li>
              <span className="font-medium text-default-900">Johns Hopkins University</span> - Residency in Cardiovascular Medicine
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default About

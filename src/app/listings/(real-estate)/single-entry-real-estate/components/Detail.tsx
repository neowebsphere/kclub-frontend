import avatar01 from '@/assets/img/listings/real-estate/single/avatar.jpg'
import { Icon } from '@iconify/react'
import { Heart, Share2 } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type PropertyInfo = {
  label: string
  value: string | number
}

type Amenity = {
  icon: string
  label: string
}

type Transportation = {
  icon: string
  value: string
  label: string
}

type LocationTab = {
  id: string
  icon: string
  label: string
  defaultChecked?: boolean
}

type AgentInfo = {
  name: string
  role: string
  email: string
  phone: string
  image: StaticImageData
}

const propertyDetails: PropertyInfo[] = [
  { label: 'Property type', value: 'Apartment' },
  { label: 'Year built', value: 2023 },
  { label: 'Living area', value: '42 sq.m' },
  { label: 'Floor', value: 3 },
  { label: 'Total rooms', value: 2 },
  { label: 'Bedrooms', value: 1 },
  { label: 'Bathrooms', value: 1 },
]

const amenities: Amenity[] = [
  { icon: 'lucide:wifi', label: 'WiFi' },
  { icon: 'tabler:wash-hand', label: 'Dishwasher' },
  { icon: 'lucide:snowflake', label: 'Air conditioning' },
  { icon: 'lucide:circle-parking', label: 'Parking place' },
  { icon: 'lucide:washing-machine', label: 'Laundry' },
  { icon: 'tabler:ironing', label: 'Ironing' },
  { icon: 'lucide:video', label: 'Security cameras' },
  { icon: 'lucide:cigarette-off', label: 'No smoking' },
  { icon: 'lucide:paw-print', label: 'Pets allowed' },
]

const transportation: Transportation[] = [
  { icon: 'lucide:footprints', value: '73/100', label: 'Walkable' },
  { icon: 'lucide:car', value: '97%', label: 'Driveable' },
  { icon: 'lucide:bike', value: '59/100', label: 'Bikeable' },
]

const locationTabs: LocationTab[] = [
  { id: 'transport', icon: 'lucide:tram-front', label: 'Transport', defaultChecked: true },
  { id: 'education', icon: 'lucide:graduation-cap', label: 'Education' },
  { id: 'shopping', icon: 'lucide:shopping-bag', label: 'Shopping' },
  { id: 'food', icon: 'lucide:ice-cream-bowl', label: 'Food' },
  { id: 'parks', icon: 'lucide:tree-deciduous', label: 'Parks' },
]

const agent: AgentInfo = {
  name: 'Liza Williams',
  role: 'Listing agent',
  email: 'liza.williams@example.com',
  phone: '745-854-4264',
  image: avatar01,
}

const Detail = () => {
  return (
    <div className="grid grid-cols-1 gap-6 pt-6 pb-2 md:py-12 lg:grid-cols-3">
      <div className="col-span-1 lg:col-span-2">
        <div className="w-full lg:w-3xl">
          <div className="mb-4 flex items-center justify-between gap-6">
            <div className="flex gap-2">
              <div className="inline-flex items-center rounded bg-info px-2 py-1 text-xs font-medium text-white">
                Verified
                <Icon icon="lucide:shield" className="ms-1" />
              </div>

              <span className="inline-flex rounded bg-primary px-2 py-1 text-xs text-white">New</span>
            </div>

            <div className="flex gap-2">
              <button type="button" className="inline-flex size-10 items-center justify-center">
                <Share2 className="size-4 stroke-2 text-default-700" />
              </button>

              <button type="button" className="inline-flex size-10 items-center justify-center">
                <Heart className="size-4 stroke-2 text-default-700" />
              </button>
            </div>
          </div>

          <div className="mb-2 pb-1 text-xl font-semibold text-default-900 md:text-2.5xl">$1,170</div>

          <p className="mb-2 pb-1 text-sm">67-04 Myrtle Ave Glendale, NY 11385</p>

          <div className="mb-6 flex gap-2">
            <div className="me-2 flex items-center gap-1 text-sm">
              1
              <Icon icon="lucide:bed-single" className="text-base text-default-600" />
            </div>

            <div className="me-2 flex items-center gap-1 text-sm">
              1
              <Icon icon="lucide:shower-head" className="text-base text-default-600" />
            </div>

            <div className="me-2 flex items-center gap-1 text-sm">
              0
              <Icon icon="lucide:car" className="text-base text-default-600" />
            </div>

            <div className="text-sm">42 sq.m</div>
          </div>

          <div className="flex items-center rounded-md border border-default-200 bg-default-100 p-4 text-sm text-default-700 dark:border-white/20 dark:bg-white/3" role="alert">
            <Icon icon="lucide:info" className="me-2 pe-1 text-lg" />
            <div>We estimate this home will sell faster than 94% nearby.</div>
          </div>

          <h2 className="mb-4 pt-10 text-xl font-semibold text-default-900 md:pt-12">About</h2>
          <p className="mb-4 text-sm">
            It offers a comfortable living area leading to a formal dining room, gorgeous hardwood floors throughout, spacious renovated Island kitchen with granite countertops and stainless steel appliances. Additionally, revel in the convenience of a master bedroom featuring a
            built-in dressing room, complemented by a private bath and shower for added comfort. This inviting apartment is conveniently located close to transportation hubs, ensuring easy access to the city's heartbeat.
          </p>
          <h2 className="mb-4 pt-10 text-xl font-semibold text-default-900 md:pt-12">General information</h2>

          <table className="mb-4 w-auto border-collapse text-sm">
            <tbody>
              {propertyDetails.map((item) => (
                <tr key={item.label}>
                  <th scope="row" className="py-2 pe-4 text-start text-sm text-default-900">
                    {item.label}
                  </th>
                  <td className="px-3 py-2 text-body-color">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="mb-4 pt-10 text-xl font-semibold text-default-900 md:pt-12">Amenities</h2>

          <div className="grid grid-cols-2 gap-4 text-sm lg:grid-cols-3">
            {amenities.map((item) => (
              <div key={item.label} className="flex items-center">
                <Icon icon={item.icon} className="me-2 text-lg" />
                {item.label}
              </div>
            ))}
          </div>

          <h2 className="mb-4 pt-10 text-xl font-semibold text-default-900 md:pt-12">Transportation</h2>

          <div className="grid grid-cols-2 gap-4 text-sm lg:grid-cols-3">
            {transportation.map((item) => (
              <div key={item.label} className="flex items-center">
                <Icon icon={item.icon} className="me-2 text-lg" />

                <span>
                  <span className="font-bold">{item.value}</span> {item.label}
                </span>
              </div>
            ))}
          </div>

          <h2 className="mb-4 pt-10 text-xl font-semibold text-default-900 md:pt-12">Location</h2>

          <div className="mb-2 flex gap-2 overflow-x-auto whitespace-nowrap pb-4">
            {locationTabs.map((tab) => (
              <div key={tab.id}>
                <input type="radio" id={tab.id} name="location-tab" className="peer hidden" defaultChecked={tab.defaultChecked} />

                <label
                  htmlFor={tab.id}
                  className="inline-flex cursor-pointer rounded-full border border-default-300 px-5 py-2 text-sm font-semibold hover:border-default-900 hover:bg-default-100 peer-checked:border-default-900 peer-checked:bg-default-100 peer-checked:text-default-800 dark:hover:bg-white/3 peer-checked:dark:border-white peer-checked:dark:bg-white/3"
                >
                  <Icon icon={tab.icon} className="me-2 text-lg" />
                  {tab.label}
                </label>
              </div>
            ))}
          </div>

          <iframe
            className="rounded-md border border-border"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2311.3724100313693!2d-73.82417211551919!3d42.62335692577899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dde016efd1fe73%3A0x6861561b35064fe9!2sGlendale%20Ave!5e0!3m2!1sen!2suk!4v1726842151281!5m2!1sen!2suk"
            width="100%"
            height={350}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map"
          />

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-3 text-sm">
              <div>
                Published: <span className="font-medium text-default-800">Sep 9, 2024</span>
              </div>
              <div>
                Views: <span className="font-medium text-default-800">158</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-1">
        <div className="sticky top-26">
          <div className="rounded-md bg-default-100 p-6 dark:bg-white/3 md:p-8">
            <div className="group mb-6 flex items-center">
              <Link href="/listings/vendor-real-estate">
                <div className="size-20 overflow-hidden rounded-full">
                  <Image src={agent.image} alt={agent.name} className="h-full w-full object-cover" />
                </div>
              </Link>

              <div className="ps-6">
                <h5 className="mb-1 text-xl font-semibold text-default-900">
                  <Link className="group-hover:underline" href="/listings/vendor-real-estate">
                    {agent.name}
                  </Link>
                </h5>

                <p className="text-sm">{agent.role}</p>
              </div>
            </div>

            <ul className="mb-6 flex flex-col gap-2">
              <li className="flex items-center">
                <Icon icon="lucide:mail" className="me-2" />
                <Link href={`mailto:${agent.email}`} className="text-sm font-normal hover:underline">
                  {agent.email}
                </Link>
              </li>

              <li className="flex items-center">
                <Icon icon="lucide:phone" className="me-2" />
                <Link href={`tel:${agent.phone}`} className="text-sm font-normal hover:underline">
                  {agent.phone}
                </Link>
              </li>
            </ul>

            <button type="button" className="inline-flex w-full justify-center rounded-md bg-primary px-6 py-3 font-semibold text-white transition-all duration-300 ease-in-out hover:bg-primary">
              Schedule a tour
            </button>
            <div className="my-2 pt-1 pb-2 text-center text-xs">It's free, cancel anytime</div>
            <div className="mb-4 flex items-center">
              <hr className="w-full border-default-300 dark:border-white/20" />
              <div className="-mt-1 px-4 text-default-600">or</div>
              <hr className="w-full border-default-300 dark:border-white/20" />
            </div>
            <button type="button" className="inline-flex w-full justify-center rounded-md border border-default-900 bg-transparent px-6 py-3 font-semibold text-default-900 transition-all duration-300 ease-in-out hover:bg-default-900 hover:text-body-bg">
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail

import con01 from '@/assets/img/listings/contractors/01.jpg'
import con02 from '@/assets/img/listings/contractors/02.jpg'
import { Icon } from '@iconify/react'
import { Archive, SquarePen, Trash2, Zap } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type ListingStats = {
  views: number
  favorites: number
  calls: number
}

type Listing = {
  id: number
  image: StaticImageData
  category: string
  price: string
  location: string
  completed: string
  createdAt?: string
  stats?: ListingStats
}

const myListings: Listing[] = [
  {
    id: 1,
    image: con01,
    category: 'Renovation',
    price: '$65/hr',
    location: '40 S 9th St, Brooklyn, NY 11249',
    completed: '48 projects',
    createdAt: '05/10/2024',
    stats: {
      views: 1246,
      favorites: 23,
      calls: 8,
    },
  },
  {
    id: 2,
    image: con02,
    category: 'Electrical',
    price: '$70/hr',
    location: '444 Park Ave, Brooklyn, NY 11205',
    completed: '19 projects',
    createdAt: '12/06/2024',
    stats: {
      views: 678,
      favorites: 5,
      calls: 1,
    },
  },
]

const MyListing = () => {
  return (
    <>
      <div className="pb-12 lg:mb-4">
        <div className="mb-6 flex items-start justify-between gap-4">
          <h2 className="text-2xl font-semibold text-default-900 dark:text-white">My listings</h2>

          <Link href="/account/listings" className="flex items-center text-nowrap font-semibold hover:underline">
            View all
            <Icon icon="lucide:chevron-right" className="text-lg" />
          </Link>
        </div>

        <div className="space-y-4">
          {myListings.map((listing) => (
            <div key={listing.id} className="group cursor-pointer rounded-md border border-border md:grid md:grid-cols-4">
              <div className="col-span-1">
                <div className="size-full min-h-43.5 rounded-tl-md rounded-tr-md md:rounded-bl-md md:rounded-tr-none md:pe-2">
                  <Image src={listing.image} className="size-full rounded-tl-md rounded-tr-md object-cover md:rounded-bl-md md:rounded-tr-none" alt={listing.location} />
                </div>
              </div>

              <div className="col-span-3 p-4 md:px-6 md:py-6 md:ps-4">
                <div className="flex w-full justify-between">
                  <div>
                    <div className="mb-2 inline-flex items-center rounded bg-default-100 px-2 py-0.5 text-xs font-medium text-default-900 dark:bg-white/5 dark:text-white">{listing.category}</div>

                    <div className="mb-2 text-xl font-semibold text-default-900 dark:text-white">{listing.price}</div>

                    <Link className="mb-2 block text-sm text-body-color" href="#!">
                      {listing.location}
                    </Link>

                    <div className="text-sm font-semibold text-default-900 dark:text-white">{listing.completed}</div>
                  </div>

                  <div>
                    <div className="mb-4 text-end text-xs">Created: {listing.createdAt}</div>

                    <div className="mb-4 flex justify-end gap-2">
                      <button className="inline-flex w-auto rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-default-600 transition hover:border-default-900">Statistics</button>

                      <div className="hs-dropdown relative inline-flex">
                        <button type="button" className="hs-dropdown-toggle inline-flex size-10 items-center justify-center rounded-md border border-default-300 text-default-600 hover:border-default-900 dark:text-white">
                          <Icon icon="lucide:settings" />
                        </button>

                        <div className="hs-dropdown-menu absolute z-20 mt-2 hidden min-w-45 rounded-lg border border-border bg-body-bg opacity-0 shadow-custom transition-[opacity,margin] duration dark:border-neutral-700 dark:bg-neutral-800 hs-dropdown-open:opacity-100">
                          <div className="space-y-0.5 p-2.5">
                            {[
                              { label: 'Edit', icon: SquarePen },
                              { label: 'Promote', icon: Zap },
                              { label: 'Move to archive', icon: Archive },
                            ].map((item) => (
                              <button key={item.label} className="flex w-full items-center gap-x-2 rounded-lg px-3 py-2 text-sm text-default-800 hover:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700">
                                <item.icon className="size-4" />
                                {item.label}
                              </button>
                            ))}

                            <button className="flex w-full items-center gap-x-2 rounded-lg px-3 py-2 text-sm text-primary hover:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700">
                              <Trash2 className="size-4" />
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="flex flex-row flex-wrap gap-2 text-sm">
                      <li className="me-4 flex items-center">
                        <Icon icon="lucide:eye" className="me-1 text-base" />
                        {listing.stats?.views}
                      </li>

                      <li className="me-4 flex items-center">
                        <Icon icon="lucide:heart" className="me-1 text-base" />
                        {listing.stats?.favorites}
                      </li>

                      <li className="flex items-center">
                        <Icon icon="lucide:phone-incoming" className="me-1 text-base" />
                        {listing.stats?.calls}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MyListing

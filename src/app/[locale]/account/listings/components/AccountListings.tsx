import con01 from '@/assets/img/listings/partners/01.jpg'
import con02 from '@/assets/img/listings/partners/02.jpg'
import con03 from '@/assets/img/listings/partners/03.jpg'
import con04 from '@/assets/img/listings/partners/04.jpg'
import con05 from '@/assets/img/listings/partners/05.jpg'
import { Icon } from '@iconify/react'
import { Archive, SquarePen, Trash2, Zap } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import { Link } from '@/i18n/navigation'

type Listing = {
  id: number
  image: StaticImageData
  category: string
  price: string
  location: string
  completed: string
  createdAt: string
  views: number
  likes: number
  calls: number
  status: string
}

const listingData: Listing[] = [
  {
    id: 1,
    image: con01,
    category: 'Renovation',
    price: '$65/hr',
    location: '40 S 9th St, Brooklyn, NY 11249',
    completed: '48 projects',
    createdAt: '05/10/2024',
    views: 1246,
    likes: 23,
    calls: 8,
    status: 'Statistics',
  },
  {
    id: 2,
    image: con05,
    category: 'Plumbing',
    price: '$50/hr',
    location: '929 Hart St, Brooklyn, NY 11237',
    completed: '31 projects',
    createdAt: '19/05/2024',
    views: 392,
    likes: 7,
    calls: 4,
    status: 'Statistics',
  },
  {
    id: 3,
    image: con02,
    category: 'Electrical',
    price: '$70/hr',
    location: '444 Park Ave, Brooklyn, NY 11205',
    completed: '19 projects',
    createdAt: '12/06/2024',
    views: 678,
    likes: 5,
    calls: 1,
    status: 'Statistics',
  },
  {
    id: 4,
    image: con04,
    category: 'Roofing',
    price: '$-.--',
    location: '517 82nd St, Brooklyn, NY 11209',
    completed: '0 projects',
    createdAt: '13/12/2024',
    views: 0,
    likes: 0,
    calls: 0,
    status: 'Finish and publish',
  },
  {
    id: 5,
    image: con03,
    category: 'Painting',
    price: '$40/hr',
    location: '67-04 Myrtle Ave Glendale, NY 11385',
    completed: '12 projects',
    createdAt: '09/11/2024',
    views: 0,
    likes: 0,
    calls: 0,
    status: 'publish',
  },
]

const AccountListings = () => {
  return (
    <>
      <div className="lg:col-span-9 col-span-1">
        <h1 className="mb-4 pb-4 lg:text-3.5xl md:text-2.5xl text-2xl font-semibold text-default-900">My listings</h1>
        <div className="overflow-auto whitespace-nowrap">
          <nav className="flex gap-2 pb-2 mb-1" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
            <button
              type="button"
              className="hs-tab-active:border-default-900 hs-tab-active:bg-default-100 hs-tab-active:dark-bg-white/3 rounded-full border border-border py-2 px-5 text-sm font-semibold text-body-color hover:border-default-900 active"
              id="published-tab"
              aria-selected="true"
              data-hs-tab="#published"
              aria-controls="published"
              role="tab"
            >
              Published (3)
            </button>
            <button
              type="button"
              className="hs-tab-active:border-default-900 hs-tab-active:bg-default-100 hs-tab-active:dark-bg-white/3 rounded-full border border-border py-2 px-5 text-sm font-semibold text-body-color hover:border-default-900"
              id="drafts-tab"
              aria-selected="false"
              data-hs-tab="#drafts"
              aria-controls="drafts"
              role="tab"
            >
              Drafts (2)
            </button>
            <button
              type="button"
              className="hs-tab-active:border-default-900 hs-tab-active:bg-default-100 hs-tab-active:dark-bg-white/3 rounded-full border border-border py-2 px-5 text-sm font-semibold text-body-color hover:border-default-900 bg-transparent"
              id="archived-tab"
              aria-selected="false"
              data-hs-tab="#archived"
              aria-controls="archived"
              role="tab"
            >
              Archived (0)
            </button>
          </nav>
        </div>
        <div className="mt-3">
          <div id="published" role="tabpanel" aria-labelledby="published-tab">
            <div className="flex items-center mb-4">
              <div className="mb-6 mt-2">
                <div className="flex flex-col gap-2">
                  <div className="flex md:gap-6 gap-4 flex-wrap">
                    <label htmlFor="published-master" className="flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
                      <input type="checkbox" id="published-master" className="w-4 h-4 checked:text-dark text-sm border-default-300 dark:border-white/20 rounded me-2" defaultChecked />
                      Unselect all
                    </label>
                    <Link href="" className="flex items-center">
                      <Zap className="size-4 me-2" />
                      <span className="hover:underline text-sm font-semibold">Promote</span>
                    </Link>
                    <Link href="" className="flex items-center">
                      <Archive className="size-4 me-2" />
                      <span className="hover:underline text-sm font-semibold">Move to archive</span>
                    </Link>
                    <Link href="" className="flex text-primary">
                      <Trash2 className="size-4 me-2" />
                      <span className="hover:underline text-sm font-semibold">Delete</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {listingData.slice(0, 3).map((item, idx) => (
              <div className="md:flex gap-4 relative" key={idx}>
                <label htmlFor="published-master" className="md:flex hidden items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
                  <input type="checkbox" id="published-master" className="size-4 checked:text-dark dark:bg-body-bg text-sm border-default-300 rounded me-2" />
                </label>
                <div className="absolute top-0 start-0 z-10 flex-col gap-1 mt-2 ms-2 size-8 bg-body-bg rounded-md flex justify-center items-center">
                  <label htmlFor="published-master" className="md:hidden flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
                    <input type="checkbox" id="published-master" className="w-4 h-4 bg-transparent checked:text-dark text-sm border-default-300 dark:border-white/20 rounded" />
                  </label>
                </div>
                <div className="absolute top-0 start-0 z-10 flex-col gap-1 mt-2 ms-2 size-8 bg-body-bg rounded-md flex justify-center items-center">
                  <label htmlFor="published-master" className="md:hidden flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
                    <input type="checkbox" id="published-master" className="w-4 h-4 bg-transparent checked:text-dark text-sm border-default-300 dark:border-white/20 rounded" />
                  </label>
                </div>
                <div className="group cursor-pointer border border-border rounded-md md:grid grid-cols-4 mb-4">
                  <div className="col-span-1">
                    <div className="min-h-43.5 size-full rounded-tl-md md:rounded-bl-md md:rounded-tr-none rounded-bl-none rounded-tr-md md:pe-2">
                      <Image src={item.image} className="size-full rounded-tl-md md:rounded-bl-md md:rounded-tr-none rounded-bl-none rounded-tr-md object-cover" alt="Image" />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="md:py-6 md:ps-4 md:pe-6 p-4 flex justify-between items-center w-full">
                      <div>
                        <div className="bg-default-100 mb-2 dark:bg-white/3 text-default-900 text-xs inline-flex item-center font-medium px-2 py-0.5 rounded items-center">{item.category}</div>
                        <div className="text-xl font-semibold text-default-900 mb-2">{item.price}</div>
                        <Link className="text-sm block mb-2" href="">
                          {item.location}
                        </Link>
                        <div className="text-default-900 text-sm font-semibold">{item.completed}</div>
                      </div>
                      <div>
                        <div className="text-xs mb-4 text-end">Created: {item.createdAt}</div>
                        <div className="mb-4 flex gap-2 justify-end">
                          <button className="py-2.5 px-5 w-auto text-sm text-default-600 rounded-md border border-border transition hover:border-default-900 inline-flex font-semibold">{item.status}</button>
                          <div className="hs-dropdown relative inline-flex">
                            <button
                              type="button"
                              className="hs-dropdown-toggle inline-flex items-center justify-center rounded-md border border-default-300 size-10 text-default-600  focus:outline-hidden hover:border-default-900 dark:text-white"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              aria-label="Share"
                            >
                              <Icon icon="lucide:settings" />
                            </button>
                            <div
                              className="hs-dropdown-menu hidden transition-[opacity,margin] duration opacity-0 hs-dropdown-open:opacity-100 absolute z-20 min-w-45 bg-body-bg border border-border shadow-custom rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
                              role="menu"
                              aria-orientation="vertical"
                            >
                              <div className="p-2.5 space-y-0.5">
                                <Link
                                  href=""
                                  className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-default-800 hover:bg-default-100 focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                                >
                                  <SquarePen className="size-4" />
                                  Edit
                                </Link>
                                <Link
                                  href=""
                                  className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-default-800 hover:bg-default-100 focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                                >
                                  <Zap className="size-4" />
                                  Promote
                                </Link>
                                <Link
                                  href=""
                                  className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-default-800 hover:bg-default-100 focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                                >
                                  <Archive className="size-4" />
                                  Move to archive
                                </Link>
                                <Link
                                  href=""
                                  className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-primary hover:bg-default-100 focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                                >
                                  <Trash2 className="size-4" />
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <ul className="flex flex-row gap-2 flex-wrap text-sm">
                          <li className="flex items-center md:me-4 me-2">
                            <Icon icon="lucide:eye" className="text-base me-1" />
                            {item.views}
                          </li>
                          <li className="flex items-center md:me-4 me-2">
                            <Icon icon="lucide:heart" className="text-base me-1" />
                            {item.likes}
                          </li>
                          <li className="flex items-center">
                            <Icon icon="lucide:phone-incoming" className="text-base me-1" />
                            {item.calls}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div id="drafts" className="hidden" role="tabpanel" aria-labelledby="drafts-tab">
            <div className="flex items-center mb-4">
              <div className="mb-6 mt-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="published-master" className="flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
                    <input type="checkbox" id="published-master" className="size-4 checked:text-dark dark:bg-body-bg text-sm border-default-300 rounded me-2" defaultChecked />
                    Select all the ads to apply the same action to them
                  </label>
                </div>
              </div>
            </div>
               {listingData.slice(3, 5).map((item, idx) => (
              <div className="md:flex gap-4 relative" key={idx}>
                <label htmlFor="published-master" className="md:flex hidden items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
                  <input type="checkbox" id="published-master" className="size-4 checked:text-dark dark:bg-body-bg text-sm border-default-300 rounded me-2" />
                </label>
                <div className="absolute top-0 start-0 z-10 flex-col gap-1 mt-2 ms-2 size-8 bg-body-bg rounded-md flex justify-center items-center">
                  <label htmlFor="published-master" className="md:hidden flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
                    <input type="checkbox" id="published-master" className="w-4 h-4 bg-transparent checked:text-dark text-sm border-default-300 dark:border-white/20 rounded" />
                  </label>
                </div>
                <div className="absolute top-0 start-0 z-10 flex-col gap-1 mt-2 ms-2 size-8 bg-body-bg rounded-md flex justify-center items-center">
                  <label htmlFor="published-master" className="md:hidden flex items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
                    <input type="checkbox" id="published-master" className="w-4 h-4 bg-transparent checked:text-dark text-sm border-default-300 dark:border-white/20 rounded" />
                  </label>
                </div>
                <div className="group cursor-pointer border border-border rounded-md md:grid grid-cols-4 mb-4">
                  <div className="col-span-1">
                    <div className="min-h-43.5 size-full rounded-tl-md md:rounded-bl-md md:rounded-tr-none rounded-bl-none rounded-tr-md md:pe-2">
                      <Image src={item.image} className="size-full rounded-tl-md md:rounded-bl-md md:rounded-tr-none rounded-bl-none rounded-tr-md object-cover" alt="Image" />
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="md:py-6 md:ps-4 md:pe-6 p-4 flex justify-between items-center w-full">
                      <div>
                        <div className="bg-default-100 mb-2 dark:bg-white/3 text-default-900 text-xs inline-flex item-center font-medium px-2 py-0.5 rounded items-center">{item.category}</div>
                        <div className="text-xl font-semibold text-default-900 mb-2">{item.price}</div>
                        <Link className="text-sm block mb-2" href="">
                          {item.location}
                        </Link>
                        <div className="text-default-900 text-sm font-semibold">{item.completed}</div>
                      </div>
                      <div>
                        <div className="text-xs mb-4 text-end">Created: {item.createdAt}</div>
                        <div className="mb-4 flex gap-2 justify-end">
                          <button className="py-2.5 px-5 w-auto text-sm text-default-600 rounded-md border border-border transition hover:border-default-900 inline-flex font-semibold">{item.status}</button>
                          <div className="hs-dropdown relative inline-flex">
                            <button
                              type="button"
                              className="hs-dropdown-toggle inline-flex items-center justify-center rounded-md border border-default-300 size-10 text-default-600  focus:outline-hidden hover:border-default-900 dark:text-white"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              aria-label="Share"
                            >
                              <Icon icon="lucide:settings" />
                            </button>
                            <div
                              className="hs-dropdown-menu hidden transition-[opacity,margin] duration opacity-0 hs-dropdown-open:opacity-100 absolute z-20 min-w-45 bg-body-bg border border-border shadow-custom rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
                              role="menu"
                              aria-orientation="vertical"
                            >
                              <div className="p-2.5 space-y-0.5">
                                <Link
                                  href=""
                                  className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-default-800 hover:bg-default-100 focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                                >
                                  <SquarePen className="size-4" />
                                  Edit
                                </Link>
                                <Link
                                  href=""
                                  className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-default-800 hover:bg-default-100 focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                                >
                                  <Zap className="size-4" />
                                  Promote
                                </Link>
                                <Link
                                  href=""
                                  className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-default-800 hover:bg-default-100 focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                                >
                                  <Archive className="size-4" />
                                  Move to archive
                                </Link>
                                <Link
                                  href=""
                                  className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-primary hover:bg-default-100 focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                                >
                                  <Trash2 className="size-4" />
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <ul className="flex flex-row gap-2 flex-wrap text-sm">
                          <li className="flex items-center md:me-4 me-2">
                            <Icon icon="lucide:eye" className="text-base me-1" />
                            {item.views}
                          </li>
                          <li className="flex items-center md:me-4 me-2">
                            <Icon icon="lucide:heart" className="text-base me-1" />
                            {item.likes}
                          </li>
                          <li className="flex items-center">
                            <Icon icon="lucide:phone-incoming" className="text-base me-1" />
                            {item.calls}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div id="archived" className="hidden" role="tabpanel" aria-labelledby="archived-tab">
            <h2 className="text-default-900 font-semibold pt-2 mb-2">You have no archived ads</h2>
            <p className="text-sm mb-6" style={{ maxWidth: 640 }}>
              This means all your active ads are still visible to users. Archiving ads helps you retain your information even when it's temporarily inactive.
            </p>
            <button type="button" className="flex items-center py-2.5 px-5 text-body-bg bg-default-800 hover:bg-default-900 text-sm rounded-md">
              <Archive className="size-4 me-2" /> Archive ad
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountListings

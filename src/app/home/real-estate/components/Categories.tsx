import { Icon } from '@iconify/react'
import Link from 'next/link'

type Category = {
  title: string
  count: string
}

const categories: Category[] = [
  { title: 'Houses', count: '6.4k offers' },
  { title: 'Apartments', count: '12.8K offers' },
  { title: 'Commercial', count: '9.3K offers' },
  { title: 'Daily rental', count: '42.4K offers' },
  { title: 'New buildings', count: '3.2K offers' },
]

const Categories = () => {
  return (
    <>
      <section className="md:py-12 py-12">
        <div className="container">
          <div className="border border-border lg:py-6 py-4 rounded-md">
            <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2">
              {categories.map((item, idx) => (
                <div className="py-2 group" key={idx}>
                  <div className="flex-col items-center py-2 px-4 border-e border-border ">
                    <h3 className="text-default-900 text-center mb-2 text-xl font-semibold">
                      <Link className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300" href="/listings/real-estate">
                        {item.title}
                      </Link>
                    </h3>
                    <div className="flex items-center justify-center gap-1 text-sm text-body-color">
                      <Icon icon="lucide:bookmark" className="text-base" />
                      {item.count}
                    </div>
                  </div>
                </div>
              ))}
              <div className="py-2 group">
                <div className="flex flex-col items-center justify-center hs-dropdown relative py-2 px-4 [--auto-close:inside]">
                  <h3 className="text-default-900 text-center text-xl font-semibold">
                    <button aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" className="flex flex-col items-center ">
                      More
                      <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </h3>
                  <div className="hs-dropdown-menu transition-[opacity,margin] duration-200 px-4 py-3 my-2 hs-dropdown-open:opacity-100 opacity-0 hidden w-auto absolute start-1/2 -translate-x-1/2 mt-2 bg-body-bg border border-border shadow-custom rounded-lg z-40">
                    <Link className="block py-2 px-4 text-sm text-default-800 hover:bg-default-100 rounded-md" href="">
                      Offices
                    </Link>
                    <Link className="block py-2 px-4 text-sm text-default-800 hover:bg-default-100 rounded-md" href="">
                      Warehouses
                    </Link>
                    <Link className="block py-2 px-4 text-sm text-default-800 hover:bg-default-100 rounded-md" href="">
                      Retail spaces
                    </Link>
                    <Link className="block py-2 px-4 text-sm text-default-800 hover:bg-default-100 rounded-md" href="">
                      Townhouses
                    </Link>
                    <Link className="block py-2 px-4 text-sm text-default-800 hover:bg-default-100 rounded-md" href="">
                      Vacation homes
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Categories

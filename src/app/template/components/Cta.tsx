import { Icon } from '@iconify/react'
import Link from 'next/link'

const Cta = () => {
  return (
    <>
      <section className="pt-12 lg:mt-12 md:mt-6 mt-3">
        <div className="container">
          <div className="bg-info rounded-xl md:p-12 py-12 px-6">
            <div className="md:py-4 lg:my-4 text-center">
              <p className="text-xl text-white pb-2 mb-1">Still not convinced?</p>
              <h2 className="text-white mb-4 pb-4 lg:text-3.5xl text-2xl md:text-2.5xl">Add premium support and lifetime updates to this.</h2>
              <Link className="py-3.5 px-6 text-white font-semibold inline-flex items-center rounded-md bg-primary transition-all duration-300 hover:bg-primary-hover" href="#!" target="_blank" rel="noreferrer">
                <Icon icon="lucide:shopping-bag" className="text-base me-2" />
                Buy now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cta

import introdark from '@/assets/img/intro/pages-dark.png'
import introlight from '@/assets/img/intro/pages-light.png'
import { Icon } from '@iconify/react'
import Image from 'next/image'

const features: string[] = [
  'Multiple Listings Layout Options',
  'Multiple Listing Detail Page Variations',
  'Complete User Workflow for: Add Property, Add Contractor and Add (Sell) Car',
  'User and Vendor Account Pages',
  'Real Estate, Cars, Contractors, Doctors, Events and City Guide Demos',
  'Blog Pages: Blog Layouts + Single Articles',
  'Help Center / Support Pages',
  'Secondary Pages: About, Contacts, 404, etc.',
  '60+ Flexible Components (UI Kit)',
]

const FrontEndSolution = () => {
  return (
    <>
      <section className="py-12 lg:my-12 md:my-6 my-3">
        <div className="container">
          <h2 className="lg:pt-6 mb-4 lg:text-4.5xl md:text-3.5xl text-2.5xl text-default-900 font-semibold text-center">Complete Front-end Solution</h2>
          <p className="text-lg md:pb-12 mb-6 lg:mb-6 text-center">All you need for your next directory or listings project</p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center">
            <div>
              <Image src={introlight} className="block dark:hidden" alt="Listings Front-end" />
              <Image src={introdark} className="hidden dark:block" alt="Listings Front-end" />
            </div>
            <div className="lg:w-[500px] w-full ms-auto">
              <ul className="flex flex-col gap-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex">
                    <div>
                      <Icon icon="lucide:check" className="text-info text-lg mt-1 me-2" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FrontEndSolution

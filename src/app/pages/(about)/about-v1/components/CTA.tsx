import cta from '@/assets/img/about/v1/account-cta.jpg'
import { Icon } from '@iconify/react'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type AccordionItem = {
  id: string
  title: string
  description: string
  active?: boolean
}

const accordionItems: AccordionItem[] = [
  {
    id: 'createAccount',
    title: '1. Create your account',
    active: true,
    description: 'Sign up quickly with your email or social media account. Add your company logo, contact information, and a brief bio to establish credibility. Get an intuitive dashboard to manage all your property listings and client interactions in one place.',
  },
  {
    id: 'addListings',
    title: '2. Add your property listings',
    description: 'Easily upload your property details, photos, and descriptions to attract potential buyers or renters. Our platform supports various property types, from residential to commercial. Use our advanced tools to set prices and highlight key features.',
  },
  {
    id: 'increaseVisibility',
    title: '3. Increase your visibility',
    description: "Maximize your property's exposure with our targeted marketing tools. Promote your listings across social media, email campaigns, and real estate networks with just a few clicks. Our SEO-friendly platform ensures your properties rank high.",
  },
  {
    id: 'clientsConnect',
    title: '4. Connect with potential clients',
    description: 'Engage with interested buyers or renters directly through our platform. Use the built-in messaging system to answer inquiries, schedule viewings, and negotiate deals. Track client interactions and stay on top of every lead.',
  },
]

const CTA = () => {
  return (
    <section className="lg:py-12 md:pt-6 pt-4 pb-12 lg:my-4">
      <div className="container">
        <h2 className="lg:mb-12 md:mb-8 mb-4 lg:text-4.5xl md:text-3.5xl text-2.5xl font-semibold text-default-900" style={{ maxWidth: 525 }}>
          Get new customers with Finder easily!
        </h2>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <div className="w-full h-full max-w-141 rounded-md overflow-hidden md:block hidden">
            <Image src={cta} alt="Account CTA" className="w-full h-full object-cover" />
          </div>

          <div>
            <div className="hs-accordion-group">
              {accordionItems.map((item) => (
                <div key={item.id} className={`hs-accordion group ${item.active ? 'active' : ''}`} id={`heading-${item.id}`}>
                  <button className="hs-accordion-toggle inline-flex justify-between items-center gap-x-3 w-full text-start text-xl font-semibold text-default-900 py-5" aria-expanded={item.active ? 'true' : 'false'} aria-controls={item.id}>
                    <span className="relative text-default-900 font-semibold after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-100">
                      {item.title}
                    </span>

                    <div className="flex items-center">
                      <Icon icon="lucide:chevron-down" className="hs-accordion-active:hidden block size-5 text-default-800" />
                      <Icon icon="lucide:chevron-up" className="hs-accordion-active:block hidden size-5 text-default-800" />
                    </div>
                  </button>

                  <div id={item.id} className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${item.active ? '' : 'hidden'}`} role="region" aria-labelledby={`heading-${item.id}`}>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:pt-12 pt-8">
              <div className="flex gap-6 items-center flex-wrap">
                <Link href="/account/auth/signup" className="py-3.5 px-6 rounded-md text-nowrap bg-primary text-white inline-flex items-center font-semibold transition-all duration-300 hover:bg-primary-hover">
                  Create an account
                  <ChevronRight className="size-4.5 ms-1" />
                </Link>

                <div className="flex items-center text-secondary text-sm">
                  <Icon icon="lucide:clock" className="text-base me-2" />5 min to complete
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

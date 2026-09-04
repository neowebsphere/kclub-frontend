'use client'
import { Icon } from '@iconify/react'
import { Link } from '@/i18n/navigation'
import { useState } from 'react'

type TopicItem = {
  id: number
  title: string
  href: string
}

type HelpTopicData = {
  id: string
  label: string
  title: string
  topics: TopicItem[]
}

const helpTopics: HelpTopicData[] = [
  {
    id: 'accommodation',
    label: 'Accomodation',
    title: 'Accommodation',
    topics: [
      { id: 1, title: 'What is included in my rental accommodation?', href: '/help/article' },
      { id: 2, title: 'Are utilities like water, electricity, and internet included in the rent?', href: '/help/article' },
      { id: 3, title: 'Can I view the property before I move in?', href: '/help/article' },
      { id: 4, title: 'What furniture is provided with the accommodation?', href: '/help/article' },
      { id: 5, title: 'Are pets allowed in the accommodation?', href: '/help/article' },
      { id: 6, title: 'Is smoking permitted inside the property?', href: '/help/article' },
      { id: 7, title: 'How do I report maintenance issues or repairs needed in the accommodation?', href: '/help/article' },
      { id: 8, title: 'What should I do if something in the property is damaged when I move in?', href: '/help/article' },
      { id: 9, title: 'Are there any restrictions on guests staying over?', href: '/help/article' },
      { id: 10, title: 'Can I make modifications or decorate the property?', href: '/help/article' },
      { id: 11, title: 'How is the security of the property managed?', href: '/help/article' },
      { id: 12, title: 'What is the procedure for renewing my lease?', href: '/help/article' },
    ],
  },
  {
    id: 'booking',
    label: 'Booking',
    title: 'Booking',
    topics: [
      { id: 1, title: 'How do I book a property on the website?', href: '/help/article' },
      { id: 2, title: 'What documents do I need to provide to make a booking?', href: '/help/article' },
      { id: 3, title: 'Can I book a property for a short-term stay?', href: '/help/article' },
      { id: 4, title: 'How do I know if my booking is confirmed?', href: '/help/article' },
      { id: 5, title: 'What are the payment options available for booking?', href: '/help/article' },
      { id: 6, title: 'Can I book a property on behalf of someone else?', href: '/help/article' },
      { id: 7, title: 'What happens if the property I booked becomes unavailable?', href: '/help/article' },
      { id: 8, title: "Can I change the dates of my booking after it's confirmed?", href: '/help/article' },
      { id: 9, title: 'Do I need to pay a deposit when making a booking?', href: '/help/article' },
      { id: 10, title: 'How long does it take to process my booking?', href: '/help/article' },
      { id: 11, title: 'What is the policy for last-minute bookings?', href: '/help/article' },
      { id: 12, title: 'Is there a minimum stay requirement for bookings?', href: '/help/article' },
    ],
  },
  {
    id: 'payment',
    label: 'Payment',
    title: 'Payment',
    topics: [
      { id: 1, title: 'What payment methods are accepted?', href: '/help/article' },
      { id: 2, title: 'When is my rent due?', href: '/help/article' },
      { id: 3, title: 'Can I set up automatic payments for my rent?', href: '/help/article' },
      { id: 4, title: 'Are there any fees associated with late payments?', href: '/help/article' },
      { id: 5, title: 'How do I pay my rent online?', href: '/help/article' },
      { id: 6, title: "What should I do if I'm unable to make a payment on time?", href: '/help/article' },
      { id: 7, title: 'Is there a grace period for rent payments?', href: '/help/article' },
      { id: 8, title: 'How do I receive a receipt for my payment?', href: '/help/article' },
      { id: 9, title: 'Can I split my payment into multiple transactions?', href: '/help/article' },
      { id: 10, title: 'What happens if my payment fails or is declined?', href: '/help/article' },
      { id: 11, title: 'Can I pay my rent in advance?', href: '/help/article' },
      { id: 12, title: 'Are there any discounts for early or lump-sum payments?', href: '/help/article' },
    ],
  },
  {
    id: 'after-booking',
    label: 'After a booking',
    title: 'After a booking',
    topics: [
      { id: 1, title: 'How do I collect the keys for my accommodation?', href: '/help/article' },
      { id: 2, title: 'What should I do upon arrival at the property?', href: '/help/article' },
      { id: 3, title: 'Who do I contact if I have any issues after moving in?', href: '/help/article' },
      { id: 4, title: 'How do I set up utilities like electricity and internet?', href: '/help/article' },
      { id: 5, title: 'What is the process for checking in to the property?', href: '/help/article' },
      { id: 6, title: 'Can I request additional services after moving in?', href: '/help/article' },
      { id: 7, title: 'How do I update my contact information or other details after booking?', href: '/help/article' },
      { id: 8, title: 'What is the procedure if I need repairs or maintenance?', href: '/help/article' },
      { id: 9, title: 'How do I report issues with my neighbors?', href: '/help/article' },
      { id: 10, title: 'Who is responsible for property maintenance during my stay?', href: '/help/article' },
      { id: 11, title: 'Can I upgrade or change my accommodation after booking?', href: '/help/article' },
      { id: 12, title: 'How do I renew my lease if I want to stay longer?', href: '/help/article' },
    ],
  },
  {
    id: 'cancellation',
    label: 'Cancellation, Notice & Extension',
    title: 'Cancellation, Notice & Extension',
    topics: [
      { id: 1, title: 'What is the process for canceling my booking?', href: '/help/article' },
      { id: 2, title: 'Is there a penalty for canceling my booking?', href: '/help/article' },
      { id: 3, title: 'How much notice do I need to give before moving out?', href: '/help/article' },
      { id: 4, title: 'Can I extend my stay after the initial booking period?', href: '/help/article' },
      { id: 5, title: 'What happens if I need to leave before my lease ends?', href: '/help/article' },
      { id: 6, title: 'How do I request a lease extension?', href: '/help/article' },
      { id: 7, title: 'Will I get a refund if I cancel my booking?', href: '/help/article' },
      { id: 8, title: 'What is the policy on early termination of the lease?', href: '/help/article' },
      { id: 9, title: 'How do I provide notice if I plan to vacate the property?', href: '/help/article' },
      { id: 10, title: 'Can I transfer my lease to someone else if I need to move?', href: '/help/article' },
      { id: 11, title: 'What happens if the property owner cancels my booking?', href: '/help/article' },
      { id: 12, title: 'Is there a fee for extending my stay?', href: '/help/article' },
    ],
  },
  {
    id: 'regulations',
    label: 'Regulations',
    title: 'Regulations',
    topics: [
      { id: 1, title: 'What are the local laws regarding renting accommodation?', href: '/help/article' },
      { id: 2, title: 'Are there any noise regulations I need to follow?', href: '/help/article' },
      { id: 3, title: 'What are the rules regarding waste disposal and recycling?', href: '/help/article' },
      { id: 4, title: 'Are there any specific regulations for pet owners?', href: '/help/article' },
      { id: 5, title: 'Do I need to register with local authorities after moving in?', href: '/help/article' },
      { id: 6, title: 'What are the parking regulations for tenants?', href: '/help/article' },
      { id: 7, title: 'Are there restrictions on the type of activities I can conduct in the property?', href: '/help/article' },
      { id: 8, title: 'What should I do if I receive a notice of violation?', href: '/help/article' },
      { id: 9, title: 'Are there any occupancy limits for the property?', href: '/help/article' },
      { id: 10, title: 'What are the fire safety regulations I need to follow?', href: '/help/article' },
      { id: 11, title: 'How are disputes with landlords or neighbors handled legally?', href: '/help/article' },
      { id: 12, title: 'What are the rules for subletting the property?', href: '/help/article' },
    ],
  },
  {
    id: 'insurances',
    label: 'Insurances',
    title: 'Insurances',
    topics: [
      { id: 1, title: "Do I need renter's insurance?", href: '/help/article' },
      { id: 2, title: "What does renter's insurance cover?", href: '/help/article' },
      { id: 3, title: "Is renter's insurance included in my rent?", href: '/help/article' },
      { id: 4, title: 'How do I choose the right insurance policy for my needs?', href: '/help/article' },
      { id: 5, title: 'What happens if my belongings are damaged or stolen?', href: '/help/article' },
      { id: 6, title: "Does the property owner's insurance cover tenant belongings?", href: '/help/article' },
      { id: 7, title: "How do I file a claim with my renter's insurance?", href: '/help/article' },
      { id: 8, title: "What is the cost of renter's insurance?", href: '/help/article' },
      { id: 9, title: 'Do I need additional insurance for valuable items?', href: '/help/article' },
      { id: 10, title: 'What is the process for transferring my insurance if I move?', href: '/help/article' },
      { id: 11, title: 'Is insurance required by law for tenants?', href: '/help/article' },
      { id: 12, title: "How does renter's insurance differ from homeowner's insurance?", href: '/help/article' },
    ],
  },
]

const HelpTopic = () => {
  const [activeTab, setActiveTab] = useState<string>('accommodation')

  const activeContent = helpTopics.find((item) => item.id === activeTab)

  return (
    <section className="mb-12 lg:pb-12 md:pb-8">
      <div className="container">
        <ul className="flex flex-wrap md:gap-4 gap-2 lg:mb-12 mb-10">
          <li>
            <button type="button" className="py-2.5 px-5 inline-flex rounded-full text-default-900 border border-default-900 bg-default-100 dark:bg-white/5 text-sm font-semibold">
              For tenants
            </button>
          </li>

          <li>
            <button type="button" className="py-2.5 px-5 inline-flex rounded-full text-default-900 border border-default-300 dark:border-white/20 hover:border-default-900 transition-all duration-300 text-sm font-semibold">
              For hosts
            </button>
          </li>
        </ul>

        <div className="grid md:grid-cols-12 grid-cols-1 md:gap-0 gap-8">
          <div className="lg:col-span-3 md:col-span-4">
            <h2 className="md:pb-6 pb-4 text-xl text-default-900 font-semibold border-b border-border">Help topics</h2>

            <nav className="flex flex-col gap-1 pt-6 pe-6">
              {helpTopics.map((topic) => (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => setActiveTab(topic.id)}
                  className={`py-2.5 px-4 w-full rounded inline-flex items-center text-start font-semibold transition-all duration-300 ${activeTab === topic.id ? 'bg-default-100 dark:bg-white/5 text-default-900' : 'text-default-700 hover:bg-default-100 dark:hover:bg-white/5'}`}
                >
                  {topic.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-9 md:col-span-8">
            <div>
              <h2 className="md:pb-6 pb-4 md:ps-6 text-xl text-default-900 font-semibold border-b border-border">{activeContent?.title}</h2>

              <ul className="md:border-s border-border md:ps-6 pt-6 flex flex-col gap-4">
                {activeContent?.topics.map((topic) => (
                  <li key={topic.id}>
                    <Link href={topic.href} className="flex items-start text-base font-normal py-1 text-default-800 hover:text-default-900 transition-all duration-300">
                      <Icon icon="lucide:chevron-right" className="text-lg me-2 mt-0.5 flex-shrink-0" />

                      <span className="hover:underline transition-all duration-300">{topic.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-4">
          <h3 className="text-base font-semibold text-default-900 pb-1 mb-4">Can&apos;t find an answer to your question?</h3>

          <Link href="/contact" className="bg-primary text-white py-3.5 px-6 rounded-md font-semibold inline-flex transition-all duration-300 hover:bg-primary-hover">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HelpTopic

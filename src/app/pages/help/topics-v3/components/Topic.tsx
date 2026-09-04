'use client'
import { Icon } from '@iconify/react'
import Link from 'next/link'

type TopicLinkType = {
  label: string
  href: string
}

type TopicCardType = {
  title: string
  links: TopicLinkType[]
  moreLinks: TopicLinkType[]
  collapseId: string
}

const topicTabs: TopicLinkType[] = [
  { label: 'For patients', href: '' },
  { label: 'For doctors', href: '' },
]

const topicData: TopicCardType[] = [
  {
    title: 'Search and navigation',
    collapseId: 'search-navigation',
    links: [
      { label: 'What is included in my rental accommodation?', href: '/pages/help/single-article-v3' },
      { label: 'Navigating the doctor directory', href: '/pages/help/single-article-v3' },
      { label: 'Filtering options for doctor search', href: '/pages/help/single-article-v3' },
      { label: 'How to schedule an appointment online', href: '/pages/help/single-article-v3' },
      { label: 'Availability and waitlist information', href: '/pages/help/single-article-v3' },
    ],
    moreLinks: [
      { label: 'Search for doctors by specialty and location', href: '/pages/help/single-article-v3' },
      { label: 'Using the map view to find nearby doctors', href: '/pages/help/single-article-v3' },
      { label: 'Using advanced search features for better results', href: '/pages/help/single-article-v3' },
    ],
  },
  {
    title: 'Appointment booking',
    collapseId: 'appointment-booking',
    links: [
      { label: 'How to schedule an appointment online', href: '/pages/help/single-article-v3' },
      { label: 'Managing and cancelling appointments', href: '/pages/help/single-article-v3' },
      { label: 'Availability and waitlist information', href: '/pages/help/single-article-v3' },
      { label: 'Verifying insurance coverage for a doctor', href: '/pages/help/single-article-v3' },
      { label: 'Billing and payment information', href: '/pages/help/single-article-v3' },
    ],
    moreLinks: [
      { label: 'Managing and rescheduling your appointments', href: '/pages/help/single-article-v3' },
      { label: 'Different types of appointments: In-person vs. Telehealth', href: '/pages/help/single-article-v3' },
      { label: 'How to book an appointment for someone else', href: '/pages/help/single-article-v3' },
    ],
  },
  {
    title: 'Specialties and services',
    collapseId: 'specialties-services',
    links: [
      { label: 'Exploring different medical specialties', href: '/pages/help/single-article-v3' },
      { label: 'Finding doctors for specific services', href: '/pages/help/single-article-v3' },
      { label: 'Researching doctors based on expertise', href: '/pages/help/single-article-v3' },
      { label: 'Utilizing telehealth services', href: '/pages/help/single-article-v3' },
      { label: 'Technical requirements for virtual visits', href: '/pages/help/single-article-v3' },
    ],
    moreLinks: [
      { label: 'Understanding medical specialties', href: '/pages/help/single-article-v3' },
      { label: 'Find doctors offering specific services or treatments', href: '/pages/help/single-article-v3' },
      { label: 'Finding a team of specialists for comprehensive treatment', href: '/pages/help/single-article-v3' },
    ],
  },
  {
    title: 'Doctor-patient communication',
    collapseId: 'doctor-patient-communication',
    links: [
      { label: 'Communicating with your doctor online', href: '/pages/help/single-article-v3' },
      { label: 'Secure messaging and consultations', href: '/pages/help/single-article-v3' },
      { label: 'Obtaining test results', href: '/pages/help/single-article-v3' },
      { label: 'Verifying insurance coverage for a doctor', href: '/pages/help/single-article-v3' },
      { label: "Understanding doctor's treatment instructions", href: '/pages/help/single-article-v3' },
    ],
    moreLinks: [
      { label: 'How to send and receive messages with your doctor', href: '/pages/help/single-article-v3' },
      { label: 'What to discuss during your appointment', href: '/pages/help/single-article-v3' },
      { label: 'Using video and chat features for telehealth appointments', href: '/pages/help/single-article-v3' },
    ],
  },
]

const Topic = () => {
  return (
    <section className="lg:py-12 pt-6 pb-12 mt-6">
      <div className="container">
        <ul className="flex md:gap-4 gap-2 mb-4 pb-4">
          {topicTabs.map((tab, idx) => (
            <li key={tab.label}>
              <Link
                href={tab.href}
                className={`py-2.5 px-5 inline-flex rounded-full text-sm font-semibold transition-all duration-300 ${
                  idx === 0 ? 'text-default-900 border border-default-900 bg-default-100 dark:bg-white/3' : 'text-default-900 border border-default-300 dark:border-white/20 hover:border-default-900'
                }`}
              >
                {tab.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {topicData.map((topic) => (
            <div key={topic.title} className="bg-default-100 dark:bg-white/3 rounded-md lg:p-2">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-default-900 mb-6">{topic.title}</h3>

                <ul className="flex flex-col gap-4">
                  {topic.links.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="flex items-center text-base font-normal text-default-800 hover:text-default-900 transition-all duration-300 ease-in-out">
                        <Icon icon="lucide:chevron-right" className="text-lg me-2" />
                        <span className="hover:underline transition-all duration-300 ease-in-out">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div id={topic.collapseId} className="hidden">
                  <ul className="flex flex-col gap-4 pt-4">
                    {topic.moreLinks.map((item) => (
                      <li key={item.label}>
                        <Link href={item.href} className="flex items-center text-base font-normal text-default-800 hover:text-default-900 transition-all duration-300 ease-in-out">
                          <Icon icon="lucide:chevron-right" className="text-lg me-2" />
                          <span className="hover:underline transition-all duration-300 ease-in-out">{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pb-6 px-6">
                <button onClick={() => document.getElementById(topic.collapseId)?.classList.toggle('hidden')} type="button" className="w-full py-2 text-default-900 inline-flex items-center text-start text-sm font-medium hover:underline" aria-expanded="false" aria-controls={topic.collapseId}>
                  Show more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Topic

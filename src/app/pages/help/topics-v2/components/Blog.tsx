import clsx from 'clsx'
import { Search } from 'lucide-react'
import Link from 'next/link'
import Faq from './Faq'

type PopularSearch = {
  id: number
  label: string
  href: string
}

type HelpCard = {
  id: number
  title: string
  description: string
  href: string
}

type HelpSection = {
  id: number
  title: string
  bgClass: string
  cards: HelpCard[]
}

const popularSearches: PopularSearch[] = [
  { id: 1, label: 'Sell car', href: '' },
  { id: 2, label: 'Buy car', href: '' },
  { id: 3, label: 'Insurance', href: '' },
  { id: 4, label: 'Legal issues', href: '' },
]

const helpSections: HelpSection[] = [
  {
    id: 1,
    title: 'Account settings',
    bgClass: 'bg-orange-50 dark:bg-primary-bg-subtle',
    cards: [
      {
        id: 1,
        title: 'Get started',
        description: 'Initiate your journey by creating a listing, following the account setup guide.',
        href: '/pages/help/single-article-v2',
      },
      {
        id: 2,
        title: 'Your account',
        description: 'Customize your account and notification settings to suit your preferences.',
        href: '/pages/help/single-article-v2',
      },
      {
        id: 3,
        title: 'Actions with ads',
        description: 'Modify your ads and explore effective bargaining techniques.',
        href: '/pages/help/single-article-v2',
      },
      {
        id: 4,
        title: 'Support',
        description: 'Tackle technical issues, resolve disputes, and connect with customer support seamlessly.',
        href: '/pages/help/single-article-v2',
      },
    ],
  },
  {
    id: 2,
    title: 'Buying a car',
    bgClass: 'bg-info/10',
    cards: [
      {
        id: 1,
        title: 'Search tips',
        description: 'Master the art of finding your ideal car by using advanced search filters and browsing categories.',
        href: '/pages/help/single-article-v2',
      },
      {
        id: 2,
        title: 'Contacting sellers',
        description: 'Learn the best practices for initiating contact with sellers and arranging viewings or test drives.',
        href: '/pages/help/single-article-v2',
      },
      {
        id: 3,
        title: 'Vehicle history',
        description: 'Discover how to request and interpret vehicle history reports to make informed decisions.',
        href: '/pages/help/single-article-v2',
      },
      {
        id: 4,
        title: 'Payment options',
        description: 'Understand the different payment methods available and how to complete transactions securely.',
        href: '/pages/help/single-article-v2',
      },
    ],
  },
  {
    id: 3,
    title: 'Selling a car',
    bgClass: 'bg-primary-bg-subtle',
    cards: [
      {
        id: 1,
        title: 'Creating a listing',
        description: 'Get expert tips on writing compelling descriptions and taking high-quality photos that stand out.',
        href: '/pages/help/single-article-v2',
      },
      {
        id: 2,
        title: 'Pricing your car',
        description: 'Learn strategies for setting a competitive price, including researching market trends and valuing your vehicle.',
        href: '/pages/help/single-article-v2',
      },
      {
        id: 3,
        title: 'Managing inquiries',
        description: 'Handle buyer inquiries efficiently and professionally to maximize your chances of a quick sale.',
        href: '/pages/help/single-article-v2',
      },
      {
        id: 4,
        title: 'Finalizing the sale',
        description: 'Navigate the final steps of selling your car, including transferring ownership and handling paperwork.',
        href: '/pages/help/single-article-v2',
      },
    ],
  },
]

type HelpCardItemProps = {
  card: HelpCard
  bgClass: string
}

const HelpCardItem = ({ card, bgClass }: HelpCardItemProps) => {
  return (
    <div className="group">
      <Link href={card.href}>
        <div className={clsx('md:p-8 p-6 rounded-md h-full', bgClass)}>
          <h3 className="mb-4 relative inline-block text-xl text-default-900 font-semibold after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current after:transition-all after:duration-100">
            {card.title}
          </h3>
          <p>{card.description}</p>
        </div>
      </Link>
    </div>
  )
}

const Blog = () => {
  return (
    <div className="lg:col-span-8 col-span-1">
      <h1 className="text-default-900 font-bold lg:text-4.8xl md:text-3.5xl text-3xl mb-6 md:text-start text-center">How can we help you?</h1>

      <div className="border border-border rounded-md p-2 mb-6">
        <form className="flex flex-col md:flex-row gap-2 p-1">
          <div className="relative w-full">
            <Search className="absolute start-2 top-1/2 -translate-y-1/2 text-default-500 size-5" />
            <input type="search" placeholder="What do you need help with?" className="w-full ps-10 pe-3 py-3 text-base border-0 focus:ring-0 rounded-none bg-transparent" />
          </div>
          <button type="submit" className="px-6 py-3.5 font-medium text-body-bg bg-default-800 hover:bg-default-900 rounded-md">
            Search
          </button>
        </form>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="text-secondary text-sm me-2">Popular searches:</span>
        {popularSearches.map((item) => (
          <Link key={item.id} href={item.href} className="hover:underline text-default-800 hover:text-default-900 text-sm font-medium me-2">
            {item.label}
          </Link>
        ))}
      </div>

      {helpSections.map((section) => (
        <div key={section.id}>
          <h2 className="pt-12 md:pb-4 pb-2 lg:my-4 mb-4 lg:text-2.5xl md:text-2xl text-xl text-default-900 font-semibold">{section.title}</h2>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            {section.cards.map((card) => (
              <HelpCardItem key={card.id} card={card} bgClass={section.bgClass} />
            ))}
          </div>
        </div>
      ))}

      <Faq />

      <h2 className="pt-6 mt-4 mb-6 text-default-500">Still have unanswered questions and need to get in touch?</h2>
      <Link href="/pages/contact-v1" className="bg-primary text-white py-3.5 px-6 rounded-md font-semibold inline-flex transition-all duration-300 ease-in-out hover:bg-primary-hover">
        Contact us
      </Link>
    </div>
  )
}

export default Blog

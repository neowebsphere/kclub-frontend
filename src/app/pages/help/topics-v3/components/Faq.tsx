import { Icon } from '@iconify/react'
import Link from 'next/link'

type FAQItem = {
  id: number
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'How do I start the process of buying a home?',
    answer:
      'The first step is to assess your financial situation and get pre-approved for a mortgage. This will give you a clear understanding of your budget. After that, you can start searching for properties that match your criteria and work with a real estate agent to guide you through the process.',
  },
  {
    id: 2,
    question: 'What should I consider when choosing a neighborhood?',
    answer: "Consider factors such as the proximity to schools, work, public transportation, safety, and local amenities like shops and parks. It’s also important to research the neighborhood's future development plans and property value trends.",
  },
  {
    id: 3,
    question: 'How much should I budget for closing costs?',
    answer: "Closing costs typically range from 2% to 5% of the home's purchase price. These costs can include loan origination fees, title insurance, attorney fees, and other related expenses. It's advisable to set aside additional funds for these costs.",
  },
  {
    id: 4,
    question: 'Is it better to rent or buy a home?',
    answer: "This depends on your personal financial situation, lifestyle, and long-term goals. Buying is often considered a good investment, but it requires a significant upfront cost and ongoing maintenance. Renting offers more flexibility and fewer responsibilities, but you won't build equity.",
  },
  {
    id: 5,
    question: 'How do I determine the right price to offer on a home?',
    answer: "Research comparable properties in the area that have recently sold to get a sense of the market value. Your real estate agent can also provide a comparative market analysis (CMA) to help determine a fair offer based on the property's condition, location, and market demand.",
  },
  {
    id: 6,
    question: 'What should I look for during a home inspection?',
    answer: 'During a home inspection, focus on the structural integrity of the property, including the roof, foundation, plumbing, electrical systems, and HVAC. Look for signs of water damage, mold, and pests. The inspector will provide a detailed report, which can be used to negotiate repairs or price adjustments.',
  },
  {
    id: 7,
    question: 'What are the benefits of getting a pre-approved mortgage?',
    answer: 'Getting pre-approved for a mortgage shows sellers that you are a serious buyer and can afford the property. It also helps you set a realistic budget and speeds up the home-buying process since your financial documents are already in order.',
  },
  {
    id: 8,
    question: 'How can I make my home more appealing to buyers?',
    answer:
      'To make your home more appealing, focus on curb appeal by maintaining the exterior, landscaping, and entryway. Inside, declutter, clean thoroughly, and consider staging the home with neutral décor to allow buyers to envision themselves living there. Address any necessary repairs and updates.',
  },
  {
    id: 9,
    question: "What is a seller's market vs. a buyer's market?",
    answer:
      "A seller's market occurs when there are more buyers than available properties, leading to higher prices and quicker sales. A buyer's market happens when there are more properties than buyers, giving buyers more negotiating power and typically leading to lower prices.",
  },
  {
    id: 10,
    question: 'How long does it take to close on a home?',
    answer:
      'The closing process typically takes 30 to 45 days, depending on various factors such as the type of loan, the efficiency of the involved parties, and any unforeseen issues that may arise. Staying organized and responsive can help ensure a smoother, faster closing process.',
  },
]

const Faq = () => {
  return (
    <section className="lg:py-12 md:pt-6 pt-2 pb-12 lg:my-4">
      <div className="container">
        <div className="lg:py-12 grid md:grid-cols-12 grid-cols-1 gap-6">
          <div className="lg:col-span-3 md:col-span-4 col-span-1 lg:pe-0 md:pe-6">
            <h2 className="mb-4 lg:text-3.5xl md:text-2.5xl text-2xl text-default-900 font-semibold">Popular FAQs</h2>
            <p className="mb-4 pb-4">Still have unanswered questions and need to get in touch?</p>
            <Link href="/pages/contact-v1" className="bg-primary text-white py-3.5 px-6 rounded-md font-semibold inline-flex transition-all duration-300 ease-in-out hover:bg-primary-hover">
              Contact us
            </Link>
          </div>

          <div className="lg:col-span-9 md:col-span-8 col-span-1">
            <div className="lg:w-214 w-full ms-auto">
              <div className="hs-accordion-group">
                {faqData.map((item) => (
                  <div key={item.id} id={`faqHeading-${item.id}`} className="hs-accordion hs-accordion-active:border-b-default-200 bg-transparent border-b border-default-300 dark:border-white/20 group dark:hs-accordion-active:border-b-default-200">
                    <button type="button" aria-expanded="false" aria-controls={`faqCollapse-${item.id}`} className="hs-accordion-toggle inline-flex justify-between items-center gap-x-3 w-full text-start font-semibold text-default-900 py-5 hover:underline">
                      <span>{item.question}</span>
                      <div className="flex-shrink-0">
                        <Icon icon="lucide:chevron-down" className="hs-accordion-active:hidden block size-5 text-default-800" />
                        <Icon icon="lucide:chevron-up" className="hs-accordion-active:block hidden size-5 text-default-800" />
                      </div>
                    </button>
                    <div role="region" aria-labelledby={`faqHeading-${item.id}`} id={`faqCollapse-${item.id}`} className="hs-accordion-content hidden w-full overflow-hidden transition-[height] mb-4 duration-300">
                      <p className="text-sm">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq

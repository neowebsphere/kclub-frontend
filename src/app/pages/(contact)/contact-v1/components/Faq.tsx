import { Icon } from '@iconify/react'
import Link from 'next/link'

type FaqItem = {
  id: number
  question: string
  answer: string
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: 'How do I start the process of buying a home?',
    answer:
      'The first step is to assess your financial situation and get pre-approved for a mortgage. This will give you a clear understanding of your budget. After that, you can start searching for properties that match your criteria and work with a real estate agent to guide you through the process.',
  },
  {
    id: 2,
    question: 'What should I consider when choosing a neighborhood?',
    answer: "Consider factors such as proximity to schools, work, public transportation, safety, and local amenities like shops and parks. It's also important to research the neighborhood's future development plans and property value trends.",
  },
  {
    id: 3,
    question: 'How much should I budget for closing costs?',
    answer: "Closing costs typically range from 2% to 5% of the home's purchase price. These costs can include loan origination fees, title insurance, attorney fees, and other related expenses.",
  },
  {
    id: 4,
    question: 'Is it better to rent or buy a home?',
    answer: 'This depends on your personal financial situation, lifestyle, and long-term goals. Buying is often considered a good investment, but it requires a significant upfront cost and ongoing maintenance.',
  },
  {
    id: 5,
    question: 'How do I determine the right price to offer on a home?',
    answer: 'Research comparable properties in the area that have recently sold to get a sense of the market value. Your real estate agent can also provide a comparative market analysis (CMA).',
  },
  {
    id: 6,
    question: 'What should I look for during a home inspection?',
    answer: 'Focus on the structural integrity of the property, including the roof, foundation, plumbing, electrical systems, and HVAC. Also look for signs of water damage, mold, and pests.',
  },
  {
    id: 7,
    question: 'What are the benefits of getting a pre-approved mortgage?',
    answer: 'Getting pre-approved shows sellers that you are a serious buyer and helps you set a realistic budget. It can also speed up the home-buying process.',
  },
  {
    id: 8,
    question: 'How can I make my home more appealing to buyers?',
    answer: 'Focus on curb appeal, declutter and clean thoroughly, and consider staging your home with neutral décor. Address any necessary repairs and updates.',
  },
  {
    id: 9,
    question: "What is a seller's market vs. a buyer's market?",
    answer: "A seller's market occurs when there are more buyers than available properties, leading to higher prices. A buyer's market gives buyers more negotiating power and often leads to lower prices.",
  },
  {
    id: 10,
    question: 'How long does it take to close on a home?',
    answer: 'The closing process typically takes 30 to 45 days, depending on the type of loan, the efficiency of all parties involved, and any unforeseen issues.',
  },
]

const Faq = () => {
  return (
    <section className="bg-default-100 dark:bg-white/5 py-12">
      <div className="container">
        <div className="lg:py-12 py-6 grid md:grid-cols-12 grid-cols-1 gap-6">
          <div className="lg:col-span-3 md:col-span-4">
            <h2 className="mb-4 lg:text-3.5xl md:text-2.5xl text-2xl text-default-900 font-semibold">Popular FAQs</h2>
            <p className="mb-4 text-default-600">Check out Finder helpful articles for answers and tips.</p>
            <Link href="/pages/help/topics-v1" className="inline-flex items-center text-default-700 font-medium transition-all duration-300 hover:text-default-900">
              <span className="hover:underline me-1 text-sm">Help Center</span>
              <Icon icon="lucide:chevron-right" className="size-4 mt-0.5" />
            </Link>
          </div>

          <div className="lg:col-span-9 md:col-span-8">
            <div className="lg:w-[850px] w-full ms-auto">
              <div className="hs-accordion-group">
                {faqData.map((faq) => (
                  <div key={faq.id} className="hs-accordion border-b border-default-300 dark:border-white/20 bg-transparent group" id={`faq-heading-${faq.id}`}>
                    <button className="hs-accordion-toggle inline-flex justify-between items-center gap-x-3 w-full text-start font-semibold text-default-900 py-5 hover:underline" aria-expanded="false" aria-controls={`faq-collapse-${faq.id}`}>
                      {faq.question}
                      <div className="flex-shrink-0">
                        <Icon icon="lucide:chevron-down" className="hs-accordion-active:hidden block size-5 text-default-800" />
                        <Icon icon="lucide:chevron-up" className="hs-accordion-active:block hidden size-5 text-default-800" />
                      </div>
                    </button>
                    <div id={`faq-collapse-${faq.id}`} className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby={`faq-heading-${faq.id}`}>
                      <div className="pb-5">
                        <p className="text-sm text-default-600 leading-6">{faq.answer}</p>
                      </div>
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

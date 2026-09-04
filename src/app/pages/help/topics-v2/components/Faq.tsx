'use client'

import { Icon } from '@iconify/react'

type FaqItem = {
  id: number
  question: string
  answer: string
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: 'How do I create my first car listing?',
    answer:
      'To create your first car listing, log in to your account and navigate to the "Create Listing" section. Follow the step-by-step guide to enter your vehicle\'s details, upload high-quality photos, set a price, and publish your ad. Once submitted, your listing will be reviewed and posted on the platform.',
  },
  {
    id: 2,
    question: 'How can I edit or update my existing car listing?',
    answer:
      'To edit or update your car listing, go to your account dashboard and click on "My Listings." Select the listing you want to modify, and choose the "Edit" option. From here, you can update the vehicle details, price, photos, and description. Don\'t forget to save your changes once you\'re done.',
  },
  {
    id: 3,
    question: 'What should I do if I forget my account password?',
    answer:
      "If you've forgotten your password, click on the \"Forgot Password\" link on the login page. Enter the email address associated with your account, and we'll send you instructions on how to reset your password. If you don't receive the email, check your spam folder or contact customer support for assistance.",
  },
  {
    id: 4,
    question: 'How do I respond to inquiries from potential buyers?',
    answer:
      'When a potential buyer contacts you, you\'ll receive a notification via email and within your account dashboard. To respond, simply log in, go to "Messages," and select the inquiry. You can reply directly through the platform to keep all communication secure and organized.',
  },
  {
    id: 5,
    question: 'What fees are associated with selling a car on your platform?',
    answer:
      'Listing a car on our platform is free, but we offer premium features to enhance your ad\'s visibility for a small fee. Additionally, a final sale fee may apply if your car is successfully sold through our platform. You can view the complete fee structure in the "Pricing" section of our website.',
  },
  {
    id: 6,
    question: 'How do I deactivate or remove my car listing?',
    answer:
      'If you\'ve sold your car or no longer wish to keep your listing active, you can deactivate or remove it by going to "My Listings" in your account dashboard. Select the listing you want to remove and choose "Deactivate" or "Delete." Deactivated listings can be reactivated later if needed, while deleted listings will be permanently removed.',
  },
]

type AccordionItemProps = {
  item: FaqItem
}

const AccordionItem = ({ item }: AccordionItemProps) => {
  const headingId = `faqHeading-${item.id}`
  const collapseId = `faqCollapse-${item.id}`

  return (
    <div id={headingId} className="hs-accordion hs-accordion-active:border-b-default-200 bg-transparent border-b border-default-300 dark:border-white/20 group">
      <button className="hs-accordion-toggle inline-flex justify-between items-center gap-x-3 w-full text-start font-semibold text-default-900 py-5 hover:underline" aria-expanded="false" aria-controls={collapseId}>
        {item.question}

        <Icon icon="lucide:chevron-down" className="hs-accordion-active:hidden block size-5 text-default-800" />
        <Icon icon="lucide:chevron-up" className="hs-accordion-active:block hidden size-5 text-default-800" />
      </button>

      <div id={collapseId} role="region" aria-labelledby={headingId} className="hs-accordion-content hidden w-full overflow-hidden transition-[height] mb-4 duration-300">
        <p className="text-sm">{item.answer}</p>
      </div>
    </div>
  )
}

const Faq = () => {
  return (
    <>
      <h2 className="pt-12 md:pb-4 pb-2 lg:my-4 mb-4 lg:text-2.5xl md:text-2xl text-xl text-default-900 font-semibold">Popular FAQs</h2>

      <div className="hs-accordion-group">
        {faqData.map((item) => (
          <AccordionItem key={item.id} item={item} />
        ))}
      </div>
    </>
  )
}

export default Faq

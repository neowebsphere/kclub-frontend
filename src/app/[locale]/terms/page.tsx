import Footer from '@/components/footer/Footer'
import Topbar from '@/components/topbar'
import { Icon } from '@iconify/react'
import { Plus } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { setRequestLocale } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: string }>
}

const Page = async ({ params }: Props) => {
  const { locale } = await params

  // Enables static rendering and keeps <Link> on the current locale
  setRequestLocale(locale)

  return (
    <>
      <Topbar
        className="bg-white shadow-sm dark:bg-[#121519]"
        showSignIn
        ButtonClassName="rounded-md"
        ButtonText={
          <>
            Add
            <span className="lg:block hidden ms-1">property</span>
          </>
        }
        ButtonIcon={<Plus className="size-4 me-2" />}
      />
      <section className="pt-24 pb-12 lg:mb-12 lg:mt-10 md:mb-4 lg:w-247.5 w-full mx-auto">
        <div className="container">
          <h1 className="lg:pb-6 pb-4 mb-4 text-default-900 font-semibold lg:text-3.5xl md:text-2.5xl text-2xl">Terms and Conditions</h1>
          <hr className="mb-6 text-default-200 dark:text-white/20" />
          <div className="lg:pt-4 pt-2 mb-4 text-default-900 font-semibold">
            <span className="text-secondary font-medium">Last updated:</span> August 15, 2024
          </div>
          <p className="mb-4">
            Welcome to kclub! These terms and conditions outline the rules and regulations for the use of kclub's Website, located at <span className="font-semibold">findertheme.com</span>. By accessing this website, we assume you accept these terms and conditions. Do not
            continue to use kclub if you do not agree to take all of the terms and conditions stated on this page.
          </p>
          <h2 className="lg:pt-6 pt-4 mb-4 text-default-900 font-semibold lg:text-2xl text-xl">1. Definitions</h2>
          <ul className="list-disc ps-6 mb-4 space-y-2 text-default-700">
            <li>
              <span className="font-semibold text-default-900">"kclub"</span> refers to our real estate listings website.
            </li>
            <li>
              <span className="font-semibold text-default-900">"User"</span> refers to anyone using our website, including sellers, buyers, renters, and agents.
            </li>
            <li>
              <span className="font-semibold text-default-900">"Listing"</span> refers to any property listed for sale, purchase, or rent on kclub.
            </li>
          </ul>
          <h2 className="lg:pt-6 pt-4 mb-4 text-default-900 font-semibold lg:text-2xl text-xl">2. Acceptance of Terms</h2>
          <p className="mb-4">
            By using kclub, you agree to comply with and be legally bound by the terms and conditions set forth below, whether or not you become a registered user of the services. These terms govern your access to and use of the website and services, and constitute a binding
            legal agreement between you and kclub.
          </p>
          <h2 className="lg:pt-6 pt-4 mb-4 text-default-900 font-semibold lg:text-2xl text-xl">3. Use of the Website </h2>
          <h3 className="mb-4 text-default-900 font-semibold pt-1">a. Eligibility</h3>
          <p className="mb-4">To use kclub, you must be at least 18 years old and capable of forming a binding contract with kclub and not be barred from using the services under applicable law.</p>
          <h3 className="mb-4 text-default-900 font-semibold pt-1">b. User Accounts</h3>
          <ul className="list-disc ps-6 mb-4 space-y-2 text-default-700">
            <li>Users may be required to create an account to access certain features of the website.</li>
            <li>You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</li>
          </ul>
          <h2 className="lg:pt-6 pt-4 mb-4 text-default-900 font-semibold lg:text-2xl text-xl">4. Listings and Transactions </h2>
          <h3 className="mb-4 text-default-900 font-semibold pt-1">a. Listings</h3>
          <ul className="list-disc ps-6 mb-4 space-y-2 text-default-700">
            <li>Users can create listings to sell, buy, or rent properties.</li>
            <li>Listings must be accurate, up-to-date, and not misleading.</li>
          </ul>
          <h3 className="mb-4 text-default-900 font-semibold pt-1">b. User Accounts</h3>
          <ul className="list-disc ps-6 mb-4 space-y-2 text-default-700">
            <li>kclub is not a party to any transaction between buyers, sellers, and renters. We do not guarantee the quality, safety, or legality of the properties listed.</li>
          </ul>
          <h2 className="lg:pt-6 pt-4 mb-4 text-default-900 font-semibold lg:text-2xl text-xl">5. User Obligations </h2>
          <ul className="list-disc ps-6 mb-4 space-y-2 text-default-700">
            <li>Users must comply with all applicable laws and regulations.</li>
            <li>Users must not use kclub to engage in any illegal or fraudulent activities.</li>
            <li>Users must not post any content that is offensive, defamatory, or infringes on any third party's rights.</li>
          </ul>
          <h2 className="lg:pt-6 pt-4 mb-4 text-default-900 font-semibold lg:text-2xl text-xl">6. Fees and Payments </h2>
          <ul className="list-disc ps-6 mb-4 space-y-2 text-default-700">
            <li>Certain services on kclub may require payment of fees. All fees are non-refundable unless otherwise stated.</li>
            <li>Payment terms are outlined at the point of transaction.</li>
          </ul>
          <h2 className="lg:pt-6 pt-4 mb-4 text-default-900 font-semibold lg:text-2xl text-xl">7. Intellectual Property </h2>
          <ul className="list-disc ps-6 mb-4 space-y-2 text-default-700">
            <li>All content on kclub, including text, graphics, logos, and software, is the property of kclub or its content suppliers and is protected by copyright laws.</li>
            <li>Users may not reproduce, distribute, or create derivative works from any content on kclub without our explicit permission.</li>
          </ul>
          <h2 className="lg:pt-6 pt-4 mb-4 text-default-900 font-semibold lg:text-2xl text-xl">8. Privacy Policy </h2>
          <p className="mb-4">Your use of kclub is also governed by our Privacy Policy, which is incorporated by reference into these terms. Please review our Privacy Policy to understand our practices.</p>
          <h2 className="lg:pt-6 pt-4 mb-4 text-default-900 font-semibold lg:text-2xl text-xl">9. Limitation of Liability </h2>
          <ul className="list-disc ps-6 mb-4 space-y-2 text-default-700">
            <li>kclub is not liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of the website.</li>
            <li>kclub does not guarantee the accuracy, completeness, or usefulness of any information on the website.</li>
          </ul>
          <h2 className="lg:pt-6 pt-4 mb-4 text-default-900 font-semibold lg:text-2xl text-xl">10. Indemnification </h2>
          <p className="mb-4">
            You agree to indemnify and hold kclub and its affiliates, officers, agents, and employees harmless from any claim or demand, including reasonable attorney's fees, made by any third party due to or arising out of your use of the website, your violation of these terms,
            or your violation of any rights of another.
          </p>
          <h2 className="lg:pt-6 pt-4 mb-4 text-default-900 font-semibold lg:text-2xl text-xl">11. Modifications to the Service </h2>
          <p className="mb-4">kclub reserves the right to modify or discontinue, temporarily or permanently, the service with or without notice at any time.</p>
          <h2 className="lg:pt-6 pt-4 mb-4 text-default-900 font-semibold lg:text-2xl text-xl">12. Governing Law </h2>
          <p className="mb-4">These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State], and you irrevocably submit to the exclusive jurisdiction of the courts in that location. </p>
          <h2 className="lg:pt-6 pt-4 mb-4 text-default-900 font-semibold lg:text-2xl text-xl">13. Contact information </h2>
          <p className="mb-4">If you have any questions, or comments about these Terms please contact kclub at:</p>
          <ul className="pb-1 space-y-2 mb-4 ">
            <li className="pt-1 text-default-800 hover:text-default-900">
              <Link href="tel:+15053753082" className="flex items-start text-base p-0">
                <Icon icon="lucide:phone" className="text-xl mt-1 me-2" />
                +1&nbsp;50&nbsp;537&nbsp;53&nbsp;082
              </Link>
            </li>
            <li className="pt-1 text-default-800 hover:text-default-900">
              <Link href="mailto:contact@findertheme.com" className="flex items-start text-base">
                <Icon icon="lucide:mail" className="text-xl mt-1 me-2" />
                contact@findertheme.com
              </Link>
            </li>
            <li className="pt-1 text-default-800 hover:text-default-900">
              <Link href="#!" className="flex items-start text-base">
                <Icon icon="lucide:map-pin" className="text-xl mt-1 me-2" />
                12 Beale St. Suite 600 San Francisco, California 94105
              </Link>
            </li>
          </ul>
          <p className="pb-4">
            For customer service inquiries, please review Your Account Settings, visit kclub's
            <Link className="font-medium text-info underline hover:no-underline" href="/help">
              Help Center.
            </Link>
          </p>
          <hr className="md:my-6 my-4 text-default-200 dark:text-white/20" />
          <h2 className="md:mb-6 mb-4 pt-4 text-xl text-default-900 font-semibold">Was this information helpful?</h2>
          <div className="flex gap-4">
            <button type="button" className="py-2.5 px-5 border border-default-200 rounded-md text-default-800 transition-all duration-300 inline-flex items-center hover:border-default-900 dark:border-white/3 text-sm font-semibold">
              <Icon icon="lucide:thumbs-up" className="me-2" />
              Yes
            </button>
            <button type="button" className="py-2.5 px-5 border border-default-200 rounded-md text-default-800 transition-all duration-300 inline-flex items-center hover:border-default-900 dark:border-white/3 text-sm font-semibold">
              <Icon icon="lucide:thumbs-down" className="me-2" />
              No
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Page

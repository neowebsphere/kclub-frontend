import blog03 from '@/assets/img/blog/v2/03.jpg'
import { Icon } from '@iconify/react'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Detail = () => {
  return (
    <>
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
        <div className="flex gap-2 fs-sm flex-wrap">
          <span className="text-secondary text-sm me-2">Popular searches:</span>
          <Link className="hover:underline text-default-800 hover:text-default-900 text-sm font-medium me-2" href="">
            Sell car
          </Link>
          <Link className="hover:underline text-default-800 hover:text-default-900 text-sm font-medium me-2" href="">
            Buy car
          </Link>
          <Link className="hover:underline text-default-800 hover:text-default-900 text-sm font-medium me-2" href="">
            Insurance
          </Link>
          <Link className="hover:underline text-default-800 hover:text-default-900 text-sm font-medium me-2" href="">
            Legal issues
          </Link>
        </div>
        <div className="pt-12 lg:mt-4 pb-2">
          <ol className="flex flex-wrap items-center whitespace-nowrap mb-4">
            <li className="inline-flex items-center">
              <Link className="flex items-center text-sm font-medium text-default-700 hover:text-default-900 focus:outline-hidden" href="/pages/help/topics-v2">
                Help Center
              </Link>
              <Icon icon="lucide:chevron-right" className="mx-2" />
            </li>
            <li className="inline-flex items-center text-sm font-medium text-default-500/80 truncate" aria-current="page">
              Single article v.2
            </li>
          </ol>
        </div>
        <h1 className="text-default-900 font-semibold lg:text-3.5xl md:text-2.5xl text-2xl mb-6">Account: Get started</h1>
        <div className="bg-success/10 rounded-md p-6">
          <div className="p-2">
            <h3 className="mb-4 text-default-900 font-semibold">In this article</h3>
            <ul className="flex flex-col gap-1.5">
              <li className="nav-item mt-1 flex">
                <Link className="flex" href="#introduction">
                  <Icon icon="lucide:chevron-right" className="text-base me-2" />
                  <span className="text-default-900 text-sm font-medium">Introduction</span>
                </Link>
              </li>
              <li className="nav-item mt-1">
                <Link className="flex" href="#creating-account">
                  <Icon icon="lucide:chevron-right" className="text-base me-2" />
                  <span className="text-default-900 text-sm font-medium">Creating your account</span>
                </Link>
              </li>
              <li className="nav-item mt-1">
                <Link className="flex" href="#verifying-email">
                  <Icon icon="lucide:chevron-right" className="text-base me-2" />
                  <span className="text-default-900 text-sm font-medium">Verifying your email</span>
                </Link>
              </li>
              <li className="nav-item mt-1">
                <Link className="flex" href="#setting-up-profile">
                  <Icon icon="lucide:chevron-right" className="text-base me-2" />
                  <span className="text-default-900 text-sm font-medium">Setting up your profile</span>
                </Link>
              </li>
              <li className="nav-item mt-1">
                <Link className="flex" href="#customizing-notification-preferences">
                  <Icon icon="lucide:chevron-right" className="text-base me-2" />
                  <span className="text-default-900 text-sm font-medium">Customizing notification preferences</span>
                </Link>
              </li>
              <li className="nav-item mt-1">
                <Link className="flex" href="#managing-account-security">
                  <Icon icon="lucide:chevron-right" className="text-base me-2" />
                  <span className="text-default-900 text-sm font-medium">Managing account security</span>
                </Link>
              </li>
              <li className="nav-item mt-1">
                <Link className="flex" href="#getting-help-and-support">
                  <Icon icon="lucide:chevron-right" className="text-base me-2" />
                  <span className="text-default-900 text-sm font-medium">Getting help and support</span>
                </Link>
              </li>
              <li className="nav-item mt-1">
                <Link className="flex" href="#conclusion">
                  <Icon icon="lucide:chevron-right" className="text-base me-2" />
                  <span className="text-default-900 text-sm font-medium">Conclusion</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <h2 className="mb-4 pt-12 md:text-2xl text-xl text-default-900 font-semibold" id="introduction">
          1. Introduction
        </h2>
        <p className="mb-4">
          Welcome to the first step in your journey on our car listing platform. Setting up your account is crucial to fully enjoying the features we offer, such as listing your car, contacting sellers, and managing your profile. This guide will walk you through the process, from
          creating your account to managing security settings.
        </p>
        <h2 className="mb-4 pt-6 md:text-2xl text-xl text-default-900 font-semibold" id="creating-account">
          2. Creating your account
        </h2>
        <dl className="mb-4">
          <dt className="text-default-900 font-semibold">Step 1: Access the sign-up page</dt>
          <dd className="mb-3 text-body-color">Begin by navigating to our website and clicking on the "Sign Up" button located at the top right corner of the homepage.</dd>
          <dt className="text-default-900 font-semibold">Step 2: Enter your details</dt>
          <dd className="mb-3 text-body-color">You will be prompted to fill in basic information such as your name, email address, and a secure password. Ensure that your password is strong, combining letters, numbers, and special characters.</dd>
          <dt className="text-default-900 font-semibold">Step 3: Agree to the terms</dt>
          <dd className="mb-3 text-body-color">Before proceeding, you must agree to our Terms of Service and Privacy Policy. Once you've read and agreed, check the box to continue.</dd>
          <dt className="text-default-900 font-semibold">Step 4: Complete the CAPTCHA</dt>
          <dd className="mb-3 text-body-color">For security purposes, complete the CAPTCHA challenge to verify that you're not a robot.</dd>
          <dt className="text-default-900 font-semibold">Step 5: Click "Create Account"</dt>
          <dd className="mb-3 text-body-color">After filling in all the necessary information, click on the "Create Account" button. You will receive a confirmation email shortly.</dd>
        </dl>
        <h2 className="mb-4 pt-6 md:text-2xl text-xl text-default-900 font-semibold" id="verifying-email">
          3. Verifying your email
        </h2>
        <p className="mb-4">
          Once you've signed up, check your email inbox for a verification email. If you don't see it, check your spam or junk folder. Inside the email, you'll find a link to verify your email address. Click on this link to confirm your registration. After clicking the
          verification link, you'll be redirected to our website, where you'll see a confirmation message indicating that your email has been successfully verified.
        </p>
        <div className="md:py-6 py-4 mb-4">
          <div className="border-b border-t border-border font-semibold py-4 flex gap-6 items-center">
            <div className="py-4 flex gap-6 items-center flex-wrap">
              <div className="rounded-md overflow-hidden w-55">
                <Image src={blog03} alt="Category image" className="w-55 h-full object-cover transition-transform duration-500 rounded-md hover:scale-110 z-0" />
              </div>
              <div>
                <div className="flex md:flex-row flex-col md:items-center text-sm md:gap-4 gap-2 pb-1 mb-2">
                  <Link className="font-semibold text-default-500 uppercase hover:text-default-900 text-xs" href="">
                    Electric vehicles
                  </Link>
                  <div className="h-6 w-0.25 bg-default-200 dark:bg-white/20 md:block hidden" />
                  <span className="text-default-500">July 12, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-default-900">
                  <Link className="hover:underline" href="">
                    Tesla fixes common recall with over-the-air update
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <h2 className="mb-4 pt-6 md:text-2xl text-xl text-default-900 font-semibold" id="setting-up-profile">
          4. Setting up your profile
        </h2>
        <dl className="mb-4">
          <dt className="text-default-900 font-semibold">Step 1: Access profile settings</dt>
          <dd className="mb-3 text-body-color">Log in to your account and navigate to the "Profile" section from your dashboard.</dd>
          <dt className="text-default-900 font-semibold">Step 2: Add personal information</dt>
          <dd className="mb-3 text-body-color">Here, you can add or update your personal information, such as your full name, phone number, and profile picture.</dd>
          <dt className="text-default-900 font-semibold">Step 3: Link social accounts (Optional)</dt>
          <dd className="mb-3 text-body-color">For convenience, you can link your social media accounts. This will make it easier to share your listings or log in quickly.</dd>
          <dt className="text-default-900 font-semibold">Step 4: Save your changes</dt>
          <dd className="mb-3 text-body-color">After entering all your details, click "Save Changes" to update your profile.</dd>
        </dl>
        <h2 className="mb-4 pt-6 md:text-2xl text-xl text-default-900 font-semibold" id="customizing-notification-preferences">
          5. Customizing notification preferences
        </h2>
        <p className="mb-4">
          In your account dashboard, find the "Notification Settings" section. You can customize how and when you receive notifications about inquiries, messages, and platform updates. Options include email, SMS, or push notifications. If there are certain notifications you'd
          rather not receive, simply toggle them off in this section. Make sure to save your preferences before exiting the page.
        </p>
        <h2 className="mb-4 pt-6 md:text-2xl text-xl text-default-900 font-semibold" id="managing-account-security">
          6. Managing account security
        </h2>
        <p className="mb-4">Regularly updating your password enhances account security. You can change your password by going to the "Security" section in your account settings.</p>
        <p className="mb-4">For added security, we recommend enabling Two-Factor Authentication (2FA). This requires an additional code, sent to your phone, each time you log in.</p>
        <p className="mb-4">
          Keep track of any unusual activity by regularly reviewing the "Recent Activity" section in your account settings. If you notice anything suspicious, contact support immediately. Adding security questions can help recover your account if you forget your password. Choose
          questions that are easy for you to remember but hard for others to guess.
        </p>
        <h2 className="mb-4 pt-6 md:text-2xl text-xl text-default-900 font-semibold" id="getting-help-and-support">
          7. Getting help and support
        </h2>
        <p className="mb-4">If you encounter any issues or have questions, visit our Help Center. It provides answers to common questions and step-by-step guides.</p>
        <p className="mb-4">For more personalized assistance, you can contact our customer support team via email, phone, or live chat. They're available 24/7 to assist you.</p>
        <p className="mb-4">Join our community forum to ask questions, share experiences, and get advice from other users. We value your feedback. If you have suggestions on how we can improve, go to the "Feedback" section and share your thoughts.</p>
        <h2 className="mb-4 pt-6 md:text-2xl text-xl text-default-900 font-semibold" id="conclusion">
          Conclusion
        </h2>
        <p className="mb-4">
          Getting started with your account settings is simple and straightforward. By following this guide, you'll be able to set up your account, customize your profile, and ensure your information is secure. Remember, our support team is always available to help you with any
          questions or concerns. Enjoy your journey with us, whether you're buying or selling cars on our platform!
        </p>
        <div className="flex items-center text-sm text-secondary pt-6 pb-2">
          9 months ago
          <Icon icon="lucide:dot" className="mx-1" />
          Updated
        </div>
        <hr className="text-default-200 dark:text-white/20 my-6" />
        <div className="pt-2">
          <h4 className="text-default-900 font-semibold pb-1 mb-4">Was this information helpful?</h4>
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
      </div>
    </>
  )
}

export default Detail

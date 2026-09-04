import contcat from '@/assets/img/contact/v2/contcat-form.jpg'
import Image from 'next/image'

const ContactForm = () => {
  return (
    <>
      <section className="lg:py-12 md:pt-12 pt-8 pb-6">
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 rounded-xl bg-default-100 dark:bg-white/3">
            <div className="lg:h-136 h-full w-full md:block hidden">
              <Image src={contcat} className="rounded-tl-xl rounded-bl-xl lg:h-136 h-full w-full object-cover" alt="Image" />
            </div>
            <div className="md:p-12 pb-12 pt-6 px-6 lg:my-6 lg:mx-12">
              <h2 className="lg:text-2xl text-xl text-default-900 font-semibold mb-6">Get in touch!</h2>
              <div className="mb-4">
                <input type="email" className="w-full border border-border rounded-md focus:ring-0 placeholder-default-500 bg-body-bg py-2.75 px-4.5" placeholder="Full name*" required />
              </div>
              <div className="mb-4">
                <input type="email" className="w-full border border-border rounded-md focus:ring-0 placeholder-default-500 bg-body-bg py-2.75 px-4.5" placeholder="Email*" required />
              </div>
              <div className="mb-6">
                <textarea className="w-full border border-border rounded-md focus:ring-0 placeholder-default-500 bg-body-bg py-2.75 px-4.5" placeholder="Your message*" required rows={5} />
              </div>
              <button type="submit" className="w-full py-2.5 px-6 rounded-md bg-default-900 text-body-bg transition-all duration-300 hover:bg-default-950">
                Submit form
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactForm

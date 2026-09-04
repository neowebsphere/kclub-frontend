import author01 from '@/assets/img/blog/v4/author/01.jpg'
import author02 from '@/assets/img/blog/v4/author/02.jpg'
import author04 from '@/assets/img/blog/v4/author/04.jpg'
import author09 from '@/assets/img/blog/v4/author/09.jpg'
import single01 from '@/assets/img/blog/v4/single/01.jpg'
import single02 from '@/assets/img/blog/v4/single/02.jpg'
import galleryth01 from '@/assets/img/blog/v4/single/gallery/th01.jpg'
import galleryth02 from '@/assets/img/blog/v4/single/gallery/th02.jpg'
import singleth01 from '@/assets/img/blog/v4/single/th01.jpg'
import singleth02 from '@/assets/img/blog/v4/single/th02.jpg'
import singleth03 from '@/assets/img/blog/v4/single/th03.jpg'
import GlightBox from '@/components/GlightBox'
import { Icon } from '@iconify/react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import Blog from './Blog'

type RelatedArticleType = {
  id: number
  author: string
  avatar: StaticImageData
  title: string
  image: StaticImageData
  href: string
}

type GalleryImageType = {
  id: number
  image: StaticImageData
}

type TagType = {
  id: number
  label: string
  href: string
}

type ShareSocialType = {
  id: number
  icon: string
  tooltip: string
}

const relatedArticles: RelatedArticleType[] = [
  {
    id: 1,
    author: 'Dr. Jerome Bell',
    avatar: author04,
    title: "Men's healthcare behaviors and attitudes",
    image: singleth01,
    href: '#!',
  },
  {
    id: 2,
    author: 'Dr. Guy Hawkins',
    avatar: author02,
    title: 'How health systems can thrive as retail clinics rise',
    image: singleth02,
    href: '#!',
  },
  {
    id: 3,
    author: 'Dr. Martha Simpson',
    avatar: author01,
    title: 'Herbal medicines: advantages and disadvantages',
    image: singleth03,
    href: '#!',
  },
]

const galleryImages: GalleryImageType[] = [
  { id: 1, image: galleryth01 },
  { id: 2, image: galleryth02 },
]

const tags: TagType[] = [
  { id: 1, label: 'Health system', href: '#!' },
  { id: 2, label: 'Consumerism', href: '#!' },
  { id: 3, label: 'Preventive care', href: '#!' },
]

const shareSocials: ShareSocialType[] = [
  { id: 1, icon: 'lucide:instagram', tooltip: 'Share on Instagram' },
  { id: 2, icon: 'lucide:facebook', tooltip: 'Share on Facebook' },
  { id: 3, icon: 'lucide:link', tooltip: 'Copy link' },
]

const BlogSingle = () => {
  return (
    <section className="lg:mt-20 mt-15 pt-6 pb-12 mb-6">
      <div className="container">
        <ol className="flex flex-wrap items-center whitespace-nowrap md:pb-6 pb-2 mb-4">
          <li className="inline-flex items-center">
            <Link className="flex items-center text-sm font-medium text-default-700 hover:text-default-900 focus:outline-hidden" href="/">
              Home
            </Link>

            <Icon icon="lucide:chevron-right" className="mx-2" />
          </li>

          <li className="inline-flex items-center">
            <Link href="/blog" className="flex items-center text-sm font-medium text-default-700 hover:text-default-900 focus:outline-hidden">
              Blog
            </Link>

            <Icon icon="lucide:chevron-right" className="mx-2" />
          </li>

          <li className="inline-flex items-center text-sm font-medium text-default-500/80 truncate" aria-current="page">
            Single post v.2
          </li>
        </ol>

        <h1 className="mb-6 text-default-900 lg:text-3.5xl md:text-2.5xl text-2xl">Five healthcare consumerism trends to watch</h1>

        <div className="flex flex-wrap items-center gap-2 pb-6 mb-4">
          <div className="relative flex flex-nowrap items-center">
            <div className="me-2 size-6">
              <Image className="rounded-full" src={author02} alt="Dr. Guy Hawkins" />
            </div>

            <Link className="text-default-700 hover:text-default-900 font-semibold text-sm" href="#!">
              Dr. Guy Hawkins
            </Link>
          </div>

          <Icon icon="lucide:dot" />

          <div className="text-sm me-2">April 17, 2024</div>

          <Link href="#!" className="py-1 px-2 uppercase text-xs text-default-800 bg-default-100 dark:bg-white/3 rounded-md font-medium">
            Healthcare trends
          </Link>
        </div>

        <div className="rounded-md">
          <Image src={single01} alt="Healthcare trends" className="rounded-md" />
        </div>

        <div className="md:py-12 pt-8 pb-2 lg:mt-4 grid lg:grid-cols-12 grid-cols-1 gap-6">
          <div className="lg:col-span-8 col-span-1">
            <p className="mb-4">
              Today's healthcare consumers have a strong preference for a patient-centric approach, prioritizing personalized experiences and convenience. The current healthcare landscape emphasizes the need for fast, digital interactions and effective, affordable treatment
              options. To appeal to these discerning consumers and stay ahead of the competition, it's crucial to understand and incorporate the following five healthcare consumerism trends in your strategies.
            </p>
            <h2 className="text-default-900 font-semibold lg:pt-6 pt-4 mb-4 text-xl">1. Patients expect personalization</h2>
            <p className="mb-4">
              In the current healthcare landscape, patients prioritize a personalized healthcare experience. Consequently, generic and depersonalized digital ads are ineffective across all sectors, emphasizing the critical role of targeting in digital advertising for the
              healthcare industry.
            </p>
            <p className="mb-4">
              Consider a scenario where a healthcare consumer encountering banner ads for a podiatrist's practice while seeking information on angina. Despite the ads reaching a potential patient with health concerns, the irrelevant service offering is likely to result in no
              conversion and might even frustrate the prospect. To optimize healthcare advertising efforts, it is essential to be deliberate in targeting and ensure that ads are placed alongside relevant content, intersecting with patients as they explore topics associated with
              your service lines.
            </p>

            <p className="mb-4">Given that 76% of consumers find a lack of personalized messaging frustrating, prioritizing ad personalization becomes imperative. This approach not only enhances relevance but also fosters trust in your health system among consumers.</p>

            <h2 className="text-default-900 font-semibold lg:pt-6 pt-4 mb-4 text-xl">2. Digital front doors gain traction as patients seek convenience</h2>
            <p className="mb-4">
              Healthcare consumerism is increasingly centered around the principle of convenience, and digital tools play a pivotal role in enhancing patient engagement. With over 70% of patients utilizing Google search before scheduling appointments, and 59% basing their choice
              of doctor on favorable online reviews, the digital landscape significantly influences healthcare decisions. Additionally, 60% of patients opt for digital scheduling for appointments, and an overwhelming 94% express a willingness to switch to a new practice that
              offers this convenience.
            </p>
            <p className="mb-4">
              A well-designed digital front door serves not only as a tool for patient acquisition but also as a window into the capabilities of your health system. It is crucial to approach the development of this digital entry point with care, as highlighted by a study from
              Accenture, where half of the respondents stated that a negative digital experience with healthcare could taint their entire perception, and 26% would consider switching to a different healthcare professional offering superior digital services.
            </p>

            <p className="mb-4">
              To capitalize on this trend, it is imperative to create a robust online portal that allows patients to interact with your hospital easily and on a personalized level. Moreover, it's essential to recognize that a digital front door extends beyond your website.
              Third-party platforms like Healthgrades can significantly increase patient traffic through your health system's digital front door by enhancing discoverability, providing direct links to your scheduling portal, and offering other valuable features.
            </p>
            <div className="md:py-6 py-4 mb-4">
              <Image src={single02} className="rounded-md mb-2" alt="Healthcare article" />

              <p className="text-default-500 text-sm">Image source Unsplash.com</p>
            </div>

            <h2 className="text-default-900 font-semibold lg:pt-6 pt-4 mb-4 text-xl">3. Telehealth is here to stay</h2>
            <p className="mb-4">
              Telehealth, initially conceived as an alternative to traditional in-person care, has evolved into the preferred method of receiving healthcare for many consumers. According to McKinsey's research, 55% of patients express higher satisfaction with telehealth compared
              to in-person care, and a significant 63% show interest in additional digital health solutions.
            </p>
            <p className="mb-4">
              This shift is attributed to the accessibility of telehealth services, offering patients a means to connect with their healthcare providers without the need for physical visits. Telehealth medical services are delivered through live video, asynchronous telemedicine,
              remote patient monitoring, and mobile health, providing convenient options that are also financially advantageous for patients seeking care for issues like rashes, seasonal flu, or urinary tract infections, which might otherwise lead them to urgent care facilities.
            </p>

            <p className="mb-4">
              Notably, telehealth has proven beneficial in various medical fields such as pediatric care, dermatology, ophthalmology, and dentistry, with follow-up appointments transitioning to virtual settings. Beyond convenience, telehealth ensures patients adhere to their care
              plans by facilitating easier access to healthcare professionals without enduring long lines or wait times.
            </p>

            <p className="mb-4">
              The present moment calls for a strengthening of telehealth options, emphasizing simplicity in online appointment scheduling for patients. Additionally, there's an opportunity to underscore a hospital's commitment to mental health and wellness. This can be achieved
              through initiatives such as hosting webinars on crucial mental health topics, distributing more mental health surveys, or instructing healthcare providers to take moments during appointments to genuinely inquire about patients' emotional well-being, addressing
              issues like depression, anxiety, and burnout.
            </p>

            <h2 className="text-default-900 font-semibold lg:pt-6 pt-4 mb-4 text-xl">4. Patients take a more proactive approach to health</h2>
            <p className="mb-4">
              The coronavirus pandemic prompted a significant shift in consumer behavior, leading many individuals to recognize the importance of preventive care and adopt healthier habits at home. As confidence in returning to hospitals and doctor's offices grows, consumers
              continue to maintain a proactive approach toward their health.
            </p>
            <p className="mb-4">
              A substantial number of consumers, almost two-thirds, have heightened their concern for health and wellness since the pandemic. More than 50% are actively researching health conditions online, reflecting an increased focus on health-related information.
              Additionally, two in five U.S. adults are utilizing health apps to track various aspects of their well-being, including blood pressure, sleep quality, and stress management. These apps and wearable devices provide continuous monitoring, delivering a more convenient
              and personalized consumer experience.
            </p>

            <p className="mb-4">
              To cater to the proactive healthcare consumer, it is advisable to incorporate easily digestible educational content on your website and share wellness tips on social media platforms. However, it is crucial not to underestimate the significance of in-person visits.
              Patients still desire a sense of support and understanding when addressing health concerns with a physician. The overall experience before, during, and after an appointment can have a profound impact on the quality of care and subsequent life outcomes. Balancing
              digital resources with personalized in-person interactions remains vital in meeting the evolving needs of healthcare consumers.
            </p>

            <h2 className="text-default-900 font-semibold lg:pt-6 pt-4 mb-4 text-xl">5. The need for price transparency rises</h2>
            <p className="mb-4">
              Price transparency has emerged as a critical concern for patients, especially as they bear a growing financial responsibility for treatments and doctor visits amid increasing out-of-pocket costs. With the average annual patient financial responsibility now standing
              at $1,650 per patient, driven in part by the prevalence of high-deductible health plans and a 111% cost increase since 2010, the need for transparent pricing is more pronounced than ever.
            </p>
            <p className="mb-4">Financial considerations pose a common barrier for patients, and women, in particular, are significantly impacted, with 1 in 3 women recently delaying or avoiding preventative care due to financial constraints.</p>

            <p className="mb-4">
              As a marketer, a strategic approach involves guiding patients toward affordable, high-quality healthcare by providing the necessary resources for well-informed decision-making. Given that price transparency laws are in effect, marketers can align their efforts by
              incorporating service prices into campaigns. Healthcare consumers are increasingly researching costs before choosing a healthcare provider, making transparency about prices a key factor in garnering positive patient recognition. In essence, transparency not only
              meets regulatory requirements but also aligns with the preferences of today's healthcare consumers.
            </p>

            <h2 className="text-default-900 font-semibold lg:pt-6 pt-4 mb-4 text-xl">Gallery</h2>
            <div className="mt-6 mb-4">
              <div className="grid grid-cols-2 lg:gap-6 gap-4">
                {galleryImages.map((item) => (
                  <div key={item.id} className="group relative overflow-hidden rounded-xl">
                    <Image alt="Gallery image" src={item.image} className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105" />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl">
                      <GlightBox href={item.image.src} className="image-popup after:absolute after:inset-0 after:z-1 rounded-xl">
                        <div className="absolute inset-0 flex justify-center items-center z-20 opacity-0 group-hover:opacity-100 transition duration-300">
                          <Icon icon="lucide:zoom-in" className="text-white text-3xl relative z-30" />
                        </div>
                      </GlightBox>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-default-900 font-semibold lg:pt-6 pt-4 mb-4 text-xl">6. Partnering with Healthgrades can help you keep up</h2>
            <p className="mb-4">
              Price transparency has emerged as a critical concern for patients, especially as they bear a growing financial responsibility for treatments and doctor visits amid increasing out-of-pocket costs. With the average annual patient financial responsibility now standing
              at $1,650 per patient, driven in part by the prevalence of high-deductible health plans and a 111% cost increase since 2010, the need for transparent pricing is more pronounced than ever.
            </p>
            <p className="mb-4">Financial considerations pose a common barrier for patients, and women, in particular, are significantly impacted, with 1 in 3 women recently delaying or avoiding preventative care due to financial constraints.</p>

            <p className="mb-4">
              As a marketer, a strategic approach involves guiding patients toward affordable, high-quality healthcare by providing the necessary resources for well-informed decision-making. Given that price transparency laws are in effect, marketers can align their efforts by
              incorporating service prices into campaigns. Healthcare consumers are increasingly researching costs before choosing a healthcare provider, making transparency about prices a key factor in garnering positive patient recognition. In essence, transparency not only
              meets regulatory requirements but also aligns with the preferences of today's healthcare consumers.
            </p>

            <div className="md:pt-6 pt-4">
              <ul className="mb-4 flex-wrap flex gap-2">
                {tags.map((tag) => (
                  <li key={tag.id}>
                    <Link href={tag.href} className="py-2.5 px-5 inline-flex rounded-full text-default-900 border border-default-300 dark:border-white/20 hover:border-default-900 transition-all duration-300 text-sm font-semibold">
                      {tag.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="lg:w-80 w-full ms-auto lg:sticky lg:top-25">
              <div
                id="blogSidebar"
                className="hs-overlay lg:static [--auto-close:lg] lg:block lg:translate-x-0 lg:end-auto lg:bottom-auto hs-overlay-open:translate-x-0 translate-x-full transition-all duration-300 transform hidden fixed top-0 end-0 bottom-0 z-60 bg-body-bg lg:w-auto w-87"
                role="dialog"
                tabIndex={-1}
                aria-label="Sidebar"
              >
                <div className="flex flex-col sticky top-0">
                  <header className="py-4 px-6 lg:px-0 lg:py-0 flex justify-between items-center gap-x-2">
                    <h3 className="text-xl text-default-900 font-semibold lg:hidden block">Sidebar</h3>

                    <div className="lg:hidden -me-2">
                      <button type="button" data-hs-overlay="#blogSidebar">
                        <Icon icon="lucide:x" className="size-5" />

                        <span className="sr-only">Close</span>
                      </button>
                    </div>
                  </header>

                  <nav className="lg:h-full h-[calc(100vh-64px)] overflow-y-auto" data-simplebar>
                    <div className="w-full flex flex-col flex-wrap pt-2 px-6 lg:px-0 pb-4 lg:pb-0">
                      <div className="flex flex-col gap-4">
                        <div>
                          <div className="mb-4">
                            <Image src={author09} alt="Dr. Guy Hawkins" className="size-14 rounded-full" />
                          </div>

                          <h4 className="text-default-900 font-semibold text-sm mb-2">Dr. Guy Hawkins</h4>

                          <p className="text-sm mb-4">Cardiologist with experience in interventional cardiology and personalized patient care.</p>

                          <div className="flex gap-2">
                            <div className="bg-info text-white text-xs inline-flex item-center font-medium px-2 py-0.5 rounded items-center">
                              Verified
                              <Icon icon="lucide:shield" className="ms-1" />
                            </div>

                            <div className="flex items-center gap-1">
                              <Icon icon="tabler:star-filled" className="text-warning" />

                              <span className="text-sm text-default-700">4.9</span>

                              <span className="text-sm text-secondary self-end">(248)</span>
                            </div>
                          </div>
                        </div>

                        <hr className="my-4 text-default-200 dark:text-white/20" />

                        <div>
                          <h4 className="text-xl text-default-900 font-semibold mb-6">Related articles</h4>

                          <div className="flex flex-col gap-6">
                            {relatedArticles.map((article) => (
                              <div key={article.id} className="flex gap-4">
                                <div className="flex flex-col gap-2">
                                  <div className="flex mb-1 items-center">
                                    <Image className="rounded-full size-6 me-2" src={article.avatar} alt={article.author} />

                                    <Link className="text-xs font-normal" href={article.href}>
                                      {article.author}
                                    </Link>
                                  </div>

                                  <h5 className="text-default-900 font-semibold text-sm">
                                    <Link className="hover:underline" href={article.href}>
                                      {article.title}
                                    </Link>
                                  </h5>
                                </div>

                                <div>
                                  <div className="rounded-md overflow-hidden w-20">
                                    <Image src={article.image} alt={article.title} className="w-20 object-cover transition-transform duration-500 rounded-md hover:scale-110 z-0" />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <hr className="my-4 text-default-200 dark:text-white/20" />

                        <div className="flex justify-between items-center">
                          <h4 className="text-default-900 font-semibold text-sm me-2">Share this post</h4>

                          <div className="flex gap-2">
                            {shareSocials.map((social) => (
                              <div key={social.id} className="hs-tooltip [--placement:top] flex justify-end mb-3">
                                <button type="button" className="hs-tooltip-toggle flex justify-center items-center size-10 transition-all duration-300 bg-default-100 dark:bg-white/3 rounded-md">
                                  <Icon icon={social.icon} className="size-4 text-default-900" />

                                  <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-default-900 text-xs font-medium text-body-bg rounded-md" role="tooltip">
                                    {social.tooltip}
                                  </span>
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Blog />
      </div>
    </section>
  )
}

export default BlogSingle

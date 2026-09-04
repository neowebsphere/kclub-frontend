'use client'
import { ReactNode } from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type FeatureItem = {
  id: number
  title: string
  description: string
  icon: ReactNode
}

const featureData: FeatureItem[] = [
  {
    id: 1,
    title: 'Verified contractors',
    description: 'Our platform boasts a meticulously vetted network of contractors across various specialties. Each contractor undergoes a rigorous verification process, including background checks and license verification.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64}>
        <path
          className="text-info"
          d="M59.68 61.071v1.704c0 .676-.549 1.225-1.225 1.225H5.545c-.676 0-1.225-.549-1.225-1.225v-1.704c0-3.929 2.786-7.306 6.645-8.054l2.869-.633 6.392-1.407 6.113-1.346h11.203l3.476.76 2.704.591 6.391 1.396 2.922.639c3.859.748 6.645 4.125 6.645 8.054z"
          fill="currentColor"
        />
        <path className="text-info-emphasis" d="M13.834 59.126h36.279V64H13.834v-4.874z" fill="currentColor" />
        <path d="M18.722 30.49c-1.82 0-3.301-1.79-3.323-4.015-.023-2.264 1.472-4.115 3.323-4.115l1.25 4.065-1.25 4.065zm26.563 0c1.82 0 3.301-1.79 3.323-4.015.023-2.264-1.472-4.115-3.323-4.115l-1.25 4.065 1.25 4.065z" fill="#ffab8a" />
        <path
          d="M37.441 49.431l.1.2v.223a5.61 5.61 0 0 1-5.601 5.6 5.57 5.57 0 0 1-3.906-1.586 5.56 5.56 0 0 1-1.695-4.014v-.223l.101-.2c.271-.537.45-1.112.532-1.709l.046-.525c.027-.712-.085-1.429-.331-2.099l-.756-2.049h12.018l-.755 2.049a5.45 5.45 0 0 0-.329 2.144l.044.479a5.41 5.41 0 0 0 .532 1.71z"
          fill="#ffd9c0"
        />
        <path d="M37.194 45.099a5.45 5.45 0 0 0-.329 2.144 8.66 8.66 0 0 1-4.869 1.505h-.039c-1.766 0-3.496-.546-4.939-1.55.027-.712-.085-1.429-.331-2.099l-.756-2.049h12.018l-.755 2.049z" fill="#ffbca1" />
        <path
          d="M45.559 32.329c0 3.198-2.621 6.97-7.791 11.219l-.326.266a8.66 8.66 0 0 1-5.445 1.934h-.039c-1.982 0-3.919-.687-5.456-1.939-5.382-4.354-8.113-8.218-8.113-11.48 0-.362.014-.706.043-1.022.13-1.326.169-5.545.091-9.815-.003-.085.03-.165.089-.225a.31.31 0 0 1 .223-.094h.001l24.047.005h2.265c.084 0 .164.034.223.093s.091.141.09.225c-.065 3.609-.089 8.34.056 9.799a13 13 0 0 1 .043 1.035z"
          fill="#ffd9c0"
        />
        <path className="text-info-emphasis" d="M20.226 50.978V64h-6.392V52.385l6.392-1.407zm29.886 1.401V64h-6.391V50.983l3.688.805 2.704.591z" fill="currentColor" />
        <path d="M35.534 34.51a.94.94 0 0 0-1.148.663c-.295 1.103-1.301 1.873-2.446 1.873s-2.149-.77-2.444-1.873a.94.94 0 0 0-1.148-.663.94.94 0 0 0-.663 1.148 4.41 4.41 0 0 0 8.512 0 .94.94 0 0 0-.663-1.148z" fill="#ffab8a" />
        <path className="text-info-emphasis" d="M50.112 52.379V64h-2.704V51.788l2.704.591z" fill="currentColor" />
        <path d="M13.834 59.126h6.392V64h-6.392v-4.874zm29.887 0h6.391V64h-6.391v-4.874z" fill="currentColor" style={{ color: 'var(--fn-info-border-subtle)' }} />
        <path className="text-warning" d="M47.692 14.671v4.882c0 .519-.419.938-.937.938H17.189c-.518 0-.937-.419-.937-.937v-4.882A12.61 12.61 0 0 1 28.846 2.079h6.251a12.61 12.61 0 0 1 12.595 12.592z" fill="currentColor" />
        <g className="text-warning-emphasis" fill="currentColor" data-bs-theme="light">
          <path d="M47.692 14.671v4.882c0 .519-.419.938-.937.938h-2.389c.412 0 .746-.419.746-.937v-4.882c0-6.944-4.492-12.592-10.015-12.592a12.61 12.61 0 0 1 12.595 12.592z" />
          <path d="M47.692 14.671v4.882c0 .519-.419.938-.937.938H17.189c-.518 0-.937-.419-.937-.937v-4.882h31.441z" />
          <path d="M35.064.938v18.616c0 .519-.419.938-.937.938h-4.115c-.517 0-.937-.419-.937-.937V.938A.94.94 0 0 1 30.011 0h4.115c.519 0 .938.42.938.938z" />
        </g>
        <path className="text-warning" d="M51.435 19.554v1.664a3.45 3.45 0 0 1-3.445 3.444H16.01a3.45 3.45 0 0 1-3.445-3.444v-1.664a.94.94 0 0 1 .938-.937h36.995a.94.94 0 0 1 .938.938z" fill="currentColor" />
        <path className="text-warning-emphasis" data-bs-theme="light" d="M51.435 19.554v1.664a3.45 3.45 0 0 1-3.445 3.444h-2.826c1.902 0 3.445-1.543 3.445-3.444v-1.664a.94.94 0 0 0-.937-.937h2.826a.94.94 0 0 1 .938.938z" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Advanced search',
    description: 'Finder Contractor offers sophisticated search tools that allow you to filter contractors based on criteria such as location, project type, budget, and specific skills.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64}>
        <path
          className="text-primary"
          d="M23.031 47.264c10.147 7.161 24.273 6.202 33.354-2.879 10.167-10.167 10.154-26.659-.04-36.809C46.204-2.523 29.403-2.403 19.4 7.832c-8.881 9.088-9.769 23.072-2.663 33.139.376.532.29 1.263-.196 1.697l-3.762 3.366 5.185 5.185 3.366-3.762c.435-.486 1.166-.57 1.699-.194z"
          fill="currentColor"
        />
        <path d="M38 45.062c-6.179 0-11.703-1.864-15.372-6.266A19.92 19.92 0 0 1 18 26c0-11.046 8.954-20 20-20a19.92 19.92 0 0 1 12.722 4.567c4.445 3.668 6.473 9.259 6.473 15.472 0 11.046-8.149 19.023-19.195 19.023z" fill="currentColor" className="text-body-bg" />
        <path d="M50.796 10.629a19.92 19.92 0 0 1 4.629 12.796c0 11.046-8.954 20-20 20a19.92 19.92 0 0 1-12.796-4.629C26.297 43.198 31.821 46 38 46c11.046 0 20-8.954 20-20 0-6.179-2.802-11.703-7.204-15.371z" fill="currentColor" className="text-primary-bg-subtle" />
        <path d="M6.723 63.786L17.965 51.22l-5.185-5.185L.215 57.277c-.136.122-.214.297-.214.48v5.599c0 .356.288.644.644.644h5.599c.183 0 .358-.078.48-.215z" fill="#333d4c" />
        <path className="text-info" d="M55 18a9 9 0 1 0 0-18 9 9 0 1 0 0 18z" fill="currentColor" />
        <path className="text-info-emphasis" d="M60.325 1.744a8.96 8.96 0 0 1 1.743 5.325 9 9 0 0 1-9 9 8.96 8.96 0 0 1-5.325-1.744C49.382 16.554 52.022 18 55 18a9 9 0 0 0 9-9c0-2.978-1.447-5.618-3.675-7.256z" fill="currentColor" />
        <path
          d="M59.356 7h-1.712C57.288 7 57 6.712 57 6.356V4.644c0-.356-.288-.644-.644-.644h-2.712c-.356 0-.644.288-.644.644v1.712c0 .356-.288.644-.644.644h-1.712c-.356 0-.644.288-.644.644v2.712c0 .356.288.644.644.644h1.712c.356 0 .644.288.644.644v1.712c0 .356.288.644.644.644h2.712c.356 0 .644-.288.644-.644v-1.712c0-.356.288-.644.644-.644h1.712c.356 0 .644-.288.644-.644V7.644c0-.356-.288-.644-.644-.644z"
          fill="#fff"
        />
        <path d="M18.908 53.129c-.247 0-.494-.094-.683-.283l-7.071-7.071c-.377-.377-.377-.989 0-1.366s.989-.377 1.366 0l7.071 7.071c.377.377.377.989 0 1.366-.189.189-.436.283-.683.283z" fill="#333d4c" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Project management',
    description: 'Manage your projects effortlessly with our integrated project management tools. Features include real-time chat, scheduling, progress tracking, and document sharing.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64}>
        <path className="text-primary" d="M37.257 28.884L20.404 50.43h16.853V28.884zM45 56.486c0 .836-.694 1.514-1.549 1.514H7.241c-1.026 0-1.607-1.15-.984-1.947L43.611 8.299c.45-.575 1.389-.264 1.389.46v47.727z" fill="currentColor" />
        <path className="text-warning" d="M52.763 11.765l1.779-4.449c.169-.422.766-.422.935 0l1.779 4.449c.178.446.27.922.27 1.402v40.8h-5.033V13.167a3.77 3.77 0 0 1 .27-1.402z" fill="currentColor" />
        <path d="M55.476 7.316c-.169-.422-.766-.422-.935 0l-1.78 4.449c-.178.446-.27.922-.27 1.402v.531h5.033v-.531a3.77 3.77 0 0 0-.27-1.402l-1.779-4.448z" fill="#e0e5eb" />
        <path d="M55.009 7c-.191 0-.383.105-.467.316l-1.78 4.448c-.178.446-.27.922-.27 1.402v.531h2.517V7z" fill="#cad0d9" />
        <g className="text-warning-emphasis" data-bs-theme="light" fill="currentColor">
          <path d="M55.009 13.698h-2.517v40.268h2.517V13.698z" />
          <path d="M57.525 52.708h-5.033v2.517h5.033v-2.517z" />
        </g>
        <path className="text-warning" d="M57.526 52.708h-2.517v2.517h2.517v-2.517z" fill="currentColor" />
        <path className="text-primary" d="M53.75 59h2.517a1.26 1.26 0 0 0 1.258-1.258v-2.517h-5.033v2.517A1.26 1.26 0 0 0 53.75 59z" fill="currentColor" />
        <path className="text-primary-emphasis" data-bs-theme="light" d="M55.008 57.742v-2.517h-2.517v2.517A1.26 1.26 0 0 0 53.75 59h2.517a1.26 1.26 0 0 1-1.258-1.258zM54.54 7.316l-1.043 2.607h3.02l-1.043-2.607c-.169-.422-.766-.422-.935 0z" fill="currentColor" />
      </svg>
    ),
  },
]

const Feature = () => {
  return (
    <section className="bg-info py-12">
      <div className="container">
        <div className="lg:py-12 md:py-6 md:mb-4">
          <h2 className="text-white lg:text-4.5xl md:text-3.5xl text-2.5xl font-semibold lg:mb-12 md:mb-8 mb-7">Key features</h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            wrapperClass="lg:mb-0 mb-12"
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            breakpoints={{
              680: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            modules={[Pagination]}
          >
            {featureData.map((feature) => (
              <SwiperSlide key={feature.id} className="!h-auto">
                <div className="bg-body-bg rounded-xl md:p-2 h-full">
                  <div className="p-6 h-full">
                    {feature.icon}
                    <h3 className="pt-6 mb-2 pb-1 lg:text-2xl text-xl font-semibold text-default-900">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-pagination position-static mt-3" data-bs-theme="light" />
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Feature

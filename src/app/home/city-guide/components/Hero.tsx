import hero01 from '@/assets/img/home/city-guide/hero/01.jpg'
import hero02 from '@/assets/img/home/city-guide/hero/02.jpg'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
      <section className="relative pb-10 lg:mt-22 mt-15 overflow-hidden">
        <div className="container">
          <div className="lg:pt-24 pt-14 pb-6 lg:w-4xl mx-auto text-center">
            <h1 className="lg:text-5.5xl md:text-4.8xl text-3.5xl text-center text-default-900 font-bold md:mb-6 mb-4">Start exploring Barcelona</h1>
            <p className="lg:w-xl md:w-md mx-auto text-center text-lg md:mb-12 mb-10 lg:pb-4">Find great places to stay, eat, shop, or visit from our respected partners and local experts.</p>
            <form className="relative z-10 p-2 mx-auto lg:max-w-180 w-full">
              <div className="relative flex flex-col lg:flex-row gap-2 z-10 p-1">
                <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-3">
                  <div className="relative w-full">
                    <Icon icon="lucide:search" className="absolute top-1/2 start-0 -translate-y-1/2 text-xl text-default-500 ms-2" />
                    <input type="search" placeholder="What are you looking for?" required className="w-full border-0 rounded-none ps-9 pe-0 py-3 text-base bg-transparent" />
                  </div>
                  <hr className="sm:hidden m-0 border-border" />
                  <div className="hidden sm:flex items-center">
                    <div className="border-l h-8 border-border" />
                  </div>
                  <div className="relative w-full max-w-55">
                    <Icon icon="lucide:grid-2x2" className="absolute top-1/2 start-0 -translate-y-1/2 z-10 text-xl text-default-500 ms-2" />
                    <select required className="w-full border-0 ps-9 py-3 text-base bg-transparent">
                      <option value="">Category</option>
                      <option value="Accommodation">Accommodation</option>
                      <option value="Shopping">Shopping</option>
                      <option value="Food & Drink">Food &amp; Drink</option>
                      <option value="Entertainment">Entertainment</option>
                      <option value="Health">Health</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="px-6 py-3.5 font-semibold bg-primary rounded-full text-white transition-all duration-300 ease-in-out hover:bg-primary-hover">
                  Search
                </button>
              </div>
              <span className="absolute top-0 start-0 w-full h-full bg-body-bg border border-border rounded-full shadow hidden lg:block" />
              <span className="absolute top-0 start-0 w-full h-full bg-body-bg border border-border rounded-2xl shadow lg:hidden" />
            </form>
            <div className="lg:pt-12 md:pt-4 lg:my-4 mt-0">
              <div className="pt-12 overflow-x-auto whitespace-nowrap">
                <div className="md:grid md:grid-cols-5 flex gap-6 justify-between">
                  <div className="group">
                    <Link href="/listings/top-filters-city">
                      <div className="relative flex items-end justify-center text-primary mx-auto w-22 h-22 group-hover:scale-105 transition-all duration-300">
                        <svg className="relative z-10 [backface-visibility:hidden]" xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="currentColor" viewBox="0 0 48 48">
                          <path d="M47.725 18.275L46.5 17.049V7.164c0-3.95-3.213-7.163-7.163-7.163-1.625 0-3.125.545-4.328 1.46-5.303-2.604-11.905-1.704-16.31 2.701-4.717 4.717-5.414 11.954-2.093 17.417l-5.371 5.371H8.966a.94.94 0 0 0-.937.938v1.72h-1.72a.94.94 0 0 0-.937.938v1.72h-1.72a.94.94 0 0 0-.937.938v1.72H.994a.94.94 0 0 0-.663.275l-.057.057c-.176.176-.275.414-.275.663v6.083a.94.94 0 0 0 .937.938h6.196a.94.94 0 0 0 .663-.275l10.341-10.341a.94.94 0 0 0 0-1.326.94.94 0 0 0-1.326 0L6.745 41.062h-4.87v-4.265h1.777a.94.94 0 0 0 .937-.937v-1.72h1.72a.94.94 0 0 0 .938-.937v-1.72h1.72a.94.94 0 0 0 .938-.937v-1.72h1.72a.94.94 0 0 0 .663-.275l5.415-5.415a14.38 14.38 0 0 0 .998 1.108c2.537 2.537 5.864 3.994 9.426 4.145v15.674c0 2.171 1.766 3.937 3.937 3.937h12c2.171 0 3.937-1.766 3.937-3.937V18.937a.94.94 0 0 0-.275-.663zM39.337 1.876c2.916 0 5.288 2.372 5.288 5.288v8.011l-1.686-1.686c-.008-.008-.017-.015-.026-.023-.175-3.387-1.552-6.723-4.133-9.304-.617-.616-1.276-1.164-1.969-1.643a5.26 5.26 0 0 1 2.526-.643zm-5.288 7.951v-2.07a2.26 2.26 0 0 1 1.34 2.07 2.26 2.26 0 0 1-.666 1.607c-.886.886-2.328.886-3.214 0s-.886-2.328 0-3.214c.198-.198.424-.349.665-.458v2.065a.94.94 0 0 0 .938.938.94.94 0 0 0 .937-.938zM28.74 26.521a12.29 12.29 0 0 1-8.715-3.604c-4.805-4.805-4.805-12.624 0-17.429 2.328-2.328 5.423-3.61 8.715-3.61a12.3 12.3 0 0 1 4.865.995 7.13 7.13 0 0 0-1.292 2.886c-.781.153-1.526.531-2.13 1.135-1.617 1.617-1.617 4.248 0 5.866.809.809 1.871 1.213 2.933 1.213s2.124-.404 2.933-1.213a4.12 4.12 0 0 0 1.215-2.933 4.12 4.12 0 0 0-1.215-2.933A4.12 4.12 0 0 0 34.22 5.83a5.27 5.27 0 0 1 1.075-2.07 12.42 12.42 0 0 1 2.161 1.728 12.24 12.24 0 0 1 3.61 8.715 12.24 12.24 0 0 1-3.61 8.715c-2.403 2.403-5.558 3.604-8.715 3.604zm17.385 17.541c0 1.137-.925 2.063-2.062 2.063h-12c-1.137 0-2.063-.925-2.063-2.062V28.346a14.09 14.09 0 0 0 8.78-4.103c2.307-2.306 3.651-5.216 4.036-8.225l3.308 3.308v24.736zM23.965 9.429a.94.94 0 0 0 0-1.326.94.94 0 0 0-1.326 0 8.64 8.64 0 0 0 0 12.198c.183.183.423.275.663.275s.48-.092.663-.275a.94.94 0 0 0 0-1.326 6.76 6.76 0 0 1 0-9.547zm2.982 11.291a.94.94 0 1 0-.257 1.84.94.94 0 0 0 .901-.68.94.94 0 0 0-.644-1.159zm15.1 20.342h-7.969a.94.94 0 0 0-.937.938.94.94 0 0 0 .938.938h7.969a.94.94 0 0 0 .938-.937.94.94 0 0 0-.937-.937zM20.542 28.591c-.174-.174-.416-.275-.663-.275s-.488.1-.663.275-.275.416-.275.663.1.488.275.663.416.275.663.275.488-.1.663-.275a.94.94 0 0 0 0-1.326z" />
                        </svg>
                        <span className="absolute inset-0 bg-primary/10 rounded-full scale-110" />
                      </div>
                    </Link>
                    <h3 className="text-base font-normal pt-6">
                      <Link href="/listings/top-filters-city"></Link>
                      <Link href="/listings/top-filters-city" className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300">
                        Accommodation
                      </Link>
                    </h3>
                  </div>
                  <div className="group">
                    <Link href="/listings/top-filters-city">
                      <div className="relative flex items-end justify-center text-info mx-auto w-22 h-22 group-hover:scale-105 transition-all duration-300">
                        <svg className="relative z-1-" style={{ backfaceVisibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="currentColor">
                          <path d="M41.813 45.158l-.938-30c-.049-1.561-1.284-2.783-2.812-2.783h-4.219 0V9.844C33.845 4.416 29.429 0 24.001 0a9.86 9.86 0 0 0-9.844 9.844v2.531H9.938c-1.528 0-2.763 1.223-2.812 2.783l-.938 30a2.7 2.7 0 0 0 .774 1.977C7.495 47.685 8.237 48 9 48h30c.762 0 1.505-.315 2.038-.865a2.7 2.7 0 0 0 .774-1.977zM16.032 9.844a7.98 7.98 0 0 1 7.969-7.969 7.98 7.98 0 0 1 7.969 7.969v7.219a.94.94 0 0 1-.937.938.94.94 0 0 1-.937-.937v-7.22c0-3.36-2.734-6.094-6.094-6.094s-6.094 2.734-6.094 6.094v7.219a.94.94 0 0 1-.937.938.94.94 0 0 1-.937-.937v-7.22zm12.188 2.531h-8.437 0V9.844c0-2.326 1.893-4.219 4.219-4.219s4.219 1.893 4.219 4.219v2.531zM39.693 45.83a.97.97 0 0 1-.692.295h-30a.97.97 0 0 1-.691-.295.84.84 0 0 1-.246-.613l.03-.967h4.939a.94.94 0 0 0 .938-.937.94.94 0 0 0-.937-.937h-4.88l.849-27.158c.017-.542.429-.967.938-.967h4.219v2.813c0 1.551 1.262 2.812 2.813 2.812s2.813-1.262 2.813-2.812V14.25h8.437v2.813c0 1.551 1.262 2.812 2.813 2.812s2.813-1.262 2.813-2.812V14.25h0 4.219c.509 0 .921.425.938.967l.938 30a.84.84 0 0 1-.246.613zM24.59 25.678c-.386.385-.884.291-1.177 0a5.73 5.73 0 0 0-8.074 0c-1.557 1.552-2.057 3.581-1.446 5.867 1.293 4.835 7.255 9.709 9.866 10.406.079.021.161.032.242.032s.163-.011.242-.032c2.611-.697 8.572-5.571 9.866-10.406.612-2.286.112-4.315-1.446-5.867a5.73 5.73 0 0 0-8.074 0zm7.708 5.383c-1.088 4.067-6.163 8.222-8.296 9.002-2.134-.78-7.208-4.935-8.296-9.002-.441-1.647-.127-2.973.958-4.055a3.83 3.83 0 0 1 5.426 0 2.68 2.68 0 0 0 3.824 0 3.85 3.85 0 0 1 5.426 0c1.085 1.082 1.399 2.408.958 4.055zM17.25 42.375a.94.94 0 0 0-.937.938.94.94 0 0 0 .938.938h.001c.518 0 .937-.42.937-.937a.94.94 0 0 0-.938-.937z" />
                        </svg>
                        <span className="absolute inset-0 bg-info/10 rounded-full scale-110" />
                      </div>
                    </Link>
                    <h3 className="text-base font-normal pt-6">
                      <Link href="/listings/top-filters-city"></Link>
                      <Link href="/listings/top-filters-city" className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300">
                        Shopping
                      </Link>
                    </h3>
                  </div>
                  <div className="group">
                    <Link href="/listings/top-filters-city">
                      <div className="relative flex items-end justify-center text-warning mx-auto w-22 h-22 group-hover:scale-105 transition-all duration-300">
                        <svg className="relative z-10" style={{ backfaceVisibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="currentColor">
                          <path d="M33.219 26.232a.94.94 0 0 0 .937-.937.94.94 0 0 0-.937-.937.94.94 0 0 0-.938.938.94.94 0 0 0 .938.938zm9.325-.938a.94.94 0 0 0-.939-.939h-4.151a.94.94 0 0 0-.939.939.94.94 0 0 0 .939.939h3.186a16.69 16.69 0 0 1-16.639 15.725A16.69 16.69 0 0 1 7.362 26.234h21.624a.94.94 0 0 0 .939-.939.94.94 0 0 0-.939-.939h-3.343c.078-.545.282-.877.544-1.298.384-.618.861-1.388.861-2.816s-.477-2.198-.861-2.816c-.336-.542-.579-.933-.579-1.826s.243-1.284.579-1.826c.384-.618.861-1.388.861-2.816s-.477-2.198-.861-2.816c-.148-.239-.278-.45-.377-.686L40.737 9.81a.94.94 0 0 0 .146-1.867L25.732 5.54l.231-1.569L40.951 1.87a.94.94 0 0 0 .8-1.061.94.94 0 0 0-1.061-.8L14.077 3.742a.95.95 0 0 0-.808.966c.007 1.466.427 2.264.798 2.969.325.617.582 1.104.582 2.129 0 1.007-.263 1.465-.596 2.046-.376.657-.844 1.474-.844 2.98s.468 2.323.844 2.98c.333.581.595 1.04.595 2.046s-.263 1.465-.595 2.046c-.33.575-.73 1.274-.824 2.452H6.396a.94.94 0 0 0-.939.939c0 7.052 3.958 13.197 9.768 16.332v5.434a.94.94 0 0 0 .939.939h15.671a.94.94 0 0 0 .939-.939v-5.434c5.811-3.135 9.769-9.28 9.769-16.332zM23.73 6.315c0 1.428.477 2.198.861 2.816.336.542.579.933.579 1.826s-.243 1.284-.579 1.826c-.384.618-.861 1.388-.861 2.816s.477 2.198.861 2.816c.336.541.579.933.579 1.826s-.243 1.284-.579 1.826-.737 1.189-.837 2.288h-3.49c.079-.593.294-.953.552-1.383.381-.633.854-1.421.854-2.879s-.474-2.246-.854-2.879c-.327-.544-.585-.974-.585-1.911s.258-1.367.586-1.911c.381-.633.854-1.421.854-2.879s-.474-2.246-.854-2.879c-.327-.544-.586-.974-.586-1.911v-.947l3.794-.532-.295 2.071zm-8.046 10.563c-.333-.581-.595-1.04-.595-2.046s.263-1.465.596-2.046c.376-.657.844-1.474.844-2.98 0-1.489-.424-2.294-.799-3.005-.226-.428-.419-.795-.515-1.321l3.138-.44v.683c0 1.458.473 2.246.854 2.879.327.544.586.974.586 1.911s-.258 1.367-.586 1.911c-.381.633-.854 1.421-.854 2.879s.473 2.246.854 2.879c.327.544.585.974.585 1.911s-.258 1.367-.585 1.911c-.332.552-.734 1.222-.832 2.351h-3.257c.076-.66.299-1.05.567-1.518.376-.656.844-1.473.844-2.98s-.468-2.323-.844-2.98zm15.213 29.244H17.104v-3.614c2.133.858 4.46 1.331 6.896 1.331s4.763-.473 6.896-1.331v3.614zM15.916 28.755a.94.94 0 0 0-.939.939.94.94 0 0 0 .939.939h16.168a.94.94 0 0 0 .939-.939.94.94 0 0 0-.939-.939H15.916z" />
                        </svg>
                        <span className="absolute inset-0 bg-warning/10 rounded-full scale-110" />
                      </div>
                    </Link>
                    <h3 className="text-base font-normal pt-6">
                      <Link href="/listings/top-filters-city"></Link>
                      <Link href="/listings/top-filters-city" className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300">
                        Food &amp; Drink
                      </Link>
                    </h3>
                  </div>
                  <div className="group">
                    <Link href="/listings/top-filters-city">
                      <div className="relative flex items-end justify-center text-success mx-auto w-22 h-22 group-hover:scale-105 transition-all duration-300">
                        <svg className="relative z-10" style={{ backfaceVisibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="currentColor">
                          <path d="M37.236 10.494c-1.022-.278-2.063-.388-3.106-.328C33.845 4.51 29.387 0 23.947 0c-4.679 0-8.632 3.337-9.827 7.869a9.67 9.67 0 0 0-3.163.324 9.85 9.85 0 0 0-.937.307.94.94 0 0 0-.539 1.211c.143.373.498.602.875.602.112 0 .225-.02.336-.063a8.08 8.08 0 0 1 .758-.249 7.83 7.83 0 0 1 2.346-.272 11.39 11.39 0 0 0-.045 1.01c0 4.936 3.114 10.72 7.388 12.57l-.435 2.271c-1.022 2.065-2.488 3.447-4.139 3.898a5.01 5.01 0 0 1-1.461.17c-1.344-.041-2.558-.562-3.437-1.069-2.785-1.608-5.199-4.748-6.007-7.814-.506-1.92-.4-3.894.305-5.709a.94.94 0 0 0-.534-1.214.94.94 0 0 0-1.213.535c-.849 2.186-.977 4.56-.37 6.865.927 3.518 3.693 7.119 6.882 8.961 1.156.667 2.319 1.084 3.454 1.246l.266 3.884a.94.94 0 0 0 .935.874.94.94 0 0 0 .246-.033l1.802-.491c.768 1.632.952 3.234 1.129 4.789.191 1.672.371 3.252 1.223 4.753.172.304.49.475.816.475a.93.93 0 0 0 .462-.123.94.94 0 0 0 .352-1.278c-.663-1.169-.815-2.499-.991-4.04-.177-1.55-.373-3.274-1.159-5.076l1.43-.39c.268-.073.491-.262.606-.515s.113-.544-.008-.795l-1.685-3.512c.598-.474 1.153-1.051 1.653-1.72.021.002.042.003.063.003h1.871c.329 1.783.099 3.381-.127 4.932-.241 1.665-.469 3.238-.028 4.912.111.421.49.699.906.699a.93.93 0 0 0 .239-.031.94.94 0 0 0 .668-1.145c-.344-1.304-.152-2.63.071-4.165.223-1.543.472-3.257.173-5.201h.744c.494 1.626 1.466 3.038 2.734 4.034l-1.677 3.495c-.12.251-.123.542-.007.795a.94.94 0 0 0 .606.515l1.43.39c-.785 1.801-.982 3.525-1.159 5.076-.176 1.541-.327 2.871-.991 4.04a.94.94 0 0 0 .352 1.278.93.93 0 0 0 .462.122.94.94 0 0 0 .816-.475c.852-1.501 1.033-3.081 1.223-4.753.177-1.555.361-3.157 1.129-4.788l1.802.491a.94.94 0 0 0 1.182-.84l.266-3.883c.609-.087 1.229-.249 1.857-.486 3.807-1.436 7.374-5.525 8.479-9.721 1.506-5.717-1.684-11.571-7.111-13.05zm-18.12 22.788l-2.876.784-.177-2.585c.336-.04.668-.103.994-.191a6.69 6.69 0 0 0 .942-.336l1.117 2.329zm3.342-6.901l.487-2.546a6.68 6.68 0 0 0 1.001.076 6.75 6.75 0 0 0 1.001-.076l.487 2.545h-2.976zm6.616 9.2l1.116-2.325a6.95 6.95 0 0 0 .944.332 6.87 6.87 0 0 0 .994.192l-.177 2.585-2.876-.784zm13.458-12.515c-.947 3.596-4.097 7.227-7.328 8.445-.713.269-1.405.415-2.071.439a.62.62 0 0 0-.053.001 5.02 5.02 0 0 1-1.453-.171c-2.05-.558-3.675-2.383-4.141-4.648l-.731-3.818a8.33 8.33 0 0 0 .718-.351c.454-.249.619-.819.369-1.273a.94.94 0 0 0-1.273-.37 6.06 6.06 0 0 1-1.149.491 5.04 5.04 0 0 1-1.475.227c-2.025 0-4.132-1.344-5.781-3.689-1.591-2.262-2.542-5.106-2.542-7.607 0-4.889 3.734-8.866 8.323-8.866s8.323 3.977 8.323 8.866c0 1.667-.438 3.552-1.233 5.306-.214.472-.005 1.027.467 1.241s1.027.005 1.241-.467c.704-1.552 1.16-3.205 1.327-4.772.897-.07 1.793.014 2.672.254 4.438 1.209 7.035 6.038 5.79 10.763zM7.16 12.422a.94.94 0 0 0 .631-.244h0a.94.94 0 0 0 .063-1.324.94.94 0 0 0-1.324-.063.94.94 0 0 0-.063 1.324c.185.204.439.307.694.307zm23.347 6.518a.94.94 0 0 0-1.321.12h0a.94.94 0 0 0 .12 1.32c.175.146.388.217.599.217.269 0 .536-.115.721-.338.332-.398.278-.989-.12-1.32zM8.391 35.519h0c-.518 0-.937.42-.937.938a.94.94 0 0 0 .938.938.94.94 0 0 0 .938-.937.94.94 0 0 0-.937-.937zm6.469 5.907h-.001c-.518 0-.937.42-.937.938a.94.94 0 0 0 .938.938.94.94 0 0 0 .938-.937.94.94 0 0 0-.937-.937z" />
                        </svg>
                        <span className="absolute inset-0 bg-success/10 rounded-full scale-110" />
                      </div>
                    </Link>
                    <h3 className="text-base font-normal pt-6">
                      <Link href="/listings/top-filters-city"></Link>
                      <Link href="/listings/top-filters-city" className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300">
                        Entertainment
                      </Link>
                    </h3>
                  </div>
                  <div className="group">
                    <Link href="/listings/top-filters-city">
                      <div className="relative flex items-end justify-center text-primary mx-auto w-22 h-22 group-hover:scale-105 transition-all duration-300">
                        <svg className="relative z-10" style={{ backfaceVisibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="currentColor">
                          <path d="M26.217 14.325h-5.325a.94.94 0 0 0-.937.937v3.224h-3.229c-.518 0-.937.42-.937.937v5.318a.94.94 0 0 0 .937.937h3.229v3.224a.94.94 0 0 0 .937.937h5.325a.94.94 0 0 0 .937-.937v-3.224h3.226a.94.94 0 0 0 .937-.937v-5.318a.94.94 0 0 0-.937-.937h-3.226v-3.224a.94.94 0 0 0-.937-.937zm3.226 6.036v3.444h-3.226a.94.94 0 0 0-.937.937v3.224h-3.45v-3.224a.94.94 0 0 0-.937-.937h-3.229v-3.444h3.229a.94.94 0 0 0 .937-.937V16.2h3.45v3.224a.94.94 0 0 0 .937.937h3.226zm12.855 7.211l.648-.624.024-.024c5.513-5.705 5.513-14.987 0-20.692-2.318-2.398-5.501-3.642-8.962-3.5-3.31.135-6.509 1.495-9.008 3.83l-.178.166c-.518.484-1.053.984-1.27 1.079-.217-.094-.752-.594-1.27-1.079l-.177-.166c-2.499-2.335-5.699-3.695-9.008-3.83-3.462-.142-6.643 1.102-8.96 3.5-5.515 5.705-5.515 14.987 0 20.692.008.008.015.016.023.023l4.602 4.437c.182.175.416.263.651.263.246 0 .491-.096.675-.287a.94.94 0 0 0-.024-1.325l-4.59-4.426C.664 20.623.667 12.518 5.485 7.535c3.9-4.038 10.782-3.86 15.34.398l.176.165c1.098 1.027 1.703 1.592 2.55 1.592s1.452-.566 2.55-1.592l.177-.165c4.558-4.257 11.441-4.435 15.343-.397 4.815 4.982 4.818 13.087.012 18.075l-1.429 1.376c-.462-.072-.934-.109-1.416-.109-5.078 0-9.209 4.127-9.209 9.199 0 .368.022.731.065 1.088l-6.092 5.874-7.435-7.165a.94.94 0 0 0-1.326.025c-.359.373-.348.966.025 1.325l8.085 7.792c.181.175.416.262.65.262a.94.94 0 0 0 .651-.263l5.951-5.739c1.304 3.501 4.682 6.001 8.634 6.001a9.22 9.22 0 0 0 9.213-9.2c0-3.832-2.358-7.123-5.702-8.504zm-3.51 15.831a7.34 7.34 0 0 1-7.334-7.327 7.34 7.34 0 0 1 7.334-7.324 7.34 7.34 0 0 1 7.337 7.324c0 4.04-3.291 7.327-7.337 7.327zm.001-12.202a.94.94 0 0 0-.937.937v3.941a.94.94 0 0 0 .937.937.94.94 0 0 0 .937-.937v-3.941a.94.94 0 0 0-.937-.937zm0 7.871a.94.94 0 0 0-.937.937v.005c0 .518.42.935.937.935a.94.94 0 0 0 .937-.94.94.94 0 0 0-.937-.937zm-27.011-6.105a.94.94 0 0 0 0 1.326l.003.003a.93.93 0 0 0 .661.274c.24 0 .48-.092.663-.275a.94.94 0 0 0-.001-1.327.94.94 0 0 0-1.326 0z" />
                        </svg>
                        <span className="absolute inset-0 bg-primary/10 rounded-full scale-110" />
                      </div>
                    </Link>
                    <h3 className="text-base font-normal pt-6">
                      <Link href="/listings/top-filters-city"></Link>
                      <Link href="/listings/top-filters-city" className="relative after:absolute after:bottom-0 after:start-0 after:w-full after:opacity-0 group-hover:after:opacity-100 after:h-0.25 after:bg-current hover:after:w-full after:transition-all after:duration-300">
                        Health
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -top-53 -start-92.5 w-216.25 lg:block hidden">
          <div className="aspect-square bg-emerald-50 dark:bg-default-200 rounded-full overflow-hidden">
            <Image src={hero01} alt="Image" className="w-full h-full object-cover" />
          </div>
          <span className="absolute top-1/2 -translate-y-1/2 bg-emerald-50 dark:bg-default-200 rounded-full z-10 -end-6.75 size-15 mt-15.5"></span>
          <span className="absolute top-1/2 -translate-y-1/2 bg-primary rounded-full z-10 end-10.5 size-5.5 mt-6.25"></span>
        </div>
        <div className="absolute bottom-0 top-30.5 -end-26.25 w-140  lg:block hidden ">
          <div className="aspect-square bg-default-100 rounded-full overflow-hidden">
            <Image src={hero02} alt="Image" className="w-full h-full object-cover" />
          </div>
          <span className="absolute top-0 start-13.75 size-15 mt-13.75 bg-primary rounded-full z-10" />
          <span className="absolute top-0 start-10 size-5.25 mt-6.25 bg-emerald-50 dark:bg-default-200 rounded-full z-10" />
        </div>
      </section>
    </>
  )
}

export default Hero

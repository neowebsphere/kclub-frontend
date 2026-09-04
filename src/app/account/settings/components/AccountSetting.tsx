import avatar from '@/assets/img/account/avatar-lg.jpg'
import { Icon } from '@iconify/react'
import { CircleSmall, Laptop, LogOut, Smartphone, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const AccountSetting = () => {
  return (
    <>
      <div className="lg:col-span-9 col-span-1">
        <h1 className="mb-4 pb-4 lg:text-3.5xl md:text-2.5xl text-2xl font-semibold text-default-900">Account settings</h1>
        <div className="overflow-auto whitespace-nowrap mb-4">
          <nav className="flex gap-2 pb-2 mb-1" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
            <button
              type="button"
              className="hs-tab-active:border-default-900 hs-tab-active:bg-default-100 hs-tab-active:dark-bg-white/3 rounded-full border border-border py-2 px-5 text-sm font-semibold text-body-color hover:border-default-900 active"
              id="personal-info-tab"
              aria-selected="true"
              data-hs-tab="#personal-info"
              aria-controls="personal-info"
              role="tab"
            >
              Person info
            </button>
            <button
              type="button"
              className="hs-tab-active:border-default-900 hs-tab-active:bg-default-100 hs-tab-active:dark-bg-white/3 rounded-full border border-border py-2 px-5 text-sm font-semibold text-body-color hover:border-default-900"
              id="security-tab"
              aria-selected="false"
              data-hs-tab="#security"
              aria-controls="security"
              role="tab"
            >
              Password and security
            </button>
            <button
              type="button"
              className="hs-tab-active:border-default-900 hs-tab-active:bg-default-100 hs-tab-active:dark-bg-white/3 rounded-full border border-border py-2 px-5 text-sm font-semibold text-body-color hover:border-default-900"
              id="notifications-tab"
              aria-selected="false"
              data-hs-tab="#notifications"
              aria-controls="notifications"
              role="tab"
            >
              Notification settings
            </button>
          </nav>
        </div>
        <div className="mt-3">
          <div id="personal-info" role="tabpanel" aria-labelledby="personal-info-tab">
            <div className="flex flex-col gap-6">
              <div className="bg-warning/10 rounded-md h-full p-6 flex items-center mb-2">
                <div className="relative shrink-0 w-24 h-24" role="progressbar" aria-label="Warning progress" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 96 96">
                    <circle cx={48} cy={48} r={44} stroke="rgba(255,255,255)" strokeWidth={8} fill="transparent" />
                    <circle cx={48} cy={48} r={44} stroke="currentColor" strokeWidth={8} fill="transparent" strokeDasharray="276.46" strokeDashoffset="96.76" className="text-warning transition-all duration-300" />
                  </svg>
                  <h5 className="absolute inset-0 flex items-center justify-center text-default-900 font-semibold text-xl">65%</h5>
                </div>
                <div className="ps-6">
                  <h3 className="text-default-900 font-semibold pb-1 mb-2">Complete your profile</h3>
                  <ul className="text-sm flex md:flex-row flex-col gap-2">
                    <li className="flex items-center me-4">
                      <Icon icon="lucide:plus" className="me-2" />
                      Add the languages you speak
                    </li>
                    <li className="flex items-center me-4">
                      <Icon icon="lucide:plus" className="me-2" />
                      Verify your email
                    </li>
                    <li className="flex items-center me-4">
                      <Icon icon="lucide:plus" className="me-2" />
                      Add date of birth
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-2 flex md:items-center">
                <div>
                  <div className="relative group block rounded-full overflow-hidden md:size-30.5 size-17.5">
                    <Image src={avatar} alt="" className="md:size-30.5 size-17.5 bg-cover object-cover" />
                    <div className="absolute inset-0 flex justify-center items-center text-default-900 opacity-0 group-hover:opacity-100 transition duration-300">
                      <Link href="#!" className="size-8 z-20 bg-body-bg text-default-800 rounded-md flex justify-center items-center hover:bg-default-100">
                        <Trash2 className="size-4 relative z-20" />
                      </Link>
                      <div className="absolute inset-0 bg-black opacity-20 z-10" />
                    </div>
                  </div>
                </div>
                <div className="md:ps-6 ps-4">
                  <p className="text-sm mb-4" style={{ maxWidth: 440 }}>
                    Your profile photo will appear on your profile and directory listing. PNG or JPG no bigger than 1000px wide and tall.
                  </p>
                  <button type="button" className="py-1.5 px-4 text-xs border font-semibold border-default-200 rounded-md hover:border-default-900 text-default-800 inline-flex items-center transition-all duration-300 hover:text-default-900">
                    <Icon icon="lucide:refresh-ccw" className="text-sm me-2" />
                    Upload photo
                  </button>
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                <div>
                  <label className="block text-default-900 font-semibold mb-2">First name *</label>
                  <input type="text" id="fn" required defaultValue="Michael" className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75" />
                </div>
                <div>
                  <label className="block text-default-900 font-semibold mb-2">Last name *</label>
                  <input type="text" id="ln" required defaultValue="Williams" className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75" />
                </div>
                <div>
                  <label className="block text-default-900 font-semibold mb-2">
                    Email address *<div className="bg-primary-hover/10 ms-2 text-primary text-xs inline-flex item-center font-medium px-2 py-0.5 rounded items-center">Verify email</div>
                  </label>
                  <input type="text" id="email" required defaultValue="m.williams@example.com" className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75" />
                </div>
                <div>
                  <label className="block text-default-900 font-semibold mb-2">
                    Phone number *<div className="bg-success ms-2 text-white text-xs inline-flex item-center font-medium px-2 py-0.5 rounded items-center">Verified</div>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    data-input-format='{"numericOnly": true, "delimiters": ["(", ")", " ", "-", " "], "blocks": [0, 3, 0, 3, 4]}'
                    required
                    defaultValue=" (212) 555-7890"
                    className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75"
                  />
                </div>
                <div>
                  <label className="block text-default-900 font-semibold mb-2">Languages you speak</label>
                  <select required className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75">
                    <option>Select language</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                    <option value="Italian">Italian</option>
                  </select>
                </div>
                <div>
                  <label className="block text-default-900 font-semibold mb-2">Date of birth</label>
                  <input id="datepicker" type="text" data-datepicker='{"dateFormat": "M j, Y"}' placeholder="Choose date" className="w-full bg-transparent ps-10 border border-default-300 text-sm dark:border-white/20 rounded-md text-default-400 placeholder-default-400" />
                </div>
                <div className="md:col-span-2 col-span-1">
                  <label className="block text-default-900 font-semibold mb-2">Address *</label>
                  <input type="text" id="address" required defaultValue="New York, Brooklyn" className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75" />
                </div>
                <div className="md:col-span-2 col-span-1 mb-6 pb-2">
                  <label className="block text-default-900 font-semibold mb-2">Information about you</label>
                  <textarea
                    id="Information"
                    rows={6}
                    required
                    className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75"
                    defaultValue={
                      "Extensive experience in rentals and a vast database means I can quickly find the options that are right for you. Looking for a seamless and exciting rental experience? Contact me today - I promise it won't be boring! Your perfect home is just a call away. "
                    }
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Link className="rounded-md bg-default-100 hover:bg-default-200 text-default-900 py-3.5 px-6 font-semibold transition-all duration-300" href="/account/profile">
                Cancel
              </Link>
              <button type="submit" className="py-3.5 px-6 rounded-md bg-default-800 text-body-bg hover:bg-default-900 font-semibold transition-all duration-300">
                Save changes
              </button>
            </div>
          </div>
          <div id="security" className="hidden" role="tabpanel" aria-labelledby="security-tab">
            <p className="mb-6">
              Your current email address is <span className="font-medium text-primary">m.williams@example.com</span>
            </p>
            <div className="grid md:grid-cols-2 grid-cols-1 mb-6">
              <div>
                <label className="block text-default-900 font-semibold mb-2">Current password</label>
                <div className="relative">
                  <input type="password" id="current-password" className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75" />
                  <button
                    type="button"
                    data-hs-toggle-password='{
                                              "target": "#current-password"
                                              }'
                    className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer"
                  >
                    <Icon icon="lucide:eye" className="size-4 hs-password-active:hidden block" />
                    <Icon icon="lucide:eye-off" className="size-4 hs-password-active:block hidden" />
                  </button>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-6">
              <div>
                <label className="block text-default-900 font-semibold mb-2">
                  New password <span className="text-secondary font-normal text-sm">(Min 8 chars)</span>
                </label>
                <div className="relative">
                  <input type="password" id="new-password" className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75" />
                  <button
                    type="button"
                    data-hs-toggle-password='{
                                              "target": "#new-password"
                                                  }'
                    className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer"
                  >
                    <Icon icon="lucide:eye" className="size-4 hs-password-active:hidden block" />
                    <Icon icon="lucide:eye-off" className="size-4 hs-password-active:block hidden" />
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-default-900 font-semibold mb-2">Confirm new password</label>
                <div className="relative">
                  <input type="password" id="confirm-password" className="w-full rounded-lg border border-default-300 dark:border-white/20 bg-transparent px-4.5 py-2.75" />
                  <button
                    type="button"
                    data-hs-toggle-password='{
                                              "target": "#confirm-password"
                                              }'
                    className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer"
                  >
                    <Icon icon="lucide:eye" className="size-4 hs-password-active:hidden block" />
                    <Icon icon="lucide:eye-off" className="size-4 hs-password-active:block hidden" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Link className="rounded-md bg-default-100 hover:bg-default-200 text-default-900 py-3.5 px-6 font-semibold transition-all duration-300" href="/account/profile">
                Cancel
              </Link>
              <button type="submit" className="py-3.5 px-6 rounded-md bg-default-800 text-body-bg hover:bg-default-900 font-semibold transition-all duration-300">
                Update password
              </button>
            </div>
            <div>
              <h3 className="lg:mt-4 pt-12 mb-6 lg:text-2xl text-xl font-semibold text-default-900">Device history</h3>
              <div className="grid md:grid-cols-3 grid-cols-1 mb-6 gap-6">
                <div className="border relative border-border rounded-md">
                  <div className="mt-2 me-2 top-0 end-0 absolute">
                    <div className="hs-dropdown relative inline-flex">
                      <button type="button" className="hs-dropdown-toggle inline-flex items-center justify-center rounded-md size-10 text-default-600  focus:outline-hidden dark:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Share">
                        <Icon icon="lucide:more-vertical" className="text-xl" />
                      </button>
                      <div
                        className="hs-dropdown-menu hidden transition-[opacity,margin] duration opacity-0 hs-dropdown-open:opacity-100 absolute z-20 min-w-40 bg-white shadow-custom rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
                        role="menu"
                        aria-orientation="vertical"
                      >
                        <div className="p-2 space-y-0.5">
                          <Link
                            href=""
                            className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-default-800 hover:bg-default-100 focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                          >
                            <LogOut className="size-4" />
                            Sign out
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 px-6 pb-2">
                    <Laptop className="size-9 text-secondary pb-1 mb-2" />
                    <h6 className="text-default-900 font-semibold">Mac - New York, USA</h6>
                  </div>
                  <div className="pb-6 px-6 flex gap-2 items-center">
                    <span className="text-sm text-secondary">Chrome</span>
                    <div className="bg-success/10 ms-2 text-success text-xs inline-flex item-center font-medium px-2 py-0.5 rounded items-center">Active now</div>
                  </div>
                </div>
                <div className="border relative border-border rounded-md">
                  <div className="mt-2 me-2 top-0 end-0 absolute">
                    <div className="hs-dropdown relative inline-flex">
                      <button type="button" className="hs-dropdown-toggle inline-flex items-center justify-center rounded-md size-10 text-default-600 focus:outline-hidden dark:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Share">
                        <Icon icon="lucide:more-vertical" className="text-xl" />
                      </button>
                      <div
                        className="hs-dropdown-menu hidden transition-[opacity,margin] duration opacity-0 hs-dropdown-open:opacity-100 absolute z-20 min-w-40 bg-white shadow-custom rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
                        role="menu"
                        aria-orientation="vertical"
                      >
                        <div className="p-2 space-y-0.5">
                          <Link
                            href=""
                            className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-default-800 hover:bg-default-100 focus:outline-hidden focus:bg-default-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                          >
                            <LogOut className="size-4" />
                            Sign out
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 px-6 pb-2">
                    <Smartphone className="size-9 text-secondary pb-1 mb-2" />
                    <h6 className="text-default-900 font-semibold">iPhone 15 - New York, USA</h6>
                  </div>
                  <div className="pb-6 px-6 flex gap-2 items-center">
                    <span className="text-sm text-secondary">Finder App</span>
                    <CircleSmall className="fill-default-900 text-default-900 size-2" />
                    <span className="text-sm text-secondary">20 hours ago</span>
                  </div>
                </div>
              </div>
              <div>
                <Link className="text-default-900 font-semibold text-sm py-2 inline-flex items-center" href="">
                  <LogOut className="size-4 me-2" />
                  <span className="hover:underline">Sign out of all sessions</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="lg:mt-4 pt-12 mb-6 lg:text-2xl text-xl font-semibold text-default-900">Delete account</h3>
              <p className="text-sm mb-6">When you delete your account, your public profile will be deactivated immediately. If you change your mind before the 14 days are up, sign in with your email and password, and we'll send a link to reactivate account.</p>
              <label htmlFor="confirm-deletion" className="flex mb-6 items-center text-default-700 text-sm cursor-pointer checked:text-default-800">
                <input type="checkbox" id="confirm-deletion" className="w-4 h-4 checked:text-dark border-default-300 dark:border-white/20 rounded me-2" />
                Yes, I want to delete my account
              </label>
              <button type="button" className="py-3.5 px-6 text-primary border border-danger bg-transparent hover:bg-primary-hover hover:text-white rounded-md font-semibold transition-all duration-300">
                Delete account
              </button>
            </div>
          </div>
          <div id="notifications" className="hidden" role="tabpanel" aria-labelledby="notifications-tab">
            <div className="border-b border-border pb-6 flex justify-between items-center flex-wrap gap-2">
              <div className="mb-2">
                <h3 className="text-default-900 font-semibold mb-2">New rental alerts</h3>
                <p className="text-sm pb-1">
                  New rentals that match your
                  <Link className="underline hover:no-underline" href="/account/favorites">
                    Favorites
                  </Link>
                </p>
              </div>
              <div className="flex gap-12 mb-2">
                <div className="flex items-center gap-2">
                  <label htmlFor="email-1" className="text-default-900 text-sm">
                    Email
                  </label>
                  <label htmlFor="email-1" className="relative inline-block w-11 h-6 cursor-pointer">
                    <input type="checkbox" id="email-1" className="peer sr-only" defaultChecked />
                    <span className="absolute inset-0 bg-default-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-success dark:bg-neutral-700 dark:peer-checked:bg-success peer-disabled:opacity-50 peer-disabled:pointer-events-none" />
                    <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white" />
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="phone-1" className="text-default-900 text-sm">
                    Phone
                  </label>
                  <label htmlFor="phone-1" className="relative inline-block w-11 h-6 cursor-pointer">
                    <input type="checkbox" id="phone-1" className="peer sr-only" />
                    <span className="absolute inset-0 bg-default-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-success dark:bg-neutral-700 dark:peer-checked:bg-success peer-disabled:opacity-50 peer-disabled:pointer-events-none" />
                    <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white" />
                  </label>
                </div>
              </div>
            </div>
            <div className="border-b border-border py-6 flex justify-between items-center flex-wrap gap-2">
              <div className="mb-2">
                <h3 className="text-default-900 font-semibold mb-2">Rental status updates</h3>
                <p className="text-sm pb-1">
                  Updates like price changes and off-market status on your
                  <Link className="underline hover:no-underline" href="/account/favorites">
                    Favorites
                  </Link>
                </p>
              </div>
              <div className="flex gap-12 mb-2">
                <div className="flex items-center gap-2">
                  <label htmlFor="email-2" className="text-default-900 text-sm">
                    Email
                  </label>
                  <label htmlFor="email-2" className="relative inline-block w-11 h-6 cursor-pointer">
                    <input type="checkbox" id="email-2" className="peer sr-only" defaultChecked />
                    <span className="absolute inset-0 bg-default-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-success dark:bg-neutral-700 dark:peer-checked:bg-success peer-disabled:opacity-50 peer-disabled:pointer-events-none" />
                    <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white" />
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="phone-2" className="text-default-900 text-sm">
                    Phone
                  </label>
                  <label htmlFor="phone-2" className="relative inline-block w-11 h-6 cursor-pointer">
                    <input type="checkbox" id="phone-2" className="peer sr-only" />
                    <span className="absolute inset-0 bg-default-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-success dark:bg-neutral-700 dark:peer-checked:bg-success peer-disabled:opacity-50 peer-disabled:pointer-events-none" />
                    <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white" />
                  </label>
                </div>
              </div>
            </div>
            <div className="border-b border-border py-6 flex justify-between items-center flex-wrap gap-2">
              <div className="mb-2">
                <h3 className="text-default-900 font-semibold mb-2">Finder recommendations</h3>
                <p className="text-sm pb-1">Rentals we think you'll like. These recommendations may be slightly outside your search criteria</p>
              </div>
              <div className="flex gap-12 mb-2">
                <div className="flex items-center gap-2">
                  <label htmlFor="email-3" className="text-default-900 text-sm">
                    Email
                  </label>
                  <label htmlFor="email-3" className="relative inline-block w-11 h-6 cursor-pointer">
                    <input type="checkbox" id="email-3" className="peer sr-only" />
                    <span className="absolute inset-0 bg-default-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-success dark:bg-neutral-700 dark:peer-checked:bg-success peer-disabled:opacity-50 peer-disabled:pointer-events-none" />
                    <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white" />
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="phone-3" className="text-default-900 text-sm">
                    Phone
                  </label>
                  <label htmlFor="phone-3" className="relative inline-block w-11 h-6 cursor-pointer">
                    <input type="checkbox" id="phone-3" className="peer sr-only" />
                    <span className="absolute inset-0 bg-default-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-success dark:bg-neutral-700 dark:peer-checked:bg-success peer-disabled:opacity-50 peer-disabled:pointer-events-none" />
                    <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white" />
                  </label>
                </div>
              </div>
            </div>
            <div className="border-b border-border py-6 flex justify-between items-center flex-wrap gap-2">
              <div className="mb-2">
                <h3 className="text-default-900 font-semibold mb-2">Featured news</h3>
                <p className="text-sm pb-1">News and tips you may be interested in</p>
              </div>
              <div className="flex gap-12 mb-2">
                <div className="flex items-center gap-2">
                  <label htmlFor="email-4" className="text-default-900 text-sm">
                    Email
                  </label>
                  <label htmlFor="email-4" className="relative inline-block w-11 h-6 cursor-pointer">
                    <input type="checkbox" id="email-4" className="peer sr-only" />
                    <span className="absolute inset-0 bg-default-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-success dark:bg-neutral-700 dark:peer-checked:bg-success peer-disabled:opacity-50 peer-disabled:pointer-events-none" />
                    <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white" />
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="phone-4" className="text-default-900 text-sm">
                    Phone
                  </label>
                  <label htmlFor="phone-4" className="relative inline-block w-11 h-6 cursor-pointer">
                    <input type="checkbox" id="phone-4" className="peer sr-only" defaultChecked />
                    <span className="absolute inset-0 bg-default-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-success dark:bg-neutral-700 dark:peer-checked:bg-success peer-disabled:opacity-50 peer-disabled:pointer-events-none" />
                    <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white" />
                  </label>
                </div>
              </div>
            </div>
            <div className="border-b border-border py-6 flex justify-between items-center flex-wrap gap-2">
              <div className="mb-2">
                <h3 className="text-default-900 font-semibold mb-2">Finder extras</h3>
                <p className="text-sm pb-1">Occasional notifications about new features to make finding the perfect rental easy</p>
              </div>
              <div className="flex gap-12 mb-2">
                <div className="flex items-center gap-2">
                  <label htmlFor="email-5" className="text-default-900 text-sm">
                    Email
                  </label>
                  <label htmlFor="email-5" className="relative inline-block w-11 h-6 cursor-pointer">
                    <input type="checkbox" id="email-5" className="peer sr-only" defaultChecked />
                    <span className="absolute inset-0 bg-default-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-success dark:bg-neutral-700 dark:peer-checked:bg-success peer-disabled:opacity-50 peer-disabled:pointer-events-none" />
                    <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white" />
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="phone-5" className="text-default-900 text-sm">
                    Phone
                  </label>
                  <label htmlFor="phone-5" className="relative inline-block w-11 h-6 cursor-pointer">
                    <input type="checkbox" id="phone-5" className="peer sr-only" defaultChecked />
                    <span className="absolute inset-0 bg-default-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-success dark:bg-neutral-700 dark:peer-checked:bg-success peer-disabled:opacity-50 peer-disabled:pointer-events-none" />
                    <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountSetting

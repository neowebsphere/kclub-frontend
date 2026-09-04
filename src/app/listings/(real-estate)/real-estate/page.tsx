'use client'
import Topbar from '@/components/topbar'
import { Plus } from 'lucide-react'
import dynamic from 'next/dynamic'
import MobileModel from './components/MobileModel'
import StatFillter from './components/StatFillter'

const Map = dynamic(() => import('./components/Map'), { ssr: false })

const Page = () => {
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
      <section className="md:mt-20 mt-15">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <Map />

          <StatFillter />
        </div>
      </section>

      <MobileModel />
    </>
  )
}

export default Page

'use client'
import { preline } from '@/utils/preline'
import React, { useEffect } from 'react'
import BackToTop from '../BackToTop'

const AppProvidersWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    preline.init()
  }, [])
  return (
    <>
      {children}
      <BackToTop />
    </>
  )
}

export default AppProvidersWrapper

import React, { useRef, useEffect } from 'react'
import { mount as marketingMount } from 'marketing/MarketingApp'

const MarketingApp = () => {
  const marketingRef = useRef()

  useEffect(() => {
    marketingMount(marketingRef?.current)
  }, [])

  return <div ref={marketingRef}></div>
}

export default MarketingApp

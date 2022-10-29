import React from 'react'
import { createRoot } from 'react-dom/client'
import { mount as MarketingMount } from 'marketing/MarketingApp'

console.log(MarketingMount)

const root = createRoot(document.querySelector('#root'))
root.render(<h1>Container</h1>)

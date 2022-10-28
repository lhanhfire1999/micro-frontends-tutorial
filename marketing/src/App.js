import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'

import { Landing, Pricing } from './components'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: 'pricing',
    element: <Pricing />,
  },
])

const mount = (el) => {
  const root = createRoot(el)
  root.render(
    <StylesProvider>
      <RouterProvider router={router} />
    </StylesProvider>
  )
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root')

  if (devRoot) mount(devRoot)
}

export { mount }

import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/browserRouter'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
    <Toaster position="bottom-center" />
    <RouterProvider router={router} />
    </>
  )
}

export default App
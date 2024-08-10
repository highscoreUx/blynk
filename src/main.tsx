import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Pages/App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider  } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './Error.tsx'
import { Redirecter } from './service/Redirect.ts'
import { Toaster } from 'react-hot-toast'
import Details from './Pages/Details.tsx'
import ErrorPage from './Error.tsx'


const client = new QueryClient()
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
},
{
    path: '/:id',
    loader: Redirecter,
    errorElement: <ErrorPage/>
},
{
    path: '/details',
    element: <Details/>,
    errorElement: <ErrorPage/>
},
{
    path: '*',
    element: <Error />,
},
])

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={client}>
    <ReactQueryDevtools initialIsOpen={false}/>
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
  <Toaster position='top-center'/>
  </QueryClientProvider>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Form from './Form.jsx';

// import React Router
import{
  createBrowserRouter,
  RouterProvider,

} from 'react-router-dom';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>Helllo Router setup hoise </div>
    },
    {
      path: "/form",
      element: <Form />
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
   <RouterProvider router={router} />
   <ToastContainer />
   </Provider>
  </React.StrictMode>,
)

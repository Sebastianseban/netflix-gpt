import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx'
import Browse from './components/Browse.jsx'
import { Provider } from 'react-redux'
import appStore from './utils/appStore.js'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/browse",
    element:<Browse/>
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}>
  <Provider store={appStore}>
    <  App />
    </Provider>

  </RouterProvider>
)

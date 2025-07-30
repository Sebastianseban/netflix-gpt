import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';
import App from './App.jsx';

// 🔁 Lazy load route components for code splitting
const Login = lazy(() => import('./components/Login.jsx'));
const Browse = lazy(() => import('./components/Browse.jsx'));

// 🛠️ Define router with Suspense-wrapped components
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Wrap routes inside App (for layout/auth logic)
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading Login...</div>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: 'browse',
        element: (
          <Suspense fallback={<div>Loading Browse...</div>}>
            <Browse />
          </Suspense>
        ),
      },
    ],
  },
]);

// 🔧 Render App
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);

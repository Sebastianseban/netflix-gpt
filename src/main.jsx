import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';
import App from './App.jsx';
import Login from './components/Login.jsx';
import Browse from './components/Browse.jsx';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Wrap routes inside App (for auth logic)
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: 'browse',
        element: <Browse />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Imported pages for the router.
import Root from './routes/root';
import ErrorPage from './components/Error/Error-page.jsx';
import Landing from './components/Landing/Landing.jsx';
import Categories from './components/Categories/Categories.jsx';

// import loaders and actions
import CategoryPage, { loader as categoryPageLoader } from './components/Category/CategoryPage.jsx';

// Create router adn paths.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Landing />,
            // loader: landingLoader
          },
          {
            path: "Categories",
            element: <Categories />,
            // loader: categoriesLoader
          },
          {
            path: "Categories/:category",
            element: <CategoryPage />,
            loader: categoryPageLoader
          }

        ]
      },

    ]
  },  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

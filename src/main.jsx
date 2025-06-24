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
import Landing from './routes/Landing.jsx';
import Categories from './routes/Categories.jsx';
import Cart from './routes/Cart.jsx';

// import loaders and actions
import CategoryPage, { loader as categoryPageLoader } from './routes/CategoryPage.jsx';

// import context
import { CartProvider } from './context/CartContext.jsx';

// Create router and paths.
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
          },
          {
            path: "Categories",
            element: <Categories />,
          },
          {
            path: "Categories/:category",
            element: <CategoryPage />,
            loader: categoryPageLoader
          },
          {
            path: "Cart",
            element: <Cart />
          }

        ]
      },

    ]
  },  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)

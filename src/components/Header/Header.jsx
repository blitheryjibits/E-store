import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { useCart } from '../../context/CartContext.jsx';

export default function Header() {
  const cartCount = useCart().cartCount;

  return (
    <>
      <header className={`${styles.appHeader} sticky top-0 z-50`}>
        <div className={styles.headerLogo}>PixelCart</div>
        <nav className={styles.headerNav}>
          <ul className={styles.navList}>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="Categories">
                Products
              </NavLink>
            </li>
            <li className="relative">
              <NavLink to="/cart" aria-label="Cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ verticalAlign: 'middle' }}
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6" />
                </svg>
                    {
                      cartCount > 0 &&
                      <span className="absolute -top-4 -right-4 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                        {cartCount}
                      </span>
                    }
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <>
      <header className={styles.appHeader}>
        <div className={styles.headerLogo}>Shop Name</div>
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
            <li>
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
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
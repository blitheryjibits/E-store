import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';

export default function ErrorPage() {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorTitle}>Oops!</h1>
      <p className={styles.errorMessage}>Sorry, an unexpected error has occurred.</p>
      <Link to="/" className={styles.homeLink}>Go back home</Link>
    </div>
  );
}
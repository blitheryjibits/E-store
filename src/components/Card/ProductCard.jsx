import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImage}
        src={product.image}
        alt={product.title}
      />
      <div className={styles.cardTitle}>{product.title}</div>
    </div>
  );
}
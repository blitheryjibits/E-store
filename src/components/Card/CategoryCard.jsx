import styles from './CategoryCard.module.css';

const categoryImages = {
  electronics: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
  jewelery: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
  "men's clothing": 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
  "women's clothing": 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
};

export default function CategoryCard({ category }) {
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImage}
        src={categoryImages[category] || 'https://via.placeholder.com/100'}
        alt={category}
      />
      <div className={styles.cardText}>{category}</div>
    </div>
  );
}
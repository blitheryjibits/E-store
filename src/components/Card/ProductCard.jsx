import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const { cart, addToCart, updateQuantity } = useCart();
  const cartItem = cart.find(item => item.id === product.id);
  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 0);

  useEffect(() => {
    setQuantity(cartItem ? cartItem.quantity : 0);
  }, [cartItem]);

  const handleAdd = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    if (cartItem) {
      updateQuantity(product.id, newQuantity);
    } else {
      addToCart(product, 1);
    }
  };

  const handleSubtract = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateQuantity(product.id, newQuantity);
    }
  };

  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={product.image} alt={product.title} />
      <div className={styles.cardTitle}>{product.title}</div>
      <div className={styles.cardActions}>
        <button className={styles.cardButton} onClick={handleSubtract}>-</button>
        <span className={styles.cardQuantity}>{quantity}</span>
        <button className={styles.cardButton} onClick={handleAdd}>+</button>
      </div>
    </div>
  );
}
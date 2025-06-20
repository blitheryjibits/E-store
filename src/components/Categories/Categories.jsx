import { useEffect, useState } from 'react';
import CategoryCard from '../Card/CategoryCard.jsx';
import { Link } from 'react-router-dom';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div className="categories">
      <h1>Categories</h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem'
      }}>
        {categories.map(category => (
            <Link key={category} to={`/Categories/${category}`}>
                <CategoryCard category={category} />
            </Link>
        ))}
      </div>
    </div>
  );
}
import { useEffect, useState } from 'react';
import CategoryCard from '../components/Card/CategoryCard.jsx';
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
      <h1 className="text-3xl font-bold mb-6 pl-4 pt-2">Categories</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map(category => (
            <Link key={category} to={`/Categories/${category}`}>
                <CategoryCard category={category} />
            </Link>
        ))}
      </div>
    </div>
  );
}
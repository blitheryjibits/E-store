import { useLoaderData, useParams } from 'react-router-dom';
import ProductCard from '../Card/ProductCard.jsx';
import styles from './CategoryPage.module.css';

export async function loader({ params }) {
    const { category } = params;

    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    if (!response.ok) {
        throw new Error('Failed to fetch category data');
    }
    const data = await response.json();
    return data;
}

export default function CategoryPage() {
    const { category } = useParams(); // Category title
    const products = useLoaderData(); // Products in the category

    return (
        <div>
            <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
            <div className={styles.cardContainer}>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        </div>
    );
}
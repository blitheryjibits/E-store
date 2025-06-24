import { useLoaderData, useParams } from 'react-router-dom';
import ProductCard from '../components/Card/ProductCard.jsx';


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
            <h1 className="text-3xl font-bold mb-6 pl-4 pt-2" >{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
            <div className="flex flex-wrap justify-center gap-4 p-4 ">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        </div>
    );
}
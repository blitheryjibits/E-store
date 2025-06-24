import { useCart } from '../context/CartContext.jsx';
import ProductCard from '../components/Card/ProductCard';
import confetti from 'canvas-confetti';

export default function Cart() {
    const { cart } = useCart();
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleCheckout = (e) => {
          const rect = e.target.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;
        confetti({
            particleCount: 70,
            spread: 50,
            origin: { x, y },
            startVelocity: 20,
            gravity: 0.6,
        });
        
    };

    return (
        <div className="flex flex-col md:flex-row gap-8 p-6">
            {/* Product Cards */}
            <div className="flex-1">
                <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className="flex flex-wrap gap-4">
                        {cart.map(item => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </div>
                )}
            </div>
            {/* Information/Checkout Box */}
            <div className="w-full md:w-80 bg-white rounded-lg shadow-lg p-6 h-fit">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <ul className="mb-4">
                    {cart.map(item => (
                        <li key={item.id} className="flex justify-between items-center mb-2">
                            <span className="truncate">{item.title}</span>
                            <span className="ml-2">x{item.quantity}</span>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between font-bold mb-2">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                <div className="mb-2">
                    <label className="block text-sm mb-1" htmlFor="promo">Promo Code</label>
                    <input
                        id="promo"
                        type="text"
                        className="w-full border rounded px-2 py-1 mb-2"
                        placeholder="Enter code"
                        disabled
                    />
                </div>
                <button
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition"
                    onClick={handleCheckout}
                >
                    Checkout
                </button>
                <p className="text-xs text-gray-500 mt-2 text-center">
                    Secure checkout • Free returns • Support 24/7
                </p>
            </div>
        </div>
    );
}
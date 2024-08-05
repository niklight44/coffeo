import { useState, useEffect } from "react";

/**
 * ShopProducts Component
 *
 * This component fetches and displays products based on the selected category.
 *
 * @param {string|null} category - The category of products to display. If null, all products are fetched.
 * @returns {JSX.Element} A list of products or a message if no products are found.
 */
const ShopProducts = ({ category }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let url = 'http://localhost:8000/api/products/';
        if (category) {
            url += `?category=${encodeURIComponent(category)}`;
        }

        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, [category]);

    return (
        <div className="shop-products">
            {products.length === 0 ? (
                <p>No products found for this category.</p>
            ) : (
                products.map((product, index) => (
                    <div key={index} className="product">
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default ShopProducts;

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
        let url = 'http://91.142.74.252:8000/api/products/';
        if (category) {
            url += `?category=${encodeURIComponent(category)}`;
        }

        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, [category]);

    let addToCart = async (productID) => {
        console.log('Sending your product to cart');
        let saveToCartURL = 'http://91.142.74.252:8000/api/cart';
        let username = localStorage.getItem('username');

        let response = await fetch(saveToCartURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"product_id": productID, "username": username})
        });

        if (!response.ok) {
            alert('Cannot add this item to card now');
            return;
        }
        alert('Product added to your cart');
        const json = await response.json();
        console.log(json);
    }

    return (
        <div className="shop-products">
            {products.length === 0 ? (
                <p>No products found for this category.</p>
            ) : (
                products.map((product, index) => (
                    <div key={index} className="product">
                        <div className="product__image">
                            <img src={product.image} alt={product.name}/>
                        </div>
                        <h3 className="product__name">{product.name}</h3>
                        <div className="product__price">${product.price}</div>
                        <div className="product__buttons">
                            <div className="product__cart-button" onClick={() => addToCart(product.id)}>Add to cart</div>
                            <div className="product__like-button">❤</div>
                        </div>

                    </div>
                ))
            )}
        </div>
    );
};

export default ShopProducts;

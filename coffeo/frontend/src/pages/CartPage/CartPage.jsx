import {useContext, useEffect, useState} from "react";
import "./CartPage.css";
import {UserContext} from "../../contexts/UserContext.jsx";

const CartPage = () => {
    const [products, setProducts] = useState([]);
    const { user } = useContext(UserContext);
    const ordersURL = 'http://91.142.74.252:8000/api/orders/';
    const imageServerURL = 'http://91.142.74.252:8000/';

    useEffect(() => {
        const url = `http://127.0.0.1:8000/api/cart/?username=${user}`;

        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleBuyProducts = () => {
        const postData = {
            username: user
        };

        fetch(ordersURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to place order');
            }
        })
        .then(data => {
            console.log('Order placed successfully:', data);
            // You might want to clear the cart or update the UI here
        })
        .catch(error => {
            console.error('Error placing order:', error);
        });
    };

    return(
        <>
            <h2>Your Products:</h2>
            {products.length === 0 ? (<h3>Your cart is empty now</h3>) : (
                    <>
                        {products.map((product, index) => (
                            <div key={index} className="cart-product">
                                <div className="cart-product__image">
                                    <img src={imageServerURL + product.image} alt={product.name}/>
                                </div>
                                <div className="cart-product__info">
                                    <div className="cart-product__name">{product.name}</div>
                                    <div>{product.price}</div>
                                </div>
                            </div>
                        ))}
                        <button onClick={handleBuyProducts}>Buy These Products</button>
                    </>
                )}
        </>
    );
}

export default CartPage;

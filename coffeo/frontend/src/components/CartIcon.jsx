import cart_icon from "../assets/cart_icon.png";
import React, {useState, useEffect} from "react"
import "../styles/CartIcon.css";

const CartIcon = () => {
    const [productsInCartNumber, setProductsInCartNumber] = useState(0);

    useEffect(() => {
        const fetchCartItems = async () => {
            let cartItemsURL = 'https://your-api-endpoint.com/cart-items'; // Replace with actual URL
            let response = await fetch(cartItemsURL);
            if (response.ok){
                const data = await response.json();
                setProductsInCartNumber(data.length);
            } else {
                console.error('Failed to fetch cart items');
            }
        };

        fetchCartItems();
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <>
            <div className="cart-button">
                <img src={cart_icon} alt="cart" />
                <div className="cart-products-number">
                    {productsInCartNumber}
                </div>
            </div>
        </>
    );
}

export default CartIcon;

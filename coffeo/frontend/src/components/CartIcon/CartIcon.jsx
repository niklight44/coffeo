import cart_icon from "../../assets/cart_icon.png";
import React, {useState, useEffect, useContext} from "react"
import "./CartIcon.module.css";
import {Link} from "react-router-dom";
import styles from "./CartIcon.module.css";
import {UserContext} from "../../contexts/UserContext.jsx";

const CartIcon = () => {
    const [productsInCartNumber, setProductsInCartNumber] = useState(0);
    const { user } = useContext(UserContext);
    const serverURL = process.env.REACT_APP_SERVER_URL;

    useEffect(() => {
        const fetchCartItems = async () => {
            if(!user){
                return;
            }
            let cartItemsURL = `${serverURL}/api/cart/?username=${user}`;
            let response = await fetch(cartItemsURL);
            if (response.ok){
                const data = await response.json();
                setProductsInCartNumber(data.length);
            } else {
                console.error('Failed to fetch cart items');
                setProductsInCartNumber(0)
            }
        };

        fetchCartItems();
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <>
            <Link to="cart" className="cart-button">
                <img src={cart_icon} alt="cart" />
                <div className={styles['cart-products-number']}>
                    {productsInCartNumber}
                </div>
            </Link>
        </>
    );
}

export default CartIcon;

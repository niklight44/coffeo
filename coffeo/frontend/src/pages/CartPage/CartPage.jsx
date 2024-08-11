import {useEffect, useState} from "react";
import "./CartPage.css";

const CartPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let url = 'http://127.0.0.1:8000/api/products/';

        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return(
        <>
            <h2>Your Products:</h2>
            {products.length === 0 ? (<h3>Your cart is empty now</h3>) :
                    products.map((product, index) => (
                        <div key={index} className="cart-product">
                            <div className="cart-product__image">
                                <img src={product.image} alt={product.name}/>
                            </div>
                            <div className="cart-product__info">
                                <div className="cart-product__name">{product.name}</div>
                                <div>{product.price}</div>
                            </div>
                            <hr/>
                        </div>
                    ))
            }

            <button>Buy Products</button>
        </>
    )
}

export default CartPage;
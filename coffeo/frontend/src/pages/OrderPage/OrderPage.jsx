import {useContext, useEffect, useState} from "react";
import "./OrderPage.css";
import {UserContext} from "../../contexts/UserContext.jsx";

const OrderPage = () => {
    const [products, setProducts] = useState([]);
    const { user } = useContext(UserContext);
    const imageServerURL = 'http://91.142.74.252:8000/';

    useEffect(() => {
        if (user) { // Ensure the user object and username are available
            const url = `http://91.142.74.252:8000/api/orders/?username=${user}`;

            console.log(`Username: ${user}`);
            fetch(url)
                .then(response => response.json())
                .then(data => setProducts(data))
                .catch(error => console.error('Error fetching products:', error));
        }
    }, []);


    return(
        <>
            This is your order page
            <div className="cart-products">
                {products.length === 0 ? (<h3>You don't have any orders</h3>) :
                        products.map((product, index) => (
                            <div key={index} className="cart-product">
                                <div className="cart-product__image">
                                    <img src={imageServerURL + product.image} alt={product.name}/>
                                </div>
                                <div className="cart-product__info">
                                    <div className="cart-product__name">{product.name}</div>
                                    <div>{product.price}</div>
                                </div>
                            </div>
                        ))
                }
            </div>
        </>
    )
}

export default OrderPage;
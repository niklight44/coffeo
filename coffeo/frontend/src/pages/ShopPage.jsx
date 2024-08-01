import React from 'react';
import ShopMenu from "../components/ShopMenu.jsx";
import ShopProducts from "../components/ShopProducts.jsx";


const  ShopPage = () => {
    return (
        <>
            <h1>Shop Page</h1>
            <ShopMenu/>
            <ShopProducts/>
        </>
    )
}
export default ShopPage;
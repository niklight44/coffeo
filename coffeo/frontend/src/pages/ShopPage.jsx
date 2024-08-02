import React from 'react';
import ShopMenu from "../components/ShopMenu.jsx";
import ShopProducts from "../components/ShopProducts.jsx";


/**
 * ShopPage Component
 *
 * This component serves as the main container for the shop page. It manages the state of the selected category and passes it down to child components.
 *
 * @returns {JSX.Element} The shop page, including the category menu and the product listing.
 */
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
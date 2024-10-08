import React, {useState} from 'react';
import ShopMenu from "../../components/ShopMenu.jsx";
import ShopProducts from "../../components/ShopProducts.jsx";
import "./ShopPage.css";

/**
 * ShopPage Component
 *
 * This component serves as the main container for the shop page. It manages the state of the selected category and passes it down to child components.
 *
 * @returns {JSX.Element} The shop page, including the category menu and the product listing.
 */
const ShopPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <>
            <h1>Shop Page</h1>
            <div className="shop-page-wrapper">
                <ShopMenu onCategorySelect={handleCategorySelect} />
                <ShopProducts category={selectedCategory} />
            </div>

        </>
    );
};
export default ShopPage;
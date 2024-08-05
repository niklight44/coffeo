/**
 * ShopMenu Component
 *
 * This component displays a list of product categories as clickable links.
 * When a category is clicked, the selected category is passed to the parent component via the `onCategorySelect` function.
 *
 * @param {Object} props - The props object.
 * @param {Function} props.onCategorySelect - A function that gets called with the selected category when a link is clicked.
 *
 * @returns {JSX.Element} A menu of category links.
 */


const ShopMenu = ({ onCategorySelect }) => {
    const categories = ["Coffee Beans", "Apparel", "Cups", "Accessories", "Instant Coffee", "Bundles"];

    return (
        <div className="shop-menu">
            <div className="shop-menu__header">Menu</div>
            {categories.map((category, index) => (
                <a href="#" key={index} onClick={() => onCategorySelect(category)}>
                    {category}
                </a>
            ))}
        </div>
    );
};

export default ShopMenu;

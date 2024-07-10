import { useState } from 'react';
import '../styles/SpecialProducts.css';
import coffeeCupImage from '../assets/coffee_cup.png'; // Adjust the import path as necessary

const products = {
    Accessories: [
        { id: 1, name: 'Miele CM6 Thermal Carafe', oldPrice: '$34', newPrice: '$12', discount: '20%' },
        { id: 2, name: 'NEW . Ember Cup', oldPrice: '$9.66', newPrice: '$6.48', discount: '20%' },
        { id: 3, name: 'Espro P3 French Press', oldPrice: '$6.88', newPrice: '$5.22', discount: '20%' },
    ],
    'Coffee beans': [],
    Apparel: [],
    'Instant Coffee': [],
    Bundle: [],
};

const tabs = Object.keys(products);

function SpecialProducts() {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <section className="special-products">
            <h2 className="special-products__title">Weekend special products</h2>
            <p className="special-products__subtitle">
                Check out our daily special product that you can get with +%20 OFF!
            </p>
            <div className="special-products__tabs">
                {tabs.map(tab => (
                    <button
                        key={tab}
                        className={`special-products__tab ${tab === activeTab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="special-products__list">
                {products[activeTab].map(product => (
                    <div key={product.id} className="product-card">
                        <div className="product-card__discount">%{product.discount}</div>
                        <img src={coffeeCupImage} alt={product.name} className="product-card__image" />
                        <h3 className="product-card__name">{product.name}</h3>
                        <div className="product-card__prices">
                            <span className="product-card__old-price">{product.oldPrice}</span>
                            <span className="product-card__new-price">{product.newPrice}</span>
                        </div>
                        <button className="product-card__cart-button">Add to cart →</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SpecialProducts;

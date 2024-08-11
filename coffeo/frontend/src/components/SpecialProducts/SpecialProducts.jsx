import { useState } from 'react';
import styles from './SpecialProducts.module.css';
import coffeeCupImage from '../../assets/coffee_cup.png'; // Adjust the import path as necessary

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
        <section className={styles.specialProducts}>
            <h2 className={styles.specialProducts__title}>Weekend special products</h2>
            <p className={styles.specialProducts__subtitle}>
                Check out our daily special product that you can get with +%20 OFF!
            </p>
            <div className={styles.specialProducts__tabs}>
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
            <div className={styles.specialProducts__list}>
                {products[activeTab].map(product => (
                    <div key={product.id} className={styles.productCard}>
                        <div className={styles.productCard__discount}>%{product.discount}</div>
                        <img src={coffeeCupImage} alt={product.name} className={styles.productCard__image} />
                        <h3 className={styles.productCard__name}>{product.name}</h3>
                        <div className={styles.productCard__prices}>
                            <span className={styles.productCard__oldPrice}>{product.oldPrice}</span>
                            <span className={styles.productCard__newPrice}>{product.newPrice}</span>
                        </div>
                        <button className={styles.productCard__cartButton}>Add to cart →</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SpecialProducts;

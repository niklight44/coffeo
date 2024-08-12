import coffeeBeansImage from '../../assets/coffee_beans.png'; // Adjust the import path as necessary
import styles from './ProductQuality.module.css';

function ProductQuality() {
    return (
        <section className={styles['product-quality']}>
            <div className={styles['product-quality__image-wrapper']}>
                <img src={coffeeBeansImage} alt="Coffee Beans" className={styles['product-quality__image']} />
                <div className={styles['product-quality__testimonial']}>
                    <img src="https://via.placeholder.com/50" alt="Brooklyn Simmons" className={styles.testimonial__image} />
                    <div className={styles.testimonial__text}>
                        <p>Brooklyn Simmons</p>
                        <p>Coffee is one of the most successful company... customer relationship is very good.</p>
                    </div>
                </div>
            </div>
            <div className={styles['product-quality__content']}>
                <h2>We care about the quality of our <span>products</span></h2>
                <p>Drinking coffee is one of the most global things you do each day. Here, you can spend a long and comfortable time with this workspace's facilities.</p>
                <div className={styles['product-quality__features']}>
                    <div className={styles.feature}>
                        <div className={styles.feature__icon}>💬</div>
                        <h3>Active community</h3>
                        <p>You can reach out whenever you want!</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.feature__icon}>🎨</div>
                        <h3>Best product design</h3>
                        <p>We worked a lot to make a great experience</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.feature__icon}>⚙️</div>
                        <h3>Premium quality</h3>
                        <p>A premium quality coffee is what our customers deserve</p>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.feature__icon}>🔧</div>
                        <h3>The best material</h3>
                        <p>Our product is made by premium materials</p>
                    </div>
                </div>
                <button className={styles['product-quality__button']}>Explore our products →</button>
            </div>
        </section>
    );
}

export default ProductQuality;

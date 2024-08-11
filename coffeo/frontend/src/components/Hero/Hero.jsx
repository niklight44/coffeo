import coffeeCupImage from '../../assets/splashed_coffee_cup_v2.png';
import {Link} from "react-router-dom"; // Adjust the import path as necessary
import styles from "./Hero.module.css";
import classnames from 'classnames';

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.hero__content}>
                <h1 className={styles.hero__title}>COFFEO</h1>
                <h2 className={styles.hero__subtitle}>An online coffee store</h2>
                <p className={styles.hero__description}>
                    Straight to your doorstep. We don't roast our beans until we have your order.
                    Every order is roasted and shipped the same day.
                </p>
                <div className={styles.hero__buttons}>
                    <button className={classnames(styles.hero__button, styles.hero__buttonPrimary)}>Explore our products</button>
                    <Link to="auth" className={classname(styles.hero__button, styles.hero__buttonSecondary)}>Log in / sign up</Link>
                </div>
                <div className={styles.hero__stats}>
                    <div className={styles.hero__stat}>
                        <p>Our products</p>
                        <h3>+1000</h3>
                    </div>
                    <div className={styles.hero__stat}>
                        <p>Total sales</p>
                        <h3>+340k</h3>
                    </div>
                    <div className={styles.hero__stat}>
                        <p>Total sales</p>
                        <h3>+340k</h3>
                    </div>
                </div>
            </div>
            <div className={styles.hero__image}>
                <img src={coffeeCupImage} alt="Splashed Coffee Cup" />
            </div>
        </section>
    );
}

export default Hero;

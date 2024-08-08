import '../styles/Hero.css';
import coffeeCupImage from '../assets/splashed_coffee_cup_v2.png';
import {Link} from "react-router-dom"; // Adjust the import path as necessary

function Hero() {
    return (
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__title">COFFEO</h1>
                <h2 className="hero__subtitle">An online coffee store</h2>
                <p className="hero__description">
                    Straight to your doorstep. We don't roast our beans until we have your order.
                    Every order is roasted and shipped the same day.
                </p>
                <div className="hero__buttons">
                    <button className="hero__button hero__button--primary">Explore our products</button>
                    <Link to="auth" className="hero__button hero__button--secondary">Log in / sign up</Link>
                </div>
                <div className="hero__stats">
                    <div className="hero__stat">
                        <p>Our products</p>
                        <h3>+1000</h3>
                    </div>
                    <div className="hero__stat">
                        <p>Total sales</p>
                        <h3>+340k</h3>
                    </div>
                    <div className="hero__stat">
                        <p>Total sales</p>
                        <h3>+340k</h3>
                    </div>
                </div>
            </div>
            <div className="hero__image">
                <img src={coffeeCupImage} alt="Splashed Coffee Cup" />
            </div>
        </section>
    );
}

export default Hero;

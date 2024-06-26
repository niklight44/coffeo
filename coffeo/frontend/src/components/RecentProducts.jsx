import coffee_beans from "../assets/coffee_beans.png"
import "../styles/RecentProduct.css"

function RecentProducts(){
    return (
        <div className="recent-products">
            <div className="recent-products__title">Explore the recent products</div>
            <div className="recent-products__subtitle">
                Our delectable drink options, including classic espresso choices, house specialties,
                fruit smoothies and frozen treats
            </div>

            <div className="recent-products__cards">
                <div className="card">
                    <div className="card__image">
                        <img src={coffee_beans} alt="coffee beans"/>
                    </div>
                    <div className="card__category">Blend</div>
                    <div className="card__name">Spice Iceland Blend</div>
                    <div className="card__price">$12</div>
                    <div className="card__buttons">
                        <div className="add-to-cart-button">Add to cart</div>
                        <div className="like-button">❤</div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__image">
                        <img src={coffee_beans} alt="coffee beans"/>
                    </div>
                    <div className="card__category">Blend</div>
                    <div className="card__name">Hair Blender</div>
                    <div className="card__price">$12</div>
                    <div className="card__buttons">
                        <div className="add-to-cart-button">Add to cart</div>
                        <div className="like-button">❤</div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__image">
                        <img src={coffee_beans} alt="coffee beans"/>
                    </div>
                    <div className="card__category">Blend</div>
                    <div className="card__name">Col Brew Blend</div>
                    <div className="card__price">$16</div>
                    <div className="card__buttons">
                        <div className="add-to-cart-button">Add to cart</div>
                        <div className="like-button">❤</div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__image">
                        <img src={coffee_beans} alt="coffee beans"/>
                    </div>
                    <div className="card__category">Blend</div>
                    <div className="card__name">Honduras El Puente</div>
                    <div className="card__price">$80</div>
                    <div className="card__buttons">
                        <div className="add-to-cart-button">Add to cart</div>
                        <div className="like-button">❤</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RecentProducts;
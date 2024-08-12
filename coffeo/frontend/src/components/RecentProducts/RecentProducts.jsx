import coffee_beans from "../../assets/coffee_beans.png"
import styles from "./RecentProduct.module.css"

function RecentProducts(){
    return (
        <div className={styles['recent-products']}>
            <div className={styles['recent-products__title']}>Explore the recent products</div>
            <div className={styles['recent-products__subtitle']}>
                Our delectable drink options, including classic espresso choices, house specialties,
                fruit smoothies and frozen treats
            </div>

            <div className={styles['recent-products__cards']}>
                <div className={styles.card}>
                    <div className={styles.card__image}>
                        <img src={coffee_beans} alt="coffee beans"/>
                    </div>
                    <div className={styles.card__category}>Blend</div>
                    <div className={styles.card__name}>Spice Iceland Blend</div>
                    <div className={styles.card__price}>$12</div>
                    <div className={styles.card__buttons}>
                        <div className={styles['add-to-cart-button']}>Add to cart</div>
                        <div className="like-button">❤</div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card__image}>
                        <img src={coffee_beans} alt="coffee beans"/>
                    </div>
                    <div className={styles.card__category}>Blend</div>
                    <div className={styles.card__name}>Hair Blender</div>
                    <div className={styles.card__price}>$12</div>
                    <div className={styles.card__buttons}>
                        <div className={styles['add-to-cart-button']}>Add to cart</div>
                        <div className="like-button">❤</div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card__image}>
                        <img src={coffee_beans} alt="coffee beans"/>
                    </div>
                    <div className={styles.card__category}>Blend</div>
                    <div className={styles.card__name}>Col Brew Blend</div>
                    <div className={styles.card__price}>$16</div>
                    <div className={styles.card__buttons}>
                        <div className={styles['add-to-cart-button']}>Add to cart</div>
                        <div className="like-button">❤</div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card__image}>
                        <img src={coffee_beans} alt="coffee beans"/>
                    </div>
                    <div className={styles.card__category}>Blend</div>
                    <div className={styles.card__name}>Honduras El Puente</div>
                    <div className={styles.card__price}>$80</div>
                    <div className={styles.card__buttons}>
                        <div className={styles['add-to-cart-button']}>Add to cart</div>
                        <div className="like-button">❤</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RecentProducts;
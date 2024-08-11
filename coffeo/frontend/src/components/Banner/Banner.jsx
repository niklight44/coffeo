import coffee_beans from "../../assets/coffee_beans.png"
import styles from './Banner.module.css';

function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.banner__textSection}>
                <div className={styles.banner__title}>Check out our best coffee beans</div>
                <button className={styles.banner__button}>Explore our products</button>
            </div>

            <div className={styles.banner__image}>
                <img src={coffee_beans} alt="coffee_beans"/>
            </div>
        </div>
    )
}

export default Banner;
import coffee_beans from "../assets/coffee_beans.png"
import "../styles/Banner.css"

function Banner(){
    return(
        <div className="banner">
            <div className="banner__text-section">
                <div className="banner__title">Check out our best coffee beans</div>
                <button className="banner__button">Explore our products</button>
            </div>

            <div className="banner__image">
                <img src={coffee_beans} alt="coffee_beans"/>
            </div>
        </div>
    )
}

export default Banner;
import '../styles/TheFooter.css';

function TheFooter() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__section">
                    <h4>Privacy</h4>
                    <ul>
                        <li><a href="/terms-of-use">Terms of use</a></li>
                        <li><a href="/privacy-policy">Privacy policy</a></li>
                        <li><a href="/cookies">Cookies</a></li>
                    </ul>
                </div>
                <div className="footer__section">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/order-ahead">Order ahead</a></li>
                        <li><a href="/menu">Menu</a></li>
                    </ul>
                </div>
                <div className="footer__section">
                    <h4>About us</h4>
                    <ul>
                        <li><a href="/find-location">Find a location</a></li>
                        <li><a href="/about-us">About us</a></li>
                        <li><a href="/our-story">Our story</a></li>
                    </ul>
                </div>
                <div className="footer__section">
                    <h4>Information</h4>
                    <ul>
                        <li><a href="/plans-pricing">Plans & pricing</a></li>
                        <li><a href="/jobs">Jobs</a></li>
                        <li><a href="/sell-product">Sell your product</a></li>
                    </ul>
                </div>
                <div className="footer__section">
                    <h4>Social media</h4>
                    <ul className="footer__social-media">
                        <li><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="https://instagram.com"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://youtube.com"><i className="fab fa-youtube"></i></a></li>
                        <li><a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__bottom">
                <p>Copyright © 2022, Coffee.io</p>
                <div className="footer__bottom-links">
                    <a href="/favicon">Favicon</a>
                    <a href="/support">Support</a>
                    <a href="/blog">Blog</a>
                </div>
            </div>
        </footer>
    );
}

export default TheFooter;

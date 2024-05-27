import '../Assets/css/main.css'
import Google from '../Assets/img/google.png'
import facebook from '../Assets/img/facebook.png'
import instagram from '../Assets/img/instagram.jpeg'
import twitter from '../Assets/img/twitter.png'

function Footer() {
    return (
        <>
            <footer id="footer" className="footer">
                <div className="footer-content position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-info">
                                    <h3>UpConstruction</h3>
                                    <p>A108 Adam Street <br />NY 535022, USA<br /><br /><strong>Phone:</strong> +1 5589 55488 55
                                        <br /><strong>Email:</strong> info@example.com<br /></p>
                                    <div className="social-links d-flex mt-3">
                                        <a href="#" className="d-flex align-items-center justify-content-center"><img src={Google} width={'25px'} /></a>
                                        <a href="#" className="d-flex align-items-center justify-content-center"><img src={facebook} width={'30px'} /></a>
                                        <a href="#" className="d-flex align-items-center justify-content-center"><img src={instagram} width={'25px'} /></a>
                                        <a href="#" className="d-flex align-items-center justify-content-center"><img src={twitter} width={'25px'} /></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-3 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><a style={{ textDecoration: 'none' }} href="/">Home</a></li>
                                    <li><a style={{ textDecoration: 'none' }} href="/about">About us</a></li>
                                    <li><a style={{ textDecoration: 'none' }} href="/services">Services</a></li>
                                    <li><a style={{ textDecoration: 'none' }} href="/projects">Projects</a></li>
                                    <li><a style={{ textDecoration: 'none' }} href="/blog">Blog</a></li>
                                    <li><a style={{ textDecoration: 'none' }} href="/contact">Contact</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-2 col-md-3 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><a style={{ textDecoration: 'none' }} href="#">Cement</a></li>
                                    <li><a style={{ textDecoration: 'none' }} href="#">Steels</a></li>
                                    <li><a style={{ textDecoration: 'none' }} href="#">Plummbing and Sanitary fittings</a></li>
                                    <li><a style={{ textDecoration: 'none' }} href="#">Electrical fittings</a></li>
                                    <li><a style={{ textDecoration: 'none' }} href="#">Tiles and glass fittings</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-2 col-md-3 footer-links">
                                <h4>Hic solutasetp</h4>
                                <ul>
                                    <li><a style={{ textDecoration: 'none' }} href="#">Molestiae accusamus iure</a></li>
                                    <li><a style={{ textDecoration: 'none' }} href="#">Excepturi dignissimos</a></li>
                                    <li><a style={{ textDecoration: 'none' }} href="#">Suscipit distinctio</a></li>
                                    <li><a style={{ textDecoration: 'none' }} href="#">Dilecta</a></li>
                                    <li><a style={{ textDecoration: 'none' }} href="#">Sit quas consectetur</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-2 col-md-3 footer-links">
                                <h4>Nobis illum</h4>
                                <ul>
                                    <li><a style={{ textDecoration: 'none' }} href="#">Ipsam</a></li>
                                    <li><a style={{ textDecoration: 'none' }} href="#">Laudantium dolorum</a></li>
                                    <li><a style={{ textDecoration: 'none' }} href="#">Dinera</a></li>
                                    <li><a style={{ textDecoration: 'none' }} href="#">Trodelas</a></li>
                                    <li><a style={{ textDecoration: 'none' }} href="#">Flexo</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
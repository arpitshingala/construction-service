import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import contactIcon1 from '../Assets/img/contactIcon1.jpg'
import contactIcon2 from '../Assets/img/contactIcon2.jpg'

function Contact() {
    return (
        <>
            <div class="breadcrumbs d-flex align-items-center">
                <Navbar />
                <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">
                    <h2>Contact</h2>
                    <ol>
                        <li><a style={{ textDecoration: 'none' }} href="/">Home</a></li>
                        <li>Contact</li>
                    </ol>
                </div>
            </div>

            <section id="contact" class="contact">
                <div class="container" data-aos="fade-up" data-aos-delay="100">

                    <div class="row gy-4">
                        <div class="col-lg-6">
                            <div class="info-item  d-flex flex-column justify-content-center align-items-center">
                            <i class="fa-regular fa-map"></i>
                                <h3>Our Address</h3>
                                <p>A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="info-item d-flex flex-column justify-content-center align-items-center">
                            <i class="fa-regular fa-envelope"></i>
                                <h3>Email Us</h3>
                                <p>contact@example.com</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="info-item  d-flex flex-column justify-content-center align-items-center">
                            <i class="fa-solid fa-phone"></i>
                                <h3>Call Us</h3>
                                <p>+1 5589 55488 55</p>
                            </div>
                        </div>

                    </div>

                    <div class="row gy-4 mt-1">

                        <div class="col-lg-6 ">
                        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14877.47071409418!2d72.88699274999999!3d21.2172638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1716552247024!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                        <div class="col-lg-6">
                            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                                <div class="row gy-4">
                                    <div class="col-lg-6 form-group">
                                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div class="col-lg-6 form-group">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                </div>
                                <div class="my-3">
                                    <div class="loading">Loading</div>
                                    <div class="error-message"></div>
                                    <div class="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div class="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </>
    )
}

export default Contact
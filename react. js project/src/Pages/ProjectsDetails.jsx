import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import remodeling1 from '../Assets/img/projects/remodeling-1.jpg'
import testimonials2 from '../Assets/img/testimonials/testimonials-2.jpg'

function ProjectsDetails() {
    return (
        <>
            <div class="breadcrumbs d-flex align-items-center">
                <Navbar />
                <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">
                    <h2>Projects Details</h2>
                    <ol>
                        <li><a style={{ textDecoration: 'none' }} href="/">Home</a></li>
                        <li>Projects</li>
                    </ol>
                </div>
            </div>
            <section id="project-details" class="project-details">
                <div class="container" data-aos="fade-up" data-aos-delay="100">

                    <div class="position-relative h-100">
                        <div class="slides-1 portfolio-details-slider swiper">
                            <div class="swiper-wrapper align-items-center">

                                <div class="swiper-slide">
                                    <img src={remodeling1} alt="" />
                                </div>

                                {/* <div class="swiper-slide">
                <img src="assets/img/projects/construction-1.jpg" alt="" />
              </div>

              <div class="swiper-slide">
                <img src="assets/img/projects/design-1.jpg" alt="" />
              </div>

              <div class="swiper-slide">
                <img src="assets/img/projects/repairs-1.jpg" alt="" />
              </div>  */}

                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>

                    <div class="row justify-content-between gy-4 mt-4">
                        <div class="col-lg-12">
                        <div class="col-lg-3"  style={{float: 'right'}}>
                                <div class="portfolio-info" id="projectInformation">
                                    <h3>Project information</h3>
                                    <ul>
                                        <li><strong>Category</strong> <span>Web design</span></li>
                                        <li><strong>Client</strong> <span>ASU Company</span></li>
                                        <li><strong>Project date</strong> <span>01 March, 2020</span></li>
                                        <li><strong>Project URL</strong> <a style={{color: 'orange',textDecoration: 'none'}} href="#">www.example.com</a></li>
                                        <li><a style={{textDecoration: 'none'}} href="#" class="btn-visit align-self-start">Visit Website</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-8 portfolio-description">
                                <div id="description">
                                    <h2>This is an example of portfolio detail</h2>
                                    <p>
                                        Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                                    </p>
                                    <p>
                                        Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur atque natus ut cum nam et. Praesentium error dolores rerum minus sequi quia veritatis eum. Eos et doloribus doloremque nesciunt molestiae laboriosam.
                                    </p>
                                </div>
                                <div class="testimonial-item" id="Testimonials">
                                    <p>
                                    <i class="fa-solid fa-quote-left" style={{ color: '#feb91f' }} ></i> Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa. 
                                        <i class="fa-solid fa-quote-right" style={{ color: '#feb91f' }}></i>
                                    </p>
                                    <div>
                                        <img src={testimonials2} class="testimonial-img" alt="" />
                                        <h3>Sara Wilsson</h3>
                                        <h4>Designer</h4>
                                    </div>
                                </div>
                                <div id="content"></div>
                                <p>
                                    Impedit ipsum quae et aliquid doloribus et voluptatem quasi. Perspiciatis occaecati earum et magnam animi. Quibusdam non qui ea vitae suscipit vitae sunt. Repudiandae incidunt cumque minus deserunt assumenda tempore. Delectus voluptas necessitatibus est.
                                </p>
                                <p>
                                    Sunt voluptatum sapiente facilis quo odio aut ipsum repellat debitis. Molestiae et autem libero. Explicabo et quod necessitatibus similique quis dolor eum. Numquam eaque praesentium rem et qui nesciunt.
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    )
}

export default ProjectsDetails
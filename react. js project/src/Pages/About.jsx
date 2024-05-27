import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import about1 from '../Assets/img/about.jpg'

import AltServicesImg from '../Assets/img/alt-services.jpg'
import altservices2 from '../Assets/img/alt-services-2.jpg'

import team1 from '../Assets/img/team/team-1.jpg'
import team2 from '../Assets/img/team/team-2.jpg'
import team3 from '../Assets/img/team/team-3.jpg'
import team4 from '../Assets/img/team/team-4.jpg'
import team5 from '../Assets/img/team/team-5.jpg'
import team6 from '../Assets/img/team/team-6.jpg'

import testimonials1 from '../Assets/img/testimonials/testimonials-1.jpg'
import testimonials2 from '../Assets/img/testimonials/testimonials-2.jpg'
import testimonials3 from '../Assets/img/testimonials/testimonials-3.jpg'
import testimonials4 from '../Assets/img/testimonials/testimonials-4.jpg'
import testimonials5 from '../Assets/img/testimonials/testimonials-5.jpg'

import smilyimg from '../Assets/img/icon/smilyimg.jpg'
import Projects from '../Assets/img/icon/Projects.jpg'
import Support from '../Assets/img/icon/Support.jpg'
import Workers from '../Assets/img/icon/Workers.jpg'

import homeIcon1 from '../Assets/img/homeIcon1.jpg'
import homeIcon2 from '../Assets/img/homeIcon2.jpg'
import homeIcon3 from '../Assets/img/homeIcon3.jpg'
import homeIcon4 from '../Assets/img/homeIcon4.jpg'

import twi from '../Assets/img/twitter.png'
import face from '../Assets/img/facebook.png'
import inst from '../Assets/img/instagram.jpeg'


function About() {
    const facilities = [
        {
            'id': '1',
            'icon': smilyimg,
            'facilitiesName': 'Happy Clients',
            'dataEnd': '232',
        },
        {
            'id': '2',
            'icon': Projects,
            'facilitiesName': 'Projects',
            'dataEnd': '521',
        },
        {
            'id': '3',
            'icon': Support,
            'facilitiesName': 'Hours Of Support',
            'dataEnd': '1463',
        },
        {
            'id': '4',
            'icon': Workers,
            'facilitiesName': 'Hard Workers',
            'dataEnd': '15',
        },
    ]
    const AltServices = [
        {
          'id': '1',
          'icon': 'fa-solid fa-chalkboard ',
          'servicesName': 'Lorem Ipsum',
          'servicesDescription': 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'
        },
        {
          'id': '2',
          'icon': 'fa-regular fa-circle-check',
          'servicesName': 'Nemo Enim',
          'servicesDescription': 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque'
        },
        {
          'id': '3',
          'icon': 'fa-regular fa-sun',
          'servicesName': 'Dine Pad',
          'servicesDescription': 'Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis'
        },
        {
          'id': '4',
          'icon': 'fa-solid fa-mountain-sun',
          'servicesName': 'Tride clov',
          'servicesDescription': 'Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit non aspernatur odit amet. Et eligendi'
        },
      ]

    const team = [
        {
            'id': '1',
            'img': team1,
            'personName': 'Walter White',
            'postName': 'Chief Executive Officer',
            'description': 'Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow'
        },
        {
            'id': '2',
            'img': team2,
            'personName': 'Sarah Jhonson',
            'postName': 'Product Manager',
            'description': 'Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut'
        },
        {
            'id': '3',
            'img': team3,
            'personName': 'William Anderson',
            'postName': 'CTO',
            'description': 'Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui'
        },
        {
            'id': '4',
            'img': team4,
            'personName': 'Amanda Jepson',
            'postName': 'Accountant',
            'description': 'Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur'
        },
        {
            'id': '5',
            'img': team5,
            'personName': 'Brian Doe',
            'postName': 'Marketing',
            'description': 'Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit'
        },
        {
            'id': '6',
            'img': team6,
            'personName': 'Josepha Palas',
            'postName': 'Operation',
            'description': 'Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel'
        },
    ]
    const testimonials = [
        {
            'id': '1',
            'img': testimonials1,
            'personName': 'Saul Goodman',
            'postName': 'Ceo & Founder',
            'description': 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.'
        },
        {
            'id': '2',
            'img': testimonials2,
            'personName': 'Sara Wilsson',
            'postName': 'Designer',
            'description': 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.'
        },
        {
            'id': '3',
            'img': testimonials3,
            'personName': 'Jena Karlis',
            'postName': 'Store Owner',
            'description': 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.'
        },
        {
            'id': '4',
            'img': testimonials4,
            'personName': 'Matt Brandon',
            'postName': 'Freelancer',
            'description': 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.'
        },
        {
            'id': '5',
            'img': testimonials5,
            'personName': 'John Larson',
            'postName': 'Entrepreneur',
            'description': 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.'
        },
    ]

    return (
        <>
            <div class="breadcrumbs d-flex align-items-center">
                <Navbar />
                <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">
                    <h2>About</h2>
                    <ol>
                        <li><a style={{ textDecoration: 'none' }} href="/">Home</a></li>
                        <li>About</li>
                    </ol>
                </div>
            </div>
            <section id="about" class="about">
                <div class="container" data-aos="fade-up">

                    <div class="row position-relative">

                        <div>
                            <img className="col-lg-7 about-img" src={about1} />
                        </div>

                        <div class="col-lg-7">
                            <h2>Consequatur eius et magnam</h2>
                            <div class="our-story">
                                <h4>Est 1988</h4>
                                <h3>Our Story</h3>
                                <p>Inventore aliquam beatae at et id alias. Ipsa dolores amet consequuntur minima quia maxime autem.
                                    Quidem id sed ratione. Tenetur provident autem in reiciendis rerum at dolor. Aliquam consectetur
                                    laudantium temporibus dicta minus dolor.</p>
                                <ul id="firstContent">
                                    <li><i class="fa-regular fa-circle-check"></i> <span>Ullamco laboris nisi ut aliquip ex ea commo</span></li>
                                    <li><i class="fa-regular fa-circle-check"></i> <span>Duis aute irure dolor in reprehenderit in</span></li>
                                    <li><i class="fa-regular fa-circle-check"></i> <span>Ullamco laboris nisi ut aliquip ex ea</span></li>
                                </ul>
                                <p>Vitae autem velit excepturi fugit. Animi ad non. Eligendi et non nesciunt suscipit repellendus porro in
                                    quo eveniet. Molestias in maxime doloremque.</p>

                                <div class="watch-video d-flex align-items-center position-relative">
                                    <i class="fa-regular fa-circle-play"></i>
                                    <a style={{textDecoration: 'none'}} className="text-decoration-none" href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox stretched-link">Watch Video</a>
                                </div>
                            </div>
                    </div>


                    </div>

                </div>
            </section>
            <section id="stats-counter" class="stats-counter section-bg">
                <div class="container">

                <div class="row gy-4" id="ConstructionFacilities">
                        {
                            facilities.map((f) => {
                                return (
                                    <div class="col-lg-3 col-md-6">
                                        <div class="stats-item d-flex align-items-center w-100 h-100">
                                            <img src={f.icon} style={{ width: '50px' }} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
                                            <div><span data-purecounter-start="0" data-purecounter-end="${f.dataEnd}" data-purecounter-duration="1" class="purecounter"></span>
                                                <p>{f.facilitiesName}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
          </div>


                </div>
            </section>

            <section id="alt-services" class="alt-services">
                <div class="container" data-aos="fade-up">

                    <div class="row justify-content-around gy-4">
                    <img className="col-lg-7 img-bg alt-services-img" data-aos="zoom-in" src={AltServicesImg} width={'100%'} height={'700px'} />
                        <div class="col-lg-5 d-flex flex-column justify-content-center">
                            <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                            <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>
                            <div id="ConstructionAltServices">
                                {AltServices.map((s) => {
                                    return (
                                        <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
                                            <i className={s.icon} style={{padding: '10px'}} ></i>
                                            <div><h4><a href="" style={{ textDecoration: 'none' }} class="stretched-link">{s.servicesName}</a></h4>
                                                <p>{s.servicesDescription}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                  </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="alt-services-2" class="alt-services section-bg">
                <div class="container" data-aos="fade-up">

                    <div class="row justify-content-around gy-4">
                        <div class="col-lg-5 d-flex flex-column justify-content-center">
                            <h3>Non quasi officia eum nobis et rerum epudiandae rem voluptatem</h3>
                            <p>Maxime quia dolorum alias perspiciatis. Earum voluptatem sint at non. Ducimus maxime minima iste magni
                                sit praesentium assumenda minus. Amet rerum saepe tempora vero.</p>

                                <div id="ConstructionAltServices1">
                                {AltServices.map((s) => {
                                    return (
                                        <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
                                            <i className={s.icon} style={{padding: '10px'}} ></i>
                                            <div>
                                                <h4><a href="" style={{ textDecoration: 'none' }} class="stretched-link">{s.servicesName}</a></h4>
                                                <p>{s.servicesDescription}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                  </div>

                        </div>
                            <img className="col-lg-7 img-bg" data-aos="zoom-in" src={altservices2} width={'100%'} height={'700px'} /></div>

                </div>
            </section>

            <section id="team" class="team">
                <div class="container" data-aos="fade-up">

                    <div class="section-header">
                        <h2>Our Team</h2>
                        <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis
                            omnis tiledo stran delop</p>
                    </div>

                    <div class="row gy-5" id="ConstructionTeam">
                        {team.map((t) => {
                            return (
                                <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="100">
                                    <div class="member-img">
                                        <img src={t.img} class="img-fluid" alt="" />
                                        <div class="social">
                                            <a href="https://www.instagram.com/" > <img src={inst} style={{ width: '30px' }} alt="" /></a>
                                            <a href='https://x.com/?lang=en' > <img src={twi} style={{ width: '50px' }} alt="" /></a>
                                            <a href="https://www.facebook.com/login/" > <img src={face} style={{ width: '30px' }} alt="" /></a>
                                        </div>
                                    </div>
                                    <div class="member-info text-center">
                                        <h4>{t.personName}</h4>
                                        <span>{t.postName}</span>
                                        <p>{t.description}</p>
                                    </div>
                                </div>
                            )
                        })}
          </div>


                </div>
            </section>

            <section id="testimonials" class="testimonials section-bg">
                <div class="container" data-aos="fade-up">

                    <div class="section-header">
                        <h2>Testimonials</h2>
                        <p>Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum nostrum enim velit qui ut et autem uia
                            reprehenderit sunt deleniti</p>
                    </div>

                    <div class="slides-2 swiper">
                        <div class="swiper-wrapper" id="ConstructionTestimonials">

                        </div>
                        <div class="swiper-pagination">
                            {testimonials.map((t) => {
                                return (
                                    <div class="swiper-slide">
                                        <div class="testimonial-wrap">
                                            <div class="testimonial-item">
                                                <img src={t.img} class="testimonial-img" alt="" />
                                                <h3>{t.personName}</h3>
                                                <h4>{t.postName}</h4>
                                                <div class="stars">
                                                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                                </div>
                                                <p>
                                                    <i class="fa-solid fa-quote-left" style={{ color: '#feb91f' }} ></i> {t.description} <i class="fa-solid fa-quote-right" style={{ color: '#feb91f' }}></i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
              </div>

                    </div>

                </div>
            </section>

            <Footer />
        </>
    )
}
export default About
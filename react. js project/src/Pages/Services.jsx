import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import AltServicesImg from '../Assets/img/alt-services.jpg'
import altservices2 from '../Assets/img/alt-services-2.jpg'

import testimonials1 from '../Assets/img/testimonials/testimonials-1.jpg'
import testimonials2 from '../Assets/img/testimonials/testimonials-2.jpg'
import testimonials3 from '../Assets/img/testimonials/testimonials-3.jpg'
import testimonials4 from '../Assets/img/testimonials/testimonials-4.jpg'
import testimonials5 from '../Assets/img/testimonials/testimonials-5.jpg'

import homeIcon1 from '../Assets/img/homeIcon1.jpg'
import homeIcon2 from '../Assets/img/homeIcon2.jpg'
import homeIcon3 from '../Assets/img/homeIcon3.jpg'
import homeIcon4 from '../Assets/img/homeIcon4.jpg'

function Services() {
    const services = [
        {
            'id': '1',
            'icon': 'fa-solid fa-mountain-city',
            'servicesName': 'Nesciunt Mete',
            'servicesDescription': 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
            'serviceDetails': 'service-details.html'
        },
        {
            'id': '2',
            'icon': 'fa-solid fa-arrow-up-from-ground-water',
            'servicesName': 'Eosle Commodi',
            'servicesDescription': 'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.',
            'serviceDetails': 'service-details.html'
        },
        {
            'id': '3',
            'icon': 'fa-solid fa-compass-drafting',
            'servicesName': 'Ledo Markt',
            'servicesDescription': 'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.',
            'serviceDetails': 'service-details.html'
        },
        {
            'id': '4',
            'icon': 'fa-solid fa-trowel-bricks',
            'servicesName': 'Asperiores Commodit',
            'servicesDescription': 'Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.',
            'serviceDetails': 'service-details.html'
        },
        {
            'id': '5',
            'icon': 'fa-solid fa-helmet-safety',
            'servicesName': 'Velit Doloremque',
            'servicesDescription': 'Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.',
            'serviceDetails': 'service-details.html'
        },
        {
            'id': '6',
            'icon': 'fa-solid fa-arrow-up-from-ground-water',
            'servicesName': 'Dolori Architecto',
            'servicesDescription': 'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.',
            'serviceDetails': 'service-details.html'
        },
    ]
    const content = [
        {
            'id': '1',
            'contentName': 'Quasi eaque omnis',
            'contentDescription': 'Eius non minus autem soluta ut ui labore omnis quisquam corrupti autem odit voluptas quos commodi magnam occaecati.',
            'li1': 'Ullamco laboris nisi ut aliquip',
            'li2': 'Duis aute irure dolor in reprehenderit',
            'li3': 'Ullamco laboris nisi ut aliquip ex ea',
        },
        {
            'id': '2',
            'contentName': 'Et nemo dolores consectetur',
            'contentDescription': 'Ducimus ea quam et occaecati est. Temporibus in soluta labore voluptates aut. Et sit soluta non repellat sed quia dire plovers tradoria.',
            'li1': 'Enim temporibus maiores eligendi',
            'li2': 'Ut maxime ut quibusdam quam qui',
            'li3': 'Officiis aspernatur in officiis',
        },
        {
            'id': '3',
            'contentName': 'Staque laboriosam modi',
            'contentDescription': 'Velit eos error et dolor omnis voluptates nobis tenetur sed enim nihil vero qui suscipit ipsum at magni. Ipsa architecto consequatur aliquam.',
            'li1': 'Quis voluptates laboriosam numquam',
            'li2': 'Treva libero sunt quis veniam ut',
            'li3': 'Debitis eos est est corrupti',
        },
        {
            'id': '4',
            'contentName': 'Dignissimos suscipit iste',
            'contentDescription': 'Molestiae occaecati assumenda quia saepe nobis recusandae at dicta ducimus sequi numquam commodi est in consequatur ea magnam quia itaque.',
            'li1': 'Veritatis qui reprehenderit quis',
            'li2': 'Accusantium vel numquam sunt minus',
            'li3': 'Voluptatem pariatur est sationem',
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
                    <h2>Services</h2>
                    <ol>
                        <li><a style={{ textDecoration: 'none' }} href="/">Home</a></li>
                        <li>Services</li>
                    </ol>
                </div>
            </div>
            <section id="services" className="services section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="row gy-4" id="ConstructionServices">
                        {services.map((s) => {
                            return (<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div class="service-item  position-relative">
                                    <div class="icon">
                                        <i class={s.icon}></i>
                                    </div>
                                    <h3>{s.servicesName}</h3>
                                    <p>{s.servicesDescription}</p>
                                    <a style={{textDecoration: 'none'}} href="/ServicesDetails" class="readmore stretched-link">Learn more <i class="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
            </section>
            <section id="services-cards" class="services-cards">
                <div class="container" data-aos="fade-up">

                    <div class="row gy-4" id="ConstructionContent">
                        {content.map((c) => {
                            return (<div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
                                <h3>{c.contentName}</h3>
                                <p>{c.contentDescription}</p>
                                <ul class="list-unstyled">
                                    <li><i class="fa-solid fa-check"></i> <span>{c.li1}</span></li>
                                    <li><i class="fa-solid fa-check"></i> <span>{c.li2}</span></li>
                                    <li><i class="fa-solid fa-check"></i> <span>{c.li3}</span></li>
                                </ul>
                            </div>)
                        })}
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
                                            <i className={s.icon} style={{padding: '10px'}}></i>
                                            <div>
                                                <h4><a href="" style={{ textDecoration: 'none' }} class="stretched-link">{s.servicesName}</a></h4>
                                                <p>{s.servicesDescription}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                        <div class="col-lg-6 img-bg alt-services-img"
                            data-aos="zoom-in" data-aos-delay="100">
                            <img className="col-lg-12  img-bg" data-aos="zoom-in" src={altservices2} height={'100%'} /></div>
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
                                            <i className={s.icon} style={{padding: '10px'}}></i>
                                            <div>
                                                <h4><a href="" style={{ textDecoration: 'none' }} class="stretched-link">{s.servicesName}</a></h4>
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

export default Services
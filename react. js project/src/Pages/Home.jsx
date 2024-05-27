import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import '../Assets/css/main.css'
import '../Assets/bootstrap-5.3.2/dist/css/bootstrap.min.css'
import constructions1 from '../Assets/img/constructions-1.jpg'
import constructions2 from '../Assets/img/constructions-2.jpg'
import constructions3 from '../Assets/img/constructions-3.jpg'
import constructions4 from '../Assets/img/constructions-4.jpg'
import AltServicesImg from '../Assets/img/alt-services.jpg'

import features1 from '../Assets/img/features-1.jpg'
import features2 from '../Assets/img/features-2.jpg'
import features3 from '../Assets/img/features-3.jpg'
import features4 from '../Assets/img/features-4.jpg'

import remodeling1 from '../Assets/img/projects/remodeling-1.jpg'
import remodeling2 from '../Assets/img/projects/remodeling-2.jpg'
import remodeling3 from '../Assets/img/projects/remodeling-3.jpg'
import construction1 from '../Assets/img/projects/construction-1.jpg'
import construction2 from '../Assets/img/projects/construction-2.jpg'
import construction3 from '../Assets/img/projects/construction-3.jpg'
import repairs1 from '../Assets/img/projects/repairs-1.jpg'
import repairs2 from '../Assets/img/projects/repairs-2.jpg'
import repairs3 from '../Assets/img/projects/repairs-3.jpg'
import design1 from '../Assets/img/projects/design-1.jpg'
import design2 from '../Assets/img/projects/design-2.jpg'
import design3 from '../Assets/img/projects/design-3.jpg'

import blog1 from '../Assets/img/blog/blog-1.jpg'
import blog2 from '../Assets/img/blog/blog-2.jpg'
import blog3 from '../Assets/img/blog/blog-3.jpg'

import homeIcon1 from '../Assets/img/homeIcon1.jpg'
import homeIcon2 from '../Assets/img/homeIcon2.jpg'
import homeIcon3 from '../Assets/img/homeIcon3.jpg'
import homeIcon4 from '../Assets/img/homeIcon4.jpg'

import blogIcon1 from '../Assets/img/blogIcon1.jpg'
import blogIcon2 from '../Assets/img/blogIcon2.jpg'
import { useState } from "react"


function Home() {
  const section = [
    {
      'id': '1',
      'img': constructions1,
      'sectionName': 'Eligendi omnis sunt veritatis.',
      'sectionDescription': 'Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.'
    },
    {
      'id': '2',
      'img': constructions2,
      'sectionName': 'Possimus ut sed velit assumenda',
      'sectionDescription': 'Sunt deserunt maiores voluptatem autem est rerum perferendis rerum blanditiis. Est laboriosam qui iste numquam laboriosam voluptatem architecto. Est laudantium sunt at quas aut hic. Eum dignissimos.'
    },
    {
      'id': '3',
      'img': constructions3,
      'sectionName': 'Error beatae dolor inventore aut',
      'sectionDescription': 'Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim molestiae facilis numquam quae quaerat ipsam omnis. Neque debitis ipsum at architecto officia laboriosam odit. Ut sunt temporibus nulla culpa.'
    },
    {
      'id': '4',
      'img': constructions4,
      'sectionName': 'Expedita voluptas ut ut nesciunt',
      'sectionDescription': 'Aut est quidem doloremque voluptatem magnam quis excepturi vero quia. Eum eos doloremque architecto illo at beatae dolore. Fugiat suscipit et sint ratione dolores. Aut aliquid ea dolores libero nobis.'
    }
  ]

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

  const projects = [
    {
      'id': '1',
      'filter': 'remodeling',
      'img': remodeling1,
      'projectName': 'Remodeling 1',
      'projectDescription': 'Lorem ipsum, dolor sit amet consectetur',
    },
    {
      'id': '2',
      'filter': 'construction',
      'img': construction1,
      'projectName': 'Construction 1',
      'projectDescription': 'Lorem ipsum, dolor sit amet consectetur',
    },
    {
      'id': '3',
      'filter': 'repairs',
      'img': repairs1,
      'projectName': 'Repairs 1',
      'projectDescription': 'Lorem ipsum, dolor sit amet consectetur',
    },
    {
      'id': '4',
      'filter': 'design',
      'img': design1,
      'projectName': 'Design 1',
      'projectDescription': 'Lorem ipsum, dolor sit amet consectetur',
    },
    {
      'id': '5',
      'filter': 'remodeling',
      'img': remodeling2,
      'projectName': 'Remodeling 2',
      'projectDescription': 'Lorem ipsum, dolor sit amet consectetur',
    },
    {
      'id': '6',
      'filter': 'construction',
      'img': construction2,
      'projectName': 'construction 2',
      'projectDescription': 'Lorem ipsum, dolor sit amet consectetur',
    },
    {
      'id': '7',
      'filter': 'repairs',
      'img': repairs2,
      'projectName': 'repairs 2',
      'projectDescription': 'Lorem ipsum, dolor sit amet consectetur',
    },
    {
      'id': '8',
      'filter': 'design',
      'img': design2,
      'projectName': 'design 2',
      'projectDescription': 'Lorem ipsum, dolor sit amet consectetur',
    },
    {
      'id': '9',
      'filter': 'remodeling',
      'img': remodeling3,
      'projectName': 'remodeling 3',
      'projectDescription': 'Lorem ipsum, dolor sit amet consectetur',
    },
    {
      'id': '10',
      'filter': 'construction',
      'img': construction3,
      'projectName': 'construction 3',
      'projectDescription': 'Lorem ipsum, dolor sit amet consectetur',
    },
    {
      'id': '11',
      'filter': 'repairs',
      'img': repairs3,
      'projectName': 'repairs 3',
      'projectDescription': 'Lorem ipsum, dolor sit amet consectetur',
    },
    {
      'id': '12',
      'filter': 'design',
      'img': design3,
      'projectName': 'design 3',
      'projectDescription': 'Lorem ipsum, dolor sit amet consectetur',
    },
  ]

  const blogs = [
    {
      'id': '1',
      'img': blog1,
      'date': 'December 12',
      'blogName': 'Eum ad dolor et. Autem aut fugiat debitis',
      'personName': 'Julia Parker',
      'folderName': 'Politics',
    },
    {
      'id': '2',
      'img': blog2,
      'date': 'July 17',
      'blogName': 'Et repellendus molestiae qui est sed omnis',
      'personName': 'Mario Douglas',
      'folderName': 'Sports',
    },
    {
      'id': '3',
      'img': blog3,
      'date': 'September 05',
      'blogName': 'Quia assumenda est et veritati tirana ploder',
      'personName': 'Lisa Hunter',
      'folderName': 'Economics',
    },
  ]

  const [projectData,setProjectData] = useState(projects)

  const filterAllItem = (projects)=> {
    setProjectData(projects)
  }

  const filterItem = (project, name)=> {
    console.log(project);
    const search = project.filter((i)=> i.filter == name)
    console.log(search);
    setProjectData(search)
  }

  const token = localStorage.getItem('token')
  return (
    <div className="body">
      <section id="hero" className="hero">

        <div className="info d-flex align-items-center">
            <Navbar />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <h2 data-aos="fade-down">Welcome to <span>WooDrop</span></h2>
                <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima quia
                  consectetur tempora vitae praesentium? Nemo, vel. Ducimus, animi accusantium?</p>
                <a data-aos="fade-up" data-aos-delay="200" href={token ? '/Services' : '/SignUp'} style={{ textDecoration: 'none' }} className="btn-get-started">{token ? 'Get Services' :'Get Started'}</a>
              </div>
            </div>
          </div>
        </div>
        <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-item1 carousel-item active"></div>
          <div className="carousel-item2 carousel-item"></div>
          <div className="carousel-item3 carousel-item"></div>
          <div className="carousel-item4 carousel-item"></div>
          <div className="carousel-item5 carousel-item"></div>

          <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
          </a>

          <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
          </a>
        </div>
      </section>
      <section id="get-started" className="get-started section-bg">
        <div className="container">

          <div className="row justify-content-between gy-4">

            <div className="col-lg-6 d-flex align-items-center" data-aos="fade-up">
              <div className="content">
                <h3>Minus hic non reiciendis ea possimus at quia.</h3>
                <p>Rem id rerum. Debitis deserunt quidem delectus expedita ducimus dolor. Aut iusto ipsa. Eos ipsum nobis
                  ipsa soluta itaque perspiciatis fuga ipsum perspiciatis. Eum amet fugiat totam nisi possimus ut delectus
                  dicta. <br /><br />
                  Aliquam velit deserunt autem. Inventore et saepe. Tenetur suscipit eligendi labore culpa eos. Deserunt
                  porro magni qui necessitatibus dolorem at animi cupiditate.</p>
              </div>
            </div>

            <div className="col-lg-5" data-aos="fade">
              <form action="#" method="post" className="php-email-form">
                <h3>Get a quote</h3>
                <p>Vel nobis odio laboriosam et hic voluptatem. Inventore vitae totam. Rerum repellendus enim linead sero
                  park flows.</p>
                <div className="row gy-3">

                  <div className="col-md-12">
                    <input type="text" name="name" className="form-control" placeholder="Name" required />
                  </div>

                  <div className="col-md-12 ">
                    <input type="email" className="form-control" name="email" placeholder="Email" required />
                  </div>

                  <div className="col-md-12">
                    <input type="text" className="form-control" name="phone" placeholder="Phone" required />
                  </div>

                  <div className="col-md-12">
                    <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your quote request has been sent successfully. Thank you!</div>

                    <button type="submit">Get a quote</button>
                  </div>

                </div>
              </form>
            </div>

          </div>

        </div>
      </section>

      <section id="constructions" className="constructions">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <h2>Constructions</h2>
            <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem
              dolore earum</p>
          </div>
          <div className="col-lg-12"  data-aos="fade-up" data-aos-delay="100">
            <div id="Construction" style={{ display: 'grid', gridTemplateColumns: 'auto auto' }} >
              {section.map((s) => {
                return (
                <div class="card-item mt-3" style={{height:'270px', marginLeft: '10px'}}>
                  <div className="row">
                    <div className="col-xl-5">
                      <div className="card-bg"><img src={s.img} width={'250px'} height={'270px'} /></div>
                    </div>
                    <div className="col-xl-7 d-flex align-items-center">
                      <div className="card-body">
                        <h4 className="card-title">{s.sectionName}</h4>
                        <p>{s.sectionDescription}</p><br />
                      </div>
                    </div>
                  </div>
                </div>)
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <h2>Services</h2>
            <p>Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti fignissimos eos
              quam</p>
          </div>

          <div className="row gy-4" id="ConstructionServices">
            {services.map((s) => {
              return (<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div class="service-item  position-relative">
                  <div class="icon">
                    <i class={s.icon}></i>
                  </div>
                  <h3>{s.servicesName}</h3>
                  <p>{s.servicesDescription}</p>
                  <a  style={{ textDecoration: 'none' }} href="/ServicesDetails" class="readmore stretched-link">Learn more <i class="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>)
            })}
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
                      <i class={s.icon} style={{padding: '10px'}}></i>
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

      <section id="features" className="features section-bg">
        <div className="container" data-aos="fade-up">

          <ul className="nav nav-tabs  g-2 d-flex">

            <li className="nav-item ms-5 me-5">
              <a className="nav-link active show " data-bs-toggle="tab" data-bs-target="#tab-1">
                <h4 className=" ms-4 me-4">Modisit</h4>
              </a>
            </li>

            <li className="nav-item ms-5 me-5" />
            <a className="nav-link ms-5 me-5" data-bs-toggle="tab" data-bs-target="#tab-2">
              <h4 className=" ms-4 me-4">Praesenti</h4>
            </a>

            <li className="nav-item ms-5 me-5">
              <a className="nav-link ms-5 me-5" data-bs-toggle="tab" data-bs-target="#tab-3">
                <h4 className=" ms-4 me-4">Explica</h4>
              </a>
            </li>

            <li className="nav-item ms-5 ">
              <a className="nav-link ms-5 me-5" data-bs-toggle="tab" data-bs-target="#tab-4">
                <h4 className=" ms-4 me-4">Nostrum</h4>
              </a>
            </li>
          </ul>

          <div className="tab-content">

            <div className="tab-pane active show" id="tab-1">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"
                  data-aos="fade-up" data-aos-delay="100">
                  <h3>Voluptatem dignissimos provident</h3>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore
                    magna aliqua.
                  </p>
                  <ul>
                    <li><i class="fa-regular fa-circle-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i class="fa-regular fa-circle-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i class="fa-regular fa-circle-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                      aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla
                      pariatur.</li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                  <img src={features1} alt="" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="tab-pane" id="tab-2">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Neque exercitationem debitis</h3>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore
                    magna aliqua.
                  </p>
                  <ul>
                    <li><i class="fa-regular fa-circle-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i class="fa-regular fa-circle-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i class="fa-regular fa-circle-check"></i> Provident mollitia neque rerum asperiores dolores quos qui a.
                      Ipsum neque dolor voluptate nisi sed.</li>
                    <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                      aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla
                      pariatur.</li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={features2} alt="" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="tab-pane" id="tab-3">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Voluptatibus commodi accusamu</h3>
                  <ul>
                    <li><i class="fa-regular fa-circle-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i class="fa-regular fa-circle-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i class="fa-regular fa-circle-check"></i> Provident mollitia neque rerum asperiores dolores quos qui a.
                      Ipsum neque dolor voluptate nisi sed.</li>
                  </ul>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore
                    magna aliqua.
                  </p>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={features3} alt="" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="tab-pane" id="tab-4">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Omnis fugiat ea explicabo sunt</h3>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore
                    magna aliqua.
                  </p>
                  <ul>
                    <li><i class="fa-regular fa-circle-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i class="fa-regular fa-circle-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i class="fa-regular fa-circle-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                      aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla
                      pariatur.</li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={features4} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" class="projects">
        <div class="container" data-aos="fade-up">
          <div class="section-header">
            <h2>Our Projects</h2>
            <p>Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui vel architecto
              accusamus fugit aut qui distinctio</p>
          </div>
          <div class="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order">
            <ul class="portfolio-flters" data-aos="fade-up" data-aos-delay="100">
              <li data-filter="*" class="filter-" onClick={()=> filterAllItem(projects)}>All</li>
              <li data-filter=".filter-remodeling" onClick={()=> filterItem(projects, "remodeling")}>Remodeling</li>
              <li data-filter=".filter-construction" onClick={()=> filterItem(projects, "construction")}>Construction</li>
              <li data-filter=".filter-repairs" onClick={()=> filterItem(projects, "repairs")}>Repairs</li>
              <li data-filter=".filter-design" onClick={()=> filterItem(projects, "design")}>Design</li>
            </ul>
            <div id="ConstructionProjects" class="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200" >
              {projectData.map((p) => {
                return (
                  <>
                    <div href='/Projects' className="col-lg-4 col-md-6 portfolio-item filter-${p.filter}">
                      <div className="portfolio-content h-100">
                        <a href='/Projects'>
                          <img className="img-fluid " src={p.img} alt="" />
                          <div className="portfolio-info">
                            <h4>{p.projectName}</h4>
                            <p>{p.projectDescription}</p>
                            <a href="/Projects" title="More Details" className="details-link"><i class="fa-solid fa-link" style={{fontSize: '25px'}}></i></a>
                          </div>
                        </a>
                      </div>
                    </div>
                    <br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br />
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="recent-blog-posts" class="recent-blog-posts">
        <div class="container" data-aos="fade-up">

          <div class=" section-header">
            <h2>Recent Blog Posts</h2>
            <p>In commodi voluptatem excepturi quaerat nihil error autem voluptate ut et officia consequuntu</p>
          </div>

          <div class="row gy-5" id="ConstructionBlog">
            {blogs.map((b) => {
              return (
                <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <a href="/Blog" style={{ textDecoration: 'none' }}>
                    <div class="post-item position-relative h-100">
                      <div class="post-img position-relative overflow-hidden">
                        <img src={b.img} class="img-fluid" alt="" />
                        <span class="post-date">{b.date}</span>
                      </div>
                      <div class="post-content d-flex flex-column">
                        <h3 class="post-title">{b.blogName}</h3>
                        <div class="meta d-flex align-items-center">
                          <div class="d-flex align-items-center">
                          <i class="fa-regular fa-user"></i><span class="ps-2">{b.personName}</span>
                          </div>
                          <span class="px-3 text-black-50">/</span>
                          <div class="d-flex align-items-center">
                          <i class="fa-regular fa-folder-open"></i><span class="ps-2">{b.folderName}</span>
                          </div>
                        </div>
                        <hr />
                        <a href="/BLog" class="readmore stretched-link" style={{ textDecoration: 'none' }}><span>Read More</span><i class="fa-solid fa-arrow-right"></i></a>
                      </div>
                    </div>
                  </a>
                </div>)
            })}
          </div>

        </div>
      </section>


      <br /><br />

      <Footer />
    </div>
  )
}

export default Home


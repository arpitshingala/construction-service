import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

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

import projectsIcon from '../Assets/img/projectsIcon.png'
import { useState } from "react"

function Projects() {
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

  const [projectData, setProjectData] = useState(projects)

  const filterAllItem = (projects) => {
    setProjectData(projects)
  }

  const filterItem = (project, name) => {
    console.log(project);
    const search = project.filter((i) => i.filter == name)
    console.log(search);
    setProjectData(search)
  }


  return (
    <>
      <div class="breadcrumbs d-flex align-items-center">
        <Navbar />
        <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">
          <h2>Projects</h2>
          <ol>
            <li><a style={{ textDecoration: 'none' }} href="/">Home</a></li>
            <li>Projects</li>
          </ol>
        </div>
      </div>
      <section id="projects" class="projects">
        <div class="container" data-aos="fade-up">
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
                        <a href='/ProjectsDetails'>
                          <img className="img-fluid " src={p.img} alt="" />
                          <div className="portfolio-info">
                            <h4>{p.projectName}</h4>
                            <p>{p.projectDescription}</p>
                            <a href="/ProjectsDetails" title="More Details" className="details-link"><i class="fa-solid fa-link" style={{ fontSize: '25px' }}></i></a>
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

      <Footer />
    </>
  )
}

export default Projects
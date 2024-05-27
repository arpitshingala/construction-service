const section = [
  {
    'id': '1',
    'img': '1',
    'sectionName': 'Eligendi omnis sunt veritatis.',
    'sectionDescription': 'Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.'
  },
  {
    'id': '2',
    'img': '2',
    'sectionName': 'Possimus ut sed velit assumenda',
    'sectionDescription': 'Sunt deserunt maiores voluptatem autem est rerum perferendis rerum blanditiis. Est laboriosam qui iste numquam laboriosam voluptatem architecto. Est laudantium sunt at quas aut hic. Eum dignissimos.'
  },
  {
    'id': '3',
    'img': '3',
    'sectionName': 'Error beatae dolor inventore aut',
    'sectionDescription': 'Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim molestiae facilis numquam quae quaerat ipsam omnis. Neque debitis ipsum at architecto officia laboriosam odit. Ut sunt temporibus nulla culpa.'
  },
  {
    'id': '4',
    'img': '4',
    'sectionName': 'Expedita voluptas ut ut nesciunt',
    'sectionDescription': 'Aut est quidem doloremque voluptatem magnam quis excepturi vero quia. Eum eos doloremque architecto illo at beatae dolore. Fugiat suscipit et sint ratione dolores. Aut aliquid ea dolores libero nobis.'
  }
]

function displaySectionData() {
  try {
    // console.log(section);
    let str = ''
    section.map((s) => {
      str += `
                <div class="card-item mt-3">
                  <div class="row">
                    <div class="col-xl-5">
                      <div class="card-bg" style="background-image: url(assets/img/constructions-${s.img}.jpg);"></div>
                    </div>
                    <div class="col-xl-7 d-flex align-items-center">
                      <div class="card-body">
                        <h4 class="card-title">${s.sectionName}</h4>
                        <p>${s.sectionDescription}</p>
                      </div>
                    </div>
                  </div>
                  </div>
                `
    })
    document.getElementById('ConstructionsSection').innerHTML = str
  } catch (error) {
    console.log(error.message);
  }
}
displaySectionData()

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

function displayServicesData() {
  try {
    // console.log(services);
    let str = ''
    services.map((s) => {
      str += `
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div class="service-item  position-relative">
            <div class="icon">
              <i class="${s.icon}"></i>
            </div>
            <h3>${s.servicesName}</h3>
            <p>${s.servicesDescription}</p>'
            <a href="${s.serviceDetails}" class="readmore stretched-link">Learn more <i class="bi bi-arrow-right"></i></a>
          </div>
        </div>
      `
    })
    document.getElementById('ConstructionServices').innerHTML = str
  } catch (error) {
    console.log(error.message);
  }
}
displayServicesData()

const AltServices = [
  {
    'id': '1',
    'icon': 'bi bi-easel flex-shrink-0',
    'servicesName': 'Lorem Ipsum',
    'servicesDescription': 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'
  },
  {
    'id': '2',
    'icon': 'bi bi-patch-check flex-shrink-0',
    'servicesName': 'Nemo Enim',
    'servicesDescription': 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque'
  },
  {
    'id': '3',
    'icon': 'bi bi-brightness-high flex-shrink-0',
    'servicesName': 'Dine Pad',
    'servicesDescription': 'Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis'
  },
  {
    'id': '4',
    'icon': 'bi bi-brightness-high flex-shrink-0',
    'servicesName': 'Tride clov',
    'servicesDescription': 'Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit non aspernatur odit amet. Et eligendi'
  },
]

function displayAltServicesData() {
  try {
    // console.log(AltServices);
    let str = ''
    AltServices.map((s) => {
      str += `
      <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
        <i class="${s.icon}"></i>
        <div>
          <h4><a href="" class="stretched-link">${s.servicesName}</a></h4>
          <p>${s.servicesDescription}</p>
        </div>
      </div>  
      `
    })
    document.getElementById('ConstructionAltServices').innerHTML = str
  } catch (error) {
    console.log(error.message);
  }
}
displayAltServicesData()

const projects = [
  {
    'id': '1',
    'filter': 'remodeling',
    'img': 'remodeling-1.jpg',
    'projectName': 'Remodeling 1',
    'projectDescription': 'Lorem ipsum, dolor sit amet consectetur',
  },
  {
    'id': '2',
    'filter': 'construction',
    'img': 'construction-1.jpg',
    'projectName': 'Construction 1',
    'projectDescription': 'Lorem ipsum, dolor sit amet consectetur',
  },
  {
    'id': '3',
    'filter': 'repairs',
    'img': 'repairs-1.jpg',
    'projectName': 'Repairs 1',
    'projectDescription': 'Lorem ipsum, dolor sit amet consectetur',
  },
  {
    'id': '4',
    'filter': 'design',
    'img': 'design-1.jpg',
    'projectName': 'Design 1',
    'projectDescription': 'Lorem ipsum, dolor sit amet consectetur',
  },
  {
    'id': '5',
    'filter': 'remodeling',
    'img': 'remodeling-2.jpg',
    'projectName': 'Remodeling 2',
    'projectDescription': 'Lorem ipsum, dolor sit amet consectetur',
  },
  {
    'id': '6',
    'filter': 'construction',
    'img': 'construction-2.jpg',
    'projectName': 'construction 2',
    'projectDescription': 'Lorem ipsum, dolor sit amet consectetur',
  },
  {
    'id': '7',
    'filter': 'repairs',
    'img': 'repairs-2.jpg',
    'projectName': 'repairs 2',
    'projectDescription': 'Lorem ipsum, dolor sit amet consectetur',
  },
  {
    'id': '8',
    'filter': 'design',
    'img': 'design-2.jpg',
    'projectName': 'design 2',
    'projectDescription': 'Lorem ipsum, dolor sit amet consectetur',
  },
  {
    'id': '9',
    'filter': 'remodeling',
    'img': 'remodeling-3.jpg',
    'projectName': 'remodeling 3',
    'projectDescription': 'Lorem ipsum, dolor sit amet consectetur',
  },
  {
    'id': '10',
    'filter': 'construction',
    'img': 'construction-3.jpg',
    'projectName': 'construction 3',
    'projectDescription': 'Lorem ipsum, dolor sit amet consectetur',
  },
  {
    'id': '11',
    'filter': 'repairs',
    'img': 'repairs-3.jpg',
    'projectName': 'repairs 3',
    'projectDescription': 'Lorem ipsum, dolor sit amet consectetur',
  },
  {
    'id': '12',
    'filter': 'design',
    'img': 'design-3.jpg',
    'projectName': 'design 3',
    'projectDescription': 'Lorem ipsum, dolor sit amet consectetur',
  },
]

function displayProjects() {
  try {
    // console.log(projects);
    let str = ''
    projects.map((p) => {
      str += `
        <div class="col-lg-4 col-md-6 portfolio-item filter-${p.filter}">
          <div class="portfolio-content h-100">
            <img src="assets/img/projects/${p.img}" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>${p.projectName}</h4>
              <p>${p.projectDescription}</p>
              <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>  
      `
    })
    // console.log(str);
    document.getElementById('ConstructionProjects').innerHTML = str
  } catch (error) {
    console.log(error.message);
  }
}
displayProjects()

const blogs = [
  {
    'id': '1',
    'img': 'blog-1.jpg',
    'date': 'December 12',
    'blogName': 'Eum ad dolor et. Autem aut fugiat debitis',
    'personName': 'Julia Parker',
    'folderName': 'Politics',
  },
  {
    'id': '2',
    'img': 'blog-2.jpg',
    'date': 'July 17',
    'blogName': 'Et repellendus molestiae qui est sed omnis',
    'personName': 'Mario Douglas',
    'folderName': 'Sports',
  },
  {
    'id': '3',
    'img': 'blog-3.jpg',
    'date': 'September 05',
    'blogName': 'Quia assumenda est et veritati tirana ploder',
    'personName': 'Lisa Hunter',
    'folderName': 'Economics',
  },
]

function displayBlogs() {
  try {
    // console.log(blogs);
    let str = ''
    blogs.map((b) => {
      str += `
      <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
        <div class="post-item position-relative h-100">
          <div class="post-img position-relative overflow-hidden">
            <img src="assets/img/blog/${b.img}" class="img-fluid" alt="">
            <span class="post-date">${b.date}</span>
          </div>
          <div class="post-content d-flex flex-column">
            <h3 class="post-title">${b.blogName}</h3>
            <div class="meta d-flex align-items-center">
              <div class="d-flex align-items-center">
                <i class="bi bi-person"></i> <span class="ps-2">${b.personName}</span>
              </div>
              <span class="px-3 text-black-50">/</span>
              <div class="d-flex align-items-center">
                <i class="bi bi-folder2"></i> <span class="ps-2">${b.folderName}</span>
              </div>
            </div>
            <hr>
            <a href="blog-details.html" class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </div>
      `
    })
    // console.log(str);
    document.getElementById('ConstructionBlog').innerHTML = str
  } catch (error) {
    console.log(error.message);
  }
}
displayBlogs()

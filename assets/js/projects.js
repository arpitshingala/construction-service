// projects page :

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



// project-details page :

  const projectInformation = `<h3>Project information</h3>
        <ul>
            <li><strong>Category</strong> <span>Web design</span></li>
            <li><strong>Client</strong> <span>ASU Company</span></li>
            <li><strong>Project date</strong> <span>01 March, 2020</span></li>
            <li><strong>Project URL</strong> <a href="#">www.example.com</a></li>
            <li><a href="#" class="btn-visit align-self-start">Visit Website</a></li>
        </ul>`

  document.getElementById('projectInformation').innerHTML = projectInformation

  const description = `<h2>This is an example of portfolio detail</h2>
    <p>
        Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
    </p>
    <p>
        Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur atque natus ut cum nam et. Praesentium error dolores rerum minus sequi quia veritatis eum. Eos et doloribus doloremque nesciunt molestiae laboriosam.
    </p>`

  document.getElementById('description').innerHTML = description
  
  const content = `<p>
        Impedit ipsum quae et aliquid doloribus et voluptatem quasi. Perspiciatis occaecati earum et magnam animi. Quibusdam non qui ea vitae suscipit vitae sunt. Repudiandae incidunt cumque minus deserunt assumenda tempore. Delectus voluptas necessitatibus est.
        </p>
        <p>
        Sunt voluptatum sapiente facilis quo odio aut ipsum repellat debitis. Molestiae et autem libero. Explicabo et quod necessitatibus similique quis dolor eum. Numquam eaque praesentium rem et qui nesciunt.
        </p>`

  document.getElementById('content').innerHTML = content
  
  const Testimonials = `<p>
            <i class="bi bi-quote quote-icon-left"></i>
            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
            <i class="bi bi-quote quote-icon-right"></i>
        </p>
        <div>
            <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="">
            <h3>Sara Wilsson</h3>
            <h4>Designer</h4>
        </div>`

  document.getElementById('Testimonials').innerHTML = Testimonials

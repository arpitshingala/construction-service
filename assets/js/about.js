
let firstContent = `
    <li><i class="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commo</span></li>
    <li><i class="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in</span></li>
    <li><i class="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea</span></li>
`
document.getElementById('firstContent').innerHTML = firstContent

const facilities = [
    {
        'id': '1',
        'icon': 'bi bi-emoji-smile color-blue flex-shrink-0',
        'facilitiesName': 'Happy Clients',
        'dataEnd': '232',
    },
    {
        'id': '2',
        'icon': 'bi bi-journal-richtext color-orange flex-shrink-0',
        'facilitiesName': 'Projects',
        'dataEnd': '521',
    },
    {
        'id': '3',
        'icon': 'bi bi-headset color-green flex-shrink-0',
        'facilitiesName': 'Hours Of Support',
        'dataEnd': '1463',
    },
    {
        'id': '4',
        'icon': 'bi bi-people color-pink flex-shrink-0',
        'facilitiesName': 'Hard Workers',
        'dataEnd': '15',
    },
]

function displayFacilitiesData() {
    try {
        // console.log(services);
        let str = ''
        facilities.map((f) => {
            str += `
                <div class="col-lg-3 col-md-6">
                    <div class="stats-item d-flex align-items-center w-100 h-100">
                    <i class="${f.icon}"></i>
                    <div>
                        <span data-purecounter-start="0" data-purecounter-end="${f.dataEnd}" data-purecounter-duration="1" class="purecounter"></span>
                        <p>${f.facilitiesName}</p>
                    </div>
                    </div>
                </div>
            `
        })
        document.getElementById('ConstructionFacilities').innerHTML = str
    } catch (error) {
        console.log(error.message);
    }
}
displayFacilitiesData()

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
        document.getElementById('ConstructionAltServices1').innerHTML = str
    } catch (error) {
        console.log(error.message);
    }
}
displayAltServicesData()

const team = [
    {
        'id': '1',
        'img': 'team-1.jpg',
        'personName': 'Walter White',
        'postName': 'Chief Executive Officer',
        'description': 'Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow'
    },
    {
        'id': '2',
        'img': 'team-2.jpg',
        'personName': 'Sarah Jhonson',
        'postName': 'Product Manager',
        'description': 'Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut'
    },
    {
        'id': '3',
        'img': 'team-3.jpg',
        'personName': 'William Anderson',
        'postName': 'CTO',
        'description': 'Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui'
    },
    {
        'id': '4',
        'img': 'team-4.jpg',
        'personName': 'Amanda Jepson',
        'postName': 'Accountant',
        'description': 'Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur'
    },
    {
        'id': '5',
        'img': 'team-5.jpg',
        'personName': 'Brian Doe',
        'postName': 'Marketing',
        'description': 'Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit'
    },
    {
        'id': '6',
        'img': 'team-6.jpg',
        'personName': 'Josepha Palas',
        'postName': 'Operation',
        'description': 'Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel'
    },
]

function displayTeamData() {
    try {
        // console.log(AltServices);
        let str = ''
        team.map((t) => {
            str += `
                <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="100">
                    <div class="member-img">
                      <img src="assets/img/team/${t.img}" class="img-fluid" alt="">
                      <div class="social">
                        <a href="#"><i class="bi bi-twitter"></i></a>
                        <a href="#"><i class="bi bi-facebook"></i></a>
                        <a href="#"><i class="bi bi-instagram"></i></a>
                        <a href="#"><i class="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                    <div class="member-info text-center">
                      <h4>${t.personName}</h4>
                      <span>${t.postName}</span>
                      <p>${t.description}</p>
                    </div>
                </div>
            `
        })
        document.getElementById('ConstructionTeam').innerHTML = str
    } catch (error) {
        console.log(error.message);
    }
}
displayTeamData()

const testimonials = [
    {
        'id': '1',
        'img': 'testimonials-1.jpg',
        'personName': 'Saul Goodman',
        'postName': 'Ceo & Founder',
        'description': 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.'
    },
    {
        'id': '2',
        'img': 'testimonials-2.jpg',
        'personName': 'Sara Wilsson',
        'postName': 'Designer',
        'description': 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.'
    },
    {
        'id': '3',
        'img': 'testimonials-3.jpg',
        'personName': 'Jena Karlis',
        'postName': 'Store Owner',
        'description': 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.'
    },
    {
        'id': '4',
        'img': 'testimonials-4.jpg',
        'personName': 'Matt Brandon',
        'postName': 'Freelancer',
        'description': 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.'
    },
    {
        'id': '5',
        'img': 'testimonials-5.jpg',
        'personName': 'John Larson',
        'postName': 'Entrepreneur',
        'description': 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.'
    },
]

function displayTestimonialsData() {
    try {
        // console.log(AltServices);
        let str = ''
        testimonials.map((t) => {
            str += `
                        <div class="swiper-slide">
                          <div class="testimonial-wrap">
                            <div class="testimonial-item">
                              <img src="assets/img/testimonials/${t.img}" class="testimonial-img" alt="">
                              <h3>${t.personName}</h3>
                              <h4>${t.postName}</h4>
                              <div class="stars">
                                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                              </div>
                              <p>
                                <i class="bi bi-quote quote-icon-left"></i>
                                ${t.description}
                                <i class="bi bi-quote quote-icon-right"></i>
                              </p>
                            </div>
                          </div>
                        </div>
                        `
        })
        document.getElementById('ConstructionTestimonials').innerHTML = str
    } catch (error) {
        console.log(error.message);
    }
}
displayTestimonialsData()
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

function displayContentData() {
    try {
      // console.log(AltServices);
      let str = ''
      content.map((c) => {
        str += `
        <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <h3>${c.contentName}</h3>
            <p>${c.contentDescription}</p>
            <ul class="list-unstyled">
              <li><i class="bi bi-check2"></i> <span>${c.li1}</span></li>
              <li><i class="bi bi-check2"></i> <span>${c.li2}</span></li>
              <li><i class="bi bi-check2"></i> <span>${c.li3}</span></li>
            </ul>
          </div> 
        `
      })
      document.getElementById('ConstructionContent').innerHTML = str
    } catch (error) {
      console.log(error.message);
    }
  }
  displayContentData()

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

import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

import blog1 from '../Assets/img/blog/blog-1.jpg'
import blog2 from '../Assets/img/blog/blog-2.jpg'
import blog3 from '../Assets/img/blog/blog-3.jpg'
import blog4 from '../Assets/img/blog/blog-4.jpg'
import blog5 from '../Assets/img/blog/blog-5.jpg'
import blog6 from '../Assets/img/blog/blog-6.jpg'

function Blog() {
    const blogs = [
        {
            'id': '1',
            'img': blog1,
            'date': 'December 12',
            'blogName': 'Eum ad dolor et. Autem aut fugiat debitis',
            'personName': 'Julia Parker',
            'folderName': 'Politics',
            'description': 'Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.'
        },
        {
            'id': '2',
            'img': blog2,
            'date': 'July 17',
            'blogName': 'Et repellendus molestiae qui est sed omnis',
            'personName': 'Mario Douglas',
            'folderName': 'Sports',
            'description': 'Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.'
        },
        {
            'id': '3',
            'img': blog3,
            'date': 'September 05',
            'blogName': 'Quia assumenda est et veritati tirana ploder',
            'personName': 'Lisa Hunter',
            'folderName': 'Economics',
            'description': 'Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.'
        },
        {
            'id': '4',
            'img': blog4,
            'date': 'August 05',
            'blogName': 'Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem.',
            'personName': 'Lisa Hunter',
            'folderName': 'Sports',
            'description': 'Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui.'
        },
        {
            'id': '5',
            'img': blog5,
            'date': 'September 17',
            'blogName': 'Accusamus quaerat aliquam qui debitis facilis consequatur',
            'personName': 'John Parker',
            'folderName': 'Politics',
            'description': 'In itaque assumenda aliquam voluptatem qui temporibus iusto nisi quia. Autem vitae quas aperiam nesciunt mollitia tempora odio omnis. Ipsa odit sit ut amet necessitatibus. Quo ullam ut corrupti autem consequuntur totam dolorem.'
        },
        {
            'id': '6',
            'img': blog6,
            'date': 'December 07',
            'blogName': 'Distinctio provident quibusdam numquam aperiam aut',
            'personName': 'Julia White',
            'folderName': 'Economics',
            'description': 'In itaque assumenda aliquam voluptatem qui temporibus iusto nisi quia. Autem vitae quas aperiam nesciunt mollitia tempora odio omnis. Ipsa odit sit ut amet necessitatibus. Quo ullam ut corrupti autem consequuntur totam dolorem.'
        },
    ]

    return (
        <>
            <div class="breadcrumbs d-flex align-items-center">
                <Navbar />
                <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">
                    <h2>Blog</h2>
                    <ol>
                        <li><a style={{ textDecoration: 'none' }} href="/">Home</a></li>
                        <li>Blog</li>
                    </ol>
                </div>
            </div>
            <section id="blog" class="blog">
                <div class="container" data-aos="fade-up" data-aos-delay="100">
                    <div class="row gy-4 posts-list" id="ConstructionBlog">
                        {blogs.map((b) => {
                            return (
                                <div class="col-xl-4 col-md-8" data-aos="fade-up" data-aos-delay="200">
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
                                            <p>{b.description}</p>
                                            <hr />
                                            <a href="/blogDetails" style={{textDecoration: 'none'}} class="readmore stretched-link"><span>Read More</span><i class="fa-solid fa-arrow-right-long"></i></a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Blog
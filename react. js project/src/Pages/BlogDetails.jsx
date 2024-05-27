import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import blog1 from '../Assets/img/blog/blog-1.jpg'
import blogInsidePost from '../Assets/img/blog/blog-inside-post.jpg'
import blogAuthor from '../Assets/img/blog/blog-author.jpg'
import comments1 from '../Assets/img/blog/comments-1.jpg'
import comments2 from '../Assets/img/blog/comments-2.jpg'
import comments3 from '../Assets/img/blog/comments-3.jpg'
import comments4 from '../Assets/img/blog/comments-4.jpg'
import twitters from '../Assets/img/twitter.png'
import facebook from '../Assets/img/facebook.png'
import instagram from '../Assets/img/instagram.jpeg'
import blogRecent1 from '../Assets/img/blog/blog-recent-1.jpg'
import blogRecent2 from '../Assets/img/blog/blog-recent-2.jpg'
import blogRecent3 from '../Assets/img/blog/blog-recent-3.jpg'
import blogRecent4 from '../Assets/img/blog/blog-recent-4.jpg'
import blogRecent5 from '../Assets/img/blog/blog-recent-5.jpg'


function BlogDetails() {
    const blogComment = [
        {
            'id': 'comment-1',
            'img': comments1,
            'commentName': 'Georgia Reader',
            'description': 'Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis molestiae est qui cum soluta. Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui facilis et.'
        },
        {
            'id': 'comment-2',
            'img': comments2,
            'commentName': 'Aron Alvarado',
            'description': 'Ipsam tempora sequi voluptatem quis sapiente non. Autem itaque eveniet saepe. Officiis illo ut beatae.'
        },
        {
            'id': 'comment-reply-1',
            'img': comments3,
            'commentName': 'Lynda Small',
            'description': 'Enim ipsa eum fugiat fuga repellat. Commodi quo quo dicta. Est ullam aspernatur ut vitae quia mollitia id non. Qui ad quas nostrum rerum sed necessitatibus aut est. Eum officiis sed repellat maxime vero nisi natus. Amet nesciunt nesciunt qui illum omnis est et dolor recusandae. Recusandae sit ad aut impedit et. Ipsa labore dolor impedit et natus in porro aut. Magnam qui cum. Illo similique occaecati nihil modi eligendi. Pariatur distinctio labore omnis incidunt et illum. Expedita et dignissimos distinctio laborum minima fugiat. Libero corporis qui. Nam illo odio beatae enim ducimus. Harum reiciendis error dolorum non autem quisquam vero rerum neque.'
        },
        {
            'id': 'comment-reply-2',
            'img': comments4,
            'commentName': 'Sianna Ramsay',
            'description': 'Et dignissimos impedit nulla et quo distinctio ex nemo. Omnis quia dolores cupiditate et. Ut unde qui eligendi sapiente omnis ullam. Placeat porro est commodi est officiis voluptas repellat quisquam possimus. Perferendis id consectetur necessitatibus.'
        },
    ]

    const recentPosts = [
        {
            'id': '1',
            'img': blogRecent1,
            'blogName': 'Nihil blanditiis at in nihil autem',
        },
        {
            'id': '2',
            'img': blogRecent2,
            'blogName': 'Quidem autem et impedit',
        },
        {
            'id': '3',
            'img': blogRecent3,
            'blogName': 'Id quia et et ut maxime similique occaecati ut',
        },
        {
            'id': '4',
            'img': blogRecent4,
            'blogName': 'Laborum corporis quo dara net para',
        },
        {
            'id': '5',
            'img': blogRecent5,
            'blogName': 'Et dolores corrupti quae illo quod dolor',
        },
    ]
    return (
        <>
            <div class="breadcrumbs d-flex align-items-center">
                <Navbar />
                <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">
                    <h2>Blog Details</h2>
                    <ol>
                        <li><a style={{ textDecoration: 'none' }} href="/">Home</a></li>
                        <li>Blog</li>
                    </ol>
                </div>
            </div>
            <section id="blog" class="blog">
                <div class="container" data-aos="fade-up" data-aos-delay="100">
                    <div class="row g-5">
                        <div class="col-lg-8">
                            <article class="blog-details">

                                <div class="post-img">
                                    <img src={blog1} alt="" class="img-fluid" />
                                </div>
                                <h2 class="title">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</h2>
                                <div class="meta-top">
                                    <ul>
                                        <li class="d-flex align-items-center"><i class="fa-solid fa-user"></i><a style={{ textDecoration: 'none' }} href="blog-details.html">John Doe</a></li>
                                        <li class="d-flex align-items-center"><i class="fa-regular fa-clock"></i> <a style={{ textDecoration: 'none' }} href="blog-details.html"><time datetime="2020-01-01">Jan 1, 2022</time></a></li>
                                        <li class="d-flex align-items-center"><i class="fa-regular fa-comment-dots"></i> <a style={{ textDecoration: 'none' }} href="blog-details.html">12 Comments</a></li>
                                    </ul>
                                </div>
                                <div class="content" id="content">
                                    <p>
                                        Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.

                                        Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
                                    </p>

                                    <p>
                                        Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non reiciendis. Sequi in accusamus harum vel aspernatur. Excepturi numquam nihil cumque odio. Et voluptate cupiditate.
                                    </p>

                                    <blockquote>
                                        <p>
                                            Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.
                                        </p>
                                    </blockquote>

                                    <p>
                                        Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore tempore provident voluptas mollitia aliquid. Id repellendus quia. Asperiores nihil magni dicta est suscipit perspiciatis. Voluptate ex rerum assumenda dolores nihil quaerat.
                                        Dolor porro tempora et quibusdam voluptas. Beatae aut at ad qui tempore corrupti velit quisquam rerum. Omnis dolorum exercitationem harum qui qui blanditiis neque.
                                        Iusto autem itaque. Repudiandae hic quae aspernatur ea neque qui. Architecto voluptatem magni. Vel magnam quod et tempora deleniti error rerum nihil tempora.
                                    </p>

                                    <h3>Et quae iure vel ut odit alias.</h3>
                                    <p>
                                        Officiis animi maxime nulla quo et harum eum quis a. Sit hic in qui quos fugit ut rerum atque. Optio provident dolores atque voluptatem rem excepturi molestiae qui. Voluptatem laborum omnis ullam quibusdam perspiciatis nulla nostrum. Voluptatum est libero eum nesciunt aliquid qui.
                                        Quia et suscipit non sequi. Maxime sed odit. Beatae nesciunt nesciunt accusamus quia aut ratione aspernatur dolor. Sint harum eveniet dicta exercitationem minima. Exercitationem omnis asperiores natus aperiam dolor consequatur id ex sed. Quibusdam rerum dolores sint consequatur quidem ea.
                                        Beatae minima sunt libero soluta sapiente in rem assumenda. Et qui odit voluptatem. Cum quibusdam voluptatem voluptatem accusamus mollitia aut atque aut.
                                    </p>
                                    <img src={blogInsidePost} class="img-fluid" alt="" />

                                    <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
                                    <p>
                                        Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro amet nostrum. In assumenda quia quae a id praesentium. Quos deleniti libero sed occaecati aut porro autem. Consectetur sed excepturi sint non placeat quia repellat incidunt labore. Autem facilis hic dolorum dolores vel.
                                        Consectetur quasi id et optio praesentium aut asperiores eaque aut. Explicabo omnis quibusdam esse. Ex libero illum iusto totam et ut aut blanditiis. Veritatis numquam ut illum ut a quam vitae.
                                    </p>
                                    <p>
                                        Alias quia non aliquid. Eos et ea velit. Voluptatem maxime enim omnis ipsa voluptas incidunt. Nulla sit eaque mollitia nisi asperiores est veniam.
                                    </p>
                                </div>
                                <div class="meta-bottom">
                                <i class="fa-regular fa-folder-open"> </i>
                                    <ul class="cats">
                                        <li><a style={{textDecoration: 'none'}} href="#">Business</a></li>
                                    </ul>
                                    <i class="fa-solid fa-tags"> </i>
                                    <ul class="tags">
                                        <li><a style={{textDecoration: 'none'}} href="#">Creative</a></li>
                                        <li><a style={{textDecoration: 'none'}} href="#">Tips</a></li>
                                        <li><a style={{textDecoration: 'none'}} href="#">Marketing</a></li>
                                    </ul>
                                </div>
                            </article>
                            <div class="post-author d-flex align-items-center" id="blogPerson">
                                <img src={blogAuthor} class="rounded-circle flex-shrink-0" alt="" />
                                <div>
                                    <h4>Jane Smith</h4>
                                    <div class="social-links">
                                        <i class="fa-brands fa-twitter" >&nbsp;</i> <i class="fa-brands fa-facebook">&nbsp;</i> <i class="fa-brands fa-instagram"></i>
                                    </div>
                                    <p>
                                        Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed possimus accusantium. Quas repellat voluptatem officia numquam sint aspernatur voluptas. Esse et accusantium ut unde voluptas.
                                    </p>
                                </div>`
                            </div>
                            <div class="comments">
                                <h4 class="comments-count">Comments</h4>
                                <div id="blogCommets">
                                    {blogComment.map((b) => {
                                        return (
                                            <div id="${b.id}" class="comment">
                                                <div class="d-flex">
                                                    <div class="comment-img"><img src={b.img} alt="" /></div>
                                                    <div>
                                                        <h5><a style={{ textDecoration: 'none' }} href="">{b.commentName}</a> 
                                                        <a style={{ textDecoration: 'none' }} href="#" class="reply"><i class="fa-solid fa-reply"></i> Reply</a></h5>
                                                        <time datetime="2020-01-01">01 Jan,2022</time>
                                                        <p>{b.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                                <div class="reply-form">
                                    <h4>Leave a Reply</h4>
                                    <p>Your email address will not be published. Required fields are marked * </p>
                                    <form action="">
                                        <div class="row">
                                            <div class="col-md-6 form-group">
                                                <input name="name" type="text" class="form-control" placeholder="Your Name*" />
                                            </div>
                                            <div class="col-md-6 form-group">
                                                <input name="email" type="text" class="form-control" placeholder="Your Email*" />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col form-group">
                                                <input name="website" type="text" class="form-control" placeholder="Your Website" />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col form-group">
                                                <textarea name="comment" class="form-control" placeholder="Your Comment*"></textarea>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Post Comment</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="sidebar">
                            <div class="sidebar-item search-form">
                                    <h3 class="sidebar-title">Search</h3>
                                    <form action="" class="mt-3">
                                        <input type="text" />
                                        <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                                    </form>
                                </div>
                                <div class="sidebar-item categories" id="categories">
                                    <div class="sidebar-item categories" id="categories"><h3 class="sidebar-title">Categories</h3>
                                        <ul class="mt-3">
                                            <li><a style={{ textDecoration: 'none' }} href="#">General <span>(25)</span></a></li>
                                            <li><a style={{ textDecoration: 'none' }} href="#">Lifestyle <span>(12)</span></a></li>
                                            <li><a style={{ textDecoration: 'none' }} href="#">Travel <span>(5)</span></a></li>
                                            <li><a style={{ textDecoration: 'none' }} href="#">Design <span>(22)</span></a></li>
                                            <li><a style={{ textDecoration: 'none' }} href="#">Creative <span>(8)</span></a></li>
                                            <li><a style={{ textDecoration: 'none' }} href="#">Educaion <span>(14)</span></a></li>
                                        </ul></div>
                                </div>
                                

                                <div class="sidebar-item recent-posts">
                                    <h3 class="sidebar-title">Recent Posts</h3>
                                    <div class="mt-3" id="recentPosts">
                                        {recentPosts.map((r) => {
                                            return (
                                                <div class="post-item">
                                                    <img src={r.img} alt="" />
                                                    <div>
                                                        <h4><a style={{ textDecoration: 'none' }} href="blog-details.html">{r.blogName}</a></h4>
                                                        <time datetime="2020-01-01">Jan 1, 2024</time>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div class="sidebar-item tags" id="tags">
                                    <h3 class="sidebar-title">Tags</h3>
                                    <ul class="mt-3">
                                        <li><a style={{ textDecoration: 'none' }} href="#">App </a></li>
                                        <li><a style={{ textDecoration: 'none' }} href="#">IT </a></li>
                                        <li><a style={{ textDecoration: 'none' }} href="#">Business </a></li>
                                        <li><a style={{ textDecoration: 'none' }} href="#">Mac </a></li>
                                        <li><a style={{ textDecoration: 'none' }} href="#">Design </a></li>
                                        <li><a style={{ textDecoration: 'none' }} href="#">Office </a></li>
                                        <li><a style={{ textDecoration: 'none' }} href="#">Creative </a></li>
                                        <li><a style={{ textDecoration: 'none' }} href="#">Studio </a></li>
                                        <li><a style={{ textDecoration: 'none' }} href="#">Smart </a></li>
                                        <li><a style={{ textDecoration: 'none' }} href="#">Tips </a></li>
                                        <li><a style={{ textDecoration: 'none' }} href="#">Marketing </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <Footer />
        </>
    )
}

export default BlogDetails
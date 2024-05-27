// blog page :

const blogs = [
    {
        'id': '1',
        'img': 'blog-1.jpg',
        'date': 'December 12',
        'blogName': 'Eum ad dolor et. Autem aut fugiat debitis',
        'personName': 'Julia Parker',
        'folderName': 'Politics',
        'description': 'Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.'
    },
    {
        'id': '2',
        'img': 'blog-2.jpg',
        'date': 'July 17',
        'blogName': 'Et repellendus molestiae qui est sed omnis',
        'personName': 'Mario Douglas',
        'folderName': 'Sports',
        'description': 'Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.'
    },
    {
        'id': '3',
        'img': 'blog-3.jpg',
        'date': 'September 05',
        'blogName': 'Quia assumenda est et veritati tirana ploder',
        'personName': 'Lisa Hunter',
        'folderName': 'Economics',
        'description': 'Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.'
    },
    {
        'id': '4',
        'img': 'blog-4.jpg',
        'date': 'August 05',
        'blogName': 'Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem.',
        'personName': 'Lisa Hunter',
        'folderName': 'Sports',
        'description': 'Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui.'
    },
    {
        'id': '5',
        'img': 'blog-5.jpg',
        'date': 'September 17',
        'blogName': 'Accusamus quaerat aliquam qui debitis facilis consequatur',
        'personName': 'John Parker',
        'folderName': 'Politics',
        'description': 'In itaque assumenda aliquam voluptatem qui temporibus iusto nisi quia. Autem vitae quas aperiam nesciunt mollitia tempora odio omnis. Ipsa odit sit ut amet necessitatibus. Quo ullam ut corrupti autem consequuntur totam dolorem.'
    },
    {
        'id': '6',
        'img': 'blog-6.jpg',
        'date': 'December 07',
        'blogName': 'Distinctio provident quibusdam numquam aperiam aut',
        'personName': 'Julia White',
        'folderName': 'Economics',
        'description': 'In itaque assumenda aliquam voluptatem qui temporibus iusto nisi quia. Autem vitae quas aperiam nesciunt mollitia tempora odio omnis. Ipsa odit sit ut amet necessitatibus. Quo ullam ut corrupti autem consequuntur totam dolorem.'
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
              <p>${b.description}</p>
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


// blog-details page :

const blogComment = [
    {
        'id': 'comment-1',
        'img': 'comments-1.jpg',
        'commentName': 'Georgia Reader',
        'description': 'Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis molestiae est qui cum soluta. Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui facilis et.'
    },
    {
        'id': 'comment-2',
        'img': 'comments-2.jpg',
        'commentName': 'Aron Alvarado',
        'description': 'Ipsam tempora sequi voluptatem quis sapiente non. Autem itaque eveniet saepe. Officiis illo ut beatae.'
    },
    {
        'id': 'comment-reply-1',
        'img': 'comments-3.jpg',
        'commentName': 'Lynda Small',
        'description': 'Enim ipsa eum fugiat fuga repellat. Commodi quo quo dicta. Est ullam aspernatur ut vitae quia mollitia id non. Qui ad quas nostrum rerum sed necessitatibus aut est. Eum officiis sed repellat maxime vero nisi natus. Amet nesciunt nesciunt qui illum omnis est et dolor recusandae. Recusandae sit ad aut impedit et. Ipsa labore dolor impedit et natus in porro aut. Magnam qui cum. Illo similique occaecati nihil modi eligendi. Pariatur distinctio labore omnis incidunt et illum. Expedita et dignissimos distinctio laborum minima fugiat. Libero corporis qui. Nam illo odio beatae enim ducimus. Harum reiciendis error dolorum non autem quisquam vero rerum neque.'
    },
    {
        'id': 'comment-reply-2',
        'img': 'comments-4.jpg',
        'commentName': 'Sianna Ramsay',
        'description': 'Et dignissimos impedit nulla et quo distinctio ex nemo. Omnis quia dolores cupiditate et. Ut unde qui eligendi sapiente omnis ullam. Placeat porro est commodi est officiis voluptas repellat quisquam possimus. Perferendis id consectetur necessitatibus.'
    },
]


function displayBlogComment() {
    try {
        // console.log(blogs);
        let str = ''
        blogComment.map((b) => {
            str += `
            <div id="${b.id}" class="comment">
                <div class="d-flex">
                  <div class="comment-img"><img src="assets/img/blog/${b.img}" alt=""></div>
                  <div>
                    <h5><a href="">${b.commentName}</a> <a href="#" class="reply"><i class="bi bi-reply-fill"></i> Reply</a></h5>
                    <time datetime="2020-01-01">01 Jan,2022</time>
                    <p>${b.description}</p>
                  </div>
                  
                </div>
            </div>
        `
        })
        // console.log(str);
        document.getElementById('blogCommets').innerHTML = str
    } catch (error) {
        console.log(error.message);
    }
}
displayBlogComment()

const content = `<p>
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
        <img src="assets/img/blog/blog-inside-post.jpg" class="img-fluid" alt="">

        <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
        <p>
        Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro amet nostrum. In assumenda quia quae a id praesentium. Quos deleniti libero sed occaecati aut porro autem. Consectetur sed excepturi sint non placeat quia repellat incidunt labore. Autem facilis hic dolorum dolores vel.
        Consectetur quasi id et optio praesentium aut asperiores eaque aut. Explicabo omnis quibusdam esse. Ex libero illum iusto totam et ut aut blanditiis. Veritatis numquam ut illum ut a quam vitae.
        </p>
        <p>
        Alias quia non aliquid. Eos et ea velit. Voluptatem maxime enim omnis ipsa voluptas incidunt. Nulla sit eaque mollitia nisi asperiores est veniam.
        </p>`

document.getElementById('content').innerHTML = content

const blogPerson = `<img src="assets/img/blog/blog-author.jpg" class="rounded-circle flex-shrink-0" alt="">
        <div>
        <h4>Jane Smith</h4>
        <div class="social-links">
            <a href="https://twitters.com/#"><i class="bi bi-twitter"></i></a>
            <a href="https://facebook.com/#"><i class="bi bi-facebook"></i></a>
            <a href="https://instagram.com/#"><i class="biu bi-instagram"></i></a>
        </div>
        <p>
            Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed possimus accusantium. Quas repellat voluptatem officia numquam sint aspernatur voluptas. Esse et accusantium ut unde voluptas.
        </p>
        </div>`

document.getElementById('blogPerson').innerHTML = blogPerson

const categories = `<h3 class="sidebar-title">Categories</h3>
    <ul class="mt-3">
    <li><a href="#">General <span>(25)</span></a></li>
    <li><a href="#">Lifestyle <span>(12)</span></a></li>
    <li><a href="#">Travel <span>(5)</span></a></li>
    <li><a href="#">Design <span>(22)</span></a></li>
    <li><a href="#">Creative <span>(8)</span></a></li>
    <li><a href="#">Educaion <span>(14)</span></a></li>
    </ul>`

document.getElementById('categories').innerHTML = categories

const recentPosts = [
    {
        'id': '1',
        'img': 'blog-recent-1.jpg',
        'blogName': 'Nihil blanditiis at in nihil autem',
    },
    {
        'id': '2',
        'img': 'blog-recent-2.jpg',
        'blogName': 'Quidem autem et impedit',
    },
    {
        'id': '3',
        'img': 'blog-recent-3.jpg',
        'blogName': 'Id quia et et ut maxime similique occaecati ut',
    },
    {
        'id': '4',
        'img': 'blog-recent-4.jpg',
        'blogName': 'Laborum corporis quo dara net para',
    },
    {
        'id': '5',
        'img': 'blog-recent-5.jpg',
        'blogName': 'Et dolores corrupti quae illo quod dolor',
    },
]

function displayrecentPosts() {
    try {
        // console.log(blogs);
        let str = ''
        recentPosts.map((r) => {
            str += `
                <div class="post-item">
                    <img src="assets/img/blog/${r.img}" alt="">
                    <div>
                        <h4><a href="blog-details.html">${r.blogName}</a></h4>
                        <time datetime="2020-01-01">Jan 1, 2020</time>
                    </div>
                </div>
            `
        })
        // console.log(str);
        document.getElementById('recentPosts').innerHTML = str
    } catch (error) {
        console.log(error.message);
    }
}
displayrecentPosts()

const tags = `
    <h3 class="sidebar-title">Tags</h3>
    <ul class="mt-3">
    <li><a href="#">App</a></li>
    <li><a href="#">IT</a></li>
    <li><a href="#">Business</a></li>
    <li><a href="#">Mac</a></li>
    <li><a href="#">Design</a></li>
    <li><a href="#">Office</a></li>
    <li><a href="#">Creative</a></li>
    <li><a href="#">Studio</a></li>
    <li><a href="#">Smart</a></li>
    <li><a href="#">Tips</a></li>
    <li><a href="#">Marketing</a></li>
    </ul>`

document.getElementById('tags').innerHTML = tags
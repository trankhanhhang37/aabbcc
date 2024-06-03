import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { getBlogByTopicId, getBlogDetails } from "../../../store/actions";
import PostHomeItem from "../../../Components/blog/postHomeItem";

export default function PostDetailItem() {
  const { slug_id } = useParams()
  const blog_id = slug_id.split('-').pop()
  console.log(blog_id)
  const { blogDetails } = useSelector((state) => state.blogReducer)
  const { onBlogByTopicId } = useSelector((state) => state.blogReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!blogDetails) {
      dispatch(getBlogDetails({ blog_id: blog_id }))
    }

    blogDetails && (!onBlogByTopicId && dispatch(getBlogByTopicId({ topic_id: blogDetails.topic_id })))

    console.log(blogDetails)
  }, [blogDetails, onBlogByTopicId])


  return (
    <body>
      <div class="container">
        <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark mb-5">
          <div class="col-md-6 px-0">
            <h1 class="display-4 font-italic">Title of a longer featured blog post</h1>
            <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
            <p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue reading...</a></p>
          </div>
        </div>


      </div>

      <main role="main" class="container">
        <div class="row">
          <div class="col-md-8 blog-main">
            <h3 class="pb-3 mb-4 font-italic border-bottom">
              From the Firehose
            </h3>

            <div class="blog-post">
              {blogDetails && (
                <div class="blog-post">
                  <img src={blogDetails.blog_image} style={{}}></img>
                  <blockquote></blockquote>

                  <h2 class="blog-post-title">{blogDetails.blog_name}</h2>
                  <p class="blog-post-meta">{blogDetails.blog_detail}</p>


                </div>

              )
              }

            </div>

          </div>

          <aside class="col-md-4 blog-sidebar">
            <div class="p-3 mb-3 bg-light rounded">
              <h4 class="font-italic">Bai Viet Lien Quan</h4>
              <p class="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
              <h4 class="font-italic">Archives</h4>

              <div class="">

                {
                  onBlogByTopicId && onBlogByTopicId.map((post, index) => {
                    return (
                      <div class="card mb-3" style={{maxWidth: "500px",}}>
                        <div class="row g-0">
                          <div class="col-md-5">
                            <img
                              src="https://i.pinimg.com/564x/4f/41/48/4f41484f2ab0d2264ceb77bc8470f7c2.jpg"
                              alt="Trendy Pants and Shoes"
                              class="img-fluid rounded-start"
                              style={{height:"200px"}}
                            />
                          </div>
                          <div class="col-md-7">
                            <div class="card-body">
                              <h5 class="card-title">{post.blog_title}</h5>
                              <p class="card-text">
                                {post.blog_detail}
                              </p>
                              <p class="card-text">
                                <small class="text-muted">Last updated 3 mins ago</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )

                  }
                  )}

              </div>

              <ol class="list-unstyled mb-0">
                <li><a href="#">March 2014</a></li>
                <li><a href="#">February 2014</a></li>
                <li><a href="#">January 2014</a></li>
                <li><a href="#">December 2013</a></li>
                <li><a href="#">November 2013</a></li>
                <li><a href="#">October 2013</a></li>
                <li><a href="#">September 2013</a></li>
                <li><a href="#">August 2013</a></li>
                <li><a href="#">July 2013</a></li>
                <li><a href="#">June 2013</a></li>
                <li><a href="#">May 2013</a></li>
                <li><a href="#">April 2013</a></li>
              </ol>
            </div>



            <div class="p-3">
              <h4 class="font-italic">Elsewhere</h4>
              <ol class="list-unstyled">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
              </ol>
            </div>
          </aside>{/* <!-- /.blog-sidebar --> */}

        </div>{/* <!-- /.row --> */}

      </main>



      {/* <!-- Bootstrap core JavaScript
  ================================================== --> */}
      {/* <!-- Placed at the end of the document so the pages load faster --> */}
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script>window.jQuery || document.write('<script src="../../../../assets/js/vendor/jquery-slim.min.js"></script>')</script>
      <script src="../../../../assets/js/vendor/popper.min.js"></script>
      <script src="../../../../dist/js/bootstrap-material-design.min.js"></script>
      <script src="../../../../assets/js/vendor/holder.min.js"></script>

    </body>
  )
};
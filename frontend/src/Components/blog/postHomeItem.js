import { Link } from "react-router-dom"

export default function PostHomeItem({ blog }) {

  return (

    <div class="col-lg-3 col-md-6 col-sm-6 col-12">
      <article>
        <Link to={`/blog/${blog.blog_slug}-${blog._id}`} class="img-fluid">
          <img class="rounded w-100" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/posts/1.webp" style={{ objectFit: 'cover', height: "160" }} />
        </Link>
        <div class="mt-2 text-muted small d-block mb-1">
          <span>
            <i class="fa fa-calendar-alt fa-sm"></i>
            {blog.createdAt}
          </span>
          <h6 class="text-dark">{blog.blog_name}</h6>
          <p>{blog.blog_detail}</p>
        </div>
      </article>
    </div>

  );
}
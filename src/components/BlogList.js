import { Link } from "react-router-dom";
function BlogList({ blogs, title }) {
  return (
    <>
      <ul className="blog-list container">
        <li className="blog-section-title">
          <h2>{title}</h2>
        </li>
        {blogs.map((blog) => {
          return (
            <li className="blog-preview" key={blog.id}>
             
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-body">
                {blog.body.substr(0, 50)}...{" "}
                <Link className="read-more" to={`/blog/${blog.id}`}>
                  Read More
                </Link>
              </p>
              <p className="blog-author">
                Written by {blog.author}{" "}
                <button
                  className="btn btn-primary btn-sm"
                 >
                  Delete
                </button>
                </p>
                
              </li>
              
          );
        })}
      </ul>
    </>
  );
}

export default BlogList;
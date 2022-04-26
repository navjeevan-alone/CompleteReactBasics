// import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import BlogListItem from "./BlogListItem";
import BlogGridItem from "./BlogGridItem";
function BlogList({ blogs, title }) {
  const [isGrid, setIsGrid] = useState(false);
  const [gridIcon, setGridIcon] = useState("apps");
  const [searchTerm, setSearchTerm] = useState("");

  const handleGridChange = () => {
    setIsGrid(!isGrid);
    isGrid ? setGridIcon("apps") : setGridIcon("menu");
    localStorage.setItem("isGrid", isGrid);
  };
  // toggle comp
  let comp = (
    <ul className="blog-list-container">
      {blogs.map((blog) => {
        return <BlogListItem blog={blog} key={blog.id} />;
      })}
    </ul>
  );

  isGrid
    ? (comp = (
        <ul className="blog-grid-container">
          {blogs.map((blog) => {
            return <BlogGridItem blog={blog} key={blog.id} />;
          })}
        </ul>
      ))
    : (comp = (
        <ul className="blog-list-container">
          {blogs.map((blog) => {
            return <BlogListItem blog={blog} key={blog.id} />;
          })}
        </ul>
      ));

  return (
    <div className={`container card`}>
      <div className="blog-section-title d-flex justify-self-between ">
        <h2>{title}</h2>

        <button
          className="icon-only-btn material-icons"
          onClick={handleGridChange}>
          {gridIcon}
        </button>
      </div>
      {comp}
    </div>
  );
}

export default BlogList;
{
  /* {!isGrid &&
          blogs.map((blog) => {
            return (
              <li className="card blog-cards" key={blog.id}>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-body">
                  {blog.body.substr(0, 50)}...{" "}
                  <Link className="read-more" to={`/blog/${blog.id}`}>
                    Read More
                  </Link>
                </p>
                <p className="blog-author">
                  Written by {blog.author}{" "}
                  <button className="btn btn-primary btn-sm">Delete</button>
                </p>
              </li>
            );
          })} */
}

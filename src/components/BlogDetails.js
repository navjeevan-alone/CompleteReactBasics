import { useParams } from "react-router";
import useFetch from './useFetch'
function BlogDetails() {
    const { id } = useParams();
     const {
       data: blog,
       isPending,
       error,
     } = useFetch(`http://localhost:8000/blogs/${id}`);
  return (
    <div className="blogs-details container">
      {error && <h2 className="loading">{error}</h2>}
      {isPending && (
        <h2 className="loading"><span className="loader"></span> Loading...</h2>
      )}
      <div className="blog-full" key={blog.id}>
        <h1 className="blog-section-title text-primary">{blog.title}</h1>
        <p className="blog-body">{blog.body}</p>
        <p className="blog-author">Written by {blog.author}</p>
        <button className="btn btn-primary">Delete</button>
      </div>
     
    </div>
  );
}

export default BlogDetails;

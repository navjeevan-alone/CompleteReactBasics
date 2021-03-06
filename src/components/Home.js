import React, { useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

function Home() {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <h2 className="loading">{error}</h2>}
      {isPending && (
        <h2 className="loading">
          {" "}
          <span className="loader"></span> Loading...
        </h2>
      )}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}

export default Home;
// const data = [
//   {
//     title: "First Blog",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
//     author: "jim",
//     id: 1,
//   },
//   {
//     title: "Latest News",
//     body: " Placeat in maiores at nam minima sed hic. Commodi cumque tenetur ipsum magni? ",
//     author: "diana",
//     id: 2,
//   },
//   {
//     title: "My friend",
//     body: "Dolore quaerat et eaque dolores, ad debitis recusandae quidem!",
//     author: "jim",
//     id: 3,
//   },
// ];

// const handleDelete = (id) => {
//   const newBlogs = blogs.filter((blog) => {
//     return blog.id !== id;
//   });
//   let confirmDelete = window.confirm("Are you sure to delete this blog");
//   // console.log(confirmDelete)
//   if (confirmDelete) {
//     setBlogs(newBlogs);
//   }
// };

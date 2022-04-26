import { useState } from "react";
// import usePost from "./usePost";
import { useNavigate } from "react-router";
function Create({ time }) {
  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("jim");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author, timestamp: time };
    // console.log(blog);
    // custom hook parameters : url,method,headers,body
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then((res) => {
      navigate("/");
    });
    // .then((res) => {
    // console.log("New blog added");
    // });
    // usePost("http://localhost:8000/blogs", blog);
  };

  return (
    <div className="card container">
      <h2 className="blog-section-title">Add New Blog</h2>
      <form className="create-blog" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>

          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>

          <textarea
            name="body"
            id="body"
            cols="30"
            rows="10"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="author-select">Author</label>

          <select
            className="text-capitalize"
            name="author"
            id="author-select"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}>
            <option value="jim">jim</option>
            <option value="diana">diana</option>
          </select>
        </div>
        <div className="btn-group ">
          <button type="submit" className="btn btn-primary icon-btn">
            <span className="material-icons">add</span>
            <p>Add</p>
          </button>

          <button
            type="reset"
            onClick={() => {
              setTitle("");
              setBody("");
              setAuthor("jim");
            }}
            className="btn btn-outline-primary icon-btn">
            <span className="material-icons">clear</span>
            <p>Reset</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;

import React from 'react'

function Create() {
  return (
    <div className="create container">
      <h2 className="blog-section-title">Add New Blog</h2>
      <form className="create-blog">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <p>:</p>
          <input type="text" name="title" id="title" />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <p>:</p>
          <input type="text" name="body" id="body" />
        </div>
        <div className="form-group">
          <label htmlFor="author-select">Author</label>
          <p>:</p>
          <select name="author" id="author-select">
            <option value="jim">jim</option>
            <option value="diana">diana</option>
          </select>
        </div>
        <div className="btn-group ">
          <button className="btn btn-primary icon-btn">
            <span className="material-icons">add</span>
            <p>Add</p>
          </button>
        
          <button type="reset" className="btn btn-outline-primary icon-btn">
            <span className="material-icons">clear</span>
            <p>Reset</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create
import React from "react";
import {Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/">
          
          <h2 className="title">Ninja Blogs</h2>
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link className="btn btn-primary icon-btn" to="/create">
              <span className="material-icons">add</span>
              <p>Add</p>
            </Link>
          </li>
          {/* <span class="material-icons icon-add">add</span> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

import React from 'react'
import {Link, Outlet} from 'react-router-dom';
const Blog = () => {
  return (
    <div>
      <h1>Blog Page</h1>
      <nav>
        <Link to='post1' style={{marginRight:'20px'}}>Blog Post 1</Link>
        <Link to='post2'>Blog Post 2</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Blog;

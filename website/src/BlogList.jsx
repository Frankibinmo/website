import React from 'react'

const BlogList = ({blogs, title}) => {

    // const blogs = props.blogs
    // const title = props.title
    
  return (
    <div className='BlogList'>
        <h1>{title}</h1>
      {blogs.map((blog) => (
         <div className="blogview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>

         </div>
     )) }
    </div>
  )
}

export default BlogList

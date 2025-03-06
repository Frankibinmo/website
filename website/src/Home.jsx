import {useState } from 'react';

const HomePage = () => {
    const [blogs, setBlogs] = useState([
        {title: 'my new website', body: 'this site belongs to frank', author:'Ode', id: 1},
        {title: 'my new website', body: 'this site belongs to frank', author:'frank', id: 2},
        {title: 'my new website', body: 'this site belongs to frank', author:'shalom', id: 3},
        {title: 'my new website', body: 'this site belongs to frank', author:'frank', id: 4},
        {title: 'my new website', body: 'this site belongs to frank', author:'Ode', id: 5},
    ]);
 
  return (
    <div className='HomePage'>
     {blogs.map((blog) => (
         <div className="blogview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>

         </div>
     )) }
    </div>
  )
}

export default HomePage

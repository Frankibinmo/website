import {useState } from 'react';
import BlogList from './BlogList';

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
     <BlogList blogs={blogs} title="All blogs!!"/>
     
     <BlogList blogs={blogs.filter((blogs) =>blogs.author ==="Ode")} title="ode blogs!"/>

    </div>
  )
}

export default HomePage

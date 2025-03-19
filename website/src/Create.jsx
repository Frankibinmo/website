import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Create = () => {

   const [title, setTitle] = useState('') 
   const [body, setBody] = useState(""); 
   const [author, setAuthor] = useState("Ode"); 
   const [isloading, setIsLoading] = useState(false)
   const history = useHistory();

   const handleSubmit = (e) => {
       e.preventDefault() ;
       
       const blog = { title, body,author};

        setIsLoading(false)       

       fetch("http://localhost:8000/blogs", {
        method: 'POST',
        headers: {'cintent-type': 'application/json'},
        body: JSON.stringify(blog)
       }).then(() =>{
        console.log('new blog added')
        setIsLoading (true)
        // history.go(-1); this directs u to the previous page.
        history.push('/');
       })

   }


  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="frank">frank</option>
          <option value="ode">ode</option>
        </select>
        {!isloading && <button>Add blog</button>}
        {isloading && <button disabled>Add blog...</button>}

        {/* <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p> */}
      </form>
    </div>
  );
}

export default Create

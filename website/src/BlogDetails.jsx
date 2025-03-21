import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const history = useHistory();

     const handleClick = () => {
      fetch("http://localhost:8000/blogs/" + blog.id, {
        method: 'DELETE'
      }).then(() =>{
      history.push('/')
      })
     }

  return (
    <div className="blog-details">
      <h2>Blog details - {id}</h2>
      {isLoading && <div>isLoading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>writen by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;

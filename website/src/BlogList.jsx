import { Link } from "react-router-dom";

const BlogList = ({blogs,title }) => {

  


  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-view" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h1>{blog.title}</h1>
            <p>written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList

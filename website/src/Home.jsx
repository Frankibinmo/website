import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const HomePage = () => {
  const [blogs, setBlogs] = useState(null);

  const [isPending, setIsPending] = useState(true)

  const [error, setError] = useState(null)

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);

    setBlogs(newBlogs);
  };
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if(!res.ok)
           throw Error('could not access the data')
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
        })
        .catch( err =>{
          setError(error.message)
        })
    }, 1000)
  },[]);
  return (
    <div className="HomePage">
      {error && <div>{error}</div>}
      {isPending && <div>loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All blogs!!"
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default HomePage;

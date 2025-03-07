import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const HomePage = () => {
  const [blogs, setBlogs] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);

    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  });
  return (
    <div className="HomePage">
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

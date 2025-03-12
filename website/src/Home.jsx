import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
     
   const { data:blogs, isloading, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="Home">
      {isloading && <div>pending...</div>}
      {blogs && <BlogList blogs={blogs} title={"All blogs!!"}  />}
       
      
    </div>
  );
}

export default Home

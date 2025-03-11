import { useEffect, useState } from "react"
import BlogList from "./BlogList";
const Home = () => {
     
    const [blogs, setBlogs] = useState(null)

    const [isloading, setIsLoading] = useState(true)


     const[name, setName] = useState('glory')

      useEffect(() => {
        setTimeout(() => {
          fetch("http://localhost:8000/blogs")
            .then((res) => res.json()) // Ensure the response is parsed as JSON
            .then((data) => {
              setBlogs(data);
              setIsLoading(false);
              // You can handle the data here
            });
        }, 3000);
        //  .catch((error) => {
        //    console.error("Error fetching data:", error); // Optional: Handle errors
        //  });
      }, []);


  return (
    <div className="Home">
      {isloading && <div>pending...</div>}
      {blogs && <BlogList blogs={blogs} title={"All blogs!!"}  />}
       
      
    </div>
  );
}

export default Home

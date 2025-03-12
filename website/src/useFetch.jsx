import { useState, useEffect } from "react";

const useFetch = (url) => {
     const [data, setData] = useState(null);
     const [isloading, setIsLoading] = useState(true);
     const [error, setError] = useState(null);
  
      useEffect(() => {
        setTimeout(() => {
          fetch(url)
            .then((res) => {
              if (!res.ok) {
                throw Error("could not get the data");
              }
              return res.json();
            })
            .then((data) => {
              setData(data);
              setIsLoading(false);
              setError(null);
            })
            .catch((err) => {
              setIsLoading(false);
              setError(err.message);
            });
        }, 100);
      }, [url]);

      return {data, isloading, error}
}

export default useFetch

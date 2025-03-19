import { useState, useEffect } from "react";

const useFetch = (url) => {
     const [data, setData] = useState(null);
     const [isloading, setIsLoading] = useState(true);
     const [error, setError] = useState(null);
  
      useEffect(() => {
        const AbortCont = new AbortController();
        setTimeout(() => {
          fetch(url, {signal: AbortCont.signal})
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
                if(err.name === 'AbortError'){
                    // console.log('fetch aborted')
                }else{
                  setIsLoading(false);
                  setError(err.message);
                }
            });
        }, 100);

           return () => AbortCont.abort();  
      }, [url]);

      return {data, isloading, error}
}

export default useFetch

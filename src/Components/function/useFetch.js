import { useEffect, useState } from "react";

const useFetch = ({url = null}={}) => {                                         /// should be async or normal??????????
    const [data, setdata] = useState(null)    
    const fetchData = async () => {                                       // future: optimize by just loading the changed Comment state, by sending this power to each individual comment??
          try {
            const response = await fetch(`${url}`, {
              method: "GET",
              headers: {
                'Content-Type': 'application/json'
              },
              // signal: fetchSignal,
            });
            const d = await response.json();
            setdata(()=>(d));
          } catch (error) {
            console.error('Error:', error);
          }
        };
        // fetchData();                                         // never call like this, or re render (since data is updated) will cause infinite loop
        useEffect(()=>{
          fetchData();
        },[])
        return {data};
}

export default useFetch;
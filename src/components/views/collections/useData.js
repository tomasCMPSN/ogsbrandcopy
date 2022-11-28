import { useEffect } from "react";
import { useState } from "react";

const useData = (url, param = "all") => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await fetch(`${url}${param}`);
        const API = await res.json();
        setData(API);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI()
  }, [param]);
  return [data]
};

export default useData;

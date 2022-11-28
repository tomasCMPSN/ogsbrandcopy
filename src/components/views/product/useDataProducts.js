import { useEffect } from "react";
import { useState } from "react";

const useDataProducts = (url, param = "all") => {
  const [data, setData] = useState([]);

  const [sizesMapData, setSizesMapData] = useState("");

  const [colorSelected, setColorSelected] = useState("");
  const [colorImageSelected, setColorImageSelected] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await fetch(`${url}${param}/get`);
        const API = await res.json();
        setData(API);
        setSizesMapData(API.sizesData[0]);
        setColorSelected(API.color1Name);
        setColorImageSelected(API.color1Img1);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI()
  }, [param]);
  return [data, sizesMapData, colorSelected, colorImageSelected]
};

export default useDataProducts;
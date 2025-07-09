import { useEffect, useState } from "react";
import axios from "axios";

function useFetchJobs <T = any> (url: string)  {
  const [data, setData] = useState<T | null>(null);
   const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (!url) return;
    const result = async () => {
      try {
        const response = await axios.get<T>(`${API}${url}`);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    result();
  }, [url]);

  return { data };
};

export default useFetchJobs;

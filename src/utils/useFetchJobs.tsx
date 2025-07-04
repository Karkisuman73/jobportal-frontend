import { useEffect, useState } from "react";
import axios from "axios";

function useFetchJobs <T = any> (url: string)  {
  const [data, setData] = useState<T | null>(null);
  const BaseUrl = "http://localhost:3001";

  useEffect(() => {
    if (!url) return;
    const result = async () => {
      try {
        const response = await axios.get<T>(`${BaseUrl}${url}`);
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

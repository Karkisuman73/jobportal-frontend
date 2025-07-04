import axios from "axios";

const BASE_URL = "http://localhost:3001";

const usePost = () => {
  const post = async (url: string, payload: any) => {
   try {
     const res = await axios.post(`${BASE_URL}${url}`, payload);
    console.log (res.data);
   } catch (error) {
    console.log(error)
   }
  };

  return { post };
};

export default usePost;

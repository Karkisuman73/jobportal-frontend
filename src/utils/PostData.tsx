import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const usePost = () => {
  const post = async (url: string, payload: any) => {
   try {
     const res = await axios.post(`${API}${url}`, payload);
    console.log (res.data);
   } catch (error) {
    console.log(error)
   }
  };

  return { post };
};

export default usePost;

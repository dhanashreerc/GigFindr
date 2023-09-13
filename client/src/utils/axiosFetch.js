import axios from "axios";
//axios
const axiosFetch = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
   credentials:"include",
  //withCredentials: true,
});

export default axiosFetch;

import axios from "axios";


//Crear instancia de api axios
const api=axios.create({
    //baseURL: process.env.VITE_BACKEND_URL,
    baseURL:"http://localhost:5000",
});

/*
api.interceptors.request.use((config)=> {
    const token=localStorage.getItem("token");
    if(token){
        config.headers["Authorization"]=`Bearer ${token}`;
    }
    return config;
},error=>Promise.reject(error));
*/
export default api;
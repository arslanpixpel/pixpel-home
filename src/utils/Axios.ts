import axios, { AxiosInstance } from "axios";

const server = "https://backend.pixpel.io/";
const local = "http://127.0.0.1:3001/";

const Axios: AxiosInstance = axios.create({
    baseURL: server,
});

export default Axios;

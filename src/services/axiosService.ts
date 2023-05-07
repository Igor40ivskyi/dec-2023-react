import axios from "axios";
import {baseURL} from "../components/constants/urls";

const axiosService = axios.create({baseURL});

export {
    axiosService
};




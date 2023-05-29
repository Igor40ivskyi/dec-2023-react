import axios from "axios";
import {owuLinkpcBaseURL} from "../constants";

const owuLinkpcAxiosService = axios.create({baseURL: owuLinkpcBaseURL});

export {
    owuLinkpcAxiosService,
};

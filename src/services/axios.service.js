import axios from "axios";
import {owuLinkpcBaseURL, placeholderBaseURL} from "../constants";

const placeholderAxiosService = axios.create({baseURL: placeholderBaseURL});

const owuLinkpcAxiosService = axios.create({baseURL: owuLinkpcBaseURL});

export {
    placeholderAxiosService,
    owuLinkpcAxiosService,
};

import {axiosService} from "./axios.service";

export const commonService = {
    getAllUsers: () => axiosService.get('users'),
}


import AxiosService from "./AxiosService";

let url = 'http://localhost:3010/api/v1/user';

export const UserService = {
     login: (data) => {
         return AxiosService.postService(`${url}/signin`, data)
     },
     signup: (data) => {
         return AxiosService.postService(`${url}/signup`, data)
     },
 }
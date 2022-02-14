import AxiosService from "./AxiosService";

let url = 'http://localhost:3001/user';

export const UserService = {
     login: (data) => {
         return AxiosService.postService(`${url}/signin`, data)
     },
     signup: (data) => {
         return AxiosService.postService(`${url}/signup`, data)
     },
 }
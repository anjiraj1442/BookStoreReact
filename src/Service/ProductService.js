import AxiosService from "./AxiosService";
let url = "http://localhost:3010/api/v1/book";

export const ProductService = {
  getAllproducts: (data) => {
    return AxiosService.getService(`${url}/getbook`, data);
  },
};

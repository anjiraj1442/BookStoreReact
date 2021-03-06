import AxiosService from "./AxiosService";

let url = "http://localhost:3010/api/v1/cart";

const header = {
  headers: {
    token: localStorage.getItem("token"),
  },
};
console.log(header);

export const CartService = {
  addtocart: (data) => {
    console.log("data", data);
    return AxiosService.postService(`${url}/cart/${data}`, data, header);
  },

  getcart: () => {
    return AxiosService.getcartService(`${url}/getcartbooks`, header);
  },

  updatecart: (data) => {
    return AxiosService.updateService(
      `${url}/updatecart/${data}`,
      data,
      header
    );
  },
};

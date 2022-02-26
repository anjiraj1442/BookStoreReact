import AxiosService from "./AxiosService";

let url = "http://localhost:3010/api/v1/wishlist";

const header = {
  headers: {
    token: localStorage.getItem("token"),
  },
};

export const wishlistService = {
  addwishlist: (data) => {
    return AxiosService.postService(`${url}/wishlist/${data}`, {}, header);
  },
  getwishlist: () => {
    return AxiosService.getwishService(`${url}/wishlist`, header);
  },
};

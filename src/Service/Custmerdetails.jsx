import AxiosService from "./AxiosService";

let url = "http://localhost:3010/api/v1/customer";

const header = {
  headers: {
    token: localStorage.getItem("token"),
  },
};

export const Customerdetails = {
  addcustomerdetails: (data) => {
    return AxiosService.postService(`${url}/address`, data, header);
  },
};

import axios from "axios";

const AxiosService = {
  postService: (url, data, header = false) => {
    return axios.post(url, data, header);
  },
  getService: (url, data, header = false) => {
    return axios.get(url, data, header);
  },
  getcartService: (url, header = false) => {
    return axios.get(url, header);
  },
  getwishService: (url, header = false) => {
    return axios.get(url, header);
  },
  updateService: (url, data, header) => {
    return axios.put(url, data, header);
  },
};
export default AxiosService;

import axios from "axios";

const api = axios.create({
  // baseURL: "http://ks-iff.anonymous.mobile.exp.direct:5000"
  baseURL: "http://192.168.0.27:5000"
});

export default api;

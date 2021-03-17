import axios from "axios";

export default {
  //creates new user
  signup: function (userData) {
    return axios.post("/api/users/signup", userData);
  },

  login: function (userData) {
    return axios.post("/api/users/login", userData);
  },

  getUsers: function () {
    return axios.get("/api/users");
  },
};

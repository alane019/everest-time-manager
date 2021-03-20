import axios from "axios";

export default {
  //creates new user
  signup: function (userData) {
    return axios.post("/api/users/signup", userData);
  },

  // log in to app
  login: function (userData) {
    return axios.post("/api/users/login", userData);
  },

  //get current user data
  getUsers: function () {
    return axios.get("/api/users");
  },

  // get current project data 
  getProjects: function() {
    return axios.get("/api/projects");

  }


};

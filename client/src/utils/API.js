import axios from "axios";
// const tokenHeader = new Headers();
// tokenHeader.append("token", localStorage.getItem("token"));

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

  addProject: function (newProjectData) {
    return axios.post(
      `/api/projects/${localStorage.getItem("userId")}`,
      {
        ...newProjectData,
      },
      { headers: { token: `${localStorage.getItem("token")}` } }
    );
  },

  // get current project data
  getProjects: function () {
    const tokenHeader = new Headers();
    tokenHeader.append("token", localStorage.getItem("token"));

    return axios.get(`/api/projects/${localStorage.getItem("userId")}`, {
      headers: { token: `${localStorage.getItem("token")}` },
    });
  },
};

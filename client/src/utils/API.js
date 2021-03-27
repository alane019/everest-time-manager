import axios from "axios";
import moment from "moment";

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

  deleteProject: function (projectId) {
    return axios.delete(
      `/api/projects/${localStorage.getItem("userId")}/${projectId}`,
      {
        headers: { token: `${localStorage.getItem("token")}` },
      }
    );
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
    return axios.get(`/api/projects/${localStorage.getItem("userId")}`, {
      headers: { token: `${localStorage.getItem("token")}` },
    });
  },

  getTasksByProject: function (projectId) {
    return axios.get(
      `/api/tasks/${localStorage.getItem("userId")}/${projectId}`,
      {
        headers: { token: `${localStorage.getItem("token")}` },
      }
    );
  },
  addTask: function (data) {
    return axios.post(
      `/api/tasks/${localStorage.getItem("userId")}/${data.projectId}`,
      {
        ...data,
      },
      { headers: { token: `${localStorage.getItem("token")}` } }
    );
  },

  addAction: function (data) {
    return axios.post(
      `/api/actions/${localStorage.getItem("userId")}/${data.projectId}/${
        data.taskId
      }`,
      {
        ...data,
      },
      { headers: { token: `${localStorage.getItem("token")}` } }
    );
  },
  endAction: function (data) {
    return axios.put(
      `/api/actions/${localStorage.getItem("userId")}/${data.projectId}/${
        data.taskId
      }/${data._id}`,
      {
        endTime: moment(),
      },
      { headers: { token: `${localStorage.getItem("token")}` } }
    );
  },
  getAction: function (actionId) {
    return axios.get(
      `/api/actions/${localStorage.getItem(
        "userId"
      )}/projects/tasks/${actionId}`,
      {
        headers: { token: `${localStorage.getItem("token")}` },
      }
    );
  },
  getProjects: function () {
    return axios.get(
      `/api/projects/${localStorage.getItem("userId")}`,
      { headers: { token: `${localStorage.getItem("token")}` } }
    );
  },
};

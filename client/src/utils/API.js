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
  getSecurityQuestion: function (email) {
    return axios.get(`/api/users/question/${email}`);
  },
  getUserId: function (email, answer) {
    return axios.get(`/api/users/question/${email}/${answer}`);
  },
  updateUser: function (data) {
    return axios.put(
      `/api/users/${localStorage.getItem("userId")}`,
      {
        ...data,
      },
      { headers: { token: `${localStorage.getItem("token")}` } }
    );
  },
  setNewPassword: function (userId, password) {
    return axios.put(`/api/users/new-password/${userId}`, {
      password: password,
    });
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
  updateProject: function (data, projectId) {
    return axios.put(
      `/api/projects/${localStorage.getItem("userId")}/${projectId}`,
      {
        ...data,
      },
      { headers: { token: `${localStorage.getItem("token")}` } }
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
  deleteTask: function (taskId) {
    return axios.delete(
      `/api/tasks/${localStorage.getItem("userId")}/projects/${taskId}`,
      {
        headers: { token: `${localStorage.getItem("token")}` },
      }
    );
  },
  updateTask: function (data, taskId) {
    return axios.put(
      `/api/tasks/${localStorage.getItem("userId")}/projectId/${taskId}`,
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
        endTime: data.endTime,
        duration: data.duration,
      },
      { headers: { token: `${localStorage.getItem("token")}` } }
    );
  },

  getAction: function (data) {
    return axios.get(
      `/api/actions/${localStorage.getItem("userId")}/projects/tasks/${
        data.activeAction
      }`,
      {
        headers: { token: `${localStorage.getItem("token")}` },
      }
    );
  },

  getAllActions: function () {
    return axios.get(`/api/actions/${localStorage.getItem("userId")}`, {
      headers: { token: `${localStorage.getItem("token")}` },
    });
  },

  deleteAction: function(projectId, taskId, actionId){
    return axios.delete(
      `/api/actions/${localStorage.getItem("userId")}/${projectId}/${taskId}/${actionId}`,
      {
        headers: {token: `${localStorage.getItem("token")}`}
      }

    )
  }

}



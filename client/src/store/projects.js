//createSlice is a function that creates a entity that later will be combined with other entities
import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
//for memoisation purposes we use reselect library
import { createSelector } from "reselect";

const slice = createSlice({
  name: "projects",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    projectsRequested: (projects, action) => {
      projects.loading = true;
    },
    projectsReceived: (projects, action) => {
      projects.list = action.payload;
      projects.loading = false;
      projects.lastFetch = Date.now();
    },
    projectsRequestFailed: (projects, action) => {
      projects.loading = false;
    },
    projectAdded: (projects, action) => {
      projects.list.push(action.payload);
    },
  },
});

const {
  projectAdded,
  projectsReceived,
  projectsRequested,
  projectsRequestFailed,
} = slice.actions;
export default slice.reducer;

// Action Creators
const url = "/projects";

export const loadProjects = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.projects;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) return;

  dispatch(
    apiCallBegan({
      url,
      onStart: projectsRequested.type,
      onSuccess: projectsReceived.type,
      onError: projectsRequestFailed.type,
    })
  );
};

export const addBug = (project) =>
  apiCallBegan({
    url,
    method: "post",
    data: project,
    onSuccess: projectAdded.type,
  });

//  Memoisation Selector
// output is get passed to the result function which is the second one
export const getUnresolvedBugs = createSelector(
  (state) => state.entities.projects.list,
  (list) => list.filter((bug) => !bug.resolved)
);

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";

export default function () {
  //this middleware passes all request through it's check before going to the routes
  return configureStore({
    reducer,
  });
}

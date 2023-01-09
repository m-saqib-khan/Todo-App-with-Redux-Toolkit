import {configureStore} from "@reduxjs/toolkit";
import toduReducer from "./toduSlice";

 const store = configureStore({
  reducer: {
    todu: toduReducer,
  },
});

export default store

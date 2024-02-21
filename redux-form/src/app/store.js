import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../features/FormSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;

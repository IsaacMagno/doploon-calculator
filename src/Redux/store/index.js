import { configureStore } from "@reduxjs/toolkit";
import TranslateReducer from "../reducers/translateSlice";

export default configureStore({
  reducer: {
    translations: TranslateReducer,
  },
});

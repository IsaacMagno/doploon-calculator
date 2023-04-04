import { createSlice } from "@reduxjs/toolkit";

export const translaterSlice = createSlice({
  name: "Translate",
  initialState: {
    translations: [],
  },
  reducers: {
    setTranslation(state, { payload }) {
      return { ...state, translations: payload };
    },
  },
});

export const { setTranslation } = translaterSlice.actions;

export default translaterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const FormSlice = createSlice({
  name: "form",
  initialState: { name: "" },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default FormSlice.reducer;
export const { setName } = FormSlice.actions;

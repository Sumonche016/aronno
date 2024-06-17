import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  refetch: false,
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    updateRefetch: (state) => {
      state.refetch = !state.refetch;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateRefetch } = productSlice.actions;

export default productSlice.reducer;

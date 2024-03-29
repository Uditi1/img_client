import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryTag: "",
  Tag: [],
 
};

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    setCategoryTag: (state, action) => {
      state.categoryTag = action.payload;
    },
    setCatTag: (state, action) => {
      state.Tag = action.payload;
    },
    addTagToCat: (state, action) => {
      state.Tag = [...state.Tag, ...action.payload]; // Assuming payload is an array
    },
   
  },
});

export const { setCategoryTag, setCatTag, addTagToCat} = categorySlice.actions;
export default categorySlice.reducer;

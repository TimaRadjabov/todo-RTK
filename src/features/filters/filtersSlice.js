import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "all",
  },
  reducers: {
    allFilters: (state) => {
      return state;
    },
    activeFilter: (state, action) => {
      state.name = action.payload;
    },
    doneFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const { allFilters, activeFilter, doneFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;

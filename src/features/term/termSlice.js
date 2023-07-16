import {createSlice} from "@reduxjs/toolkit";

const termSlice = createSlice({
    name: "term",
    initialState: {
        term: ""
    },
    reducers: {
        addTerm: (state, action) => {
            state.term = action.payload
        },
    }
})

export const {addTerm} = termSlice.actions;
export const termReducer = termSlice.reducer;
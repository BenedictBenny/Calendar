import { createSlice } from "@reduxjs/toolkit";
import data from'../utils/sample-data.json'

const dateDetailsSlice = createSlice({
    name: 'dateDetails',
    initialState: {
        data: data,
        date: "May 24 2017" },
    reducers: { 
        updateDateDetails(state, action){
            state.date = action.payload;
        },
        deleteEvent(state, action){
            state.data = state.data.filter((data)=>data.id!==action.payload);
        },
        addEvent(state, action){}
    }
});

export const dateDetailsActions = dateDetailsSlice.actions;

export default dateDetailsSlice;
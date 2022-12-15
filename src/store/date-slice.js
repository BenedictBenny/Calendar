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
            localStorage.setItem("Day",state.date);
        },
        deleteEvent(state, action){
            state.data = state.data.filter((data)=>data.id!==action.payload);
        },
        addEvent(state, action){
            const newEvent = action.payload;
            const ids = state.data.map(object => {
                return object.id;
            });
            const max = Math.max(...ids);
            state.data.push({id:max+1, startTime:newEvent.startTime, endTime:newEvent.endTime, title:newEvent.title });
        },
        editEvent(state, action){
            const existingEvent = state.data.find(day => day.id === action.payload.id);
            existingEvent.title = action.payload.title;
            existingEvent.startTime = action.payload.startTime;
            existingEvent.endTime = action.payload.endTime;
        }
    }
});

export const dateDetailsActions = dateDetailsSlice.actions;

export default dateDetailsSlice;
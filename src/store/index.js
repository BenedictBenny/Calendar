import { configureStore } from "@reduxjs/toolkit";
import dateDetailsSlice from "./date-slice";

const store = configureStore({
    reducer: {dateDetails: dateDetailsSlice.reducer}
});

export default store;
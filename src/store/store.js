import { configureStore } from "@reduxjs/toolkit";
import PostmanSlice from "./PostmanSlice";


export const store = configureStore({
    reducer: PostmanSlice,
})
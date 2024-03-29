import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../slice/categorySlice";

const store = configureStore({
    reducer: {
        categorySlice: categorySlice
    }
});

export default store
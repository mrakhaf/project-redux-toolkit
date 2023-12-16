import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"
import menuReducer from "./features/menu/menuSlice"
import registerReducer from "./features/register/registerSlice"

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level 
        counter: counterReducer,
        menus: menuReducer,
        register: registerReducer
    },
})
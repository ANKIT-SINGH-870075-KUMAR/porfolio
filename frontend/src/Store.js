import { configureStore } from "@reduxjs/toolkit";
import { loginReducer, updateReducer, userReducer } from "./reducers/user";

// store use for updating component store
const store = configureStore({
    reducer: {
        user: userReducer,
        login: loginReducer,
        update: updateReducer,
    },
});

export default store; 
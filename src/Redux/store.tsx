import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "../Redux/reducers/question_list.tsx";

const store = configureStore({
    reducer: {
        question: questionReducer
    }
});

export default store;

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

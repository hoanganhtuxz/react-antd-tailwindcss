import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    // Các reducer khác (nếu có)
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
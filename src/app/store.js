import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieReducer from "../features/movie/movieSlice";
import UserReducer from "../features/user/UserSlice";
import UserSlice from "../features/user/UserSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: UserSlice
  },
});

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducer/todoSlice'; // Ensure this path is correct

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
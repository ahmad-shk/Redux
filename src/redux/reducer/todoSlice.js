import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 };

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state) => {
      console.log('therer----->',true)
      state.value += 1
    },
    removeTodo: (state) => {
      state.value -= 1
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;

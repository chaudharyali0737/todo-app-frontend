import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todolist",
  initialState: { 
    tasks: [],
    id:[]
  }, // Use an object with a "tasks" property
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload.task); // Mutate the "tasks" array
    },
  },
});

export const { addTask } = todoSlice.actions;
export default todoSlice.reducer;
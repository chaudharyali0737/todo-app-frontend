import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/api"
import { toast } from 'react-toastify';

export const addTask = createAsyncThunk(process.env.REACT_APP_INSERT, async ({ todoTask, navigate }, { rejectWithValue }) => {
  try {
    const response = api.insertTodo(todoTask);
    toast.success("successfully added todo", {
      autoClose: 3000, // Duration in milliseconds (3 seconds)
    })
    console.log("esponse.data",response);
    navigate("/")

    return response.data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
});
const initialState = {
  tasks: [],
  local: [],
}
export const todoSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    setTask: (state, action) => {
      const temp = [...state.local, action.payload]
      state.local = temp;
    }
  },
  extraReducers: {
    [addTask.pending]: (state, action) => {
      state.loading = true;
    },
    [addTask.fulfilled]: (state, action) => {
      console.log("action.payload]",action.payload)
      state.loading = false;
      state.tasks = [action.payload];
    },
    [addTask.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    }
  }
});

export const {
  setTask,
} = todoSlice.actions
export default todoSlice.reducer;
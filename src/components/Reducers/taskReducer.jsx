import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/api"
import { toast } from 'react-toastify';

export const addTask = createAsyncThunk(process.env.REACT_APP_INSERT, async ({ todoTask, navigate }, { rejectWithValue }) => {
  try {
    const response = api.insertTodo(todoTask);
    toast.success("successfully added todo", {
      autoClose: 3000, // Duration in milliseconds (3 seconds)
    })
    console.log("Response.data", response);
    navigate("/")

    return response.data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
});

export const GetAll = createAsyncThunk(process.env.REACT_APP_GET_ALL, async ({ rejectWithValue }) => {
  try {
    const response = api.getAllTodos()
    toast.success("successfully GET todo", {
      autoClose: 3000, // Duration in milliseconds (3 seconds)
    })
    console.log("Response.data get all ", response.data);
    return response.data
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
});
const initialState = {
 data:[""]
}
export const todoSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    setTask: (state, action) => {
      state.data = [action.payload];
    }
  },
  extraReducers: {
    [GetAll.pending]: (state, action) => {
      state.loading = true;
    },
    [GetAll.fulfilled]: (state, action) => {
      console.log("action.payload]", action.payload)
      state.loading = false;
      console.log(action.payload,"payload");
      state.data = [action.payload];
    },
    [GetAll.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const {
  setTask,
} = todoSlice.actions
export default todoSlice.reducer;
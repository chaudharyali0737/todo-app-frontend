import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../components/Reducers/taskReducer"
export default configureStore(
  {
  reducer: {
    todolist: todoReducer,
  },
  
});
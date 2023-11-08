import "./App.css";
import { Provider } from 'react-redux'
import React from "react";
import Add from '../src/components/Todo/add';
import Todo from "./components/Todo/todo";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import configureStore from "./redux/store"

const store = configureStore
function App() {
  return (
    <>
      <div className="app-div">
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Todo />}></Route>
              <Route path="/add" element={<Add />}></Route>
            </Routes>
          </BrowserRouter>
        </Provider>
        <ToastContainer />
      </div>
    </>
  );
}
export default App;

import "./App.css";
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import React from "react";
import Add from '../src/components/Todo/add';
import Todo from "./components/Todo/todo";

import { BrowserRouter, Routes, Route ,Link } from 'react-router-dom'
// import add from "./components/Todo/add";

const store = configureStore({
  reducer: {

  }
})
function App() {
  return (
    <>
      {/* className={"button-65"} div={"div"} button={"button-64"} */}

      <div className="app-div">
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Todo />}></Route>
              <Route path="/add" element={<Add />}></Route>
            </Routes>
          </BrowserRouter>

          {/* <Todo ></Todo> */}
        </Provider>

      </div>
    </>
  );
}
export default App;

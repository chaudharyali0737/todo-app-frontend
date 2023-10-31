import "./App.css";
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import React from "react";
import Todo from "./components/Todo/todo";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const store = configureStore({
  reducer: {

  }
})
function App() {
  return (
    <>
      {/* className={"button-65"} div={"div"} button={"button-64"} */}

      <div className="app-div">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}>

          </Route>
        </Routes>
        </BrowserRouter>
        <Provider store={store}>
          <Todo ></Todo>
        </Provider>

      </div>
    </>
  );
}
export default App;

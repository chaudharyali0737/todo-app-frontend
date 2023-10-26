import React, { useEffect, useState } from "react";
import {
  deleteTodo,
  getAllTodos,
  getOneTodo,
  insertTodo,
  updateOneTodo,
  deleteAllTodos,
} from "../../api/api";

import "./todo.css";
import { Input, TableCell } from "@mui/material";
import { Button, Col, Container, Row, button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AllTodo from "./todoFunctions";
function Messages(props) {
  return (
    <>
      <AllTodo></AllTodo>
    </>
  );
}
export default Messages;

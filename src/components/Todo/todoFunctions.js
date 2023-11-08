import {
  deleteTodo,
  getAllTodos,
  getOneTodo,
  updateOneTodo,
  deleteAllTodos,
} from "../../api/api";
import React, { useState, useEffect } from "react";
import "./todo.css";
import { Input, Alert } from "@mui/material";
import {
  Button,
  Card,
  Container,
  Navbar,
  Table,
} from "react-bootstrap";
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'



function AllTodo() {
  // const todolist= useSelector((state) => state.todolist.tasks)
  const todolist= useSelector((state) => state.todolist.local)

  
  const [editedTaskID, setEditedTaskID] = useState(0);
  const [isGetAll, setIsGetAll] = useState(false);
  const [todos, setTodos] = useState([]);

  const [getOneT, setOneTodo] = useState("");
  const [todo, settodo] = useState(0);
  const [isDeleteAll, setIsDeleteAll] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [deleteTodoID, setdeleteTodoID] = useState(0);
  const [showEditInput, setShowEditInput] = useState(false);
  const [editedTask, setEditedTask] = useState(""); // You can use this state to track the edited task

  useEffect(() => {
    console.log({todolist},"store");
    setTodos(todolist)
    console.log({todos},"list");
  }, [todolist]);

  const getOne = async () => {
    setOneTodo(null);
    let result2 = await getOneTodo(todo);
    if (result2.length > 0) {
      console.log("data by getone : ", result2.length);
      setOneTodo(result2);
      setShowAlert(false);
    }
    if (!result2.id > 0) setShowAlert(true);
  };
  const deleteAll = async () => {
    await deleteAllTodos();
    setIsDeleteAll(!isDeleteAll);
    setTodos([]);
  };
  const [hoveredRow, setHoveredRow] = useState(null);

  const handleRowHover = (index) => {
    setHoveredRow(index);
    setdeleteTodoID(index);
  };

  const handleRowLeave = () => {
    setHoveredRow(null);
    setdeleteTodoID(0);
  };
  const updateSingleTodo = async () => {
    updateOneTodo(editedTaskID, editedTask);
    setIsGetAll(!isGetAll);
  };

  const deleteOneTodo = async () => {
    deleteTodo(deleteTodoID);
    setIsDeleted(!isDeleted);
    setdeleteTodoID(0)
  };


  const handleEditClick = (item) => {
    setEditedTask(item.task);
    setEditedTaskID(item.id)
    setShowEditInput(true);
  };

  const handleSaveClick = () => {
    updateSingleTodo(editedTaskID, editedTask)
    setShowEditInput(false);
  };
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container fluid>
          <Navbar.Brand className="mx-auto">React TodoList</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="d-flex justify-content-center">
        <Card className="shadow-lg">
          <Card.Body>
            <div>
              <Link to="/add" className="btn btn-success my-3">ADD</Link>
              <span style={{ margin: "3px" }}></span>
              <Button
                size="sm"
                className=""
                variant="dark"
                expand="sm"
                onClick={deleteAll}
              >
                Clear All Task
              </Button>
            </div>

            <Table bordered striped responsive>
              <thead>
                <tr>
                  <th>TASK</th>
                </tr>
              </thead>
              <tbody>
                {todos  && todos.length > 0 ? (
                  todos?.map((item, index) => (
                    <tr
                      key={index}
                      onMouseEnter={() => handleRowHover(index)}
                      onMouseLeave={handleRowLeave}
                    >
  
                      <td>
                        {index === editedTaskID && showEditInput === true ? (
                          <div>
                            <input
                              type="text"
                              value={editedTask}
                              onChange={(e) => setEditedTask(e.target.value)}
                            />
                            <Button
                              style={{ padding: ".25px" }}
                              variant="outline-success"
                              onClick={() => handleSaveClick()}
                            >
                              Save
                            </Button>
                          </div>
                        ) : (
                          <>
                            {item }
                            {hoveredRow === index && (
                              <>
                                <Button
                                  style={{ padding: ".25px" }}
                                  variant="outline-success"
                                  onClick={() => handleEditClick(item)}
                                >
                                  Edit
                                </Button>
                                <Button
                                  style={{ padding: ".25px" }}
                                  variant="outline-danger"
                                  onClick={() => {
                                    deleteOneTodo();
                                  }}
                                >
                                  Delete
                                </Button>
                              </>
                            )}
                          </>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2">No data available</td>
                  </tr>
                )}
              </tbody>
            </Table>
            <div
              style={{
                padding: "10px", // Padding around the element
                overflow: "auto", // Enable scrolling if the content overflows
                whiteSpace: "pre-wrap", // Preserve line breaks and wrap text
                color: "black", // Text color
                textAlign: "center", // Center align the text content
                margin: "19px", // Add margin to create space around the element
                borderBlockEndColor: "red",
              }}
            >
              <Input
                placeholder="enter id"
                variant="light"
                animation="glow"
                xs={4}
                value={todo}
                onChange={(event) => settodo(event.target.value)}
              ></Input>
              <Button
                size="sm"
                className=""
                variant="dark"
                expand="sm"
                onClick={getOne}
              >
                GET
              </Button>

              {getOneT && Array.isArray(getOneT) && getOneT.length > 0 ? (
                getOneT.map((item) => {
                  const createdAt = new Date(item.createdAt);
                  const formattedDate = createdAt.toDateString();
                  return (
                    <div key={item.id} style={{ backgroundColor: "#f2f2f2 " }}>
                      <p>ID: {item.id}</p>
                      <p>TASK: {item.task}</p>
                      <p>CreatedAt: {formattedDate}</p>
                    </div>
                  );
                })
              ) : showAlert ? (
                <Alert animation="grow" variant="danger">
                  No data available against this id .
                </Alert>
              ) : (
                ""
              )}
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
export default AllTodo;

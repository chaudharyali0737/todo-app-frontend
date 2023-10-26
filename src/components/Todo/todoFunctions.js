import {
  deleteTodo,
  getAllTodos,
  getOneTodo,
  insertTodo,
  updateOneTodo,
  deleteAllTodos,
} from "../../api/api";
import React, { useState, useEffect } from "react";
import "./todo.css";
import { Input } from "@mui/material";
import {
  Button,
  Card,
  Container,
  Navbar,
  Table,
  Alert,
  Spinner,
} from "react-bootstrap";

// const [id, setId] = useState(0);
// const [task, setTask] = useState("");
// const [isGetAll, setIsGetAll] = useState(false);

// const [todoTask, settodoTask] = useState("");

function AllTodo(props) {
  const [todos, settodos] = useState([]);
  const [todoTask, settodoTask] = useState("");
  const [isInserted, setisInserted] = useState(false);
  const [getOneT, setOneTodo] = useState("");
  const [todo, settodo] = useState(0);
  const [isDeleteAll, setIsDeleteAll] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [deleteTodoID, setdeleteTodoID] = useState(0);
  useEffect(() => {
    const getAll = async () => {
      let result = await getAllTodos();
      if (result.length > 0) {
        settodos(result);
      }
    };
    settodos([]);
    getAll();
    console.log("calls made useEffect ", {
      // isGetAll,
      // isDeleted,
      isInserted,
      isDeleteAll,
    });
  }, [isDeleteAll, isInserted, isDeleted]);

  const insertOneTodo = async () => {
    insertTodo(todoTask);
    setisInserted(!isInserted);
    settodoTask("");
  };
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
    settodos([]);
  };
  const [hoveredRow, setHoveredRow] = useState(null);

  const handleRowHover = (index) => {
    setHoveredRow(index);
  };

  const handleRowLeave = () => {
    setHoveredRow(null);
  };
  //   const updateSingleTodo = async () => {
  //     updateOneTodo(id, task);
  //     setIsGetAll(!isGetAll);
  //   };
  // const deleteItem = (id) => {
  //   // Create a new array that excludes the item with the specified ID
  //   const updatedItems = todos.filter((item) => item.id !== id);

  //   // Update the state with the new array
  //   settodos(updatedItems);
  // };
  const deleteOneTodo = async () => {
    deleteTodo(deleteTodoID);

    setIsDeleted(!isDeleted);
    // deleteItem(deleteTodoID);
  };
  // isGetAll, isDeleted, isInserted, isDeleteAll;
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
            <div
              style={{
                padding: "10px", // Padding around the element
                overflow: "auto", // Enable scrolling if the content overflows
                whiteSpace: "pre-wrap", // Preserve line breaks and wrap text
                color: "black", // Text color
                textAlign: "center", // Center align the text content
                margin: "19px", // Add margin to create space around the element
              }}
            >
              <Input
                placeholder="enter task"
                variant="light"
                animation="glow"
                xs={4}
                value={todoTask}
                onChange={(event) => settodoTask(event.target.value)}
              ></Input>
              <span style={{ margin: "3px" }}></span>
              <Button
                size="sm"
                className=""
                variant="dark"
                expand="sm"
                onClick={insertOneTodo}
              >
                ADD
              </Button>
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
                  <th>ID</th>
                  <th>TASK</th>
                </tr>
              </thead>
              <tbody>
                {todos && Array.isArray(todos) && todos.length > 0 ? (
                  todos.map((item, index) => (
                    <tr
                      key={item.id}
                      onMouseEnter={() => handleRowHover(index)}
                      onMouseLeave={handleRowLeave}
                    >
                      <td>{item.id}</td>
                      <td>
                        {" "}
                        {item.task}
                        {"       "}
                        {hoveredRow === index && (
                          <Button
                            style={{ margin: "0.5px", padding: ".5px" }}
                            variant="danger"
                            onClick={() => {
                              setdeleteTodoID(item.id);
                              deleteOneTodo();
                            }}
                          >
                            delete
                          </Button>
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

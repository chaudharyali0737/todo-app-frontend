import React from "react";
import { Input } from "@mui/material";
import { useState } from "react";
// import {
//     insertTodo,
//     getAllTodos,

// } from "../../api/api";
import {
    Button,
    Card,
    Container,
    Navbar,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { addTask } from "../Reducers/taskReducer";

function Add() {


    const todolists = useSelector((state) => state.todolist)


    const [todoTask, settodoTask] = useState("")




    const dispatch = useDispatch();
    const navigate = useNavigate();





    const handleAddClick = (event) => {
        console.log(todolists," test")
        if (todoTask?.length > 0) {
            event.preventDefault();
            dispatch(addTask({ task: todoTask }));
            // if (todolists?.length > 0) {

            // } else {

            //     dispatch(addTask({ id: 1, todoTask }));
            // }
        } else {
            alert("Empty task cannot be inserted");
        }
        navigate("/");
    };

    return (
        <><Navbar bg="dark" expand="sm" variant="dark">
            <Container fluid>
                <Navbar.Brand className="mx-auto">ADD TODO TASK HERE </Navbar.Brand>
            </Container>
        </Navbar>
            <Container className=" justify-content-center">
                <Card className="shadow-lg">
                    <Card.Body className="center">
                        <div
                            style={{
                                padding: "10px",
                                overflow: "auto",
                                whiteSpace: "pre-wrap",
                                color: "black",
                                textAlign: "center",
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
                            <span style={{ margin: '3px' }}></span>
                            <Button
                                size="sm"
                                className=""
                                variant="dark"
                                expand="sm"
                                onClick={handleAddClick}
                            >
                                ADD
                            </Button>
                        </div>
                    </Card.Body>
                </Card>

            </Container></>

    )
}


export default Add;
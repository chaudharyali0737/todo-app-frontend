import React, { useEffect } from "react";
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
import { useDispatch } from "react-redux"
import { toast } from "react-toastify";

import { addTask, setTask } from "../Reducers/taskReducer";

function Add() {
    const dispatch = useDispatch();
    const [todoTask, settodoTask] = useState("")
    const navigate = useNavigate();
    const handleAddClick = () => {
        if (todoTask?.length > 0) {
            dispatch(addTask({todoTask,navigate})) 
            // dispatch(setTask(todoTask))
            // navigate("/");
        } else {
            toast.warn("Empty task cannot be inserted", { autoClose: 600 });
            navigate("/add");
        }
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
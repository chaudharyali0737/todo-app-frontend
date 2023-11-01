import React from "react";
import { Input } from "@mui/material";
import { useState, useEffect } from "react";
import {
    insertTodo,
    getAllTodos,

} from "../../api/api";
import {
    Button,
    Card,
    Container,
    Navbar,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Add() {
    const [todoTask, settodoTask] = useState("");
    const [isInserted, setisInserted] = useState(false);
    const [todos, settodos] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getAll = async () => {
            let result = await getAllTodos();
            if (result.length > 0) {
                settodos(result);
            }
        };
        settodos([]);
        getAll();
    }, [isInserted]);

    const handleAddClick = () => {
        if (todoTask && todoTask.length > 0) {
            insertOneTodo();
        } else {
            alert("empty task cannot be inserted ")
        }
        navigate("/")
    };
    const insertOneTodo = async () => {

        insertTodo(todoTask);
        setisInserted(!isInserted);
        settodoTask("");

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
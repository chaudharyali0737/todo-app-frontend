import axios from "axios";
const payloadUpdate = {
  task: "null", // Default task is a string "null"
  id: 0, // Default id is a number 0
};

export async function getAllTodos() {
  let todos = "";
  try {
    const res = await axios.get(process.env.REACT_APP_GET_ALL);
    console.log(res.data);
    todos = res.data;
    //    console.log (res.data[0].task)
  } catch (err) {
    console.log(err);
  }
  return todos;
}
export async function getOneTodo(id) {
  const resp = await axios
    .get(process.env.REACT_APP_GET_ONE.replace(":id", id))
    .catch((error) => {
      console.log(error);
      return {};
    });
  return resp.data;
}

export async function updateOneTodo(id, task) {
  const payload = { ...payloadUpdate };

  // Update the id and task properties with the provided values
  payload.id = Number(id); // id is set to the value of the id parameter
  payload.task = task; // task is set to the value of the task parameter

  console.log(payload, "<< payload >>"); // Logging the payload for debugging

  try {
    await axios.post(process.env.REACT_APP_UPDATE_ONE, payload);
    return;
  } catch (error) {
    console.log(error);
    return;
  }
}
export async function deleteTodo(id) {
  console.log("id for delete todo :", id);
  try {
    await axios.delete(
      process.env.REACT_APP_DELETE_ONE.replace(":id", Number(id))
    );
    return;
  } catch (error) {
    console.log(error);
    return;
  }
}
export async function deleteAllTodos() {
  try {
    await axios.delete(process.env.REACT_APP_DELETE_ALL);
    return;
  } catch (error) {
    console.log(error);
    return;
  }
}
export async function insertTodo(task) {
  const payload = { ...payloadUpdate };
  payload.task = task;
  try {
    await axios.post(process.env.REACT_APP_INSERT, payload);
    return;
  } catch (error) {
    console.log(error);
    return;
  }
}

import axios from "axios";
const API=axios.create({baseURL:"http://localhost:8080"})
const payloadUpdate = {
  task: "null", // Default task is a string "null"
  id: 0, // Default id is a number 0
};

export  const  getAllTodos=()=>API.get(process.env.REACT_APP_GET_ALL);
// {

//   // let todos = "";
//   // try {
//   //   const res = await 
//   //   todos = res.data;
//   //   //    console.log (res.data[0].task)
//   // } catch (err) {
//   //   console.log(err);
//   // }
//   // return todos;
// }
export async function getOneTodo(id) {
  const resp = await API
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
    await API.post(process.env.REACT_APP_UPDATE_ONE, payload);
    return;
  } catch (error) {
    console.log(error);
    return;
  }
}
export async function deleteTodo(id) {
  console.log("id for delete todo :", id);
  try {
    await API.delete(
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
    await API.delete(process.env.REACT_APP_DELETE_ALL);
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
    await API.post(process.env.REACT_APP_INSERT, payload);
    return;
  } catch (error) {
    console.log(error);
    return;
  }
}

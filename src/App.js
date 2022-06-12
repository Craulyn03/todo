import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import { Box } from "@chakra-ui/react";

// const data = [
//   {
//     id: uuidv4(),
//     title: "Correr",
//     task: "Tengo que correr",
//     complete: true,
//   },
//   {
//     id: uuidv4(),
//     title: "Caminar",
//     task: "Tengo que Caminar",
//     complete: true,
//   },
//   {
//     id: uuidv4(),
//     title: "Jugar",
//     task: "Tengo que Jugar",
//     complete: false,
//   },
// ];

function App() {
  const [tasks, settasks] = useState([]);

  useEffect(() => {
    settasks(JSON.parse(localStorage.getItem("task")));
  }, []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  const addUser = (user) => {
    settasks([...tasks, user]);
  };

  const onCompleted = (task) => {
    settasks(
      tasks.map((el) =>
        el.id === task.id ? { ...el, complete: !el.complete } : { ...el }
      )
    );
  };

  ///EditTak

  //DeleteUser
  const deleteUser = (id) => {
    console.log(id);
    settasks(tasks.filter((user) => user.id !== id));
  };

  return (
    <Box bg="#2D3748" height="100vh" pt="4rem">
      <UserForm addUser={addUser} />
      <UserTable
        tasks={tasks}
        deleteUser={deleteUser}
        onCompleted={onCompleted}
      />
    </Box>
  );
}

export default App;

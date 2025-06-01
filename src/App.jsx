import { useEffect, useState } from "react";
import AddTasks from "./components/AddTasks.jsx";
import Tasks from "./components/Tasks.jsx";
import {v4} from "uuid"
import Title from "./components/Title.jsx";

function App(){
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  )

  function onTaskClick(taskId){
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks)
  }

  function onDeleteTaskClick(taskId){
    const newTasks = tasks.filter(task => task.id != taskId)
    setTasks(newTasks)
  }

  function onAddTaskSubmit(title,description){
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask])
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const fetchTasks = async () => {
    // chamar a API
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
      method: 'GET'
    })
    // Pega os dados dela
    const data = await response.json()
    console.log(data)
    // armazena os dados
    setTasks(data)
  }// Caso não queira chamar uma api para dados , so comentar a linha abaixo
  // fetchTasks()
  },
   [])
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
      </div>
    </div>
  )
}

export default App;
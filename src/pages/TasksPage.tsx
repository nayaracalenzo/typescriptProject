import { useState } from "react"
import TaskList from "../components/TaskList"
import type { ITask } from "../type/type"

const TasksPage = () => {
  const [tasks, setTasks] = useState<ITask[]>([{
    id: 1,
    title: "Estudar TypeScript",
    priority: "high",
    status: "todo"
  }])
  return (
    <main className="bg-[#3c3c3c] h-screen text-white p-30">
      <h1 className="font-bold text-3xl text-center  pb-20 text-fuchsia-700">Lista de Tarefas</h1>
      <TaskList tasks={tasks}/>
    </main>
  )
}

export default TasksPage

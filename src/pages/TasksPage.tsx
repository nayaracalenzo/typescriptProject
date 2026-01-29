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

  const deleteTask = (id: number) => { setTasks(prevTasks => prevTasks.filter(task => task.id !== id)) }


  return (
    <div>
      <TaskList tasks={tasks} onDelete={deleteTask}/>
    </div>
  )
}

export default TasksPage

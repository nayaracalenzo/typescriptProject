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
    <div>
      <TaskList tasks={tasks}/>
    </div>
  )
}

export default TasksPage

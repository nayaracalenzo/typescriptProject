import { useState } from "react"
import TaskList from "../components/TaskList"
import type { ITask, StatusFilter } from "../type/type"

const TasksPage = () => {
  const [tasks] = useState<ITask[]>([
    {
      id: 1,
      title: "Estudar TypeScript",
      priority: "high",
      status: "todo"
    },
    {
      id: 2,
      title: "Praticar Javascript",
      priority: "medium",
      status: "done"
    }
  ])

  const [filter, setFilter] = useState<StatusFilter>("all")

  const filterTasks = tasks.filter(task => {
    if (filter === "all") return true
    return task.status === filter
  })

  return (
    <div>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value as StatusFilter)}
      >
        <option value="all">Todas</option>
        <option value="todo">Todo</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </select>
      <TaskList tasks={filterTasks} />
    </div>
  )
}

export default TasksPage

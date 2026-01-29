import type { TaskCardProps } from "../type/type"


const TaskCard = ({task}: TaskCardProps) => { 
  return (
    <div className="flex gap-30">
      <h2>{task.title}</h2>
      <span>{task.priority}</span>
      <span>{task.status}</span>
    </div>
  )
}

export default TaskCard

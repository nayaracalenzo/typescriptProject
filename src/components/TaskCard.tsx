import type { TaskCardProps } from "../type/type"


const TaskCard = ({task, onDelete}: TaskCardProps) => { 
  return (
    <div>
      <h2>{task.title}</h2>
      <span>{task.priority}</span>
      <span>{task.status}</span>
      <button onClick={() => onDelete(task.id!)}>Excluir</button>
    </div>
  )
}

export default TaskCard

import type { TaskProps } from "../type/type"
import TaskCard from "./TaskCard"



const TaskList = ({tasks, onDelete}: TaskProps) => {
  
  return (
    <div>
      {tasks.map((task)=> (
        <TaskCard key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default TaskList

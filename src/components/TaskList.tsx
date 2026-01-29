import type { TaskProps } from "../type/type"
import TaskCard from "./TaskCard"



const TaskList = ({tasks}: TaskProps) => {
  
  return (
    <div>
      {tasks.map((task)=> (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList

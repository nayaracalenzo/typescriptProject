import type { TaskProps } from "../type/type"
import TaskCard from "./TaskCard"



const TaskList = ({tasks}: TaskProps) => {
  
  return (
    <div className="h-full flex justify-center ">
      {tasks.map((task) => (
        <div className="flex flex-col">
          <TaskCard key={task.id} task={task} />
          <div className="w-full mt-3 block h-0.5 bg-linear-65 from-purple-500 to-pink-500" ></div>
        </div>
      ))}
    </div>
  );
}

export default TaskList

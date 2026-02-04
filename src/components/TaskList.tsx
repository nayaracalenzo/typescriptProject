import type { TaskProps } from "../type/type";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, onDelete, onUpdateTitle }: TaskProps) => {
  return (
    <div className="h-full flex justify-center flex-col">
      {tasks.map((task) => (
        <div key={task.id} className="flex flex-col">
          <TaskCard
            task={task}
            onDelete={onDelete}
            onUpdateTitle={onUpdateTitle}
          />

          <div className="w-full mt-3 block h-0.5 bg-linear-65 from-purple-500 to-pink-500" />
        </div>
      ))}
    </div>
  );
};

export default TaskList;


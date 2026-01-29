import { useState, type ChangeEvent, type FormEvent } from "react";
import TaskList from "../components/TaskList";
import type { ITask } from "../type/type";
import TaskForm from "../components/TaskForm";

const TasksPage = () => {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: 1,
      title: "Estudar TypeScript",
      priority: "high",
      status: "todo",
    },
  ]);

  return (
    <div>
      <TaskList tasks={tasks} />

      <TaskForm setTasks={setTasks} />
    </div>
  );
};

export default TasksPage;

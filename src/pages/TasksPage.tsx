import { useState } from "react";
import TaskList from "../components/TaskList";
import type { ITask, StatusFilter } from "../type/type";

const TasksPage = () => {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: 1,
      title: "Estudar TypeScript",
      priority: "high",
      status: "todo",
    },
    {
      id: 2,
      title: "Praticar Javascript",
      priority: "medium",
      status: "done",
    },
  ]);

  const [filter, setFilter] = useState<StatusFilter>("all");

  const filterTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    return task.status === filter;
  });
  const deleteTask = (id: number) => {
    console.log(id);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const updateTaskTitle = (id: number, newTitle: string) => {
  setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === id ? { ...task, title: newTitle } : task
    )
  );
};

  return (
    <main className="bg-[#3c3c3c] h-screen text-white p-30 px-50 my-auto">
      <div className="flex justify-between items-center w-full ">
        <h1 className="font-bold text-3xl pb-20 text-fuchsia-700">
          Lista de Tarefas
        </h1>
        <select
          className="bg-[#000] text-white rounded "
          value={filter}
          onChange={(e) => setFilter(e.target.value as StatusFilter)}
        >
          <option value="all">Todas</option>
          <option value="todo">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
      </div>
      <div className="">
        <TaskList tasks={filterTasks} onDelete={deleteTask} onUpdateTitle={updateTaskTitle} />
      </div>


      
    </main>
  );
};

export default TasksPage;

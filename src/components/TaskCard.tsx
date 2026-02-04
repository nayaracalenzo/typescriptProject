import { useState, type ChangeEvent } from "react";
import type { TaskCardProps } from "../type/type";

const TaskCard = ({ task, onDelete, onUpdateTitle }: TaskCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSave = () => {
    onUpdateTitle(task.id, title);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between mt-5 items-center">
      {isEditing ? (
        <input
          type="text"
          value={title}
          onChange={handleChange}
          className="bg-transparent border-b border-fuchsia-500 outline-none text-white"
        />
      ) : (
        <h2>{task.title}</h2>
      )}

      <span>{task.priority}</span>
      <span>{task.status}</span>

      <div className="flex gap-3">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="text-green-400 hover:underline"
          >
            Salvar
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-400 hover:underline"
          >
            Editar
          </button>
        )}

        <button
          onClick={() => onDelete(task.id)}
          className="text-red-400 hover:underline"
        >
          Excluir
        </button>
      </div>
    </div>
  );
};

export default TaskCard;

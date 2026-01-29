import { useState, type ChangeEvent, type FormEvent } from "react";
import type { ITask } from "../type/type";

interface TaskFormProps {
  // Esta é a tipagem correta para o set de um useState
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskForm = ({ setTasks }: TaskFormProps) => {
  const [formData, setFormData] = useState<ITask>({
    title: "",
    priority: "low",
    status: "todo",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Como estamos usando o set direto, usamos a versão funcional para pegar o estado anterior
    setTasks((prevTasks) => {
      const novoId =
        prevTasks.length > 0
          ? (prevTasks[prevTasks.length - 1].id || 0) + 1
          : 1;
      const novaTask = { ...formData, id: novoId };

      const listaAtualizada = [...prevTasks, novaTask];

      // Salva no localStorage aqui dentro também
      localStorage.setItem("tasks", JSON.stringify(listaAtualizada));

      return listaAtualizada;
    });

    setFormData({ title: "", priority: "low", status: "todo" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <select name="priority" value={formData.priority} onChange={handleChange}>
        <option value="low">Baixa</option>
        <option value="medium">Medium</option>
        <option value="high">Alta</option>
        <option value="praontem">Pra ontem</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TaskForm;



export type Priority = "low" | "medium"| "high" | "pra ontem";

export type Status = "todo" | "doing" | "done"

export type StatusFilter = Status | "all"

export interface TaskProps {
  tasks: ITask[];
  onDelete: (id: number) => void;
  onUpdateTitle: (id: number, newTitle: string) => void;
}

export interface TaskCardProps {
  task: ITask;
  onDelete: (id: number) => void;
  onUpdateTitle: (id: number, newTitle: string) => void;
}


export interface ITask {
  id: number;
  title: string;
  priority: Priority;
  status: Status;
}
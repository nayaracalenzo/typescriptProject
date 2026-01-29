export type Priority = "low" | "medium"| "high" | "pra ontem";

export type Status = "todo" | "doing" | "done"

export type StatusFilter = Status | "all"

export interface TaskProps {
  tasks: ITask[];
}

export interface TaskCardProps {
  task: ITask;
}

export interface ITask {
  id?: number;
  title: string;
  priority: Priority;
  status: Status;
}
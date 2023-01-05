import { Status } from "../components/createTask/enums/Status";

export type StatusLabel = Status.completed | Status.todo | Status.inProgress;
export interface ITaskCounter {
  value?: number;
  label?: StatusLabel;
  color?: string;
}

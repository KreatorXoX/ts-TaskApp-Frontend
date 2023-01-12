import { ITaskHeader } from "./ITaskHeader";
import { ITaskBody } from "./ITaskBody";
import { ITaskFooter } from "./ITaskFooter";
import { Priority } from "../components/createTask/enums/Priority";
import { StatusLabel } from "./ITaskCounter";

export type PriorityLabel = Priority.normal | Priority.low | Priority.high;
export interface ITask extends ITaskHeader, ITaskBody, ITaskFooter {
  id?: string;
  status?: StatusLabel | string;
  priority?: PriorityLabel | string;
}

import { Status } from "../components/createTask/enums/Status";
import { Priority } from "../components/createTask/enums/Priority";

export interface ITaskApi {
  id: string;
  title: string;
  description: string;
  status: `${Status}`;
  priority: `${Priority}`;
  date: Date;
}

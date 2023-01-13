import { Status } from "../components/createTask/enums/Status";

export interface ITaskCounter {
  value?: number;
  label?: `${Status}`;
  color?: string;
}

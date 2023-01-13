import { ITaskHeader } from "./ITaskHeader";
import { ITaskBody } from "./ITaskBody";
import { ITaskFooter } from "./ITaskFooter";
import { Priority } from "../components/createTask/enums/Priority";

export interface ITaskItem extends ITaskHeader, ITaskBody, ITaskFooter {
  priority?: `${Priority}`;
}

import React from "react";
import { Status } from "../components/createTask/enums/Status";

export interface ITaskFooter {
  id?: string;
  status?: `${Status}`;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  onStatusChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

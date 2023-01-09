import React from "react";

export interface ITaskFooter {
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  onStatusChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

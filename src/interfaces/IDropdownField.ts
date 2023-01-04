import { IDisabled } from "./IDisabled";
import { SelectChangeEvent } from "@mui/material";

export type selectObject = {
  label: string;
  value: string;
};
export interface IDropdownField extends IDisabled {
  onChange?: (e: SelectChangeEvent) => void;
  values?: selectObject[];
  defaultText?: string;
  label?: string;
  inputId?: string;
}

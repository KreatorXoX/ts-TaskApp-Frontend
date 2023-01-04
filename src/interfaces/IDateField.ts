import { Dayjs } from "dayjs";
import { IDisabled } from "./IDisabled";

export interface IDateField extends IDisabled {
  value?: Dayjs;
  onChange?: (date: Dayjs | null) => void;
}

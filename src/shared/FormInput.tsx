import React, { useReducer, useEffect } from "react";

import { Validators, validate } from "../utils/validators";
import { selectObject } from "../interfaces/IDropdownField";

import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  SelectChangeEvent,
  Select,
  FormHelperText,
} from "@mui/material";

type State = {
  value: string;
  isValid: boolean;
  isTouched: boolean;
};
type Action =
  | { type: "CHANGE"; val: string; validators: Validators[] }
  | { type: "TOUCH" };

const inputReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

type PropsFormInput = {
  initialValue?: string;
  initialValid?: boolean;
  type: string;
  id: string;
  name: string;
  label: string;
  value?: string;
  values?: selectObject[];
  row?: number;
  disabled?: boolean;
  defaultText?: string;
  errorText: string;
  validators: Validators[];
  onInputChange: (id: string, value: string, isValid: boolean) => void;
};

function FormInputs(props: PropsFormInput) {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isValid: props.initialValid || false,
    isTouched: false,
  });

  const { id, onInputChange } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInputChange(id, value, isValid);
  }, [id, value, isValid, onInputChange]);

  const changeHandler = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  let err = !inputState.isValid && inputState.isTouched;
  let component =
    props.type === "text" ? (
      <TextField
        id={props.id}
        name={props.name}
        label={props.label}
        size="small"
        onBlur={touchHandler}
        onChange={changeHandler}
        disabled={props.disabled}
        error={err}
        helperText={!err ? "" : props.errorText}
      />
    ) : props.type === "select" ? (
      <FormControl fullWidth size="small">
        <InputLabel id={`${props.label}-id`}>{props.label}</InputLabel>
        <Select
          labelId={`${props.label}-id`}
          id={props.id}
          name={props.name}
          value={props.initialValue}
          label={props.label}
          onBlur={touchHandler}
          onChange={changeHandler}
          disabled={props.disabled}
          size="small"
          error={err}
        >
          <MenuItem value="">
            <em>{props.defaultText}</em>
          </MenuItem>
          {props.values?.map((item: any) => (
            <MenuItem key={item.label} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
        {err && <FormHelperText error>{props.errorText}</FormHelperText>}
      </FormControl>
    ) : (
      <TextField
        id={props.id}
        name={props.name}
        label={props.label}
        multiline
        minRows={props.row ? props.row : 3}
        size="small"
        onBlur={touchHandler}
        onChange={changeHandler}
        disabled={props.disabled}
        helperText={!err ? "" : props.errorText}
        error={err}
      />
    );

  return component;
}

export default FormInputs;

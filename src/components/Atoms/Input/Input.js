import React from "react";
import { TextField } from "@material-ui/core";

const Input = props => {
  return (
    <TextField
      variant={props.variant}
      margin={props.margin}
      fullWidth={props.fullWidth}
      name={props.name}
      label={props.label}
      type={props.type}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      autoComplete={props.autoComplete}
      className={props.classes}
      maxLength={props.maxLength}
      required={props.required}
      autoFocus={props.autoFocus}
    />
  );
};

export default Input;

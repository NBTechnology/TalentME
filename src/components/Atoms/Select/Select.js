import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { default as Select } from "@material-ui/core/Select";

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 120
  },
  fullWidth: {
    width: "100%",
    marginTop: "16px",
    marginBottom: "8px"
  }
}));

const SelectComponent = props => {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  let items = props.items
    ? props.items.map(item => {
        return (
          <MenuItem key={item.id} value={item.value}>
            {item.label}
          </MenuItem>
        );
      })
    : null;
  let input;

  let variant = props.variant;

  switch (props.variant) {
    case "filled":
      input = (
        <FilledInput
          labelWidth={labelWidth}
          name={props.name}
          id={props.idInput}
        />
      );
      break;
    case "outlined":
      input = (
        <OutlinedInput
          labelWidth={labelWidth}
          name={props.name}
          id={props.idInput}
        />
      );
      break;
    default:
      variant = "outlined";
      input = (
        <OutlinedInput
          labelWidth={labelWidth}
          name={props.name}
          id={props.idInput}
        />
      );
      break;
  }
  return (
    <FormControl
      variant={variant}
      className={props.fullWidth ? classes.fullWidth : classes.formControl}
    >
      <InputLabel htmlFor={props.idInput} ref={inputLabel}>
        {props.labelInput}
      </InputLabel>
      <Select
        value={props.value}
        onChange={props.handleChange}
        input={input}
        disabled={props.disabled}
      >
        {items}
      </Select>
      {props.helperText && <FormHelperText>{props.helperText}</FormHelperText>}
    </FormControl>
  );
};

export default SelectComponent;

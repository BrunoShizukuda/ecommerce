import React from "react";
import { FunctionComponent, InputHTMLAttributes } from "react";
import { CustomInputContainer } from "./custom-input.styles";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

const CustomInput: FunctionComponent<CustomInputProps> = ({
  hasError,
  ...rest
}) => {
  return <CustomInputContainer error={hasError} {...rest} />;
};

export default CustomInput;

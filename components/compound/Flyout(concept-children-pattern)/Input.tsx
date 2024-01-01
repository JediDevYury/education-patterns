import {JSX} from "react";
import {FlyoutProps} from "./types";

type InputProps = Partial<FlyoutProps> & JSX.IntrinsicAttributes;

export const Input = ({value, setValue, toggle, ...props}: InputProps) => {
  return (
   <input
        value={value}
        onFocus={toggle}
        onBlur={toggle}
        {...props}
      />
  );
};

import {JSX, useContext} from "react";
import {FlyoutContext} from "@/contexts";

type InputProps = {} & JSX.IntrinsicAttributes;

export const Input = (props: InputProps) => {
  const {value, setValue, toggle} = useContext(FlyoutContext)

  return (
   <input
        value={value}
        onFocus={toggle}
        onBlur={toggle}
        {...props}
      />
  );
};

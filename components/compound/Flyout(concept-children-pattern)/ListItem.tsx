import {PropsWithChildren} from "react";
import {FlyoutProps} from "./types";

export const ListItem = ({children, value, setValue}: PropsWithChildren<Partial<Pick<FlyoutProps, 'value' | 'setValue'>>>) => {
  if(!value || !setValue) return null;

  return (
   <li onMouseDown={() => setValue(value)}>{children}</li>
  );
};

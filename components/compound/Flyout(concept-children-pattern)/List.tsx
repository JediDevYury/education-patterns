import {
  Children,
  cloneElement,
  PropsWithChildren,
  ReactElement
} from "react";
import {FlyoutProps} from "./types";

export const List = ({children, open, value, setValue}: PropsWithChildren<Partial<FlyoutProps>>) => {
  return open && Children.map(children, (child) =>
   cloneElement(child as ReactElement<FlyoutProps>, {value, setValue})
  )
};

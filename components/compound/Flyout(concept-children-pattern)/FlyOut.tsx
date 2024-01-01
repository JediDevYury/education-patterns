'use client'

import {
  Children,
  cloneElement, ComponentType,
  PropsWithChildren, ReactElement,
  useCallback,
  useState
} from "react";
import {Input} from "./Input";
import {List} from "./List";
import {ListItem} from "./ListItem";
import {FlyoutProps} from "./types";

export const FlyOut = (props: PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>("");
  const toggle = useCallback(() => setOpen((state) => !state), []);

  return (
   <div data-id="Flyout">
     {Children.map(props.children, (child) =>
      cloneElement(child as ReactElement<FlyoutProps>, { open, toggle, value, setValue })
     )}
   </div>
  );
};

FlyOut.Input = Input;
FlyOut.List = List;
FlyOut.ListItem = ListItem;

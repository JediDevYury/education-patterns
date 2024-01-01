'use client'

import {FlyoutContext} from "@/contexts";
import {PropsWithChildren, useCallback, useState} from "react";
import {Input} from "./Input";
import {List} from "./List";
import {ListItem} from "./ListItem";

export const FlyOut = (props: PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>("");
  const toggle = useCallback(() => setOpen((state) => !state), []);

  return (
   <FlyoutContext.Provider value={{
      open,
      toggle,
      value,
      setValue
   }}>
     <div>{props.children}</div>
   </FlyoutContext.Provider>
  );
};

FlyOut.Input = Input;
FlyOut.List = List;
FlyOut.ListItem = ListItem;

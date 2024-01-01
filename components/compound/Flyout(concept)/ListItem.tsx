import {PropsWithChildren, useContext} from "react";
import {FlyoutContext} from "@/contexts";

export const ListItem = ({children}: PropsWithChildren) => {
  const {setValue, value} = useContext(FlyoutContext)

  return (
   <li onMouseDown={() => setValue(value)}>{children}</li>
  );
};

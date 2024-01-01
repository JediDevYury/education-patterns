import {FlyoutContext} from "@/contexts";
import {PropsWithChildren, useContext} from "react";

export const List = ({children}: PropsWithChildren) => {
  const {open} = useContext(FlyoutContext)

  return open &&<ul>{children}</ul>;
};

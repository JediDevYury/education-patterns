import {FlyOut} from "./FlyOut";

export function FlyoutMenu() {
  return (
   <FlyOut>
     <FlyOut.Input />
     <FlyOut.List>
       <FlyOut.ListItem>San Francisco, CA</FlyOut.ListItem>
       <FlyOut.ListItem>Seattle, WA</FlyOut.ListItem>
     </FlyOut.List>
   </FlyOut>
  );
}

import React from 'react';

type TFlyOutContext = {
  open: boolean;
  toggle: () => void;
  value: string;
  setValue: (value: string) => void;
};

const FlyOutContext = React.createContext<TFlyOutContext | undefined>(undefined);

const useFlyOutContext = () => {
  const context = React.useContext(FlyOutContext);

  if(!context) {
    throw new Error('useFlyOutContext must be used within a FlyOutContextProvider');
  }

  return context;
};

function FlyOut(props: React.PropsWithChildren) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const toggle = React.useCallback(() => setOpen((state) => !state), []);

  return (
   <FlyOutContext.Provider value={{ open, toggle, value, setValue }}>
     <div className="flyout">{props.children}</div>
   </FlyOutContext.Provider>
  );
}

function Input(props: React.PropsWithChildren) {
  const { value, toggle, setValue } = useFlyOutContext();

  return (
   <input
    onFocus={toggle}
    onBlur={toggle}
    className="flyout-input"
    onChange={(e) => setValue(e.target.value)}
    {...props}
    value={value}
   />
  );
}

function List({ children }: React.PropsWithChildren) {
  const { open } = useFlyOutContext();

  return (
   open && (
    <div className="flyout-list">
      <ul>{children}</ul>
    </div>
   )
  );
}

function ListItem({ children, value }: React.PropsWithChildren<{
  value: TFlyOutContext['value'];
}>) {

  const { setValue } = useFlyOutContext()

  return (
   <li
    onMouseDown={() => {
      setValue(value);
    }}
    className="flyout-list-item"
   >
     {children}
   </li>
  );
}

FlyOut.Input = Input;
FlyOut.List = List;
FlyOut.ListItem = ListItem;

export { FlyOut };
//# sourceMappingURL=FlyOut.js.map

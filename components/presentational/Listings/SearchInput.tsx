import {Dispatch, SetStateAction} from "react";

type SearchInputProps = {
  toggle: () => void;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export const SearchInput = ({toggle, value, setValue, ...props}: SearchInputProps) => {
  return (
   <input
    onFocus={toggle}
    onBlur={toggle}
    className="flyout-input"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    placeholder="Enter an address, city ,or ZIP code"
    {...props}
   />
  );
};

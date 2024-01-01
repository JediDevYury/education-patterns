'use client';
import {useCallback, useState} from "react";
import {SearchInput, SearchMenu, TListing} from "@/components/presentational";

type SearchProps = {
  listings: TListing[];
};

export function Search(props: SearchProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const toggle = useCallback(() => setOpen((state) => !state), []);

  return (
   <div className="flyout">
     <SearchInput toggle={toggle} value={value} setValue={setValue} />
     {open && <SearchMenu listings={props.listings} setValue={setValue} />}
   </div>
  );
}

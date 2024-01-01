import {Dispatch, SetStateAction} from "react";
import {TListing} from "@/components/presentational";

type SearchMenuProps = {
  listings: TListing[];
  setValue: Dispatch<SetStateAction<string>>;
};
export const SearchMenu = ({listings, setValue}: SearchMenuProps) => {
  return (
   <div className="flyout-list">
     <ul>
       {listings.map((listing) => (
        <li
         key={listing.id}
         onMouseDown={() => {
           setValue(listing.name);
         }}
         className="flyout-list-item"
        >
          {listing.name}
        </li>
       ))}
     </ul>
   </div>
  )
};

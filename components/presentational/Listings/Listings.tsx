"use client";
import { ListingsGrid, Search } from '@/components/container';
import { TListing, Listing } from "@/components/presentational";
import withLoader from "@/HOCs/withLoader";
import {FlyOut} from "@/components/compound";

type ListingsComponentProps = {
  listings: TListing[]
}

export const Listings = (props: ListingsComponentProps) => {
  return (
   <>
     <FlyOut>
       <FlyOut.Input />
       <FlyOut.List>
         {props.listings.map((listing) => (
          <FlyOut.ListItem value={listing.name}>{listing.name}</FlyOut.ListItem>
         ))}
       </FlyOut.List>
     </FlyOut>
     <ListingsGrid>
     {props.listings.map((listing) => (
      <Listing key={listing.id} listing={listing} />
     ))}
    </ListingsGrid>
   </>
  );
}

export default withLoader(
 Listings,
 'https://house-lydiahallie.vercel.app/api/listings'
);

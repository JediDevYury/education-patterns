"use client"

import {type TListing} from "@/components/presentational";
import {Listings} from "@/components/presentational/Listings/Listings";
import {useEffect, useState} from "react";

export default function ListingsContainerComponent() {
  const [data, setData] = useState<{listings: TListing[]}>();

  useEffect(() => {
    fetch('https://house-lydiahallie.vercel.app/api/listings')
     .then((res) => res.json())
     .then((res) => setData(res));
  }, []);

  if (!data) return null;

  return <Listings listings={data.listings}/>
}

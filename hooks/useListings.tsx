"use client";
import {useEffect, useState} from "react";

export function useListings() {
  const [listings, setListings] = useState(null);

  useEffect(() => {
    fetch('https://house-lydiahallie.vercel.app/api/listings')
     .then((res) => res.json())
     .then((res) => setListings(res.listings));
  }, []);

  return listings;
}

"use client"

import {ReactNode, JSX} from 'react';
import useSWR from 'swr'
import { LoadingSpinner } from '@/components/presentational';
import {TListing} from "@/components/presentational/Listings";

export default function withLoader<TProps>(Element: (props: TProps) => ReactNode, url: string) {
  return (props: Omit<TProps, 'listings'>) => {

    /* Add logic to:
    1. Fetch data from the url that was passed as an argument.
    2. Show the <LoadingSpinner /> while the  data is being fetched.
    3. Pass the fetched data to the wrapped component.
    */
    const { data, error, isLoading } = useSWR<{
      listings: TListing[]
    }>(url, (url: string) =>
     fetch(url).then((response) => response.json())
    );

    if (isLoading) return <LoadingSpinner/>

    if(error) {
      throw new Error("Something went wrong!")
    }

    if(!data) return null

    return <Element {...(props as TProps & JSX.IntrinsicAttributes)} listings={data.listings} />;
  };
}

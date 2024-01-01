"use client";

import React, {Suspense} from 'react';
import {Card1} from "@/components/presentational";

type DynamicCardProps = {
  name: string;
  component: React.ComponentType<any>;
};

export function DynamicCard(props: DynamicCardProps) {
  const [open, toggle] = React.useReducer((s) => !s, false);
  const Component = props.component;

  return (
   <Suspense fallback={<p id="loading">Loading...</p>}>
     {open ? (
      <Component>
        <p>Card2</p>
      </Component>
     ) : (
      <Card1 rendered={false} onClick={toggle}>
        <p>
          Click here to dynamically import <code>{props.name}</code> component
        </p>
      </Card1>
     )}
   </Suspense>
  );
}

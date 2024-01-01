"use client";

import {createContext} from "react";

export type FlyoutContextType = {
  open: boolean;
  toggle: () => void;
  value: string;
  setValue: (value: string) => void;
};

const defaultValue: FlyoutContextType = {
  open: false,
  toggle: () => {},
  value: "",
  setValue: () => {}
}

export const FlyoutContext = createContext<FlyoutContextType>(defaultValue);

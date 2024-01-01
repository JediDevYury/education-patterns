"use client"

import {PropsWithChildren, useState} from "react";
import {ThemeContext} from '@/contexts'

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState("light");

  return (
   <ThemeContext.Provider value={{ theme, setTheme }}>
     {children}
   </ThemeContext.Provider>
  );
}

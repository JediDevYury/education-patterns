"use client"

import {PropsWithChildren} from 'react';
import {useThemeContext} from "@/hooks";

export const ListingsGrid = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useThemeContext();

  return (
   <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      maxWidth: 'max-content',
      gap: "2rem",
      backgroundColor: theme === "light" ? "#fff" : "#000",
    }}
   >
     {children}
   </div>
  );
};

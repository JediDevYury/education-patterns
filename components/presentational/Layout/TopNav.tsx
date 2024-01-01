"use client"

import {useThemeContext} from "@/hooks";

import {Toggle} from "@/components/presentational";

export const TopNav = () => {
  const [theme] = useThemeContext();

  return (
   <nav style={{ backgroundColor: theme === "light" ? "#fff" : "#000 " }}>
     <h1 style={{ color: theme === "light" ? "#000" : "#fff" }}>Logo</h1>
     <Toggle />
   </nav>
  );
};

import {useContext} from "react";
import {ThemeContext} from "@/contexts";

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if(!context) {
    throw new Error("Context value is empty!")
  }

  const {theme, setTheme} = context;

  return [theme, setTheme] as const;
}

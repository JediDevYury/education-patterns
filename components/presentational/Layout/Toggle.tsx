import {useThemeContext} from "@/hooks";

export const Toggle = () => {
  const [ theme, setTheme ] = useThemeContext();
  return (
   <button
    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    style={{
      backgroundColor: theme === "light" ? "#fff" : "#000",
      color: theme === "light" ? "#000" : "#fff",
    }}
   >
     Use {theme === "light" ? "Dark" : "Light"} Theme
   </button>
  );
};

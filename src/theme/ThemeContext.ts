import { createContext } from "react";

export type TTheme = "light" | "dark";

export interface ThemeContextProps {
    theme?: TTheme;
    setTheme?: (theme: TTheme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";
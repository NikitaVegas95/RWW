import React, {useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, ThemeContext, TTheme} from "./ThemeContext";

export interface ThemeProviderProps {
    children: React.ReactNode;
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as TTheme || 'light';

function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<TTheme>(defaultTheme);

    const defaultProps = useMemo(() => {
        return {
            theme: theme,
            setTheme: setTheme
        }
    }, [theme]);

    return (
        <div>
            <ThemeContext.Provider value={defaultProps}>
                {children}
            </ThemeContext.Provider>
        </div>
    );
}

export default ThemeProvider;
import {LOCAL_STORAGE_THEME_KEY, ThemeContext, TTheme} from "./ThemeContext";
import {useContext} from "react";

interface IThemeResult {
    changeTheme: () => void;
    theme: TTheme;
}


function useTheme():IThemeResult {

    const {theme, setTheme} = useContext(ThemeContext);

    const changeTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {
        changeTheme,
        theme,
    };
}

export default useTheme;
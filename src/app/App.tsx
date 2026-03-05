import './styles/index.scss'
import {Routes, Route, Link} from "react-router-dom";
import {Suspense} from "react";
import classNames from "@shared/lib/classNames/classNames";
import {useTheme} from "./providers/ThemeProvider";
import {AboutPage} from "@pages/AboutPage";
import {MainPage} from "@pages/MainPage";

export function App () {
    const { theme, changeTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={changeTheme}>Change theme</button>
            <Link to='/about'>
                AboutPage
            </Link>
            <Link to='/'>
                MainPage
            </Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />}/>
                    <Route path={'/'} element={<MainPage />}/>
                </Routes>
            </Suspense>
        </div>
    )
}
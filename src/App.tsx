import './styles/index.scss'
import {Routes, Route, Link} from "react-router-dom";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {Suspense} from "react";
import useTheme from "./theme/useTheme";

export function App () {
    const { theme, changeTheme } = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button onClick={changeTheme}>Change theme</button>
            <Link to='/about'>
                AboutPage
            </Link>
            <Link to='/'>
                MainPage
            </Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageLazy />}/>
                    <Route path={'/'} element={<MainPageLazy />}/>
                </Routes>
            </Suspense>
        </div>
    )
}
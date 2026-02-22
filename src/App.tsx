import styles from './index.module.scss';
import './global.scss'
import {Routes, Route, Link} from "react-router-dom";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {Suspense} from "react";

export function App () {

    return (
        <div className={styles.div}>
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
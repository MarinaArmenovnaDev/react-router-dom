import styles from "./components/Site.module.css";
import {Navigate, Route, Routes} from "react-router-dom";
import {PageOne} from "./components/pages/PageOne.tsx";
import {PageTwo} from "./components/pages/PageTwo.tsx";
import {PageThree} from "./components/pages/PageThree.tsx";
import {Error404} from "./components/pages/Error404.tsx";
import {Menu, ShoppingCart} from "lucide-react";
import logo
    from "./assets/images/png-transparent-infinity-symbol-logo-sticker-others-miscellaneous-text-logo-removebg-preview 1.png"


export const App = () => {
    return (
        <div>
            <div className={styles.header}>
                <div>
                    <img src={logo} alt=""/>
                </div>

                <div className={styles.navLink}>
                    <a href={"/"}>home</a>
                    <a href={"/"}>collection</a>
                    <a href={"/"}>about</a>
                    <a href={"/"}>contact</a>
                </div>

                <div className={styles.iconGroup}>
                    <ShoppingCart size={50} color="#7a7a7a" strokeWidth={0.7} className={styles.headerIcons} />
                    <Menu size={50} color="#7a7a7a" strokeWidth={0.7} className={styles.headerIcons}   />
                </div>


            </div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    Здесь будет навигация
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Navigate to={"/adidas"}/>}/>

                        <Route path="/adidas" element={<PageOne/>}/>
                        <Route path="/puma" element={<PageTwo/>}/>
                        <Route path="/abibas" element={<PageThree/>}/>

                        <Route path="/error404" element={<Error404/>}/>
                        <Route path="/*" element={<Navigate to={"/error404"}/>}/>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

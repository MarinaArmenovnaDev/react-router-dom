import styles from "./components/Site.module.css";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Adidas} from "./components/pages/Adidas/Adidas.tsx";
import {Puma} from "./components/pages/Puma/Puma.tsx";
import {Nike} from "./components/pages/Nike/Nike.tsx";
import {Error404} from "./components/pages/Error/Error404.tsx";
import {Menu, ShoppingCart} from "lucide-react";
import logo
    from "./assets/images/png-transparent-infinity-symbol-logo-sticker-others-miscellaneous-text-logo-removebg-preview 1.png"
import {Model} from "./components/Model/Model.tsx";


const PATH = {
    ADIDAS: "/adidas",
    PUMA: "/puma",
    NIKE: "/nike",
    ERROR: "/*",
    MODEL: "/:brand/:id",
}as const;

export type Item = {
    id: number;
    model: string;
    collection: string;
    price: string;
    picture: string;
}

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
                    <ShoppingCart size={50} color="#7a7a7a" strokeWidth={0.7} className={styles.headerIcons}/>
                    <Menu size={50} color="#7a7a7a" strokeWidth={0.7} className={styles.headerIcons}/>
                </div>


            </div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <NavLink to={PATH.ADIDAS}
                             className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}> ADIDAS</NavLink>
                    <NavLink to={PATH.PUMA}
                             className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}> PUMA</NavLink>
                    <NavLink to={PATH.NIKE}
                             className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}> NIKE</NavLink>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Navigate to={PATH.ADIDAS}/>}/>

                        <Route path={PATH.ADIDAS} element={<Adidas/>}/>
                        <Route path={PATH.PUMA} element={<Puma/>}/>
                        <Route path={PATH.NIKE} element={<Nike/>}/>
                        <Route path={PATH.ERROR} element={<Error404/>}/>
                        <Route path={PATH.MODEL} element={<Model/>}/>


                        {/*<Route path={PATH.ERROR} element={<Error404/>}/>*/}
                        {/*<Route path="/*" element={<Navigate to={PATH.ERROR}/>}/>*/}

                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

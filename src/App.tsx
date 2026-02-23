import styles from "./components/Site.module.css";
import {NavLink, Outlet} from "react-router-dom";
import {Menu, ShoppingCart} from "lucide-react";
import logo
    from "./assets/images/png-transparent-infinity-symbol-logo-sticker-others-miscellaneous-text-logo-removebg-preview 1.png"
import {PATH} from "./Route/Router.tsx";

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
                    <NavLink to={PATH.PRICES}
                             className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}> PRICES FOR SELLERS</NavLink>
                    <NavLink to={PATH.PROTECTED_PAGE}
                             className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}> PROTECTED PAGE</NavLink>
                </div>
                <div className={styles.content}>
                    <Outlet/>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

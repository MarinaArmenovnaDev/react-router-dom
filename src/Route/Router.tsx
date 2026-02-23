import {createBrowserRouter, Navigate, Outlet, type RouteObject} from "react-router-dom";
import {App} from "../App.tsx";
import {Error404} from "../components/pages/Error/Error404.tsx";
import {Adidas} from "../components/pages/Adidas/Adidas.tsx";
import {Puma} from "../components/pages/Puma/Puma.tsx";
import {Nike} from "../components/pages/Nike/Nike.tsx";
import {Prices} from "../components/Prices/Prices.tsx";
import {Model} from "../components/Model/Model.tsx";
import {ProtectedPage} from "../components/pages/ProtectedPage/ProtectedPage.tsx";
import {Login} from "../components/pages/Login/Login.tsx";


export const PATH = {
    ADIDAS: "/adidas",
    PUMA: "/puma",
    NIKE: "/nike",
    ERROR: "/error",
    MODEL: "/:brand/:id",
    PRICES: "/prices",
    PROTECTED_PAGE: "/protectedPage",
    LOGIN: "/login",
} as const;

const publicRoutes: RouteObject[] = [
    {
        path: PATH.ADIDAS,
        element: <Adidas/>,
    },
    {
        path: PATH.PUMA,
        element: <Puma/>,
    }, {
        path: PATH.NIKE,
        element: <Nike/>

    }, {
        path: PATH.PRICES,
        element: <Prices/>

    },
    {
        path: PATH.MODEL,
        element: <Model/>

    },
    {
        path: PATH.ERROR,
        element: <Error404/>

    },
    {
        path: PATH.LOGIN,
        element: <Login/>
    },
]
const privateRoutes: RouteObject[] = [
    {
        path: PATH.PROTECTED_PAGE,
        element: <ProtectedPage/>
    },
]

export const PrivateRoutes = () => {
    const isAuth = false
    return (
        isAuth ? <Outlet/> : <Navigate to={PATH.LOGIN}/>
    )
}

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Navigate to={PATH.ERROR}/>,
        children: [
            {
                element: <PrivateRoutes/>,
                children: privateRoutes
            },
            ...publicRoutes,
        ]
    }
])

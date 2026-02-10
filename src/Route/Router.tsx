import {createBrowserRouter} from "react-router-dom";
import {App} from "../App.tsx";
import {Error404} from "../components/pages/Error/Error404.tsx";
import {Adidas} from "../components/pages/Adidas/Adidas.tsx";
import {Puma} from "../components/pages/Puma/Puma.tsx";
import {Nike} from "../components/pages/Nike/Nike.tsx";
import {Prices} from "../components/Prices/Prices.tsx";
import {Model} from "../components/Model/Model.tsx";
import {ProtectedPage} from "../components/pages/ProtectedPage/ProtectedPage.tsx";
import {ProtectedRoute} from "./ProtectedRoute.tsx";


export const PATH = {
    ADIDAS: "/adidas",
    PUMA: "/puma",
    NIKE: "/nike",
    ERROR: "/*",
    MODEL: "/:brand/:id",
    PRICES: "/prices",
    PROTECTED_PAGE: "/protectedPage",
} as const;

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error404/>,
        children: [
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
                path: PATH.PROTECTED_PAGE,
                element: <ProtectedRoute children={<ProtectedPage/>}/>
            },
        ]
    },
])

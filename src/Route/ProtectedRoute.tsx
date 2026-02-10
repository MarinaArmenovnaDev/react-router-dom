import {type ReactNode} from "react";
import {Error404} from "../components/pages/Error/Error404.tsx";

type Props = {
    children: ReactNode;
}
export const ProtectedRoute = ({children}: Props) => {
  const valid = true
    return (
        valid ? children : <Error404/>
    )
}

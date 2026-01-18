import { adidasArr } from "../pages/Adidas/Adidas.tsx";
import { pumaArr } from "../pages/Puma/Puma.tsx";
import { nikeArr } from "../pages/Nike/Nike.tsx";
import { useParams } from "react-router-dom";
import type {Item} from "../../App.tsx";
import s from "./Model.module.css"

export const Model = () => {
    const params = useParams();
    const brand = params.brand as 'adidas' | 'puma' | 'nike';
    const itemId = params.id ? parseInt(params.id) : -1;

    let items: Item[] ;

    switch(brand) {
        case 'adidas':
            items = adidasArr;
            break;
        case 'puma':
            items = pumaArr;
            break;
        case 'nike':
            items = nikeArr;
            break;
        default:
            items = [];
    }

    const item = items.find(el => el.id === itemId);

    if (!item) {
        return <div>Товар не найден</div>;
    }

    return (
        <div className={s.container}>
            <div className={s.description}>
                <h2>{item.model}</h2>
                <p>{item.collection}</p>
                <p className={s.price}>{item.price}</p>
            </div>

            <img src={item.picture} alt={item.model} className={s.img}/>
        </div>
    );
};

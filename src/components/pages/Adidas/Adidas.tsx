import adidas1 from "../../../assets/images/1pm1haei11we1wvk.webp"
import adidas2 from "../../../assets/images/8ktmvbpeds4b5n1x.webp"
import adidas3 from "../../../assets/images/ftr9djjt08l05sry.webp"
import s from "./../../Site.module.css"
import {Link} from "react-router-dom";
import type {Item} from "../../../App.tsx";


export const adidasArr: Item[] = [
    {
        id: 1,
        model: 'ADIDAS ADIFOM TRXN',
        collection: 'new collection1',
        price: '200$',
        picture: adidas1,

    },
    {
        id: 2,
        model: 'ADIDAS ADIFOM SUPER',
        collection: 'new collection22',
        price: '300$',
        picture: adidas2
    },
    {
        id: 3,
        model: 'ADIDAS SUPER SUPERSKI',
        collection: 'new collection333',
        price: '350$',
        picture: adidas3
    }
]
export const Adidas = () => {
    return (
        <div>
            <h2> ADIDAS</h2>
            <div className={s.imagesWrapper}>
                {adidasArr.map((el) => {
                    return (
                        <Link key={el.id} to={`/adidas/${el.id}`}>
                            <img src={el.picture} alt="" className={s.img}/>
                        </Link>

                    )
                })}
            </div>
            <p>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                to using 'Content here,
                content here', making it look like readable English. Many desktop publishing packages and web page
                editors now use Lorem Ipsum
                as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                infancy. Various versions
                have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                Where does it come from?
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                Virginia, looked up one of the
                more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                word in classical literature,
                discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum"
                (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the
                Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
        </div>
    );
};

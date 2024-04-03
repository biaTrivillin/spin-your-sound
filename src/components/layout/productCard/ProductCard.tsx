import styles from "./ProductCard.module.css";
import { useState } from "react";
import PropTypes from "prop-types";

function ProductCard (props: Props) {

    const [showRecordStyle, setShowRecordStyle] = useState("");
    const [textStyle, setTextStyle] = useState("");


    const showRecord = () => {
        setShowRecordStyle(styles.show);
        setTextStyle(styles.change_text);
    };

    const hideRecord = () => {
        setShowRecordStyle(styles.hide);
        setTextStyle(styles.unchange_text);
    };


    return (
        <article onMouseOver={showRecord} onMouseLeave={hideRecord} className={styles.card}>
            <div className={`${styles.img_container} ${showRecordStyle}`}>
                <div>
                    <img src="https://ffw.uol.com.br/app/uploads/noticias/2017/02/capa-art-record-covers.jpg"/>
                </div>
            </div>
            <div className={styles.text_container}>
                <h2 className={textStyle}>{props.title}</h2>
                <h3 className={textStyle}>{props.artist}</h3>
                <h4>U$ {props.price}</h4>
            </div>
        </article>
    );
}

export default ProductCard;

ProductCard.propTypes = {
    title: PropTypes.string,
    artist: PropTypes.string,
    price: PropTypes.number,
};

type Props = {
    title: string,
    artist: string,
    price: number,
}

// type Record = {
//     id: number;
//     title: string;
//     artist: string,
//     release_year: number,
//     price_usd: number,
//     genre: string,
//     condition: string,
//     rating: number,
//     image: string
// }
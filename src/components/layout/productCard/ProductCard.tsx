import styles from "./ProductCard.module.css";
import { useState } from "react";

function ProductCard () {

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
                    <img/>
                </div>
            </div>
            <div className={styles.text_container}>
                <h2 className={textStyle}>Nome do disco</h2>
                <h3 className={textStyle}>Artista da Silva</h3>
                <h4>U$ 00,00</h4>
            </div>
        </article>
    );
}

export default ProductCard;
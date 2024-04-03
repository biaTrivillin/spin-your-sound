import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import styles from "./Product.module.css";

function Product() {
    return(
        <section className={styles.product_section}>
            <div className={styles.img_container}>
                <div>
                    <img src="https://ffw.uol.com.br/app/uploads/noticias/2017/02/capa-art-record-covers.jpg"/>
                </div>
            </div>
            <div className={styles.text_container}>
                <div className={styles.text}>
                    <h1>Nome do Disco</h1>
                    <div className={styles.stars_container}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                        <FaRegStar />
                    </div>
                    <h2>U$ 00.00</h2>
                </div>
                <div className={styles.text}>
                    <h3><strong>artist: </strong>Artista da Silva</h3>        
                    <h3><strong>realease year: </strong>1987</h3>        
                    <h3><strong>condition: </strong>new</h3>        
                </div>
            </div>
        </section>
    );
}

export default Product;
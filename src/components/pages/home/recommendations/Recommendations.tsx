import ProductCard from "../../../layout/productCard/ProductCard";
import styles from "./Recommendations.module.css";

function Recommendations() {
    return(
        <section className={styles.banner}>
            <h1>RECOMMENDATIONS</h1>
            <div className={styles.card_container}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </section>
    );
}

export default Recommendations;
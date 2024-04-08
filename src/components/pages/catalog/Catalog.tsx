import ProductsSection from "./productsSection/ProductsSection";
import FilterSideBar from "./filterSideBar/FilterSideBar";
import styles from "./Catalog.module.css";

function Catalog() {
    return(
        <main>
            <div className={styles.catalog}>
                <div>
                    <FilterSideBar/>
                </div>
                <div className={styles.products}>
                    <h1 className={styles.title}>FULL CATALOG</h1>
                    <ProductsSection/>
                </div>
            </div>
        </main>
    );
}

export default Catalog;
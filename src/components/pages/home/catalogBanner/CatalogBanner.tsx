import styles from "./CatalogBanner.module.css";
import catalogBannerImg from "../../../../assets/catalog-banner.png";

function CatalogBanner() {
    return(
        <article className={styles.banner}>
            <div className={styles.text}>
                <h1>Don&apos;t miss a single note!</h1>
                <p>Explore our complete catalog now</p>
                <button>KNOW MORE</button>
            </div>
            <img src={catalogBannerImg} />
        </article>
    );
}

export default CatalogBanner;
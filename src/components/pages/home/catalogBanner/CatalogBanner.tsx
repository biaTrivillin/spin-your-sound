import styles from "./CatalogBanner.module.css";
import catalogBannerImg from "../../../../assets/catalog-banner.png";
import { useNavigate } from "react-router-dom";

function CatalogBanner() {

    const navigate = useNavigate();

    const redirectToCatalog = () =>{
        navigate("/catalog");
    };


    return(
        <article className={styles.banner}>
            <div className={styles.text}>
                <h1>Don&apos;t miss a single note!</h1>
                <p>Explore our complete catalog now</p>
                <button onClick={redirectToCatalog}>KNOW MORE</button>
            </div>
            <img src={catalogBannerImg} />
        </article>
    );
}

export default CatalogBanner;
import Presentation from "./presentation/Presentation";
import BannerCarousel from "./bannerCarousel/BannerCarousel";
import FilterCards from "./filterCards/FilterCards";
import CatalogBanner from "./catalogBanner/CatalogBanner";
import BenefitsBanner from "./benefitsBanner/BenefitsBanner";
import Recommendations from "./recommendations/Recommendations";
import styles from "./Home.module.css";

function Home() {

    return (
        <main className={styles.content_container}>
            <Presentation/>
            <BannerCarousel/>
            <FilterCards/>
            <CatalogBanner/>
            <Recommendations/>
            <BenefitsBanner/>
        </main>
    );
}

export default Home;

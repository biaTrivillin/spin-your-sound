import Presentation from "./presentation/Presentation";
import BannerCarousel from "./bannerCarousel/BannerCarousel";
import FilterCards from "./filterCards/FilterCards";
import CatalogBanner from "./catalogBanner/CatalogBanner";
import BenefitsBanner from "./benefitsBanner/BenefitsBanner";
import Recommendations from "./recommendations/Recommendations";

function Home() {

    return (
        <>
            <Presentation/>
            <BannerCarousel/>
            <FilterCards/>
            <CatalogBanner/>
            <Recommendations/>
            <BenefitsBanner/>
        </>
    );
}

export default Home;

import Presentation from "./presentation/Presentation";
import BannerCarousel from "./bannerCarousel/BannerCarousel";
import FilterCards from "./filterCards/FilterCards";
import CatalogBanner from "./catalogBanner/CatalogBanner";
import ProductCard from "../../layout/productCard/ProductCard";
import BenefitsBanner from "./benefitsBanner/BenefitsBanner";

function Home() {

    return (
        <>
            <Presentation/>
            <BannerCarousel/>
            <FilterCards/>
            <CatalogBanner/>
            <ProductCard/>
            <BenefitsBanner/>
        </>
    );
}

export default Home;

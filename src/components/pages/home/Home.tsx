import Presentation from "./presentation/Presentation";
import BannerCarousel from "./bannerCarousel/BannerCarousel";
import FilterCards from "./filterCards/FilterCards";
import CatalogBanner from "./catalogBanner/CatalogBanner";
import ProductCard from "../../layout/productCard/ProductCard";

function Home() {

    return (
        <>
            <Presentation/>
            <BannerCarousel/>
            <FilterCards/>
            <CatalogBanner/>
            <ProductCard/>
        </>
    );
}

export default Home;

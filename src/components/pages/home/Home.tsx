import Presentation from "./presentation/Presentation";
import BannerCarousel from "./bannerCarousel/BannerCarousel";
import FilterCards from "./filterCards/FilterCards";
import CatalogBanner from "./catalogBanner/CatalogBanner";

function Home() {

    return (
        <>
            <Presentation/>
            <BannerCarousel/>
            <FilterCards/>
            <CatalogBanner/>
        </>
    );
}

export default Home;

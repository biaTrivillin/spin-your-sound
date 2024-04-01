import Presentation from "./presentation/Presentation";
import Banner from "./banner/Banner";
import FilterCards from "./filterCards/FilterCards";
import CatalogBanner from "./catalogBanner/CatalogBanner";

function Home() {

    return (
        <>
            <Presentation/>
            <Banner/>
            <FilterCards/>
            <CatalogBanner/>
        </>
    );
}

export default Home;

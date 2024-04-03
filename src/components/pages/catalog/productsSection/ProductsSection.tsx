import { useState, useEffect } from "react";
import Record from "../../../../types/Record";
import axios from "axios";
import ProductCard from "../../../layout/productCard/ProductCard";

function ProductsSection() {
    const [data, setData] = useState<Record[]>([]);

    const url = "http://localhost:3000/";

    useEffect(() => {
        axios.get(url)
            .then(response => setData(response.data));

    }, []);
    
    return(
        <>
            {data.map((item) => (
                <div key={item.id}>
                    <ProductCard title={item.title} artist={item.artist} price={item.price_usd}/>
                </div>
            ))}
        </>
    );
}

export default ProductsSection;
import { useState, useEffect } from "react";
import Record from "../../../../types/Record";
import axios from "axios";
import ProductCard from "../../../layout/productCard/ProductCard";
import { useNavigate } from "react-router-dom";
import styles from "./ProductsSection.module.css";

function ProductsSection() {
    const [data, setData] = useState<Record[]>([]);

    const url = "http://localhost:3000/";

    useEffect(() => {
        axios.get(url)
            .then(response => setData(response.data));

    }, []);

    const navigate = useNavigate();

    const redirectToProduct = (id: number) => {
        navigate(`/product/${id}`);
        location.reload();
    };
    
    return(
        <section className={styles.products}>
            {data.map((item) => (
                <div onClick={() => redirectToProduct(item.id)} key={item.id}>
                    <ProductCard title={item.title} artist={item.artist} price={item.price_usd}/>
                </div>
            ))}
        </section>
    );
}

export default ProductsSection;
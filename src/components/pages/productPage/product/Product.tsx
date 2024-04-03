import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import styles from "./Product.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Product() {

    const [data, setData] = useState<Record[]>([]);

    const url = "http://localhost:3000/findById?id=";

    const { id } = useParams();

    useEffect(() => {
        axios.get(`${url}${id}`)
            .then(response => setData(response.data));

    }, []);

    return(
        <>
            {data.map((item) => (
                <section key={item.id} className={styles.product_section}>
                    <div className={styles.img_container}>
                        <div>
                            <img src="https://ffw.uol.com.br/app/uploads/noticias/2017/02/capa-art-record-covers.jpg"/>
                        </div>
                    </div>
                    <div className={styles.text_container}>
                        <div className={styles.text}>
                            <h1>{item.title}</h1>
                            <div className={styles.stars_container}>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <h2>U$ {item.price_usd}</h2>
                        </div>
                        <div className={styles.text}>
                            <h3><strong>artist: </strong>{item.artist}</h3>        
                            <h3><strong>realease year: </strong>{item.release_year}</h3>        
                            <h3><strong>condition: </strong>{item.condition}</h3>        
                        </div>
                    </div>
                </section> 
            ))}
        </>
    );
}

export default Product;

type Record = {
    id: number;
    title: string;
    artist: string,
    release_year: number,
    price_usd: number,
    genre: string,
    condition: string,
    rating: number,
    image: string
}
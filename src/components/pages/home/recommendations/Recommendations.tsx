// import { useSetRecoilState } from "recoil";
import axios from "axios";
import ProductCard from "../../../layout/productCard/ProductCard";
import styles from "./Recommendations.module.css";
import { useEffect, useState } from "react";
// import style from "../../../layout/productCard/ProductCard.module.css";
// import { cardList } from "../../../../state/atom";
import { useNavigate } from "react-router-dom";

function Recommendations() {

    const [data, setData] = useState<Record[]>([]);
    const [cardsData, setCardsData] = useState<Record[]>([]);

    const url = "http://localhost:3000/";

    const filteredData: Record[] = [];

    // async function getAllRecords () {
    //     const response = await fetch(url);

    //     const data: Record[] = await response.json();


    //     // console.log(data);



    //     for (let i = 0; i < numbers.length; i++) {

    //         filteredData.push(data.filter((item) => item.id == numbers[i])[0]);
            

    //         // setData(filteredData)
                            
    //     }
                                
        
    //     // console.log(filteredData);

        
    // }
  
    const numbers: number[] = [];

    let cardsNumber: number = 3;

    window.innerWidth > 700 ? cardsNumber = 4 : cardsNumber = 3;

    for (let i = 0; i < cardsNumber; i++) {
        const number = Math.floor(Math.random() * 20 + 1);
        if(!numbers.find((item) => item === number)) {
            numbers.push(number);
        } else i--;
    }

    


    useEffect(() => {
        // getAllRecords();
        axios.get(url)
            .then(response => setData(response.data));

    }, []);

    useEffect(() => {
        for (let i = 0; i < numbers.length; i++) {

            filteredData.push(data.filter((item) => item.id == numbers[i])[0]);
                                    
        }
                                        
                
        console.log(cardsData);
        setCardsData(filteredData);

    }, [data]);

    

    const gagagag: Record[] = [
        {
            id: 1,
            title: "dgewfuhw",
            artist: "cwhcwcw",
            release_year: 5,
            price_usd: 22.20,
            genre: "string",
            condition: "string",
            rating: 5,
            image: "string"
        },
        {
            id: 2,
            title: "ndfjw",
            artist: "fjwjcdcf",
            release_year: 34,
            price_usd: 86.50,
            genre: "sfjdvjs",
            condition: "sfjdvjs",
            rating: 312,
            image: "sfjdvjs"
        },
        {
            id: 3,
            title: "vjsjfnv",
            artist: "fheaufha",
            release_year: 54,
            price_usd: 10.03,
            genre: "string",
            condition: "string",
            rating: 54,
            image: "string"
        }
    ];

    const navigate = useNavigate();

    const redirectToProduct = (id: number) => {
        navigate(`/product/${id}`);
        location.reload();
    };



    return(
        <section className={styles.banner}>
            <h1>RECOMMENDATIONS</h1>
            {/* <h1>{JSON.stringify(cardsData)}</h1> */}
            <div className={styles.card_container}>
                {/* <ProductCard/> */}
                {gagagag.map((item) => (
                    <div key={item.id} onClick={() => redirectToProduct(item.id)}>
                        <ProductCard title={item.title} artist={item.artist} price={item.price_usd}/>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Recommendations;

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
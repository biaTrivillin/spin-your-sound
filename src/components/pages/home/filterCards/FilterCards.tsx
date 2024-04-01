import cardOneImg from "../../../../assets/card-one.png";
import cardTwoImg from "../../../../assets/card-two.png";
import cardThreeImg from "../../../../assets/card-three.png";
import styles from "./filterCards.module.css";
import { Link } from "react-router-dom";

function FilterCards() {

    const cards: Card[] = [
        {
            id: 1,
            title: "YOUR FAVOURITES GENRES",
            img: cardOneImg 
        },    
        {
            id: 2,
            title: "THE BESTSELLERS",
            img: cardTwoImg 
        },    
        {
            id: 3,
            title: "THE BEST PRICES",
            img: cardThreeImg 
        },    
    ];

    return (
        <section className={styles.card_container}>
            {cards.map((item) => (
                <div className={styles.card} key={item.id}>
                    <Link to="/catalog">
                        <img src={item.img}/>
                        <h3>{item.title}</h3>
                    </Link>
                </div>
            ))}
        </section>
    );
}

export default FilterCards;

type Card = {
    id: number;
    title: string;
    img: string;
}
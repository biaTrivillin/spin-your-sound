import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./FilterSideBar.module.css";

function FilterSideBar() {
    
    const [genreData, setGenreData] = useState<[]>([]);
    const [condidionData, setCondidionData] = useState<[]>([]);

    const url = "http://localhost:3000/";

    useEffect(() => {
        axios.get(`${url}genres`)
            .then(response => setGenreData(response.data));

        axios.get(`${url}conditions`)
            .then(response => setCondidionData(response.data));

    }, []);
    
    return(
        <aside className={styles.sidebar}>
            <h2 className={styles.title}>FILTER BY</h2>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <details>
                        <summary>genre</summary>
                        {genreData.map((item, index) => (
                            <div key={index}>
                                <input value={item} type="checkbox" id={`${item}_checkbox`}/>
                                <label htmlFor={`${item}_checkbox`}>{item}</label>
                            </div>
                        ))}
                    </details>
                </li>
                <li className={styles.item}>
                    <details>
                        <summary>condition</summary>
                        {condidionData.map((item, index) => (
                            <div key={index}>
                                <input value={item} type="checkbox" id={`${item}_checkbox`}/>
                                <label htmlFor={`${item}_checkbox`}>{item}</label>
                            </div>
                        ))}
                    </details>
                </li>
                <li className={styles.item}>
                    <h3>max price</h3>
                    <div>
                        <input type="text" placeholder="até quanto vc pode gastar" id="price_input"/>
                        <label htmlFor="price_input"></label>
                    </div>
                </li>
            </ul>
        </aside>
    );
}

export default FilterSideBar;
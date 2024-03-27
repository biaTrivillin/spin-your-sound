import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

function Header() {

    const [navStyle, setNavStyle] = useState("");

    const showNav = () => {
        if (navStyle != styles.show_navigation) setNavStyle(styles.show_navigation);
        else setNavStyle(styles.hide_navigation);
    };

    return(
        <header className={styles.header}>
            <h1><Link to="/">SPIN YOUR<br/> SOUND</Link></h1>
            <form>
                <input className={styles.search_input} type="text" placeholder="what do you want to hear today?"/>
                <button className={styles.search_btn}><FaMagnifyingGlass /></button>
            </form>
            <button onClick={showNav} className={styles.nav_btn}><FiMenu /></button>
            <nav className={`${styles.navigation} ${navStyle}`}>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/catalog">catalog</Link></li>
                    <li><a href="https://www.linkedin.com/in/beatriz-trivillin/" rel="noreferrer" target="_blank">contact</a></li>
                </ul>
            </nav>
            <nav className={styles.navigation_desktop}>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/catalog">catalog</Link></li>
                    <li><a href="https://www.linkedin.com/in/beatriz-trivillin/" rel="noreferrer" target="_blank">contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
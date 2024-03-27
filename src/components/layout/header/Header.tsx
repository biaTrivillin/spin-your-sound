import { Link } from "react-router-dom";

function Header() {
    return(
        <header>
            <h1><Link to="/">SPIN YOUR<br/> SOUND</Link></h1>
            <nav>
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
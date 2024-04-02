import { FaList } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
import styles from "./BenefitsBanner.module.css";


function BenefitsBanner() {
    return (
        <article className={styles.banner}>
            <h1>ENJOY YOUR MUSIC WITH US</h1>
            <div className={styles.text_container}>
                <div>
                    <FaList />
                    <p>The market&apos;s most extensive catalog available.</p>
                </div>
                <div>
                    <IoWallet />
                    <p>Satisfaction guarantee or your money back.</p>
                </div>
                <div>
                    <FaTruck />
                    <p>Free shipping on orders over $50.00.</p>
                </div>
            </div>
        </article>
    );
}

export default BenefitsBanner;
import bannerOneImg from "../../../../assets/banner-one.png";
import bannerTwoImg from "../../../../assets/banner-two.png";
import bannerThreeImg from "../../../../assets/banner-three.png";
import styles from "./Banner.module.css";

function Banner() {
    return(
        <section className={styles.carousel}>
            <div className={styles.banners_container}>
                <article>
                    <div className={`${styles.banner} ${styles.banner_one}`}>
                        <img src={bannerOneImg}/>
                        <div>
                            <h1>VINYL</h1>
                            <p>The must-have accessory for your musical wardrobe.</p>
                        </div>
                    </div>
                </article>
                <article>
                    <div className={`${styles.banner} ${styles.banner_two}`}>
                        <img src={bannerTwoImg}/>
                        <div>
                            <h1>Your musical taste is top-notch!</h1>
                            <p>Come savor our latest offerings.</p>
                        </div>
                    </div>
                </article>
                <article>
                    <div className={`${styles.banner} ${styles.banner_three}`}>
                        <img src={bannerThreeImg}/>
                        <div>
                            <h1>Discover your beat for much less.</h1>
                            <p>Incredible daily deals await!</p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Banner;
import presentationRecord from "../../../../assets/presentation-record.png";
import styles from "./Presentation.module.css";
import needle from "../../../../assets/needle.png";

function Presentation() {

    return (
        <div className={styles.presentation_container}>
            <img className={styles.presentation_img} src={presentationRecord}/>
            <img className={styles.needle_img} src={needle}/>
            <div className={styles.presentation_text}>
                <h1>SPIN YOUR <br/>SOUND</h1>
                <h2>Find Your Beat, Let Music Speak!</h2>
            </div>
        </div>
    );
}
  
export default Presentation;
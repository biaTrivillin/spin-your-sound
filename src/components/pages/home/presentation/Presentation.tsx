import presentationRecord from "../../../../assets/presentation-record.png";
import styles from "./Presentation.module.css";

function Presentation() {

    return (
        <div className={styles.presentation_container}>
            <img className={styles.presentation_img} src={presentationRecord}/>
            <div className={styles.presentation_text}>
                <h1>SPIN YOUR <br/>SOUND</h1>
                <h2>Find Your Beat, Let Music Speak!</h2>
            </div>
        </div>
    );
}
  
export default Presentation;
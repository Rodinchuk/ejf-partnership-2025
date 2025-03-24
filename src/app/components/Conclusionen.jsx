import Image from "next/image";
import styles from "./Conclusion.module.css";
import bg from '../../../public/images/bg-hero.png'

const Conclusionen = () => {
  return (
    <div className={styles.conclusion}>
      <div className={styles.conclusioncontainer}>
      <Image src={bg} alt="img" className={styles.conclusionWave}></Image>
      <div className={styles.conclusioncontent}>
      <h2 className={styles.title}>Invest in the future</h2>
      <p className={styles.description}>
        Join the 17th Engineering Job Fair to develop youth and business together
      </p>
     <a href="#partnership"><button className={styles.conclusionbutton}>Become a Partner</button></a> 
      </div></div>
      
      <img src="./images/down-balls-big.png" className={styles.downballsbig}></img>
      <img src="./images/down-balls.png" className={styles.downballs}></img>
    </div>
  );
};

export default Conclusionen;

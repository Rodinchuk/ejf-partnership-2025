import Image from "next/image";
import styles from "./Conclusion.module.css";
import bg from '../../../public/images/bg-hero.png'

const Conclusion = () => {
  return (
    <div className={styles.conclusion}>
      <div className={styles.conclusioncontainer}>
      <Image src={bg} alt="img" className={styles.conclusionWave}></Image>
      <div className={styles.conclusioncontent}>
      <h2 className={styles.title}>Інвестуй у майбутнє! </h2>
      <p className={styles.description}>
        Приєднуйтесь до 17-го Інженерного Ярмарку Кар'єри, щоб розвивати молодь та бізнес разом!
      </p>
     <a href="#partnership"><button className={styles.conclusionbutton}>Співпрацювати</button></a> 
      </div></div>
      
      <img src="./images/down-balls-big.png" className={styles.downballsbig}></img>
      <img src="./images/down-balls.png" className={styles.downballs}></img>
    </div>
  );
};

export default Conclusion;

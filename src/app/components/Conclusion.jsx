import Image from "next/image";
import styles from "./Conclusion.module.css";
import bg from '../../../public/images/bg-hero.png'
import Link from "next/link";

const Conclusion = () => {
  return (
    <section className={styles.conclusion}>
      <Image src={bg} alt="img" className={styles.conclusionWave}></Image>
      <div className={styles.conclusioncontent}>
      <h2 className={styles.title}>Інвестуй у майбутнє! </h2>
      <p className={styles.description}>
        Приєднуйтесь до 17-го Інженерного Ярмарку Кар'єри, щоб розвивати молодь та бізнес разом!
      </p>
     <a href="#partnership"><button className={styles.conclusionbutton}>Співпрацювати</button></a> 
      </div>
    </section>
  );
};

export default Conclusion;

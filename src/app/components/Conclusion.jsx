import styles from "./Conclusion.module.css";
import Link from "next/link";

const Conclusion = () => {
  return (
    <section className={styles.conclusion}>
      <h2 className={styles.title}>Інвестуй в майбутнє! </h2>
      <p className={styles.description}>
        Приєднуйтесь до 17-го Інженерного Ярмарку Кар'єри, щоб розвивати молодь та бізнес разом!
      </p>
      <a href="#partnership"><button className={styles.conclusionbutton}>Співпрацювати</button></a>
    </section>
  );
};

export default Conclusion;

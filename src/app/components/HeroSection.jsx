import styles from '@/app/components/HeroSection.module.css';

export default function CareerFairBanner() {
  return (
    <section className={styles.careerBanner}>
      <div id="home" className={styles.content}>
      <div className={styles.imageContainer}>
        <img 
          src="./images/briefcase.png" 
          className={styles.briefcase}
        />
      <img 
          src="./images/bubbles.png" 
          className={styles.bubbles}
        />
      </div>
     
        <h1 className={styles.title}>Інженерний</h1>
        <h2 className={styles.title}>Ярмарок</h2>
        <h2 className={styles.subtitle}>Кар'єри</h2>

        <div className={styles.highlightText}>Інвестуй в майбутнє!</div>
        <div className={styles.containerhero} > 
       

          <div className={styles.uni} >
          <svg className={styles.location} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 15.6667C9 9.76895 13.769 5 19.6667 5C25.5644 5 30.3333 9.76895 30.3333 15.6667C30.3333 18.3831 29.0863 21.6571 27.3264 24.8866C25.5823 28.0872 23.4064 31.1166 21.6973 33.3104C20.6414 34.6658 18.6919 34.6658 17.636 33.3104C15.9269 31.1166 13.751 28.0872 12.0069 24.8866C10.2471 21.6571 9 18.3831 9 15.6667ZM14.5 15.6667C14.5 18.519 16.8144 20.8333 19.6667 20.8333C22.519 20.8333 24.8333 18.519 24.8333 15.6667C24.8333 12.8144 22.519 10.5 19.6667 10.5C16.8144 10.5 14.5 12.8144 14.5 15.6667Z" fill="#111A94" stroke="#111A94" stroke-width="2"/>
</svg>
          <ul className={styles.universities}>
          <li>Національний університет</li>
          <li>"Львівська Політехніка"</li>
        </ul>

        
  


        </div>
        <div className={styles.separator} ></div>
        <div className={styles.ejfdate} >
        <svg  className={styles.calendar}  width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.1504 3.40002H25.9004V1.15002C25.9004 0.951112 25.8214 0.760347 25.6807 0.619694C25.5401 0.479042 25.3493 0.400024 25.1504 0.400024C24.9515 0.400024 24.7607 0.479042 24.6201 0.619694C24.4794 0.760347 24.4004 0.951112 24.4004 1.15002V3.40002H7.90039V1.15002C7.90039 0.951112 7.82137 0.760347 7.68072 0.619694C7.54007 0.479042 7.3493 0.400024 7.15039 0.400024C6.95148 0.400024 6.76071 0.479042 6.62006 0.619694C6.47941 0.760347 6.40039 0.951112 6.40039 1.15002V3.40002H4.15039C3.15583 3.40002 2.202 3.79511 1.49874 4.49837C0.795479 5.20164 0.400391 6.15546 0.400391 7.15002V9.40002C0.400391 11.0569 1.74354 12.4 3.40039 12.4H28.9004C30.5572 12.4 31.9004 11.0569 31.9004 9.40002V7.15002C31.9004 6.15546 31.5053 5.20164 30.802 4.49837C30.0988 3.79511 29.145 3.40002 28.1504 3.40002ZM3.40039 13.9C1.74354 13.9 0.400391 15.2432 0.400391 16.9V28.15C0.400391 29.1446 0.795479 30.0984 1.49874 30.8017C2.202 31.5049 3.15583 31.9 4.15039 31.9H28.1504C29.145 31.9 30.0988 31.5049 30.802 30.8017C31.5053 30.0984 31.9004 29.1446 31.9004 28.15V16.9C31.9004 15.2432 30.5572 13.9 28.9004 13.9H3.40039ZM7.15039 25.9C7.00206 25.9 6.85705 25.856 6.73371 25.7736C6.61038 25.6912 6.51425 25.5741 6.45748 25.437C6.40072 25.3 6.38586 25.1492 6.4148 25.0037C6.44374 24.8582 6.51517 24.7246 6.62006 24.6197C6.72495 24.5148 6.85859 24.4434 7.00407 24.4144C7.14956 24.3855 7.30036 24.4003 7.4374 24.4571C7.57445 24.5139 7.69158 24.61 7.77399 24.7333C7.85641 24.8567 7.90039 25.0017 7.90039 25.15C7.90039 25.3489 7.82137 25.5397 7.68072 25.6804C7.54007 25.821 7.3493 25.9 7.15039 25.9ZM13.1504 25.9C13.0021 25.9 12.857 25.856 12.7337 25.7736C12.6104 25.6912 12.5142 25.5741 12.4575 25.437C12.4007 25.3 12.3859 25.1492 12.4148 25.0037C12.4437 24.8582 12.5152 24.7246 12.6201 24.6197C12.7249 24.5148 12.8586 24.4434 13.0041 24.4144C13.1496 24.3855 13.3004 24.4003 13.4374 24.4571C13.5744 24.5139 13.6916 24.61 13.774 24.7333C13.8564 24.8567 13.9004 25.0017 13.9004 25.15C13.9004 25.3489 13.8214 25.5397 13.6807 25.6804C13.5401 25.821 13.3493 25.9 13.1504 25.9ZM13.1504 19.9C13.0021 19.9 12.857 19.856 12.7337 19.7736C12.6104 19.6912 12.5142 19.5741 12.4575 19.437C12.4007 19.3 12.3859 19.1492 12.4148 19.0037C12.4437 18.8582 12.5152 18.7246 12.6201 18.6197C12.7249 18.5148 12.8586 18.4434 13.0041 18.4144C13.1496 18.3855 13.3004 18.4003 13.4374 18.4571C13.5744 18.5139 13.6916 18.61 13.774 18.7333C13.8564 18.8567 13.9004 19.0017 13.9004 19.15C13.9004 19.3489 13.8214 19.5397 13.6807 19.6804C13.5401 19.821 13.3493 19.9 13.1504 19.9ZM19.1504 25.9C19.0021 25.9 18.8571 25.856 18.7337 25.7736C18.6104 25.6912 18.5143 25.5741 18.4575 25.437C18.4007 25.3 18.3859 25.1492 18.4148 25.0037C18.4437 24.8582 18.5152 24.7246 18.6201 24.6197C18.725 24.5148 18.8586 24.4434 19.0041 24.4144C19.1496 24.3855 19.3004 24.4003 19.4374 24.4571C19.5745 24.5139 19.6916 24.61 19.774 24.7333C19.8564 24.8567 19.9004 25.0017 19.9004 25.15C19.9004 25.3489 19.8214 25.5397 19.6807 25.6804C19.5401 25.821 19.3493 25.9 19.1504 25.9ZM19.1504 19.9C19.0021 19.9 18.8571 19.856 18.7337 19.7736C18.6104 19.6912 18.5143 19.5741 18.4575 19.437C18.4007 19.3 18.3859 19.1492 18.4148 19.0037C18.4437 18.8582 18.5152 18.7246 18.6201 18.6197C18.725 18.5148 18.8586 18.4434 19.0041 18.4144C19.1496 18.3855 19.3004 18.4003 19.4374 18.4571C19.5745 18.5139 19.6916 18.61 19.774 18.7333C19.8564 18.8567 19.9004 19.0017 19.9004 19.15C19.9004 19.3489 19.8214 19.5397 19.6807 19.6804C19.5401 19.821 19.3493 19.9 19.1504 19.9ZM25.1504 19.9C25.0021 19.9 24.8571 19.856 24.7337 19.7736C24.6104 19.6912 24.5143 19.5741 24.4575 19.437C24.4007 19.3 24.3859 19.1492 24.4148 19.0037C24.4437 18.8582 24.5152 18.7246 24.6201 18.6197C24.725 18.5148 24.8586 18.4434 25.0041 18.4144C25.1496 18.3855 25.3004 18.4003 25.4374 18.4571C25.5745 18.5139 25.6916 18.61 25.774 18.7333C25.8564 18.8567 25.9004 19.0017 25.9004 19.15C25.9004 19.3489 25.8214 19.5397 25.6807 19.6804C25.5401 19.821 25.3493 19.9 25.1504 19.9Z" fill="#111A94"/>
</svg>

        <div className={styles.universities}>28–29 травня</div></div>
        </div>
       
      </div>

    

      <div className={styles.vectorContainer}>
        <img 
          src="./images/bg-hero.png" 
          alt="Декоративна хвиля"
          className={styles.vectorImage}
        />
      </div>
    </section>
  );
}


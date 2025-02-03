"use client";
import { useState, useEffect } from "react";
import styles from "./Contacts.module.css";

const contacts = [
  {
    name: "Софія Герус",
    role: "відповідальна за корпоративні зв’язки",
    phone: "+380 98 600 4363",
    email: "sonyagerusbest@gmail.com",
    image: "/images/sofia.png",
  },
  {
    name: "Максим Сеньків",
    role: "головний організатор",
    phone: "+380 66 638 5322",
    email: "maksym.senkivv@gmail.com",
    image: "/images/max.png",
    special: true,
  },
  {
    name: "Діана Степко",
    role: "відповідальна за корпоративні зв’язки",
    phone: "+380 68 978 4955",
    email: "dianasr.best@gmail.com",
    image: "/images/diana.png",
  },
];

export default function Contacts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextContact = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contacts.length);
  };

  const prevContact = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + contacts.length) % contacts.length);
  };

  return (
    <section id="contacts" className={styles.container}>
      <h2 className={styles.title}>Контакти</h2>
      <div className={styles.carousel}>
        {isMobile && (
          <button className={styles.arrow} onClick={prevContact}>
            <svg width="24" height="24"  z-index="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        )}
        <div className={styles.cardContainer}>
          {contacts.map((contact, index) => (
            <div key={contact.name} className={`${styles.card} ${contact.special ? styles.specialCard : ""} ${isMobile && index !== currentIndex ? styles.hidden : ""}`}>
              <img src={contact.image} alt={contact.name} className={styles.image} />
        
              <h3 className={`${styles.name} ${contact.special ? styles.specialText : ""}`}>{contact.name}</h3>
              <p className={`${styles.role} ${contact.special ? styles.specialText : ""}`}>{contact.role}</p>
              <hr className={styles.divider} />
              <p className={`${styles.contactInfo} ${contact.special ? styles.specialText : ""}`}>
              {contact.special ? (
               <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fillRule="evenodd" clipRule="evenodd" d="M6.02256 4.97778L5.01747 3.60721C4.94912 3.514 4.81995 3.49025 4.72291 3.55304C3.40796 4.40389 3.0465 5.70362 3.57405 6.66175C4.15101 7.7096 5.04085 8.99467 6.40576 10.3596C7.77066 11.7245 9.05573 12.6143 10.1036 13.1913C11.0617 13.7188 12.3614 13.3574 13.2123 12.0424C13.2751 11.9454 13.2513 11.8162 13.1581 11.7479L11.7875 10.7428C11.586 10.595 11.3187 10.5723 11.0952 10.6841L10.5489 10.9572C10.0842 11.1896 9.44726 11.2712 8.84431 10.961C8.4412 10.7536 7.8199 10.3595 7.11286 9.65247C6.40583 8.94544 6.01172 8.32414 5.80433 7.92103C5.49414 7.31808 5.57576 6.68112 5.80808 6.21647L6.08124 5.67017C6.19301 5.44662 6.17036 5.17933 6.02256 4.97778ZM3.99858 2.43361C2.3049 3.52952 1.43307 5.5377 2.40607 7.30485C3.04108 8.45816 4.00564 9.84508 5.46295 11.3024C6.92025 12.7597 8.30717 13.7242 9.46048 14.3593C11.2276 15.3323 13.2358 14.4604 14.3317 12.7668C14.7781 12.0769 14.6092 11.1586 13.9466 10.6727L12.576 9.66757C11.9714 9.22416 11.1695 9.1562 10.4989 9.49153L9.95258 9.76468C9.79443 9.84375 9.61149 9.85625 9.45427 9.77537C9.16783 9.628 8.6602 9.31419 8.05567 8.70966C7.45114 8.10513 7.13733 7.59751 6.98996 7.31106C6.90908 7.15384 6.92158 6.9709 7.00065 6.81276L7.27381 6.26645C7.60913 5.59581 7.54117 4.79394 7.09776 4.1893L6.09267 2.81872C5.60674 2.15609 4.68846 1.98722 3.99858 2.43361Z" fill="#DBEBFF"/>
               </svg>
               
                ) : (
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M4.02256 2.97778L3.01747 1.60721C2.94912 1.514 2.81995 1.49025 2.72291 1.55304C1.40796 2.40389 1.0465 3.70362 1.57405 4.66175C2.15101 5.7096 3.04085 6.99467 4.40576 8.35958C5.77066 9.72448 7.05573 10.6143 8.10358 11.1913C9.06171 11.7188 10.3614 11.3574 11.2123 10.0424C11.2751 9.94538 11.2513 9.81621 11.1581 9.74787L9.78755 8.74278C9.586 8.59497 9.31871 8.57232 9.09516 8.6841L8.54886 8.95725C8.08421 9.18957 7.44726 9.27119 6.84431 8.961C6.4412 8.75361 5.8199 8.3595 5.11286 7.65247C4.40583 6.94544 4.01172 6.32414 3.80433 5.92103C3.49414 5.31808 3.57576 4.68112 3.80808 4.21647L4.08124 3.67017C4.19301 3.44662 4.17036 3.17933 4.02256 2.97778ZM1.99858 0.433611C0.304905 1.52952 -0.566934 3.5377 0.406065 5.30485C1.04108 6.45816 2.00564 7.84508 3.46295 9.30239C4.92025 10.7597 6.30717 11.7242 7.46048 12.3593C9.22763 13.3323 11.2358 12.4604 12.3317 10.7668C12.7781 10.0769 12.6092 9.15859 11.9466 8.67266L10.576 7.66757C9.97139 7.22416 9.16952 7.1562 8.49888 7.49153L7.95258 7.76468C7.79443 7.84375 7.61149 7.85625 7.45427 7.77537C7.16783 7.628 6.6602 7.31419 6.05567 6.70966C5.45114 6.10513 5.13733 5.59751 4.98996 5.31106C4.90908 5.15384 4.92158 4.9709 5.00065 4.81276L5.27381 4.26645C5.60913 3.59581 5.54117 2.79394 5.09776 2.1893L4.09267 0.818722C3.60674 0.156091 2.68846 -0.0127839 1.99858 0.433611Z" fill="#0C0C12"/>
</svg>

                )}
                {contact.phone}
              </p>
              <p className={`${styles.contactInfo} ${contact.special ? styles.specialText : ""}`}>
                {contact.special ? (
              <svg width="14" z-index="5" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.33398 2.1849H11.6673C11.9248 2.1849 12.1482 2.33087 12.2593 2.54459L7.37046 5.80379C7.14653 5.95308 6.85479 5.95308 6.63086 5.80379L1.74205 2.54458C1.8531 2.33087 2.0765 2.1849 2.33398 2.1849ZM1.66732 4.09723V9.51823C1.66732 9.88642 1.96579 10.1849 2.33398 10.1849H11.6673C12.0355 10.1849 12.334 9.88642 12.334 9.51823V4.09724L8.11006 6.91319C7.43826 7.36105 6.56306 7.36105 5.89126 6.91319L1.66732 4.09723ZM0.333984 2.85156C0.333984 1.74699 1.22942 0.851562 2.33398 0.851562H11.6673C12.7719 0.851562 13.6673 1.74699 13.6673 2.85156V9.51823C13.6673 10.6228 12.7719 11.5182 11.6673 11.5182H2.33398C1.22941 11.5182 0.333984 10.6228 0.333984 9.51823V2.85156Z" fill="#DBEBFF"/>
              </svg>
              
                ) : (
                    <svg width="14"  z-index="5" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.33301 2.1849H11.6663C11.9238 2.1849 12.1472 2.33087 12.2583 2.54459L7.36948 5.80379C7.14555 5.95308 6.85382 5.95308 6.62988 5.80379L1.74107 2.54458C1.85213 2.33087 2.07552 2.1849 2.33301 2.1849ZM1.66634 4.09723V9.51823C1.66634 9.88642 1.96482 10.1849 2.33301 10.1849H11.6663C12.0345 10.1849 12.333 9.88642 12.333 9.51823V4.09724L8.10908 6.91319C7.43728 7.36105 6.56208 7.36105 5.89028 6.91319L1.66634 4.09723ZM0.333008 2.85156C0.333008 1.74699 1.22844 0.851562 2.33301 0.851562H11.6663C12.7709 0.851562 13.6663 1.74699 13.6663 2.85156V9.51823C13.6663 10.6228 12.7709 11.5182 11.6663 11.5182H2.33301C1.22844 11.5182 0.333008 10.6228 0.333008 9.51823V2.85156Z" fill="#0C0C12"/>
                    </svg>
                    
                )}
                {contact.email}
              </p>
            </div>
          ))}
        </div>
        {isMobile && (
          <button className={styles.arrow} onClick={nextContact}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}
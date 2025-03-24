"use client";
import React, { useState } from 'react';
import styles from '@/app/components/Header.module.css';
import Image from 'next/image'; 
import { useRouter } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToPartnership = () => {
    document.getElementById("partnership")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHome = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };
 const router = useRouter();

  const goToEng = () => {
    router.push("/en"); 
  };
  const goToUkr = () => {
    router.push("/");
  };
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}><a href='#' className={styles.logoContainer}>
        <Image
          onClick={scrollToHome}
          src="/images/logoWhite.png" // Make sure this path is correct for Next.js
          alt="Logo"
          width={50} // Adjust width
          height={50} // Adjust height
          className={styles.logo}
          onMouseEnter={(e) => e.currentTarget.classList.add(styles.spin)}
          onMouseLeave={(e) => e.currentTarget.classList.remove(styles.spin)}
        />
      </a>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><a href="#about">About</a></li>
          <li><a href="#stats">Statistics</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
      </nav>
      <div onClick={goToUkr} className={styles.interButton}>
      UA
    </div>
      <a onClick={scrollToPartnership} className={styles.partnerButton}>Become a partner</a>

      
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <button className={styles.closeButton} onClick={closeMenu}>×</button>
        <ul>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#stats" onClick={closeMenu}>Statistics</a></li>
          <li><a href="#contacts" onClick={closeMenu}>Contacts</a></li>
          <li><a href="#partnership"><button className={styles.partnerButton} onClick={closeMenu}>Become a partner</button></a></li>
          <div onClick={goToUkr} className={styles.interButton} >
      UA
    </div>
        </ul>
      </div></div>
    </header>
  );
};

export default Header;

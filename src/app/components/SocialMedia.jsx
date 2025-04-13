"use client";
import React, { useState, useEffect } from "react";
import styles from "./SocialMedia.module.css";

const SocialMediaFollowers = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [modalContent, setModalContent] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // Заморожуємо фон
    } else {
      document.body.style.overflow = "auto"; // Відновлюємо прокручування
    }
    return () => {
      document.body.style.overflow = "auto"; // Відновлюємо прокручування при розмонтуванні
    };
  }, [showModal]);

  const platforms = [
    { name: "followers", followers: "900+", icon: "./images/tg.png", mobileIcon: "./images/mobile-tg.png" },
    { name: "followers", followers: "650+", icon: "./images/linkedin.png", mobileIcon: "./images/mobile-linkedin.png" },
    { name: "followers", followers: "490+", icon: "./images/tik_tok.png", mobileIcon: "./images/mobile-tik_tok.png" },
    { name: "followers", followers: "2300+", icon: "./images/facebook.png", mobileIcon: "./images/mobile-facebook.png" },
    {
      name2: "Instagram",
      name: "followers",
      followers: "3300+",
      icon: "./images/inst.png",
      mobileIcon: "./images/mobile-inst.png",
      highlight: true,
      details: [
        "Основні показники зі залученості в Instagram – 5%",
        "Кількість охоплених облікових записів під час івентів – 20.5 тисяч",
        "Середня кількість переглядів Stories – 675",
        "Середня кількість взаємодій протягом місяця – 6000",
      ],
    },
  ];

  const sortedPlatforms = [...platforms];
  if (isMobile) {
    sortedPlatforms.sort((a, b) => (a.name2 === "Instagram" ? -1 : 1));
  } else {
    sortedPlatforms.splice(
      2,
      0,
      sortedPlatforms.splice(sortedPlatforms.findIndex((p) => p.name2 === "Instagram"), 1)[0]
    );
  }

  const openModal = (details) => {
    setModalContent(details);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent([]);
  };

  return (
    <div className="width-container">
      <h1 className={styles.title} id="stats">
        Ми в соцмережах
      </h1>
      <div className={styles.container}>
        <div className={styles.grid}>
          {sortedPlatforms.map((platform, index) => (
            <div
              key={index}
              className={`${styles.card} ${
                platform.name2 === "Instagram" ? styles.instcard : styles.whiteCard
              } ${platform.highlight ? styles.highlight : ""}`}
            >
              <img
                src={isMobile ? platform.mobileIcon : platform.icon}
                alt={`${platform.name} icon`}
                className={styles.icon}
              />
              <p className={styles.followers}>{platform.followers}</p>
              <p className={styles.name}>{platform.name}</p>

              {platform.name2 === "Instagram" && (
                <button
                  className={styles.infoButton}
                  onClick={() => openModal(platform.details)}
                >
                  <img
                    className={styles.infobuttonsm}
                    src="./images/info.png"
                    alt="info button"
                  />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {modalContent.map((detail, i) => (
              <p key={i}>{detail}</p>
            ))}
            <button className={styles.closeButton} onClick={closeModal}>
              Закрити
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialMediaFollowers;
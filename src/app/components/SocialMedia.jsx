"use client";
import React, { useState } from "react";
import styles from "./SocialMedia.module.css";

const SocialMediaFollowers = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const platforms = [
    { name: "followers", followers: "900+", icon: "./images/tg.png" },
    { name: "followers", followers: "650+", icon: "./images/linkedin.png" },
    {
      name2: "Instagram",
      name: "followers",
      followers: "3300+",
      icon: "./images/inst.png",
      highlight: true,
      details: [
        "Основні показники зі залученості в Instagram – 5%",
        "Кількість охоплених облікових записів під час івентів – 20.5 тисяч",
        "Середня кількість переглядів Stories – 675",
        "Середня кількість взаємодій протягом місяця – 6000",
      ],
    },
    { name: "followers", followers: "490+", icon: "./images/tik_tok.png" },
    { name: "followers", followers: "2300+", icon: "./images/facebook.png" },
  ];

  const toggleModal = (event) => {
    const buttonRect = event.target.getBoundingClientRect();
    setModalPosition({
      top: buttonRect.bottom + window.scrollY + 10,
      left: buttonRect.left + window.scrollX,
    });
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
        
      <h1 className={styles.title}>Ми в соцмережах</h1>
    <div className={styles.container} onClick={closeModal}>

      <div className={styles.grid}>
        {platforms.map((platform, index) => (
          <div
            key={index}
            className={`${styles.card} ${platform.name2 === "Instagram" ? styles.instcard : ""} ${platform.highlight ? styles.highlight : ""}`}
          >
            <img
              src={platform.icon}
              alt={`${platform.name} icon`}
              className={styles.icon}
            />
            <p className={styles.followers}>{platform.followers}</p>
            <p className={styles.name}>{platform.name}</p>

            {platform.name2 === "Instagram" && (
              <button
                className={styles.infoButton}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleModal(e);
                }}
              >
                <img src="./images/info.png" alt="info button" />
              </button>
            )}
          </div>
        ))}
      </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className={`${styles.modalContent} ${styles.lilcard}`}
          style={{ position: "absolute", top: modalPosition.top, left: modalPosition.left }}
        >
          {platforms[2]?.details?.map((detail, i) => (
            <p key={i}>{detail}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SocialMediaFollowers;

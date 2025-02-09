'use client';

import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">
          <Image
            src='/images/BEST-logoFooter.svg'  
            alt="BEST Lviv"
            width={130}
            height={67}
          />
        </div>
        <div className="social-icons">
          <a href="https://t.me/bestlviv" target="_blank" rel="noopener noreferrer">
            <img
              src='/images/tgfooter.svg'  
              alt="Telegram"
              className="icon"
            />
          </a>
          <a href="https://www.instagram.com/best_lviv/" target="_blank" rel="noopener noreferrer">
            <img
              src={'/images/instfooter.svg' }
              alt="Instagram"
              className="icon"
            />
          </a>
          <a href="https://ua.linkedin.com/company/bestlviv" target="_blank" rel="noopener noreferrer">
            <img
              src='/images/LNfooter.svg'  
              alt="LinkedIn"
              className="icon"
            />
          </a>
          <a href="https://www.tiktok.com/@best__lviv" target="_blank" rel="noopener noreferrer">
            <img
              src='/images/ttfooter.svg'  
              alt="TikTok"
              className="icon"
            />
          </a>
        </div>
        <div className="year">2025</div>
      </div>

      <style jsx>{`
        .footer {
          background-color: #111a94;
          color: white;
          padding: 10px 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1200px;
        }
        
        .logo {
        font-size:20px;
        display:flex;        }
        
        .social-icons {
          display: flex;
          gap: 15px;
        }
        
        .icon {
          font-size: 24px;
          color: white;
        }
        .year {
          font-size: 20px;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .footer-content {
            justify-content: space-between;
          }

          .logo img {
          display:flex;
            width:20%;
          }

          .social-icons {
            gap: 10px;
          }

          .icon {
          width:60%;
          height:auto;
          }

          .year {
            font-size: 16px; /* Зменшити розмір тексту */
          }

          .footer-content > * {
            transform: scale(0.9); /* Зменшити елементи */
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

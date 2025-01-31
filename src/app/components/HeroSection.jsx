"use client";

import Image from "next/image";
import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
    <div className="hero-container">
      <div className="text-container">
        <h1 className="title">Інженерний<br />Ярмарок<br />Кар’єри</h1>
        <p className="subtitle">Інвестуй в майбутнє!</p>
        <div className="info">
          <div className="info-item">
            <img src="/icons/location.png" alt="Location icon" className="icon" />
            <span>Національний університет "Львівська Політехніка"</span>
          </div>
          <div className="info-item">
            <img src="/icons/calendar.png" alt="Calendar icon" className="icon" />
            <span>28-29 травня</span>
          </div>
        </div>
      </div>
      <div className="image-container">
        <Image
          src="/images/briefcase.png"
          alt="Briefcase"
          width={633}
          height={633}
          className="image"
        />
      </div>
    </div>
    <img src="./images/bg-hero.jpg" className="image-vector"/>
    </section>
    
  );
}

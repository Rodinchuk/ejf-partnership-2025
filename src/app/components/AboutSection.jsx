import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Image from "next/image";
import Carousel from "./CarouselSlide";
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <h2>Що таке ІЯК?</h2>
      
      <div className="content">
        {/* Ліва частина із зображенням */}
        <div className="left-section">
          <Carousel />
        </div>

        {/* Права частина з текстом */}
        <div className="right-section">
          <p className="text-lg mb-4">
            Інженерний Ярмарок Кар’єри – захід, який об’єднує прогресивну молодь з
            провідними компаніями для налагодження міцних зв’язків та відкриття
            нових можливостей. Ми віримо в кар’єрний потенціал студентів і
            створюємо простір, де вони реалізують його на повну!
          </p>
          <p className="text-lg mb-4">
            Інженерний ярмарок кар’єри вже 17-й рік поспіль збирає тисячі студентів
            та десятки компаній, щоб змінювати майбутнє разом. Тож ми запрошуємо
            вас стати частиною події та увійти до історії.
          </p>
          <p className="text-lg font-normal text-blue-600">
            <span className="goal font-semibold">Мета:</span> стати каталізатором для розвитку студентів та компаній,
            забезпечити формування нового покоління успішної молоді.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
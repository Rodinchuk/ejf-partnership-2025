import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Carousel from "./CarouselSlide";
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-container">
      <h2 id="about" className="about-title">Що таке ІЯК?</h2>
      
      <div className="about-content">
        <div className="about-carousel">
          <Carousel />
        </div>

        <div className="about-text">
          <p>
            Інженерний Ярмарок Кар’єри – захід, який об’єднує прогресивну молодь з
            провідними компаніями для налагодження міцних зв’язків та відкриття
            нових можливостей. Ми віримо в кар’єрний потенціал студентів і
            створюємо простір, де вони реалізують його на повну!
          </p>
          <p>
            Інженерний ярмарок кар’єри вже 17-й рік  збирає тисячі студентів
            та десятки компаній, щоб змінювати майбутнє разом. Тож ми запрошуємо
            Вас стати частиною події та увійти до історії.
          </p>
          <p className="about-goal">
            <span className="goal-highlight">Мета:</span> стати каталізатором для розвитку студентів та компаній,
            забезпечити формування нового покоління успішної молоді.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
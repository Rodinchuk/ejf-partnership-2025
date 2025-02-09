"use client";
import "./EventAdvantages.css";
import React, { useState } from "react";
import Image from "next/image";

interface ExpandableCardProps {
  title: string;
  description: string;
  icon: string;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({ title, description, icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card-wrapper">
    <div
      className={`card ${isExpanded ? "card-expanded" : "card-collapsed"}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="card-header">
        <div className="card-icon">
          <Image src={icon} alt="icon" width={50} height={50} />
        </div>
        <h3 className="card-title">{title}</h3>
        <div className={`card-toggle ${isExpanded ? "rotate-180" : ""}`}>
          <Image src="/images/toddle.png" alt="toggle" width={24} height={24} />
        </div>
      </div>
      {isExpanded && <p className="card-description">{description}</p>}
    </div>
    </div>
  );
};

const EventAdvantages: React.FC = () => {
  const cardsData: ExpandableCardProps[] = [
    {
      title: "Знайдете перспективних працівників",
      description:
        "Ви зможете особисто поспілкуватися зі студентами різних спеціальностей, оцінити їх потенціал та сформувати базу перспективних кандидатів на актуальні для Вас вакансії.",
      icon: "/images/adv_perspective.png",
    },
    {
      title: "Зміцните свій бренд як роботодавця",
      description:
        "Ярмарок кар'єри – це чудова можливість представити свою компанію студентам, сформувати уявлення про Вашу корпоративну культуру, цінності та можливості для розвитку кар'єри.",
      icon: "/images/adv_brand.png",
    },
    {
      title: "Дізнаєтесь очікування молоді щодо ринку праці",
      description:
        "Участь у різноманітних воркшопах та панельних дискусіях, допоможе Вам краще зрозуміти потреби сучасної молоді. Це сприятиме ефективній співпраці зі студентами у майбутньому.",
      icon: "/images/adv_expectations.png",
    },
    {
      title: "Розширите мережу контактів",
      description:
        "Наш захід – це платформа для знайомств з представниками інших компаній та встановлення нових партнерських відносин.",
      icon: "/images/adv_web.png",
    },
    {
      title: "Отримаєте можливості для просування Вашого бренду",
      description:
        "Інтерактивні активності, такі як Share and Win, Treasure Hunt та інші, дозволять залучити аудиторію до взаємодії з Вашим брендом у соцмережах та збільшать впізнаваність серед молоді.",
      icon: "/images/adv_promo.png",
    },
    {
      title: "Інвестуєте у майбутнє та амбітну молодь",
      description:
        "Це можливість допомогти реалізувати кар’єрний потенціал студентів, а також поділитись знаннями та досвідом Вашої команди на активностях нашого ярмарку.",
      icon: "/images/adv_invest.png",
    },
  ];

  return (
    <div className="eventad">
      <h2 className="title">Переваги для Вас</h2>
      <div className="container">
        <div className="cards-container">
          {cardsData.map((card, index) => (
            <ExpandableCard key={index} {...card} />
          ))}
        </div>
        <Image src="/images/lupkaZalupka.png" className="overlay-image" alt="overlay" width={500} height={400} />
      </div>
    </div>
  );
};

export default EventAdvantages;

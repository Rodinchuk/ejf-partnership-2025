// activities.jsx
"use client";
import React, { useState } from "react";
import "./Activities.css";

const ExpandableCard = ({ title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`border border-blue-300 rounded-2xl p-4 transition-all duration-300 ${
        isExpanded ? "bg-blue-50" : "bg-white"
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-blue-600">{title}</h3>
        <button
          className={`transform transition-transform duration-300 ${
            isExpanded ? "rotate-180" : "rotate-0"
          }`}
        >
          <img src="./images/toggle.png" alt="toggle" className="w-6 h-6" />
        </button>
      </div>
      {isExpanded && <p className="mt-2 text-gray-600">{description}</p>}
    </div>
  );
};

const Activities = () => {
  const cardsData = [
    {
      title: "Інформаційні зони",
      description: "Дізнайтеся більше про можливості, доступні на заході.",
    },
    {
      title: "Воркшопи",
      description: "Отримайте практичні знання від експертів.",
    },
    {
      title: "Панельна дискусія",
      description: "Послухайте думки спеціалістів із різних галузей.",
    },
    {
      title: "Share and Win",
      description: "Взаємодійте з нашим брендом та отримуйте подарунки.",
    },
    {
      title: "BEST Treasure Hunt",
      description: "Приймайте участь у захопливому квесті.",
    },
    {
      title: "Симуляція співбесід",
      description: "Попрактикуйте навички співбесіди з професіоналами.",
    },
    {
      title: "Нетворкінг",
      description: "Зустрічайте нових друзів і партнерів.",
    },
  ];

  return (
    <div className="activities-container px-6 py-8 bg-gray-50">
      <h2 className="title">Активності</h2>
      <div className="content-wrapper grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Ліва частина — картки */}
        <div className="cards flex flex-col justify-between">
          {cardsData.map((card, index) => (
            <ExpandableCard
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        {/* Права частина — зображення */}
        <div className="images-section grid grid-cols-2 gap-4">
          <img
            src="./images/activities.png"
            alt="Activity 1"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Activities;

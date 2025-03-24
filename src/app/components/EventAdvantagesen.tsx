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

const EventAdvantagesen: React.FC = () => {
  const cardsData: ExpandableCardProps[] = [
    {
      title: "Discover promising talent",
      description:
        "You can personally communicate with students of different faculties, assess their potential and form a database of promising candidates for your current vacancies.",
      icon: "/images/adv_perspective.png",
    },
    {
      title: "Strengthen your brand as an employer",
      description:
        "A career fair is a great opportunity to introduce your company to students, showcase an idea of your corporate culture, core values and career development opportunities.",
      icon: "/images/adv_brand.png",
    },
    {
      title: "Get opportunities to promote your brand",
      description:
        "Interactive activities, such as Share and Win, Treasure Hunt, and others, will help you to engage your audience on social media and increase your brand awareness among students and young professionals.",
      icon: "/images/adv_expectations.png",
    },
    {
      title: "Expand your network of contacts",
      description:
        "Our event is a platform to meet representatives of other companies and establish new partnerships.",
      icon: "/images/adv_web.png",
    },
    {
      title: "Learn about the expectations of young people regarding the job market",
      description:
        "By joining various workshops and panel discussions, you will gain a better understanding of the needs of today's youth. This will facilitate effective cooperation with students in the future.",
      icon: "/images/adv_promo.png",
    },
    {
      title: "Invest in the future and ambitious youth",
      description:
        "This is your chance to help students unlock their career potential, as well as to share the knowledge and experience of your team at our fair activities.",
      icon: "/images/adv_invest.png",
    },
  ];

  return (
    <div className="eventad">
      <h2 className="title">Benefits for you</h2>
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

export default EventAdvantagesen;

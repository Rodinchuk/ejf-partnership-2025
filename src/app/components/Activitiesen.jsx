"use client";
import React, { useState } from "react";
import "./Activities.css";

const ExpandableCard = ({ title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`card ${isExpanded ? "card-expanded" : "card-collapsed"}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <div className={`card-toggle ${isExpanded ? "rotate-180" : ""}`}>
          <img src="./images/toddle.png" alt="toggle" />
        </div>
      </div>
      {isExpanded && <p className="description">{description}</p>}
    </div>
  );
};

const Activitiesen = () => {
  const cardsData = [
    {
      title: "Company Zones",
      description:
        "Special zones where companies present themselves for two hours every day, engage with students and provide information about vacancies and internship opportunities.",
    },
    {
      title: "Workshop",
      description:
        "An interactive event that involves the active participation of students in solving practical problems under the guidance of an expert. This allows them to consolidate their theoretical knowledge and get valuable advice for their future career.",
    },
    {
      title: "Panel discussion",
      description:
        "A panel discussion is an interactive discussion format where a group of experts exchange views on a relevant topic under the guidance of a moderator. Students also join the discussion, asking questions and expressing their views. This allows participants to consider different ideas and find new solutions to current problems.",
    },
    {
      title: "Share and Win",
      description:
        "A fascinating quest where students complete tasks, take quizzes, and get points for doing so. To confirm task completion, students have to post a photo report in their Stories, tagging @best_lviv and your company. The three most active players will receive prizes provided by the companies.",
    },
    {
      title: "BEST Treasure Hunt",
      description:
        "A quest for students that takes place a few days before the event. The main task is to find hidden prizes from partner companies on the territory of Lviv Polytechnic. A prerequisite for receiving a gift is to follow our partners' social media accounts.",
    },
    {
      title: "Simulated interviews",
      description:
        "The activity lasts up to 10 minutes per participant. During the allotted time, students practice real-life interview skills, receive career advice and feedback from company representatives.",
    },
    {
      title: "Networking",
      description:
        "An informal meeting of students, representatives of companies, the university, and organizers that takes place after the first day of the event. This is a time to socialize, discuss social issues such as the development of higher education, or other relevant topics. In addition, you will be able to establish useful contacts with potential partners and employees.",
    },
];


  return (
    <section className="container">
      <h2 className="title">Activities</h2>
      <div className="contentwrapper">
        <div className="cardcontainer">
          {cardsData.map((card, index) => (
            <ExpandableCard
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="pictures">
          <img
            src="./images/hapai.png"
            alt="Activity 1"
            className="activity1"
          />
          <img
            src="./images/activity2.png"
            alt="Activity 2"
            className="activity2"
          />
          <img
            src="./images/investui.png"
            alt="Activity 3"
            className="activity3"
          />
        </div>
      </div>
    </section>
  );
};

export default Activitiesen;
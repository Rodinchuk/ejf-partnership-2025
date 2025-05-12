"use client";
import React, { useState } from "react";
import PackageCarden from "./PackageCarten"; 
import AdditionalService from "./AdditionalService";
import Carten from "./Carten"; 
import { Package, AdditionalService as ServiceType } from "../types/types";
import "@/app/components/PackagesSection.css";
import "@/app/components/AdditionalService.css";
import waveUp from "../../../public/images/bg-hero.png";
import ExtrabigBalls from  "../../../public/images/extrabigballs.png";
import Image from "next/image";

const packages: Package[] = [
  {
    id: "basic",
    name: "Basic",
    price: 350,
    features: [
      "Participation in two days of the event with your own banner",
      "Your logo in the post-project video and on the brand wall",
      "Broadcasting your company’s video during the event",
      "Participation in networking", 
      "Participation in Share and Win",
    ],
    info: `
    <p><b style="font-family: 'Exo 2', sans-serif; font-size: 2em; color: #257BFC">Basic</b></p>
    <p><b style="font-family: 'Exo 2', sans-serif; font-size: 1.2em">Participation in two days of the event with your own banner</b></p>
    <p>You will be provided with a designated space for your banner and promotional materials, as well as the opportunity to engage with students and introduce your brand. If desired, we can help you select interactive quizzes or gladly consider your suggestions.</p>
    <p><b style="font-family: 'Exo 2', sans-serif; font-size: 1.2em">Your logo in the post-event video and on the brand wall</b></p>
    <p>Logo in the post-event video — Placing your logo in the post-video of the event venue on our Instagram page. Logo on the brand wall — Your logo will be placed on a large banner at the event along with the logos of other partner companies.</p>
    <p><b style="font-family: 'Exo 2', sans-serif; font-size: 1.2em">Broadcasting your company video during the event</b></p>
    <p>Several screens will be set up at the event venue to display company videos. The necessary video materials (25–30 seconds long) are provided by the participating company.</p>
    <p><b style="font-family: 'Exo 2', sans-serif; font-size: 1.2em">Participation in networking</b></p>
    <p>An informal meeting between representatives of companies, participants, and organizers, which can be a great opportunity for a company to find new interesting contacts.</p>
    <p><b style="font-family: 'Exo 2', sans-serif; font-size: 1.2em">Share and Win</b></p>
    <p>An interactive game during the event designed to boost your brand’s visibility during the event. Participants complete tasks using a Telegram bot and post photo reports in Stories with @best_lviv and your profile. This will help you reach a wider audience and strengthen your company's brand. The three most active participants will receive gifts from you!</p>
  `,
},
  
  {
    id: "interactive",
    name: "Interactive",
    price: 300,
    features: [
      "Panel discussion",
      "Participation in the BEST Treasure Hunt",
      "Pinned Instagram stories",
    ],
    info: `
      <p><b style="font-family: 'Exo 2', sans-serif; font-size: 2em; color: #257BFC">Interactive</b></p>
      <p><b style="font-family: 'Exo 2', sans-serif; font-size: 1.2em">Panel discussion</b></p>
      <p>The panel discussion allows us to present different perspectives on the topic of discussion selected by us for the participating partners. The moderator will act as an intermediary between the students and the speakers, promoting efficiency and interaction for all participants.</p>
      <p><b style="font-family: 'Exo 2', sans-serif; font-size: 1.2em">BEST Treasure Hunt</b></p>
      <p>Two days before the event, students will be able to take part in a “Treasure Hunt”. Hints about prize locations will be posted on the @best_lviv Instagram page, and the organizers will hide the awards from the partners around the territory of Lviv Polytechnic.</p>
      <p><b style="font-family: 'Exo 2', sans-serif; font-size: 1.2em">Pinned Instagram stories</b></p>
      <p>Promotion of the company through 2 Instagram Stories on the official @best_lviv page. These Stories will later be added to the 'Partners' highlight and will remain there for 3 months after the event.</p>
    `,
  },
  {
    id: "performer",
    name: "Performer",
    price: 400,
    features: [
      "Conducting a workshop",
      "Publication of an article about the company on the BEST Lviv website",
      "Posting an individual post about the company on Instagram",
    ],
    info: `
      <p><b style="font-family: 'Exo 2', sans-serif; font-size: 2em; color: #257BFC">Performer</b></p>
      <p><b style="font-family: 'Exo 2', sans-serif; font-size: 1.2em">Conducting a workshop</b></p>
      <p>An educational event where company representatives engage participants in an interactive format, helping them develop skills and knowledge that will be valuable for their future careers.</p>
      <p><b style="font-family: 'Exo 2', sans-serif; font-size: 1.2em">Publication of an article about the company on the BEST Lviv website</b></p>
      <p>Our website will publish information about your company, its mission and successes based on the materials you provide.</p>
      <p><b style="font-family: 'Exo 2', sans-serif; font-size: 1.2em">Posting an individual post about the company on Instagram</b></p>
      <p>A photo showcasing the company's work environment along with a description of its activities on the @best_lviv profile.</p>
    `,
  },
];


const additionalServices: ServiceType[] = [
{
    id: "treasure-hunt",
    name: "BEST Treasure Hunt",
    price: 160,
    info: `
    <p><b>Participation in the BEST Treasure Hunt</b></p>
    <p>Students participate in an exciting treasure hunt on the territory of Lviv Polytechnic, guided by hints from Instagram @best_lviv.</p>
  `,
},
      {
        id: "interview-simulation",
        name: "Interview simulation",
        price: 130,
        info: `
          <p><b>Interview simulation</b></p>
          <p>Registered students will have the opportunity to participate in short interviews of up to 10 minutes conducted by company representatives. Partners can also tell the participants about internships or vacancies within their company.</p>
        `,
      },
      {
        id: "telegram-promo",
        name: "Promotion of the company's career opportunities in the event's Telegram bot",
        price: 120,
        info: `
          <p><b>Promotion of the company's career opportunities in the event's Telegram bot</b></p>
          <p>Notify students about internships, training courses, or open positions through a Telegram event bot.</p>
        `,
      },
      {
        id: "cv-access",
        name: "Access to the participants' CV database",
        price: 110,
        info: `
          <p><b>Access to the participants' CV database</b></p>
          <p>A database of CVs of students who have pre-registered via the event's Telegram bot. This is direct access to promising candidates who can become key specialists in your company.</p>
        `,
      },
      {
        id: "website-article",
        name: "Article about the company on the BEST Lviv website",
        price: 100,
        info: `
          <p><b>Article about the company on the BEST Lviv website</b></p>
          <p>Our website will publish information about your company, its mission and successes based on the materials you provide.</p>
        `,
      },
      {
        id: "instagram-stories",
        name: "Pinned Instagram stories",
        price: 80,
        info: `
          <p><b>Pinned Instagram stories</b></p>
          <p>Promotion of the company in 2 Instagram stories on the official @best_lviv page. Later, these stories are added to the pinned ones called “partners” and will remain there for a month after the event.</p>
        `,
      },
      {
        id: "linkedin-post",
        name: "Individual post about the company on LinkedIn",
        price: 80,
        info: `
          <p><b>Individual post about the company on LinkedIn</b></p>
          <p>This format is suitable for briefly and concisely presenting the key advantages of your company on the page of the student organization BEST Lviv.</p>
        `,
      },
      {
        id: "workshop",
        name: "Conducting a workshop ",
        price: 200,
        info: `
        <p><b>Conducting a workshop</b> </p>
    
          <p>An educational event where company representatives help participants develop skills and knowledge important for their careers.</p>
      `,
    },
    {
      id: "panel-discussion",
      name: "Panel discussion",
      price: 150,
      info: `
      <p><b>Panel discussion</b></p>
      <p>A discussion on a selected topic between students and speakers. A moderator facilitates interaction among all participants.</p>
    `,
  },
    ];

const PackagesSection = () => {
  const [selectedPackages, setSelectedPackages] = useState<Package[]>([packages[0]]);
  const [selectedServices, setSelectedServices] = useState<ServiceType[]>([]);
  const [modalContent, setModalContent] = useState<string | null>(null);

  const handlePackageSelect = (id: string) => {
    const pkg = packages.find((p) => p.id === id);
    if (!pkg) return;

    setSelectedPackages((prev) => {
      if (prev.some((p) => p.id === id)) {
        return prev.filter((p) => p.id !== id);
      }
      return [...prev, pkg];
    });
  };

  const handleServiceSelect = (id: string) => {
    const service = additionalServices.find((s) => s.id === id);
    if (!service) return;

    setSelectedServices((prev) => {
      if (prev.some((s) => s.id === id)) {
        return prev.filter((s) => s.id !== id);
      }
      return [...prev, service];
    });
  };

  const handleRemove = (id: string) => {
    setSelectedPackages((prev) => prev.filter((p) => p.id !== id));
    setSelectedServices((prev) => prev.filter((s) => s.id !== id));
  };

  const handleInfoClick = (info: string | undefined) => {
    if (info) {
      setModalContent(info);
    }
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="packages-section">
      <Image className="extrabigballs" src={ExtrabigBalls} alt="exrtabigballs"></Image>
      
      <div className="packpack">
      <Image className="package-wave-up" src={waveUp} alt="wave" />
      <div className="container">
        <h2 id="partnership" className="section-title">
          Offers
        </h2>
        <div className="packages-grid">
        <PackageCarden
  pkg={packages[0]}
  isSelected={true}
  onSelect={() => {}}
  isBasic={true}
  onInfoClick={() => handleInfoClick(packages[0].info)}
/>
{packages.slice(1).map((pkg, index) => (
  <PackageCarden
    key={pkg.id}
    pkg={pkg}
    isSelected={selectedPackages.some((p) => p.id === pkg.id)}
    onSelect={() => handlePackageSelect(pkg.id)}
    onInfoClick={() => handleInfoClick(pkg.info)}
    isLast={index === packages.length - 2}
  />
))}

        </div>

        <h3 className="section-subtitle">Additional options</h3>

        <div className="additional-services-container">
          {additionalServices.map((service, index) => (
            <AdditionalService
              key={service.id}
              service={service}
              isSelected={selectedServices.some((s) => s.id === service.id)}
              onSelect={() => handleServiceSelect(service.id)}
              onInfoClick={() => handleInfoClick(service.info)}
              isSoldOut={index >= additionalServices.length - 2} 


            />
          ))}
        </div>

        <div className="cart-container">
          <Carten selectedPackages={selectedPackages} additionalServices={selectedServices} onRemove={handleRemove} />
        </div>
      </div>

      {modalContent && (
        <div className="modal-overlay" onClick={closeModal}> 

          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-scrollable-content" dangerouslySetInnerHTML={{ __html: modalContent }}>
            </div>
          <button className="modal-close-button" onClick={closeModal}>Close
          </button>
          </div>
        </div>
      )}
      <Image className="package-wave-down" src={waveUp} alt="wave" />
      <div className="army-text"><p className="army-text-content"><b>10%</b> of the proceeds will go to help the Ukrainian Armed Forces!</p></div>
    </div>
    </div>
    
  );
};

export default PackagesSection;

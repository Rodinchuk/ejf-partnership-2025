"use client";
import React, { useState } from "react";
import PackageCard from "./PackageCart"; // Переконайтеся, що назва файлу правильна
import AdditionalService from "./AdditionalService";
import Cart from "./Cart"; // Додаю компонент Cart назад
import { Package, AdditionalService as ServiceType } from "../types/types";
import "@/app/components/PackagesSection.css";
import "@/app/components/AdditionalService.css";
import waveUp from "../../../public/images/bg-hero.png";
import Image from "next/image";

const packages: Package[] = [
  {
    id: "basic",
    name: "Basic",
    price: 350,
    features: [
      "Участь у двох днях події з власним банером",
      "Ваш логотип у постпроєктному відео та на brand wall",
      "Транслювання відеоролика компанії під час події",
      "Участь у нетворкінгу",
      "Share and Win",
    ],
    info: `
      <p><b>Участь у двох днях події з власним банером:</b> За Вами буде закріплено місце для розміщення банера та промоматеріалів, а також надано можливість поспілкуватися зі студентами, щоб представити бренд. Ми допоможемо підібрати інтерактивні вікторини або розглянемо Ваші пропозиції.</p>
      <p><b>Ваш логотип у постпроєктному відео та на brand wall:</b> Логотип буде розміщено у поствідео події та на великому банері разом із логотипами партнерів.</p>
      <p><b>Транслювання відеоролика компанії під час події:</b> На місці події будуть екрани для трансляції відеороликів (тривалість 25-30 секунд).</p>
      <p><b>Участь у нетворкінгу:</b> Зустріч представників компаній із учасниками та організаторами в неформальній атмосфері.</p>
      <p><b>Share and Win:</b> Інтерактивна гра для популяризації бренду. Учасники виконують завдання через Telegram-бот і публікують Stories із позначками @best_lviv.</p>
    `,
  },
  {
    id: "interactive",
    name: "Interactive",
    price: 300,
    features: [
      "Панельна дискусія",
      "BEST Treasure Hunt",
      "Закріплені Instagram stories",
    ],
    info: `
      <p><b>Панельна дискусія:</b> Обговорення підібраної теми між студентами та спікерами. Модератор допомагає взаємодіяти з усіма учасниками.</p>
      <p><b>BEST Treasure Hunt:</b> За два дні до події студенти шукають призи на території Львівської Політехніки за підказками в Instagram @best_lviv.</p>
      <p><b>Закріплені Instagram stories:</b> Промоція компанії у 2 Stories на офіційній сторінці, які залишаються впродовж 3 місяців.</p>
    `,
  },
  {
    id: "performer",
    name: "Performer",
    price: 400,
    features: [
      "Проведення воркшопу",
      "Публікація статті про компанію на сайті",
      "Розміщення індивідуального поста про компанію в Instagram",
    ],
    info: `
      <p><b>Проведення воркшопу:</b> Навчальний захід, де представники компанії допомагають учасникам розвиватися в темі, важливій для їхньої кар’єри.</p>
      <p><b>Публікація статті про компанію на сайті:</b> Інформація про вашу компанію, її місію та успіхи буде опублікована на нашому сайті.</p>
      <p><b>Розміщення індивідуального поста про компанію в Instagram:</b> Фото з описом діяльності компанії на сторінці @best_lviv.</p>
    `,
  },
];

const additionalServices: ServiceType[] = [
  {
    id: "interview-simulation",
    name: "Симуляція співбесід",
    price: 130,
    info: `
    <p><b>Симуляція співбесід</b></p>
    <p>Зареєстровані студенти беруть участь у коротких співбесідах тривалістю до 10 хвилин. Представники компанії можуть розповісти про стажування чи вакансії.</p>

    <p><b>BEST Treasure Hunt</b></p>
    <p>Студенти беруть участь у захопливому пошуку призів на території Львівської Політехніки за підказками з Instagram @best_lviv.</p>

    <p><b>Доступ до CV учасників</b></p>
    <p>Партнери отримують доступ до бази CV студентів, які зареєструвалися через Telegram-бот події.</p>

    <p><b>Публікація статті про компанію на сайті</b></p>
    <p>Інформація про вашу компанію, її місію та успіхи буде опублікована на нашому сайті.</p>

    <p><b>Промоція в Telegram-боті</b></p>
    <p>Студенти отримують інформацію про стажування, курси чи вакансії вашої компанії через Telegram-бот.</p>

    <p><b>Закріплені Instagram stories</b></p>
    <p>Промоція у 2 Stories на офіційній сторінці @best_lviv, які залишаються протягом місяця.</p>

    <p><b>Індивідуальний пост у LinkedIn</b></p>
    <p>Представлення ключових переваг вашої компанії у форматі поста на сторінці BEST Lviv.</p>
  `,},

  {
    id: "treasure-hunt",
    name: "BEST Treasure Hunt",
    price: 160,
    info: `
    <p><b>Симуляція співбесід</b></p>
    <p>Зареєстровані студенти беруть участь у коротких співбесідах тривалістю до 10 хвилин. Представники компанії можуть розповісти про стажування чи вакансії.</p>

    <p><b>BEST Treasure Hunt</b></p>
    <p>Студенти беруть участь у захопливому пошуку призів на території Львівської Політехніки за підказками з Instagram @best_lviv.</p>

    <p><b>Доступ до CV учасників</b></p>
    <p>Партнери отримують доступ до бази CV студентів, які зареєструвалися через Telegram-бот події.</p>

    <p><b>Публікація статті про компанію на сайті</b></p>
    <p>Інформація про вашу компанію, її місію та успіхи буде опублікована на нашому сайті.</p>

    <p><b>Промоція в Telegram-боті</b></p>
    <p>Студенти отримують інформацію про стажування, курси чи вакансії вашої компанії через Telegram-бот.</p>

    <p><b>Закріплені Instagram stories</b></p>
    <p>Промоція у 2 Stories на офіційній сторінці @best_lviv, які залишаються протягом місяця.</p>

    <p><b>Індивідуальний пост у LinkedIn</b></p>
    <p>Представлення ключових переваг вашої компанії у форматі поста на сторінці BEST Lviv.</p>
  `,},

  {
    id: "cv-access",
    name: "Доступ до CV учасників",
    price: 110,
    info: `
    <p><b>Симуляція співбесід</b></p>
    <p>Зареєстровані студенти беруть участь у коротких співбесідах тривалістю до 10 хвилин. Представники компанії можуть розповісти про стажування чи вакансії.</p>

    <p><b>BEST Treasure Hunt</b></p>
    <p>Студенти беруть участь у захопливому пошуку призів на території Львівської Політехніки за підказками з Instagram @best_lviv.</p>

    <p><b>Доступ до CV учасників</b></p>
    <p>Партнери отримують доступ до бази CV студентів, які зареєструвалися через Telegram-бот події.</p>

    <p><b>Публікація статті про компанію на сайті</b></p>
    <p>Інформація про вашу компанію, її місію та успіхи буде опублікована на нашому сайті.</p>

    <p><b>Промоція в Telegram-боті</b></p>
    <p>Студенти отримують інформацію про стажування, курси чи вакансії вашої компанії через Telegram-бот.</p>

    <p><b>Закріплені Instagram stories</b></p>
    <p>Промоція у 2 Stories на офіційній сторінці @best_lviv, які залишаються протягом місяця.</p>

    <p><b>Індивідуальний пост у LinkedIn</b></p>
    <p>Представлення ключових переваг вашої компанії у форматі поста на сторінці BEST Lviv.</p>
  `,},

  {
    id: "website-article",
    name: "Публікація статті про компанію на сайті",
    price: 90,
    info: `
    <p><b>Симуляція співбесід</b></p>
    <p>Зареєстровані студенти беруть участь у коротких співбесідах тривалістю до 10 хвилин. Представники компанії можуть розповісти про стажування чи вакансії.</p>

    <p><b>BEST Treasure Hunt</b></p>
    <p>Студенти беруть участь у захопливому пошуку призів на території Львівської Політехніки за підказками з Instagram @best_lviv.</p>

    <p><b>Доступ до CV учасників</b></p>
    <p>Партнери отримують доступ до бази CV студентів, які зареєструвалися через Telegram-бот події.</p>

    <p><b>Публікація статті про компанію на сайті</b></p>
    <p>Інформація про вашу компанію, її місію та успіхи буде опублікована на нашому сайті.</p>

    <p><b>Промоція в Telegram-боті</b></p>
    <p>Студенти отримують інформацію про стажування, курси чи вакансії вашої компанії через Telegram-бот.</p>

    <p><b>Закріплені Instagram stories</b></p>
    <p>Промоція у 2 Stories на офіційній сторінці @best_lviv, які залишаються протягом місяця.</p>

    <p><b>Індивідуальний пост у LinkedIn</b></p>
    <p>Представлення ключових переваг вашої компанії у форматі поста на сторінці BEST Lviv.</p>
  `,},

  {
    id: "telegram-promo",
    name: "Промоція в Telegram-боті",
    price: 100,
    info: `
    <p><b>Симуляція співбесід</b></p>
    <p>Зареєстровані студенти беруть участь у коротких співбесідах тривалістю до 10 хвилин. Представники компанії можуть розповісти про стажування чи вакансії.</p>

    <p><b>BEST Treasure Hunt</b></p>
    <p>Студенти беруть участь у захопливому пошуку призів на території Львівської Політехніки за підказками з Instagram @best_lviv.</p>

    <p><b>Доступ до CV учасників</b></p>
    <p>Партнери отримують доступ до бази CV студентів, які зареєструвалися через Telegram-бот події.</p>

    <p><b>Публікація статті про компанію на сайті</b></p>
    <p>Інформація про вашу компанію, її місію та успіхи буде опублікована на нашому сайті.</p>

    <p><b>Промоція в Telegram-боті</b></p>
    <p>Студенти отримують інформацію про стажування, курси чи вакансії вашої компанії через Telegram-бот.</p>

    <p><b>Закріплені Instagram stories</b></p>
    <p>Промоція у 2 Stories на офіційній сторінці @best_lviv, які залишаються протягом місяця.</p>

    <p><b>Індивідуальний пост у LinkedIn</b></p>
    <p>Представлення ключових переваг вашої компанії у форматі поста на сторінці BEST Lviv.</p>
  `,},

  {
    id: "instagram-stories",
    name: "Закріплені Instagram stories",
    price: 120,
    info: `
    <p><b>Симуляція співбесід</b></p>
    <p>Зареєстровані студенти беруть участь у коротких співбесідах тривалістю до 10 хвилин. Представники компанії можуть розповісти про стажування чи вакансії.</p>

    <p><b>BEST Treasure Hunt</b></p>
    <p>Студенти беруть участь у захопливому пошуку призів на території Львівської Політехніки за підказками з Instagram @best_lviv.</p>

    <p><b>Доступ до CV учасників</b></p>
    <p>Партнери отримують доступ до бази CV студентів, які зареєструвалися через Telegram-бот події.</p>

    <p><b>Публікація статті про компанію на сайті</b></p>
    <p>Інформація про вашу компанію, її місію та успіхи буде опублікована на нашому сайті.</p>

    <p><b>Промоція в Telegram-боті</b></p>
    <p>Студенти отримують інформацію про стажування, курси чи вакансії вашої компанії через Telegram-бот.</p>

    <p><b>Закріплені Instagram stories</b></p>
    <p>Промоція у 2 Stories на офіційній сторінці @best_lviv, які залишаються протягом місяця.</p>

    <p><b>Індивідуальний пост у LinkedIn</b></p>
    <p>Представлення ключових переваг вашої компанії у форматі поста на сторінці BEST Lviv.</p>
  `,},

  {
    id: "linkedin-post",
    name: "Індивідуальний пост про компанію в LinkedIn",
    price: 150,
    info: `
    <p><b>Симуляція співбесід</b></p>
    <p>Зареєстровані студенти беруть участь у коротких співбесідах тривалістю до 10 хвилин. Представники компанії можуть розповісти про стажування чи вакансії.</p>

    <p><b>BEST Treasure Hunt</b></p>
    <p>Студенти беруть участь у захопливому пошуку призів на території Львівської Політехніки за підказками з Instagram @best_lviv.</p>

    <p><b>Доступ до CV учасників</b></p>
    <p>Партнери отримують доступ до бази CV студентів, які зареєструвалися через Telegram-бот події.</p>

    <p><b>Публікація статті про компанію на сайті</b></p>
    <p>Інформація про вашу компанію, її місію та успіхи буде опублікована на нашому сайті.</p>

    <p><b>Промоція в Telegram-боті</b></p>
    <p>Студенти отримують інформацію про стажування, курси чи вакансії вашої компанії через Telegram-бот.</p>

    <p><b>Закріплені Instagram stories</b></p>
    <p>Промоція у 2 Stories на офіційній сторінці @best_lviv, які залишаються протягом місяця.</p>

    <p><b>Індивідуальний пост у LinkedIn</b></p>
    <p>Представлення ключових переваг вашої компанії у форматі поста на сторінці BEST Lviv.</p>
  `,},


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
      <Image className="package-wave-up" src={waveUp} alt="wave" />
      <div className="container">
        <h2 id="partnership" className="section-title">
          Пакети пропозицій
        </h2>
        <div className="packages-grid">
          <PackageCard
            pkg={packages[0]}
            isSelected={true}
            onSelect={() => {}}
            isBasic={true}
            onInfoClick={() => handleInfoClick(packages[0].info)}
          />
          {packages.slice(1).map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              isSelected={selectedPackages.some((p) => p.id === pkg.id)}
              onSelect={() => handlePackageSelect(pkg.id)}
              onInfoClick={() => handleInfoClick(pkg.info)}
            />
          ))}
        </div>

        <h3 className="section-subtitle">Додаткові опції</h3>

        <div className="additional-services-container">
          {additionalServices.map((service) => (
            <AdditionalService
              key={service.id}
              service={service}
              isSelected={selectedServices.some((s) => s.id === service.id)}
              onSelect={() => handleServiceSelect(service.id)}
              onInfoClick={() => handleInfoClick(service.info)}
            />
          ))}
        </div>

        <div className="cart-container">
          <Cart selectedPackages={selectedPackages} additionalServices={selectedServices} onRemove={handleRemove} />
        </div>
      </div>

      {modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-scrollable-content" dangerouslySetInnerHTML={{ __html: modalContent }}></div>
            <button className="modal-close-button" onClick={closeModal}>
              Закрити
            </button>
          </div>
        </div>
      )}
      <Image className="package-wave-down" src={waveUp} alt="wave" />
    </div>
  );
};

export default PackagesSection;

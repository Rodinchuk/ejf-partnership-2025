"use client";
import React, { useState } from 'react';
import PackageCard from './PackageCart';
import AdditionalService from './AdditionalService';
import Cart from './Cart';
import { Package, AdditionalService as ServiceType } from '../types/types';
import "@/app/components/PackagesSection.css";
import "@/app/components/AdditionalService.css";

const packages: Package[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 350,
    features: [
      'Участь у двох днях події з власним банером',
      'Транслювання відеоролика компанії під час події',
      'Участь у нетворкінгу',
      'Симуляція співбесід',
      'Участь у Share and Win'
    ],
    info: 'Базовий пакет включає всі основні можливості для ефективної участі у події'
  },
  {
    id: 'interactive',
    name: 'Interactive',
    price: 300,
    features: [
      'Панельна дискусія',
      'Участь у BEST Treasure Hunt',
      'Закріплені Instagram stories'
    ],
    info: 'Інтерактивний пакет для компаній, які хочуть більше взаємодіяти з учасниками'
  },
  {
    id: 'performer',
    name: 'Performer',
    price: 400,
    features: [
      'Проведення воркшопу',
      'Опублікування статті про компанію на сайті BEST Lviv',
      'Розміщення індивідуального поста про компанію в Instagram'
    ],
    info: 'Розширений пакет для максимальної присутності та впливу на події'
  }
];

const additionalServices: ServiceType[] = [
  { id: 'treasure-hunt', name: 'Участь у BEST Treasure Hunt', price: 160, info: 'Інтерактивна гра для залучення студентів' },
  { id: 'simulation', name: 'Симуляція співбесід', price: 130, info: 'Можливість провести симуляції співбесід з потенційними кандидатами' },
  { id: 'cv-access', name: 'Доступ до бази CV учасників', price: 110, info: 'Отримайте доступ до бази резюме всіх учасників події' },
  { id: 'telegram', name: "Промоція кар'єрних можливостей компанії в Telegram-боті події", price: 120, info: 'Розміщення інформації про вакансії та можливості в офіційному боті події' },
  { id: 'article', name: 'Стаття про компанію на сайті BEST Lviv', price: 90, info: 'Публікація детальної статті про вашу компанію на нашому сайті' },
  { id: 'linkedin', name: 'Індивідуальний пост про компанію в LinkedIn', price: 80, info: 'Окремий пост про вашу компанію в нашій LinkedIn спільноті' },
  { id: 'instagram', name: 'Закріплені Instagram stories', price: 80, info: 'Закріплені stories про вашу компанію в нашому Instagram' }
];
const PackagesSection = () => {
  const [selectedPackages, setSelectedPackages] = useState<Package[]>([packages[0]]);
  const [selectedServices, setSelectedServices] = useState<ServiceType[]>([]);
  const [modalContent, setModalContent] = useState<string | null>(null);

  const handlePackageSelect = (id: string) => {
    const pkg = packages.find(p => p.id === id);
    if (!pkg) return;

    setSelectedPackages(prev => {
      if (prev.some(p => p.id === id)) {
        return prev.filter(p => p.id !== id);
      }
      return [...prev, pkg];
    });
  };

  const handleServiceSelect = (id: string) => {
    const service = additionalServices.find(s => s.id === id);
    if (!service) return;

    setSelectedServices(prev => {
      if (prev.some(s => s.id === id)) {
        return prev.filter(s => s.id !== id);
      }
      return [...prev, service];
    });
  };

  const handleRemove = (id: string) => {
    setSelectedPackages(prev => prev.filter(p => p.id !== id));
    setSelectedServices(prev => prev.filter(s => s.id !== id));
  };

  const handleInfoClick = (info: string | undefined) => {
    if (info) {
      setModalContent(info); // Now we ensure that 'info' is a valid string
    }
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <section  className="packages-section">
      <div className="container">
        <h2 id="partnership"  className="section-title">Пакети пропозицій</h2>

        <div className="packages-grid">
          <PackageCard
            pkg={packages[0]}
            isSelected={true}
            onSelect={() => {}}
            isBasic={true}
            onInfoClick={() => handleInfoClick(packages[0].info)}
          />
          {packages.slice(1).map(pkg => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              isSelected={selectedPackages.some(p => p.id === pkg.id)}
              onSelect={() => handlePackageSelect(pkg.id)}
              onInfoClick={() => handleInfoClick(pkg.info)}
            />
          ))}
        </div>

        <h3 className="section-subtitle">Додаткові опції</h3>

        <div className="additional-services-container">
          {additionalServices.map(service => (
            <div className="additional-service-item" key={service.id}>
              <AdditionalService
                service={service}
                isSelected={selectedServices.some(s => s.id === service.id)}
                onSelect={() => handleServiceSelect(service.id)}
                onInfoClick={() => handleInfoClick(service.info)}
              />
            </div>
          ))}
        </div>

        <div className="cart-container">
          <Cart selectedPackages={selectedPackages} additionalServices={selectedServices} onRemove={handleRemove} />
        </div>
      </div>

      {modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <p>{modalContent}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PackagesSection;

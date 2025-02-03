"use client";
import React from 'react';
import { Button } from './ui/button';
import { Package } from '../types/types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import "@/app/components/PackageCart.css";

interface PackageCardProps {
  pkg: Package;
  isSelected: boolean;
  onSelect: (id: string) => void;
  isBasic?: boolean;
  onInfoClick?: () => void; // Додано новий пропс
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg, isSelected, onSelect, isBasic, onInfoClick }) => {
  return (
    <div className={`glass-card package-card ${isSelected ? 'selected' : ''}`}>
      <div className="package-header">
        <div>
          <h3>{pkg.name}</h3>
          <p className="price">${pkg.price}</p>
        </div>
        {pkg.info && (
          <Dialog>
            <DialogTrigger asChild>
              <button className="info-button" onClick={onInfoClick}><img src="./images/info.png"/></button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{pkg.name}</DialogTitle>
                <DialogDescription>{pkg.info}</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
      </div>
      <ul className="feature-list">
        {pkg.features.map((feature, index) => (
          <li key={index}>
            <span className="bullet">•</span>
            {feature}
          </li>
        ))}
      </ul>
      {!isBasic && (
        <Button className='cartbutton'
          variant={isSelected ? "secondary" : "default"}
          onClick={() => onSelect(pkg.id)}
        >
          {isSelected ? 'Прибрати з кошика' : 'У кошик'}
        </Button>
      )}
      {isBasic && (
        <div className="basic-note">
          Обов'язковий пакет
        </div> )}
    </div>
  );
};

export default PackageCard;
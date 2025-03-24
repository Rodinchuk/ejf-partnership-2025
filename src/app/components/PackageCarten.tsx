"use client";
import React from 'react';
import { Button } from './ui/button';
import { Package } from '../types/types';
import {
  Dialog,
  DialogTrigger,
} from "./ui/dialog";
import Image from 'next/image'; 
import "@/app/components/PackageCart.css";

interface PackageCardProps {
  pkg: Package;
  isSelected: boolean;
  onSelect: (id: string) => void;
  isBasic?: boolean;
  onInfoClick?: () => void;
  isLast?: boolean;
}

const PackageCarden: React.FC<PackageCardProps> = ({ pkg, isSelected, onSelect, isBasic, onInfoClick, isLast }) => {
  return (
    <div className={`glass-card package-card ${isSelected ? 'selected' : ''}`} onClick={() => onSelect(pkg.id)}>
      <div className="package-header">
        <div>
          <h3>{pkg.name}</h3>
          <p className="price">${pkg.price}</p>
        </div>
        {pkg.info && (
          <Dialog>
            <DialogTrigger asChild>
              <button className="info-button" onClick={onInfoClick}>
                <Image src="/images/info.png" alt="Package information" width={20} height={20} /> 
              </button>
            </DialogTrigger>
            {/* <DialogContent>
              <DialogHeader>
                <DialogTitle>{pkg.name}</DialogTitle>
                <DialogDescription>{pkg.info}</DialogDescription>
              </DialogHeader>
            </DialogContent> */}
          </Dialog>
        )}
      </div>
      {isLast && (
        <div className="basic-note">
          Limit 2 pcs.
        </div>
      )}
      {isBasic && (
        <div className="basic-note">
          Mandatory
        </div>
      )}
      <ul className="feature-list">
        {pkg.features.map((feature, index) => (
          <li key={index}>
            <span className="bullet">•</span>
            {feature}
          </li>
        ))}
      </ul>
      {!isBasic && (
        <div className='package-card-footer'>
          <Button
            className={`cartbutton ${isSelected ? "selected" : ""}`}
            variant={isSelected ? "secondary" : "default"}
          >
            <Image className={`cartsvg ${isSelected ? "selected" : ""}`} src="/images/cart.svg" alt="cartsvg" width={20} height={20} /> 
            {isSelected ? "Remove from cart" : "Add to cart"}
          </Button>
        </div>
      )}
      
    
    </div>
  );
};

export default PackageCarden;

import React from 'react';
import { Button } from './ui/button';
import Image from "next/image";
import { AdditionalService as ServiceType } from '../types/types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface AdditionalServiceProps {
  service: ServiceType;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onInfoClick?: () => void;
}

const AdditionalService: React.FC<AdditionalServiceProps> = ({ service, isSelected, onSelect }) => {
  return (
    <div className="service-content">
      <div className="service-indicator-wrapper">
        <Button 
          variant={isSelected ? "secondary" : "default"}
          onClick={() => onSelect(service.id)}
        >
          Select
        </Button>
        <div className={`service-indicator ${isSelected ? 'selected' : ''}`} />
      </div>

      <div className="service-info">
        <span>{service.name}</span>
        {service.info && (
          <Dialog>
            <DialogTrigger asChild>
              <button className="info-button">
                <Image src="/images/info.png" alt="Information icon" width={24} height={24} />
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{service.name}</DialogTitle>
                <DialogDescription>{service.info}</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <div className="service-actions">
        <span className="service-price">${service.price}</span>
      </div>
    </div>
  );
};

export default AdditionalService;

import React from 'react';
import { Button } from './ui/button';
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

const AdditionalService: React.FC<AdditionalServiceProps> = ({ service, isSelected, onSelect, onInfoClick }) => {
  return (
    <div className="glass-card service-card">
      <div className="service-content">
        <div className="service-info">
          <div className={`service-indicator ${isSelected ? 'selected' : ''}`} />
          <span>{service.name}</span>
          {service.info && (
            <Dialog>
              <DialogTrigger asChild>
                <button className="info-button" onClick={onInfoClick}>ⓘ</button>
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
          <Button
            variant={isSelected ? "secondary" : "default"}
            onClick={() => onSelect(service.id)}
          >
            {isSelected ? 'Вибрано' : 'Вибрати'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdditionalService;

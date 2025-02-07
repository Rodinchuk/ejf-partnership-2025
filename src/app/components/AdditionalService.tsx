import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { AdditionalService as ServiceType } from "../types/types";

interface AdditionalServiceProps {
  service: ServiceType;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onInfoClick?: (info: string | undefined) => void;
  // Нові пропси для редагування стилів:
  className?: string;
  style?: React.CSSProperties;
}

const AdditionalService: React.FC<AdditionalServiceProps> = ({
  service,
  isSelected,
  onSelect,
  onInfoClick,
  className = "",
  style = {},
}) => {
  return (
    <Button
      variant={isSelected ? "secondary" : "default"}
      onClick={() => onSelect(service.id)}
      className={`additional-option ${isSelected ? "selected" : ""} ${className}`}
      style={style}
    >
      <div className="service-content">
        <div className="service-indicator-wrapper">
          <div
            className={`service-indicator ${isSelected ? "selected" : ""}`}
          />
        </div>
        <div className="service-info">
          <span>{service.name}</span>
        </div>
      </div>
      <div className="service-actions">
        <span className="service-price">${service.price}</span>
        {service.info && (
          <div
            className="info-button"
            onClick={(e) => {
              e.stopPropagation();
              onInfoClick && onInfoClick(service.info);
            }}
          >
            <Image
              src="/images/info.png"
              alt="Information icon"
              width={24}
              height={24}
            />
          </div>
        )}
      </div>
    </Button>
  );
};

export default AdditionalService;

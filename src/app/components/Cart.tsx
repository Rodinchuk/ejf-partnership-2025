"use client";
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Package, AdditionalService } from '../types/types';
import emailjs from '@emailjs/browser';

emailjs.init('nH1slg9lPzjgOixSC');

import { toast } from './ui/use-toast';
import '@/app/components/Cart.css';



interface CartProps {
  selectedPackages: Package[];
  additionalServices: AdditionalService[];
  onRemove: (id: string) => void;
}

const Cart: React.FC<CartProps> = ({ selectedPackages, additionalServices, onRemove }) => {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');

  const calculateTotal = () => {
    const baseTotal = [...selectedPackages, ...additionalServices].reduce(
      (sum, item) => sum + item.price,
      0
    );

    const additionalPackagesCount = selectedPackages.length - 1;
    const additionalServicesCount = additionalServices.length;

    if (additionalPackagesCount >= 2) {
      return baseTotal * 0.95;
    } else if (additionalServicesCount >= 3) {
      return baseTotal * 0.95;
    }

    return baseTotal;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const templateParams = {
        company_name: companyName,
        email: email,
        packages: selectedPackages.map(p => p.name).join(', '),
        additional_services: additionalServices.map(s => s.name).join(', '),
        total: calculateTotal()
      };

      await emailjs.send(
        'service_7xshe0s',
        'template_lap52fe',
        templateParams,
        'nH1slg9lPzjgOixSC'
      );

      toast({
        title: "Дякуємо!",
        description: "Ми зв'яжемося з вами найближчим часом.",
      });
    } catch (error) {
      console.error("Email sending error:", error);
      toast({
        title: "Помилка!",
        description: "Щось пішло не так. Спробуйте ще раз.",
        variant: "destructive"
      });
    }
    
  };

  const total = calculateTotal();
  const originalTotal = [...selectedPackages, ...additionalServices].reduce(
    (sum, item) => sum + item.price,
    0
  );
  const hasDiscount = total !== originalTotal;

  return (
    <div>
      <h2>Кошик</h2>
      
      <div className="form-group">
        {selectedPackages.map(pkg => (
          <div key={pkg.id} className="cart-item">
            <span>{pkg.name}</span>
            <div className="cart-item-actions">
              <span>${pkg.price}</span>
              {pkg.name !== 'Basic' && (
                <button
                  data-variant="ghost"
                  onClick={() => onRemove(pkg.id)}
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        ))}

        {additionalServices.map(service => (
          <div key={service.id} className="cart-item">
            <span>{service.name}</span>
            <div className="cart-item-actions">
              <span>${service.price}</span>
              <button
                data-variant="ghost"
                onClick={() => onRemove(service.id)}
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="total-section">
        <div className="total-row">
          <span>Загальна сума:</span>
          <div className="total-amount">
            {hasDiscount && (
              <span className="strikethrough">${originalTotal}</span>
            )}
            <span className="final-price">${total}</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="form-group">
        <Input
          placeholder="Назва компанії"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" className="submit-button">
          Оформити
        </Button>
      </form>
    </div>
  );
};

export default Cart;

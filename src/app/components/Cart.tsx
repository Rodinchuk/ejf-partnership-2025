import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Package, AdditionalService } from "../types/types";
import emailjs from "@emailjs/browser";
import "@/app/components/Cart.css";

emailjs.init("nH1slg9lPzjgOixSC");

interface CartProps {
  selectedPackages: Package[];
  additionalServices: AdditionalService[];
  onRemove: (id: string) => void;
}

const Cart: React.FC<CartProps> = ({
  selectedPackages,
  additionalServices,
  onRemove,
}) => {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");

  const calculateTotal = () => {
    const baseTotal = [...selectedPackages, ...additionalServices].reduce(
      (sum, item) => sum + item.price,
      0
    );

    const additionalPackagesCount = selectedPackages.length - 1;
    const additionalServicesCount = additionalServices.length;

    if (additionalPackagesCount >= 2) {
      return baseTotal * 0.9;
    } else if (additionalServicesCount >= 3) {
      return baseTotal * 0.9;
    }

    return baseTotal;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const templateParams = {
        company_name: companyName,
        email: email,
        packages: selectedPackages.map((p) => p.name).join(", "),
        additional_services: additionalServices.map((s) => s.name).join(", "),
        total: calculateTotal(),
      };

      await emailjs.send(
        "service_7xshe0s",
        "template_lap52fe",
        templateParams,
        "nH1slg9lPzjgOixSC"
      );

      alert("Дякуємо! Ми зв'яжемося з вами найближчим часом.");
    } catch (error) {
      console.error("Email sending error:", error);
      alert("Помилка! Щось пішло не так. Спробуйте ще раз.");
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
      <h2 className="cart-title">Кошик</h2>
      <div className="cart-group">
        <div className="form-group">
          <p className="cart-subtitle">Пакети</p>
          {/* <div className="cartitems"> */}
          {selectedPackages.map((pkg) => (
            <div key={pkg.id} className="cart-item">
              <span>{pkg.name}</span>
              <div className="cart-item-actions">
                <span>${pkg.price}</span>
                {pkg.name !== "Basic" && (
                  <button onClick={() => onRemove(pkg.id)}>✕</button>
                )}
              </div>
            </div>
          ))}
          <p className="cart-subtitle">Додаткові опції</p>
          {additionalServices.map((service) => (
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
        <div className="cartsecondpart">
          <div className="total-section">
            <div className="total-row">
              <div className="total-amount">
                {hasDiscount && (
                  <span className="strikethrough">${originalTotal}</span>
                )}
                <span className="final-price">${total}</span>
              </div>
            </div>
          </div>

          <div className="discount-section">
            <h3 className="discout-title">Знижки:</h3>
            <p className="discount">
              Партнерам попередніх подій знижка — <strong>5%</strong>
            </p>
            <p className="discount">
              Basic + 2 додаткових пакети — <strong>10%</strong>
            </p>
            <p className="discount">
              Basic + 3 додаткові опції — <strong>10%</strong>
            </p>
            <p className="discount">*Знижки не поєднуються</p>
            <p className="discount">*Оплата здійснюватиметься за курсом НБУ</p>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <Input
              className="form-input"
              style={{
                width: "100%",
                padding: "16px",
                border: "2px solid #3880DD",
                marginBottom: "15px",
                borderRadius: "8px",
                outline: "none",
                transition: "border-color 0.3s ease-in-out",
              }}
              placeholder="Назва компанії"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
            <Input
              className="form-input"
              style={{
                width: "100%",
                padding: "16px",
                border: "2px solid #3880DD",
                marginBottom: "15px",
                borderRadius: "8px",
                outline: "none",
                transition: "border-color 0.3s ease-in-out",
              }}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Button
              type="submit"
              className="submit-button"
              style={{
                width: "100%",
                padding: "16px",
                backgroundColor: "#111A94",
                borderRadius: "8px",
                outline: "none",
                transition: "border-color 0.3s ease-in-out",
              }}
            >
              Оформити
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;

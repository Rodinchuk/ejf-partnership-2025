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

      alert("Thank you! We will contact you soon!");
    } catch (error) {
      console.error("Email sending error:", error);
      alert("Error! Something went wrong...");
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
      <h2 className="cart-title">Cart</h2>
      <div className="cart-group">
        <div className="form-group">
          <p className="cart-subtitle">Offers</p>
          {/* <div className="cartitems"> */}
          {selectedPackages.map((pkg) => (
            <div key={pkg.id} className="cart-item">
              <span>{pkg.name}</span>
              <div className="cart-item-actions">
                <span>${pkg.price}</span>
                {pkg.name !== "Basic" && (
              <button
              data-variant="default"
              onClick={() => onRemove(pkg.id)}
              style={{
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <img src="./images/cancel.svg" alt="Cancel" width="24" height="24" />
            </button>
                )}
              </div>
            </div>
          ))}
          <p className="cart-subtitle">Additional options</p>
          {additionalServices.map((service) => (
            <div key={service.id} className="cart-item">
              <span>{service.name}</span>
              <div className="cart-item-actions">
                <span>${service.price}</span>
                <button
  data-variant="default"
  onClick={() => onRemove(service.id)}
  style={{
    background: "transparent",
    border: "none",
    padding: 0,
    cursor: "pointer",
  }}
>
  <img src="./images/cancel.svg" alt="Cancel" width="24" height="24" />
</button>

              </div>
            </div>
          ))}
        </div>
        <div className="cartsecondpart">
          <div className="total-section">
            <div className="total-row">
              <div className="total-amount">
              <span className="final-price">=</span>
                {hasDiscount && (
                  <span className="strikethrough">${originalTotal}</span>
                )}
                <span className="final-price">${total}</span>
              </div>
            </div>
          </div>

          <div className="discount-section">
            <h3 className="discout-title">Discounts</h3>
            <p className="discount">
            Partners of previous events get a <strong>5%</strong>discount
            </p>
            <p className="discount">
            Basic + 3 additional options<strong>$50</strong>
            </p>
            <p className="discount">
            Basic + 2 additional packages — <strong>$100</strong>
            </p>
            <p className="discount">10% of the proceeds will go to help the Ukrainian Armed Forces!
            </p>
            <p className="discount">*Payment will be made at the NBU exchange rate</p>
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
              placeholder="Name of the company"
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
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;

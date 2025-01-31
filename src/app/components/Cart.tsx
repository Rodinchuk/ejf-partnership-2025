import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { togglePartner, clearCart } from "../store/cartSlice";
import { Switch } from "./ui/switch";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const Cart = () => {
  const dispatch = useDispatch();
  const { selectedPackage, additionalOptions, isPartner } = useSelector(
    (state: RootState) => state.cart
  );
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");

  const calculateDiscount = () => {
    if (!selectedPackage) return 0;

    if (isPartner) return 0.05;
    if (additionalOptions.length >= 3) return 0.1;
    if (additionalOptions.length >= 2) return 0.1;

    return 0;
  };

  const subtotal =
    (selectedPackage?.price || 0) +
    additionalOptions.reduce((sum, opt) => sum + opt.price, 0);
  const discount = calculateDiscount() * subtotal;
  const total = subtotal - discount;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPackage) {
      toast.error("Будь ласка, оберіть пакет");
      return;
    }

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          to_email: "your-email@example.com",
          from_email: email,
          company_name: companyName,
          package_name: selectedPackage.name,
          package_price: selectedPackage.price,
          additional_options: additionalOptions
            .map((opt) => `${opt.name} - $${opt.price}`)
            .join("\n"),
          subtotal: subtotal.toFixed(2),
          discount: discount.toFixed(2),
          total: total.toFixed(2),
          is_partner: isPartner ? "Так" : "Ні",
        },
        "YOUR_PUBLIC_KEY"
      );

      toast.success("Замовлення успішно відправлено!");
      dispatch(clearCart());
      setEmail("");
      setCompanyName("");
    } catch (error) {
      toast.error("Помилка при відправці замовлення. Спробуйте ще раз.");
    }
  };

  return (
    <Card className="cart glass">
      <h2 className="cart-title">Кошик</h2>
      <div className="cart-items">
        {selectedPackage && (
          <div className="cart-item">
            <span>{selectedPackage.name}</span>
            <span>${selectedPackage.price}</span>
          </div>
        )}
        {additionalOptions.map((option) => (
          <div key={option.id} className="cart-item">
            <span>{option.name}</span>
            <span>${option.price}</span>
          </div>
        ))}
      </div>
      <div className="partner-toggle">
        <span>Знижка для партнерів</span>
        <Switch
          checked={isPartner}
          onCheckedChange={() => dispatch(togglePartner())}
        />
      </div>
      <div className="cart-totals">
        <div className="cart-total-row">
          <span>Проміжна сума</span>
          {discount > 0 ? (
            <div className="price-container">
              <span className="original-price">${subtotal.toFixed(2)}</span>
              <span className="discounted-price">${total.toFixed(2)}</span>
            </div>
          ) : (
            <span>${subtotal.toFixed(2)}</span>
          )}
        </div>
        {discount > 0 && (
          <div className="cart-total-row">
            <span>Знижка</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
        )}
        <div className="cart-total-row final">
          <span>Загальна сума</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <Input
          type="text"
          placeholder="Назва компанії"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
          className="input"
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input"
        />
        <Button type="submit" className="button">
          Оформити
        </Button>
      </form>
    </Card>
  );
};

export default Cart;
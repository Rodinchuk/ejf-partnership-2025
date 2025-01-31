import { useDispatch, useSelector } from "react-redux";
import { selectPackage } from "../store/cartSlice";
import { RootState } from "../store/store";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useEffect } from "react";

interface PricingCardProps {
  id: string;
  name: string;
  price: number;
  features: string[];
  required?: boolean;
}

const PricingCard = ({ id, name, price, features, required }: PricingCardProps) => {
  const dispatch = useDispatch();
  const selectedPackage = useSelector(
    (state: RootState) => state.cart.selectedPackage
  );

  const isSelected = selectedPackage?.id === id;

  useEffect(() => {
    if (required && !selectedPackage) {
      dispatch(selectPackage({ id, name, price }));
    }
  }, [required, selectedPackage, dispatch, id, name, price]);

  return (
    <Card className={`pricing-card glass ${isSelected ? "selected" : ""}`}>
      <h3>{name}</h3>
      <p className="price">${price}</p>
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index}>
            <svg
              className="feature-icon"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Button
        className="button"
        variant={isSelected ? "secondary" : "default"}
        onClick={() => dispatch(selectPackage(isSelected ? null : { id, name, price }))}
        disabled={required && isSelected}
      >
        {required ? "Included" : isSelected ? "Selected" : "Select Package"}
      </Button>
    </Card>
  );
};

export default PricingCard;
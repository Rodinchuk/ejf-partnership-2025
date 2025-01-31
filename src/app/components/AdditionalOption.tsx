import { useDispatch, useSelector } from "react-redux";
import { toggleOption } from "../store/cartSlice";
import { RootState } from "../store/store";
import { Switch } from "./ui/switch";

interface AdditionalOptionProps {
  id: string;
  name: string;
  price: number;
}

const AdditionalOption = ({ id, name, price }: AdditionalOptionProps) => {
  const dispatch = useDispatch();
  const isSelected = useSelector((state: RootState) =>
    state.cart.additionalOptions.some((opt) => opt.id === id)
  );

  return (
    <div className="option-card glass">
      <div className="option-info">
        <span className="option-name">{name}</span>
        <span className="option-price">${price}</span>
      </div>
      <Switch
        checked={isSelected}
        onCheckedChange={() => dispatch(toggleOption({ id, name, price }))}
      />
    </div>
  );
};

export default AdditionalOption;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Package {
  id: string;
  name: string;
  price: number;
}

interface AdditionalOption {
  id: string;
  name: string;
  price: number;
}

interface CartState {
  selectedPackage: Package | null;
  additionalOptions: AdditionalOption[];
  isPartner: boolean;
}

const initialState: CartState = {
  selectedPackage: null,
  additionalOptions: [],
  isPartner: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    selectPackage: (state, action: PayloadAction<Package | null>) => {
      state.selectedPackage = action.payload;
    },
    toggleOption: (state, action: PayloadAction<AdditionalOption>) => {
      const index = state.additionalOptions.findIndex(
        (opt) => opt.id === action.payload.id
      );
      if (index === -1) {
        state.additionalOptions.push(action.payload);
      } else {
        state.additionalOptions.splice(index, 1);
      }
    },
    togglePartner: (state) => {
      state.isPartner = !state.isPartner;
    },
    clearCart: (state) => {
      state.selectedPackage = null;
      state.additionalOptions = [];
      state.isPartner = false;
    },
  },
});

export const { selectPackage, toggleOption, togglePartner, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
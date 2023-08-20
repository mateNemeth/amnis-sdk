export declare type AvailableBalance = {
  amount: string;
  currency: string | null;
};

export declare type Information = {
  id: number;
  legalForm: string | null;
  countryOfIncorporation: string | null;
  address: string | null;
  city: string | null;
  zip: string | null;
  stateOrProvince: string | null;
  activePackage: 0 | 1 | 2;
  availableBalance: AvailableBalance;
};

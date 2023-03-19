export declare type OverallBalance = {
  amount: number | null;
  currency: string;
};

export declare type Information = {
  id: number;
  legalForm: string;
  countryOfIncorporation: string;
  address: string;
  city: string;
  zip: string;
  stateOrProvince: string | null;
  activePackage: 0 | 1 | 2;
  overallBalance: OverallBalance;
};

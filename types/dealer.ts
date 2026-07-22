export type Dealer = {
  id: string;

  name: string;

  province: string;

  address: string;

  phone: string;

  line?: string;

  facebook?: string;

  map: string;

  openHours: string;

  status: "official" | "partner";
};
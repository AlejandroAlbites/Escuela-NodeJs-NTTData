// Generated by https://quicktype.io

export interface PDF {
  senderName?: string;
  senderCompany?: string;
  senderSlogan?: string;
  senderTel?: string;
  senderSite?: string;
  senderEmail?: string;
  senderLocation?: string;
  clientName?: string;
  clientCompany?: string;
  proposalShortDescription?: string;
  proposalDate?: string;
  proposalNumber?: string;
  proposalIntroduction?: string;
  projectScope?: string;
  servicesList?: ServicesList[];
  aditionalInformation?: string;
}

export interface ServicesList {
  type?: string;
  data?: Datum[];
}

export interface Datum {
  service?: string;
  hours?: string;
  price?: string;
  total?: string;
}

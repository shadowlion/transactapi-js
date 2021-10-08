export interface SearchPartyRequest {
  clientID: string;
  developerAPIKey: string;
  searchKeyword: string;
}

export interface SearchPartyResponse {
  statusCode: string;
  statusDesc: string;
  partyDetails: PartyDetail[];
}

export interface PartyDetail {
  partyId: string;
  firstName: string;
  middleInitial: string;
  lastName: string;
  domicile: string;
  socialSecurityNumber: string;
  dob: string;
  primAddress1: string;
  primAddress2: string;
  primCity: string;
  primState: string;
  primZip: string;
  primCountry: string;
  emailAddress: string;
  emailAddress2: string;
  phone: string;
  phone2: string;
  occupation: string;
  associatedPerson: string;
  empCountry: string;
  empAddress1: string;
  empAddress2: string;
  empCity: string;
  empState: string;
  empZip: string;
  currentAnnIncome: string;
  avgAnnIncome: string;
  currentHouseholdIncome: string;
  avgHouseholdIncome: string;
  householdNetworth: string;
  kycStatus: string;
  amlStatus: string;
  amlDate: string;
  tags: string;
  notes: string;
}

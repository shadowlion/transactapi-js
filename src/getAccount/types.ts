export interface GetAccountRequest {
  clientID: string;
  developerAPIKey: string;
  accountId: string;
}

export interface GetAccountResponse {
  statusCode: string;
  statusDesc: string;
  accountDetails?: AccountDetails;
}

export interface AccountDetails {
  accountId: string;
  accountName: string;
  type: string;
  entityType: string;
  residentType: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  taxID: string;
  kycStatus: string;
  kycDate: string;
  amlStatus: string;
  amlDate: string;
  suitabilityScore: string;
  suitabilityDate: string;
  suitabilityApprover: string;
  accreditedStatus: string;
  accreditedInvestor: string;
  accreditedInvestorDate: string;
  "506cLimit": string;
  accountTotalLimit: string;
  singleInvestmentLimit: string;
  associatedAC: string;
  syndicate: string;
  tags: string;
  notes: string;
  approvalStatus: string;
  approvalPrincipal: string;
  approvalLastReview: string;
  field1: string;
  field2: string;
  field3: string;
}

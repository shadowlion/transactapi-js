export interface PerformKycAmlBasicRequest {
  clientID: string;
  developerAPIKey: string;
  partyId: string;
}

export interface PerformKycAmlBasicResponse {
  statusCode: string;
  statusDesc: string;
  kyc: Kyc;
}

export interface Kyc {
  response: Response;
  kycstatus: string;
  amlstatus: string;
}

export interface Response {
  "id-number": string;
  "summary-result": Results;
  results: Results;
  qualifiers: Qualifiers;
  idnotescore: string;
}

export interface Qualifiers {
  qualifier: Results[];
}

export interface Results {
  key: string;
  message: string;
}

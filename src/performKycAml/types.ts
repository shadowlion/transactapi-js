export interface PerformKycAmlRequest {
  clientID: string;
  developerAPIKey: string;
  partyId: string;
}

export interface PerformKycAmlResponse {
  statusCode: string;
  statusDesc: string;
  kyc: Kyc;
}

interface Kyc {
  response: Response;
  kycstatus: string;
  amlstatus: string;
}

interface Response {
  "id-number": string;
  "summary-result": Results;
  results: Results;
  qualifiers: Qualifiers;
  idnotescore: string;
  questions: Questions;
}

interface Qualifiers {
  qualifier: Results[];
}

interface Results {
  key: string;
  message: string;
}

interface Questions {
  question: Question[];
}

interface Question {
  prompt: string;
  type: string;
  answer: string[];
}

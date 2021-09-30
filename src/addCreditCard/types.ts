import { CreditCardType } from "./enums";

export interface AddCreditCardRequest {
  clientID: string;
  developerAPIKey: string;
  accountId: string;
  creditCardName: string;
  creditCardNumber: string;
  expirationDate: string;
  cvvNumber: string;
  cardType: CreditCardType;
  createdIpAddress?: string;
}

export interface AddCreditCardResponse {
  statusCode: string;
  statusDesc: string;
  creditcardDetails?: string;
}

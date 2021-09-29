import { CreditCardType } from "./enums";

export interface AddCreditCardPayload {
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

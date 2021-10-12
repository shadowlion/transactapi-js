import { CardType } from "./enums";

export interface UpdateCreditCardRequest {
  clientID: string;
  developerAPIKey: string;
  accountId: string;
  creditCardName: string;
  creditCardNumber: string;
  expirationDate: string;
  cvvNumber: string;
  cardType: CardType;
  createdIpAddress?: string;
}

export interface UpdateCreditCardResponse {
  statusCode: string;
  statusDesc: string;
  creditCardDetails: string;
}

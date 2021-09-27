import { BasePayload, BaseResponse } from "../base";
import { CreditCardType } from "./enums";

export interface AddCreditCardPayload extends BasePayload {
  accountId: string;
  creditCardName: string;
  creditCardNumber: string;
  expirationDate: string;
  cvvNumber: string;
  cardType: CreditCardType;
  createdIpAddress?: string;
}

export interface AddCreditCardResponse extends BaseResponse {
  creditcardDetails?: string;
}

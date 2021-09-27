import { callApi } from "../base";
import { AddCreditCardPayload, AddCreditCardResponse } from "./types";

/**
 * This method is used to save a credit card to an Account (createAccount).
 * Only one credit card can be added for an account.
 * @link https://api.norcapsecurities.com/admin_v3/documentation?mid=MzAx
 * @param {string} clientID Transact API Client ID
 * @param {string} developerAPIKey Transact API Developer Key
 * @param {string} accountId Account ID that is generated by the API once an account is created (createAccount)
 * @param {string} creditCardName Name on the Credit Card
 * @param {string} creditCardNumber Full Credit Card Number
 * @param {string} expirationDate Credit Card Expiration Date in MMYY format
 * @param {string} cvvNumber CVV security code of the credit card
 * @param {string} cardType Credit Card type eg:(VI, MC, DI)
 * @returns {string} statusCode - API Status Code
 * @returns {string} statusDesc - API Status Description
 * @returns {string=} creditcardDetails - Success message for add credit card
 */
export default async function ({
  clientID,
  developerAPIKey,
  accountId,
  creditCardName,
  creditCardNumber,
  expirationDate,
  cvvNumber,
  cardType,
}: AddCreditCardPayload): Promise<AddCreditCardResponse> {
  try {
    const payload: AddCreditCardPayload = {
      clientID,
      developerAPIKey,
      accountId,
      creditCardName,
      creditCardNumber,
      expirationDate,
      cvvNumber,
      cardType,
      createdIpAddress: "69.61.177.110",
    };
    return await callApi("addCreditCard", payload);
  } catch (error) {
    throw new Error(error.message);
  }
}
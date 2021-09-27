import { callApi } from "../base";
import { GetAccountPayload, GetAccountResponse } from "./types";

/**
 * This method is used to get all information for an account (createAccount).
 * @link https://api.norcapsecurities.com/admin_v3/documentation?mid=MTM2
 * @param {string} clientID - Transact API Client ID
 * @param {string} developerAPIKey - Transact API Developer Key
 * @param {string} accountId - Account ID that is generated by the API once an account is created (createAccount).
 * @returns {string} statusCode - API Status Code
 * @returns {string} statusDesc - API Status Description
 * @returns {Array} accountDetails - Array of account includes all information of the matched account
 */
export default async function ({
  clientID,
  developerAPIKey,
  accountId,
}: GetAccountPayload): Promise<GetAccountResponse> {
  try {
    const payload: GetAccountPayload = {
      clientID,
      developerAPIKey,
      accountId,
    };
    return await callApi("getAccount", payload);
  } catch (error) {
    throw new Error(error.message);
  }
}

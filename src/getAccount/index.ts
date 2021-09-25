import axios, { AxiosResponse } from "axios";
import { GetAccountPayload, GetAccountResponse } from "./types";

/**
 * This method is used to get all information for an account (createAccount).
 * Reference: https://api.norcapsecurities.com/admin_v3/documentation?mid=MTM2
 * @method POST
 * @param  {Object} GetAccountPayload
 * @param  {String} GetAccountPayload.clientID - provided by North Capital
 * @param  {String} GetAccountPayload.developerAPIKey - provided by North Capital
 * @param  {String} GetAccountPayload.accountId - Account ID of an investor
 * @returns {Object} details of an account from the resulting query
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

    const res: AxiosResponse<GetAccountResponse> = await axios.post(
      "https://api.norcapsecurities.com/tapiv3/index.php/v3/getAccount",
      payload,
    );

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

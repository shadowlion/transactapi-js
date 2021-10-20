import { baseApi } from "../base";
import { GetAllTradesRequest, GetAllTradesResponse } from "./types";

/**
 * Get all trades for a given client.
 * @link https://api.norcapsecurities.com/admin_v3/documentation?mid=MzU4
 * @param {string} clientID - Transact API Client ID
 * @param {string} developerAPIKey - Transact API Developer Key
 * @returns {string} statusCode - API Status Code
 * @returns {string} statusDesc - API Status Description
 * @returns {Array} TradeDetails - Array of Trade Details
 */
export default async function ({
  clientID,
  developerAPIKey,
}: GetAllTradesRequest): Promise<GetAllTradesResponse> {
  try {
    const payload: GetAllTradesRequest = {
      clientID,
      developerAPIKey,
    };
    return await baseApi("POST", "getAllTrades", payload);
  } catch (error) {
    throw new Error(error.message);
  }
}

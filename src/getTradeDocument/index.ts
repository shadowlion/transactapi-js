import { baseApi } from "../base";
import { GetTradeDocumentRequest, GetTradeDocumentResponse } from "./types";

/**
 * View documents provided by a particular Trade ID.
 * @link https://api.norcapsecurities.com/admin_v3/documentation?mid=MzI3
 * @param {string} clientID - Transact API Client ID
 * @param {string} developerAPIKey - Transact API Developer Key
 * @param {string} tradeId - Trade ID that is generated by the API once a trade is created.
 * @returns {string} statusCode - API Status Code
 * @returns {string} statusDesc - API Status Description
 * @returns {Array} document_details - Array of trade document details
 */
export default async function ({
  clientID,
  developerAPIKey,
  tradeId,
}: GetTradeDocumentRequest): Promise<GetTradeDocumentResponse> {
  try {
    const payload: GetTradeDocumentRequest = {
      clientID,
      developerAPIKey,
      tradeId,
    };
    return await baseApi("getTradeDocument", payload);
  } catch (error) {
    throw new Error(error.message);
  }
}
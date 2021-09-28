import { baseApi } from "../base";
import { CreateTradePayload, CreateTradeResponse } from "./types";

export default async function ({
  clientID,
  developerAPIKey,
  accountId,
  offeringId,
  transactionType,
  transactionUnits,
}: CreateTradePayload): Promise<CreateTradeResponse> {
  try {
    const payload: CreateTradePayload = {
      clientID,
      developerAPIKey,
      accountId,
      offeringId,
      transactionType,
      transactionUnits,
    };
    return await baseApi("getAccount", payload);
  } catch (error) {
    throw new Error(error.message);
  }
}

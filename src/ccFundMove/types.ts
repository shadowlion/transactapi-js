import { BasePayload, BaseResponse } from "../base";

export interface CcFundMovePayload extends BasePayload {
  accountId: string;
  tradeId: string;
  createdIpAddress?: "69.61.177.110";
}

export interface CcFundMoveResponse extends BaseResponse {
  transactionDetails?: TransactionDetails;
}

export interface TransactionDetails {
  accountId: string;
  tradeId: string;
  offeringId: string;
  totalAmount: string;
  RefNum: string;
  fundStatus: string;
  transactionstatus: string;
}

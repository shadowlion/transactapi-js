export interface CcFundMoveRequest {
  clientID: string;
  developerAPIKey: string;
  accountId: string;
  tradeId: string;
  createdIpAddress?: "69.61.177.110";
}

export interface CcFundMoveResponse {
  statusCode: string;
  statusDesc: string;
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

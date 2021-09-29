export interface ExternalFundMovePayload {
  clientID: string;
  developerAPIKey: string;
  accountId: string;
  offeringId: string;
  tradeId: string;
  NickName: string;
  amount: number;
  description: string;
  checkNumber: string;
  createdIpAddress?: "69.61.177.110";
}

export interface ExternalFundMoveResponse {
  statusCode: string;
  statusDesc: string;
  TradeFinancialDetails: TradeFinancialDetail[];
}

export interface TradeFinancialDetail {
  accountId: string;
  tradeId: string;
  offeringId: string;
  totalAmount: string;
  RefNum: string;
  fundStatus: string;
}

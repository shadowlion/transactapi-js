export type GetAllTradesRequest = {
  clientID: string;
  developerAPIKey: string;
};

export type GetAllTradesResponse = {
  statusCode: string;
  statusDesc: string;
  TradeFinancialDetails: TradeFinancialDetail[];
};

export interface TradeFinancialDetail {
  id: string;
  createdDate: string;
  accountId: string;
  issueName: string;
  orderId: string;
  accountName: string;
  offeringId: string;
  totalAmount: string;
  transactionType: string;
  approvalStatus: string;
  kycStatus: string;
  amlStatus: string;
  orderStatus: string;
  esignStatus: string;
  developerAPIKey: string;
  clientName: string;
  clientId: string;
  field1: string;
}

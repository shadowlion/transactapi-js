import { InvestmentStatus } from "./enums";

export interface GetTradeStatusRequest {
  clientID: string;
  developerAPIKey: string;
  tradeId: string;
}

export interface GetTradeStatusResponse {
  statusCode: string;
  statusDesc: string;
  tradeDetails: TradeDetail[];
}

export interface TradeDetail {
  id: string;
  developerAPIKey: string;
  offeringId: string;
  accountId: string;
  partyId: string;
  party_type: string;
  escrowId: null;
  orderId: string;
  transactionType: string;
  totalAmount: string;
  totalShares: string;
  orderStatus: InvestmentStatus;
  createdDate: string;
  createdIpAddress: string;
  errors: string;
  documentKey: string;
  esignStatus: string;
  users: string;
  archived_status: string;
}

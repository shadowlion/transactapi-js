export interface GetTradeRequest {
  clientID: string;
  developerAPIKey: string;
  accountId: string;
  tradeId?: string;
}

export interface GetTradeResponse {
  statusCode: string;
  statusDesc: string;
  partyDetails: PartyDetail[];
}

export interface PartyDetail {
  id: string;
  developerAPIKey: string;
  offeringId: string;
  accountId: string;
  partyId: string;
  party_type: string;
  escrowId: string;
  orderId: string;
  transactionType: string;
  totalAmount: string;
  totalShares: string;
  orderStatus: string;
  createdDate: string;
  createdIpAddress: string;
  errors: string;
  documentKey: string;
  esignStatus: string;
  users: string;
  archived_status: string;
  RRApprovalStatus: string;
  RRName: string;
  RRApprovalDate: string;
  PrincipalApprovalStatus: string;
  PrincipalName: string;
  PrincipalDate: string;
}

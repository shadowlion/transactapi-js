export interface GetOfferingRequest {
  clientID: string;
  developerAPIKey: string;
  offeringId: string;
}

export interface GetOfferingResponse {
  statusCode: string;
  statusDesc: string;
  offeringDetails: OfferingDetail[];
}

export interface OfferingDetail {
  issuerId: string;
  offeringId: string;
  issueName: string;
  issueType: string;
  targetAmount: string;
  minAmount: string;
  maxAmount: string;
  unitPrice: string;
  totalShares: string;
  remainingShares: string;
  startDate: string;
  endDate: string;
  offeringStatus: string;
  offeringText: string;
  stampingText: null;
}

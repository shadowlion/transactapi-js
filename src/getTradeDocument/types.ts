export interface GetTradeDocumentRequest {
  clientID: string;
  developerAPIKey: string;
  tradeId: string;
}

export interface GetTradeDocumentResponse {
  statusCode: string;
  statusDesc: string;
  document_details: DocumentDetails[];
}

export interface DocumentDetails {
  tradeId: string;
  documentid: string;
  documentTitle: string;
  documentFileName: string;
  documentFileReferenceCode: string;
  createdDate: string;
  documentUrl: string;
}

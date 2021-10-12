export interface UploadTradeDocumentRequest {
  clientID: string;
  developerAPIKey: string;
  tradeId: string;
  documentName: string;
  file: Buffer | Blob | string;
}

export interface UploadTradeDocumentResponse {
  statusCode: string;
  statusDesc: string;
  document_details: string;
}

import axios from "axios";
import uploadTradeDocument from ".";
import {
  UploadTradeDocumentRequest,
  UploadTradeDocumentResponse,
} from "./types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("/uploadTradeDocument endpoint", () => {
  test("trade exists", async () => {
    const payload: UploadTradeDocumentRequest = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperkey",
      tradeId: "123456",
      documentName: "example document",
      file: Buffer.from("../../example-doc.pdf"),
    };
    const response: UploadTradeDocumentResponse = {
      statusCode: "101",
      statusDesc: "Ok",
      document_details: "Document has been uploaded Successfully",
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await uploadTradeDocument(payload);
    expect(mockedResponse).toEqual(response);
  });
});

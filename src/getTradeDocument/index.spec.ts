import axios from "axios";
import getTradeDocument from ".";
import { GetTradeDocumentRequest, GetTradeDocumentResponse } from "./types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("/getTradeDocument endpoint", () => {
  test("trade exists", async () => {
    const payload: GetTradeDocumentRequest = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperkey",
      tradeId: "484654613",
    };
    const response: GetTradeDocumentResponse = {
      statusCode: "101",
      statusDesc: "Ok",
      document_details: [
        {
          tradeId: "484654613",
          documentid: "Mvz1B",
          documentTitle: " Test",
          documentFileName: "GKrQ081118064622.pdf",
          documentFileReferenceCode: "081118064622",
          createdDate: "2018-11-08",
          documentUrl:
            "https://api-development.norcapsecurities.com/tapiv3/uploads/accounts/GKrQ081118064622.pdf",
        },
      ],
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await getTradeDocument(payload);
    expect(mockedResponse).toEqual(response);
    expect(payload.tradeId).toEqual(response.document_details[0].tradeId);
  });
});

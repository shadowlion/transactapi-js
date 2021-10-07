import axios from "axios";
import getTradeStatus from ".";
import { InvestmentStatus } from "./enums";
import { GetTradeStatusRequest, GetTradeStatusResponse } from "./types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("/getTradeStatus endpoint", () => {
  test("trade exists", async () => {
    const payload: GetTradeStatusRequest = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperkey",
      tradeId: "sometradeid",
    };
    const response: GetTradeStatusResponse = {
      statusCode: "101",
      statusDesc: "Ok",
      tradeDetails: [
        {
          id: "555555",
          developerAPIKey: "somedeveloperkey",
          offeringId: "12345",
          accountId: "A12345",
          partyId: "P12345",
          party_type: "",
          escrowId: null,
          orderId: "sometradeid",
          transactionType: "WIRE",
          totalAmount: "12000.000000",
          totalShares: "120.000000",
          orderStatus: InvestmentStatus.FUNDED,
          createdDate: "2017-05-17 06:25:38",
          createdIpAddress: "",
          errors: "",
          documentKey: "",
          esignStatus: "NOTSIGNED",
          users: "",
          archived_status: "0",
        },
      ],
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await getTradeStatus(payload);
    expect(mockedResponse).toEqual(response);
    expect(payload.tradeId).toEqual(response.tradeDetails[0].orderId);
  });
});

import axios from "axios";
import createTrade from ".";
import { CreateTradePayload, CreateTradeResponse } from "./types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("/createTrade endpoint", () => {
  test("trade creation successful", async () => {
    const payload: CreateTradePayload = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperkey",
      offeringId: "12345",
      accountId: "A12345",
      transactionType: "CREDITCARD",
      transactionUnits: 100
    };
    const response: CreateTradeResponse = {
      statusCode: "101",
      statusDesc: "Ok",
      purchaseDetails: [
        true,
        [
          {
            tradeId: "130",
            transactionId: "476693475244",
            transactionAmount: "2500.55",
            transactionDate: "2014-12-09 04:29:29",
            transactionStatus: "PENDING",
            RRApprovalStatus: "Pending",
            RRName: "Test",
            RRApprovalDate: "09-10-2019",
            PrincipalApprovalStatus: "Pending",
            PrincipalName: "Test",
            PrincipalDate: "09-10-2019",
          },
        ],
      ],
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await createTrade(payload);
    expect(mockedResponse).toEqual(response);
  });
});

import axios from "axios";
import externalFundMove from ".";
import { ExternalFundMoveRequest, ExternalFundMoveResponse } from "./types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("/externalFundMove endpoint", () => {
  test("moving funds successful", async () => {
    const payload: ExternalFundMoveRequest = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperkey",
      accountId: "985742",
      offeringId: "97421",
      tradeId: "7766362363632",
      NickName: "Tester Jones",
      amount: 10000.5,
      checkNumber: "7766362363632",
      description: "Example Transaction",
      createdIpAddress: "69.61.177.110",
    };
    const response: ExternalFundMoveResponse = {
      statusCode: "101",
      statusDesc: "Ok",
      TradeFinancialDetails: [
        {
          accountId: "A49501",
          tradeId: "257528259",
          offeringId: "81272",
          totalAmount: "1000.000000",
          RefNum: "464266069",
          fundStatus: "Pending",
        },
      ],
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await externalFundMove(payload);
    expect(mockedResponse).toEqual(response);
  });
});

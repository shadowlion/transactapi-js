import axios from "axios";
import ccFundMove from ".";
import { CcFundMoveRequest, CcFundMoveResponse } from "./types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("/ccFundMove", () => {
  test("account exists", async () => {
    const payload: CcFundMoveRequest = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperapikey",
      accountId: "AXXXXX",
      tradeId: "1234567",
    };
    const response: CcFundMoveResponse = {
      statusCode: "101",
      statusDesc: "Ok",
      transactionDetails: {
        accountId: "A11501",
        tradeId: "181669328",
        offeringId: "64104",
        totalAmount: "700.000000",
        RefNum: "017742724",
        fundStatus: "Pending",
        transactionstatus: "Pending",
      },
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await ccFundMove(payload);
    expect(mockedResponse).toEqual(response);
  });

  test("invalid base credentials", async () => {
    const payload: CcFundMoveRequest = {
      clientID: "",
      developerAPIKey: "somedeveloperkey",
      accountId: "AXXXXX",
      tradeId: "1234567"
    };
    const response: CcFundMoveResponse = {
      statusCode: "103",
      statusDesc: "Invalid Developer Key/Client ID OR Developer Key not Active",
    };

    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await ccFundMove(payload);
    expect(mockedResponse).toEqual(response);

    const payload2: CcFundMoveRequest = {
      clientID: "someclientid",
      developerAPIKey: "",
      accountId: "AXXXXX",
      tradeId: "1234567"
    };
    const response2: CcFundMoveResponse = {
      statusCode: "103",
      statusDesc: "Invalid Developer Key/Client ID OR Developer Key not Active",
    };
    mockedAxios.post.mockResolvedValue({ data: response2 });
    const mockedResponse2 = await ccFundMove(payload2);
    expect(mockedResponse2).toEqual(response2);
  })

  test("account not found", async () => {
    const payload: CcFundMoveRequest = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperapikey",
      accountId: "",
      tradeId: "1234567",
    };
    const response: CcFundMoveResponse = {
      statusCode: "148",
      statusDesc: "Account is not exist/active.",
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await ccFundMove(payload);
    expect(mockedResponse).toEqual(response);
  });

  test("trade not found", async () => {
    const payload: CcFundMoveRequest = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperapikey",
      accountId: "AXXXXX",
      tradeId: "",
    };
    const response: CcFundMoveResponse = {
      statusCode: "189",
      statusDesc: "Trade Id does not exits",
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await ccFundMove(payload);
    expect(mockedResponse).toEqual(response);
  });
});

import axios from "axios";
import getAllTrades from ".";
import { GetAllTradesRequest, GetAllTradesResponse } from "./types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("/getAllTrades endpoint", () => {
  test("account exists", async () => {
    const payload: GetAllTradesRequest = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperkey",
    };
    const response: GetAllTradesResponse = {
      statusCode: "101",
      statusDesc: "Ok",
      TradeFinancialDetails: [],
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await getAllTrades(payload);
    expect(mockedResponse).toEqual(response);
  });
});

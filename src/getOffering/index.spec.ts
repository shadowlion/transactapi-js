import axios from "axios";
import getAllTrades from ".";
import { GetOfferingRequest, GetOfferingResponse } from "./types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("/getOffering endpoint", () => {
  test("offering exists", async () => {
    const payload: GetOfferingRequest = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperkey",
      offeringId: "59249",
    };
    const response: GetOfferingResponse = {
      statusCode: "101",
      statusDesc: "Ok",
      offeringDetails: [
        {
          issuerId: "96763",
          offeringId: "59249",
          issueName: "NC Offer",
          issueType: "debt",
          targetAmount: "20000.000000",
          minAmount: "100.000000",
          maxAmount: "25000.000000",
          unitPrice: "10.000000",
          totalShares: "2500.000000",
          remainingShares: "2500.000000",
          startDate: "10-17-2016",
          endDate: "12-31-2016",
          offeringStatus: "Pending",
          offeringText: "Test",
          stampingText: null,
        },
      ],
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await getAllTrades(payload);
    expect(mockedResponse).toEqual(response);
  });
});

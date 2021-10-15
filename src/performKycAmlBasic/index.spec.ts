import axios from "axios";
import performKycAmlBasic from ".";
import { PerformKycAmlBasicRequest, PerformKycAmlBasicResponse } from "./types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("/performKycAmlBasic endpoint", () => {
  test("trade exists", async () => {
    const payload: PerformKycAmlBasicRequest = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperkey",
      partyId: "somepartyid",
    };
    const response: PerformKycAmlBasicResponse = {
      statusCode: "101",
      statusDesc: "Ok",
      kyc: {
        response: {
          "id-number": "someid",
          "summary-result": {
            key: "id.success",
            message: "PASS",
          },
          results: {
            key: "result.match",
            message: "ID Located",
          },
          qualifiers: {
            qualifier: [
              {
                key: "resultcode.address.does.not.match",
                message: "Address Does Not Match",
              },
              {
                key: "resultcode.street.number.does.not.match",
                message: "Street Number Does Not Match",
              },
            ],
          },
          idnotescore: "0",
        },
        kycstatus: "Auto Approved",
        amlstatus: "Auto Approved",
      },
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await performKycAmlBasic(payload);
    expect(mockedResponse).toEqual(response);
  });
});

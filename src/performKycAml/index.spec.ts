import axios from "axios";
import performKycAml from ".";
import { PerformKycAmlRequest, PerformKycAmlResponse } from "./types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("/performKycAml endpoint", () => {
  test("trade exists", async () => {
    const payload: PerformKycAmlRequest = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperkey",
      partyId: "somepartyid",
    };
    const response: PerformKycAmlResponse = {
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
          questions: {
            question: [
              {
                prompt: "Between 1979 and 1980, in which State did you live?",
                type: "prior.residence.state.multiyear",
                answer: [
                  "NORTH DAKOTA",
                  "NEW YORK",
                  "NEBRASKA",
                  "None of the above",
                ],
              },
              {
                prompt:
                  "What is the approximate square footage of the property at 222333 PEACHTREE PLACE?",
                type: "property.size",
                answer: [
                  "1,000 or less",
                  "1,001 - 1,500",
                  "1,501 - 2,000",
                  "2,001 - 2,500",
                  "Over 2,500",
                  "None of the above",
                ],
              },
              {
                prompt:
                  "Which person is not a relative or someone that you know?",
                type: "person.not.known",
                answer: [
                  "SUSAN BROWN",
                  "PORTER SMITH",
                  "DAVID BROWN",
                  "None of the above",
                ],
              },
              {
                prompt: "At which of the following addresses have you lived?",
                type: "previous.address",
                answer: [
                  "3 CRESSING CT",
                  "4344 BACKTRAIL DR",
                  "1084 BPEACHTREE CT",
                  "None of the above",
                ],
              },
              {
                prompt: "In which city is ANY STREET?",
                type: "city.of.residence",
                answer: ["ALMO", "ATLANTA", "MINOT", "None of the above"],
              },
            ],
          },
        },
        kycstatus: "Auto Approved",
        amlstatus: "Auto Approved",
      },
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await performKycAml(payload);
    expect(mockedResponse).toEqual(response);
  });
});

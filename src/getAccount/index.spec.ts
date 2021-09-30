import axios from "axios";
import getAccount from ".";
import { GetAccountRequest, GetAccountResponse } from "./types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("/getAccount endpoint", () => {
  test("account exists", async () => {
    const payload: GetAccountRequest = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperkey",
      accountId: "AXXXXX",
    };
    const response: GetAccountResponse = {
      statusCode: "101",
      statusDesc: "Ok",
      accountDetails: {
        accountId: "A77654",
        accountName: "john",
        type: "Individual",
        entityType: "Revocable Trust",
        residentType: "domestic account",
        address1: "First street",
        address2: "Fourth Avenue",
        city: "ATLANTA",
        state: "GA",
        zip: "43543",
        country: "USA",
        phone: "4152323232",
        taxID: "43543543",
        kycStatus: "pending",
        kycDate: "2016-02-23 13:29:30",
        amlStatus: "pending",
        amlDate: "2016-02-23 13:29:30",
        suitabilityScore: "5",
        suitabilityDate: "2016-02-23 13:29:30",
        suitabilityApprover: "Smith",
        accreditedStatus: "pending",
        accreditedInvestor: "income",
        accreditedInvestorDate: "02-02-2016",
        "506cLimit": "50000",
        accountTotalLimit: "1000000",
        singleInvestmentLimit: "1000",
        associatedAC: "yes",
        syndicate: "yes",
        tags: "real estate",
        notes: "Offers",
        approvalStatus: "pending",
        approvalPrincipal: "Charles",
        approvalLastReview: "12-02-2016",
        field1: "Account Field 1",
        field2: "Account Field 2",
        field3: "Account Field 3",
      },
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await getAccount(payload);
    expect(mockedResponse).toEqual(response);
  });

  test("invalid base credentials", async () => {
    const payload: GetAccountRequest = {
      clientID: "",
      developerAPIKey: "somedeveloperkey",
      accountId: "AXXXXX",
    };
    const response: GetAccountResponse = {
      statusCode: "103",
      statusDesc: "Invalid Developer Key/Client ID OR Developer Key not Active",
    };

    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await getAccount(payload);
    expect(mockedResponse).toEqual(response);

    const payload2: GetAccountRequest = {
      clientID: "someclientid",
      developerAPIKey: "",
      accountId: "AXXXXX",
    };
    const response2: GetAccountResponse = {
      statusCode: "103",
      statusDesc: "Invalid Developer Key/Client ID OR Developer Key not Active",
    };
    mockedAxios.post.mockResolvedValue({ data: response2 });
    const mockedResponse2 = await getAccount(payload2);
    expect(mockedResponse2).toEqual(response2);
  });

  test("account not found", async () => {
    const payload: GetAccountRequest = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperapikey",
      accountId: "",
    };
    const response: GetAccountResponse = {
      statusCode: "148",
      statusDesc: "Account is not exist/active.",
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await getAccount(payload);
    expect(mockedResponse).toEqual(response);
  });
});

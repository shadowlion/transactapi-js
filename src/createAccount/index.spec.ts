import axios from "axios";
import createAccount from ".";
import {
  AccountType,
  AccreditedStatus,
  AmlStatus,
  ApprovalStatus,
  DomesticYNChoice,
  KycStatus,
} from "./enums";
import { CreateAccountRequest, CreateAccountResponse } from "./types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("/createTrade endpoint", () => {
  test("trade creation successful", async () => {
    const payload: CreateAccountRequest = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperkey",
      accountRegistration: "account name",
      type: AccountType.INDIVIDUAL,
      domesticYN: DomesticYNChoice.DOMESTIC,
      streetAddress1: "123 Main Street",
      city: "Cincinnati",
      state: "OH",
      zip: "45202",
      country: "USA",
      phone: "1234567890",
      KYCstatus: KycStatus.PENDING,
      AMLstatus: AmlStatus.PENDING,
      AccreditedStatus: AccreditedStatus.PENDING,
      ApprovalStatus: ApprovalStatus.PENDING,
    };
    const response: CreateAccountResponse = {
      statusCode: "101",
      statusDesc: "Ok",
      accountDetails: [
        {
          accountId: "someaccountid",
        },
      ],
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await createAccount(payload);
    expect(mockedResponse).toEqual(response);
    expect(mockedResponse.accountDetails[0].accountId).not.toBeNull();
  });
});

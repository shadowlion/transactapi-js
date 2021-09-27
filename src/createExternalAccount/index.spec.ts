import axios from "axios";
import createExternalAccount from ".";
import { AccountDescription, AccountType } from "./enums";
import {
  CreateExternalAccountPayload,
  CreateExternalAccountResponse,
} from "./types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("/endpoint", () => {
  test("successful creation of external account", async () => {
    const payload: CreateExternalAccountPayload = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperkey",
      types: AccountDescription.ACCOUNT,
      accountId: "A20168",
      ExtAccountfullname: "John Abraham",
      Extnickname: "John Nick",
      ExtRoutingnumber: "34543654",
      ExtAccountnumber: "1234567890",
      accountType: AccountType.CHECKING,
    };
    const response: CreateExternalAccountResponse = {
      statusCode: "101",
      statusDesc: "Ok",
      "External Account Details": [
        true,
        [
          {
            accountId: "A20168",
            ExtAccountfullname: "John",
            Extnickname: "John account",
            ExtRoutingnumber: "34543534",
            ExtAccountnumber: "1234567890",
            accountType: "Checking",
            types: "Account",
          },
        ],
      ],
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await createExternalAccount(payload);
    expect(mockedResponse).toEqual(response);
  });
});

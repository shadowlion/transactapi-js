import axios from "axios";
import createParty from ".";
import {
  Domicile
} from "./enums";
import { CreatePartyRequest, CreatePartyResponse } from "./types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("/createParty endpoint", () => {
  test("party creation successful", async () => {
    const payload: CreatePartyRequest = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperkey",
      domicile: Domicile.USCITIZEN,
      firstName: "Bill",
      lastName: "Brown",
      dob: "01-03-1950",
      primCountry: "USA",
      primAddress1: "45 Brackett St",
      primAddress2: "Apt 1",
      primCity: "Portland",
      primState: "ME",
      primZip: "04101",
      emailAddress: "wpbrown@gmail.com",
    };
    const response: CreatePartyResponse = {
      statusCode: "101",
      statusDesc: "Ok",
      partyDetails: [
        {
          partyId: "someaccountid",
          KYCstatus: "Pending",
          AMLstatus: "Pending",
        },
      ],
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await createParty(payload);
    expect(mockedResponse).toEqual(response);
    expect(mockedResponse.partyDetails[0].partyId).not.toBeNull();
  });
});

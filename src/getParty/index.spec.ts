import axios from "axios";
import getParty from ".";
import { GetPartyRequest, GetPartyResponse } from "./types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("/getParty endpoint", () => {
  test("party exists", async () => {
    const payload: GetPartyRequest = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperkey",
      partyId: "P79443",
    };
    const response: GetPartyResponse = {
      statusCode: "101",
      statusDesc: "Ok",
      partyDetails: [
        {
          partyId: "P79443",
          firstName: "John",
          middleInitial: "D",
          lastName: "Smith",
          domicile: "U.S. citizen",
          socialSecurityNumber: "112-22-3333",
          dob: "03-24-1972",
          primAddress1: "PEACHTREE PLACE",
          primAddress2: "PEACHTREE PLACE",
          primCity: "Atlanta",
          primState: "GA",
          primZip: "30318",
          primCountry: "USA",
          emailAddress: "john@gmail.com",
          emailAddress2: "smith@gmail.com",
          phone: "9876543210",
          phone2: "0123456789",
          occupation: "DEVELOPER",
          associatedPerson: "Yes",
          empCountry: "USA",
          empAddress1: "PEACHTREE PLACE",
          empAddress2: "PEACHTREE PLACE",
          empCity: "Atlanta",
          empState: "GA",
          empZip: "30318",
          currentAnnIncome: "200000",
          avgAnnIncome: "500000",
          currentHouseholdIncome: "300000",
          avgHouseholdIncome: "400000",
          householdNetworth: "200000",
          kycStatus: "pending",
          amlStatus: "pending",
          amlDate: "03-17-2016",
          tags: "Tags Added",
          notes: "Notes Added",
          field1: "Testing",
          field2: "Sample",
          field3: "Checking",
        },
      ],
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await getParty(payload);
    expect(mockedResponse).toEqual(response);
    expect(payload.partyId).toEqual(response.partyDetails[0].partyId);
  });
});

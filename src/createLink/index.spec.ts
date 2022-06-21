import axios from "axios";
import createLink from ".";
import {
  LinkType,
  RelatedEntryType
} from "./enums";
import { CreateLinkRequest, CreateLinkResponse } from "./types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("/createLink endpoint", () => {
  test("link creation successful", async () => {
    const payload: CreateLinkRequest = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperkey",
      firstEntryType: "Account",
      firstEntry: "someaccountid",
      relatedEntryType: RelatedEntryType.INDIV_AC_PARTY,
      relatedEntry: "somepartyid",
      linkType: LinkType.OWNER,
      notes: "owner of account",
      primary_value: 1
    };
    const response: CreateLinkResponse = {
      statusCode: "101",
      statusDesc: "Ok",
      linkDetails: [
        {
          linkId: "somelinkid",
        },
      ],
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await createLink(payload);
    expect(mockedResponse).toEqual(response);
    expect(mockedResponse.linkDetails[0].linkId).not.toBeNull();
  });
});

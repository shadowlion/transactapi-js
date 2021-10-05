import axios from "axios";
import getTrade from ".";
import { GetTradeRequest, GetTradeResponse } from "./types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("/getTrade endpoint", () => {
  test("trade exists", async () => {
    const payload: GetTradeRequest = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperkey",
      accountId: "A12345",
      tradeId: "401510522",
    };
    const response: GetTradeResponse = {
      statusCode: "101",
      statusDesc: "Ok",
      partyDetails: [
        {
          id: "787508",
          developerAPIKey: "MyG0RJZUhdP7wkZXi5NvSCV47OjYGvkg3I7",
          offeringId: "35610",
          accountId: "A35513",
          partyId: "P82510",
          party_type: "IndivACParty",
          escrowId: "null",
          orderId: "401510522",
          transactionType: "WIRE",
          totalAmount: "99.400000",
          totalShares: "71.000000",
          orderStatus: "CREATED",
          createdDate: "2014-12-09 04:29:29",
          createdIpAddress: "110.172.170.246",
          errors: "",
          documentKey: "",
          esignStatus: "NOTSIGNED",
          users: "",
          archived_status: "0",
          RRApprovalStatus: "Pending",
          RRName: "Test",
          RRApprovalDate: "09-10-2019",
          PrincipalApprovalStatus: "Pending",
          PrincipalName: "Test",
          PrincipalDate: "09-10-2019",
        },
      ],
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await getTrade(payload);
    expect(mockedResponse).toEqual(response);
    expect(payload.tradeId).toEqual(response.partyDetails[0].orderId);
  });

  test("multiple trades exists", async () => {
    const payload: GetTradeRequest = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperkey",
      accountId: "A12345",
    };
    const response: GetTradeResponse = {
      statusCode: "101",
      statusDesc: "Ok",
      partyDetails: [
        {
          id: "787508",
          developerAPIKey: "MyG0RJZUhdP7wkZXi5NvSCV47OjYGvkg3I7",
          offeringId: "35610",
          accountId: "A35513",
          partyId: "P82510",
          party_type: "IndivACParty",
          escrowId: "null",
          orderId: "401510522",
          transactionType: "WIRE",
          totalAmount: "99.400000",
          totalShares: "71.000000",
          orderStatus: "CREATED",
          createdDate: "2014-12-09 04:29:29",
          createdIpAddress: "110.172.170.246",
          errors: "",
          documentKey: "",
          esignStatus: "NOTSIGNED",
          users: "",
          archived_status: "0",
          RRApprovalStatus: "Pending",
          RRName: "Test",
          RRApprovalDate: "09-10-2019",
          PrincipalApprovalStatus: "Pending",
          PrincipalName: "Test",
          PrincipalDate: "09-10-2019",
        },
        {
          id: "787508",
          developerAPIKey: "MyG0RJZUhdP7wkZXi5NvSCV47OjYGvkg3I7",
          offeringId: "35610",
          accountId: "A35513",
          partyId: "P82510",
          party_type: "IndivACParty",
          escrowId: "null",
          orderId: "401510522",
          transactionType: "WIRE",
          totalAmount: "99.400000",
          totalShares: "71.000000",
          orderStatus: "CREATED",
          createdDate: "2014-12-09 04:29:29",
          createdIpAddress: "110.172.170.246",
          errors: "",
          documentKey: "",
          esignStatus: "NOTSIGNED",
          users: "",
          archived_status: "0",
          RRApprovalStatus: "Pending",
          RRName: "Test",
          RRApprovalDate: "09-10-2019",
          PrincipalApprovalStatus: "Pending",
          PrincipalName: "Test",
          PrincipalDate: "09-10-2019",
        },
        {
          id: "787508",
          developerAPIKey: "MyG0RJZUhdP7wkZXi5NvSCV47OjYGvkg3I7",
          offeringId: "35610",
          accountId: "A35513",
          partyId: "P82510",
          party_type: "IndivACParty",
          escrowId: "null",
          orderId: "401510522",
          transactionType: "WIRE",
          totalAmount: "99.400000",
          totalShares: "71.000000",
          orderStatus: "CREATED",
          createdDate: "2014-12-09 04:29:29",
          createdIpAddress: "110.172.170.246",
          errors: "",
          documentKey: "",
          esignStatus: "NOTSIGNED",
          users: "",
          archived_status: "0",
          RRApprovalStatus: "Pending",
          RRName: "Test",
          RRApprovalDate: "09-10-2019",
          PrincipalApprovalStatus: "Pending",
          PrincipalName: "Test",
          PrincipalDate: "09-10-2019",
        },
        {
          id: "787508",
          developerAPIKey: "MyG0RJZUhdP7wkZXi5NvSCV47OjYGvkg3I7",
          offeringId: "35610",
          accountId: "A35513",
          partyId: "P82510",
          party_type: "IndivACParty",
          escrowId: "null",
          orderId: "401510522",
          transactionType: "WIRE",
          totalAmount: "99.400000",
          totalShares: "71.000000",
          orderStatus: "CREATED",
          createdDate: "2014-12-09 04:29:29",
          createdIpAddress: "110.172.170.246",
          errors: "",
          documentKey: "",
          esignStatus: "NOTSIGNED",
          users: "",
          archived_status: "0",
          RRApprovalStatus: "Pending",
          RRName: "Test",
          RRApprovalDate: "09-10-2019",
          PrincipalApprovalStatus: "Pending",
          PrincipalName: "Test",
          PrincipalDate: "09-10-2019",
        },
      ],
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await getTrade(payload);
    expect(mockedResponse).toEqual(response);
  });
});

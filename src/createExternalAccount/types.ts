import { AccountDescription, AccountType } from "./enums";

export interface CreateExternalAccountPayload {
  clientID: string;
  developerAPIKey: string;
  types: AccountDescription;
  accountId: string;
  ExtAccountfullname: string;
  Extnickname: string;
  ExtRoutingnumber: string;
  ExtAccountnumber: string;
  accountType?: AccountType;
  updatedIpAddress?: "69.61.177.110";
}

export interface CreateExternalAccountResponse {
  statusCode: string;
  statusDesc: string;
  "External Account Details"?: [true, ExternalAccountDetail[]];
}

export interface ExternalAccountDetail {
  accountId: string;
  ExtAccountfullname: string;
  Extnickname: string;
  ExtRoutingnumber: string;
  ExtAccountnumber: string;
  accountType: string;
  types: string;
}

import {
  Domicile
} from "./enums";

export interface CreatePartyRequest {
  clientID: string;
  developerAPIKey: string;
  domicile: Domicile; 
  firstName: string;
  lastName: string;
  dob: string;
  primCountry: string;
  primAddress1: string;
  primAddress2: string;
  primCity: string;
  primState: string;
  primZip: string;
  emailAddress: string;
}

export interface CreatePartyResponse {
  statusCode: string;
  statusDesc: string;
  partyDetails: PartyDetail[];
}

interface PartyDetail {
  partyId: integer;
  KYCstatus: string;
  AMLstatus: string;
}
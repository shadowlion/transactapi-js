import {
  AccountType,
  AccreditedStatus,
  AmlStatus,
  ApprovalStatus,
  DomesticYNChoice,
  EntityType,
  KycStatus,
} from "./enums";

export interface CreateAccountRequest {
  clientID: string;
  developerAPIKey: string;
  accountRegistration: string; // Name of the account
  type: AccountType;
  entityType?: EntityType;
  domesticYN: DomesticYNChoice;
  streetAddress1: string;
  streetAddress2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  KYCstatus: KycStatus;
  AMLstatus: AmlStatus;
  AccreditedStatus: AccreditedStatus;
  ApprovalStatus: ApprovalStatus;
}

export interface CreateAccountResponse {
  statusCode: string;
  statusDesc: string;
  accountDetails: AccountDetail[];
}

interface AccountDetail {
  accountId: string;
}

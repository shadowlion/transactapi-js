import axios, { AxiosResponse } from "axios";

export interface GetAccountPayload {
  clientID: string;
  developerAPIKey: string;
  accountId: string;
}

export interface GetAccountResponse {
  statusCode: string;
  statusDesc: string;
  accountDetails?: AccountDetails;
}

export interface AccountDetails {
  accountId: string;
  accountName: string;
  type: string;
  entityType: string;
  residentType: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  taxID: string;
  kycStatus: string;
  kycDate: string;
  amlStatus: string;
  amlDate: string;
  suitabilityScore: string;
  suitabilityDate: string;
  suitabilityApprover: string;
  accreditedStatus: string;
  accreditedInvestor: string;
  accreditedInvestorDate: string;
  "506cLimit": string;
  accountTotalLimit: string;
  singleInvestmentLimit: string;
  associatedAC: string;
  syndicate: string;
  tags: string;
  notes: string;
  approvalStatus: string;
  approvalPrincipal: string;
  approvalLastReview: string;
  field1: string;
  field2: string;
  field3: string;
}

/**
 * This method is used to get all information for an account (createAccount).
 * Reference: https://api.norcapsecurities.com/admin_v3/documentation?mid=MTM2
 * @method POST
 * @param  {Object} GetAccountPayload
 * @param  {String} GetAccountPayload.clientID - provided by North Capital
 * @param  {String} GetAccountPayload.developerAPIKey - provided by North Capital
 * @param  {String} GetAccountPayload.accountId - Account ID of an investor
 * @returns {Object} details of an account from the resulting query
 */
export default async function ({
  clientID,
  developerAPIKey,
  accountId,
}: GetAccountPayload): Promise<GetAccountResponse> {
  try {
    const payload: GetAccountPayload = {
      clientID,
      developerAPIKey,
      accountId,
    };

    const res: AxiosResponse<GetAccountResponse> = await axios.post(
      "https://api.norcapsecurities.com/tapiv3/index.php/v3/getAccount",
      payload,
    );

    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

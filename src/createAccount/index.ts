import { baseApi } from "../base";
import { AccountType } from "./enums";
import { CreateAccountRequest, CreateAccountResponse } from "./types";

/**
 * This method is used to create an account that can be linked (createLink) to an individual party (createParty) or an entity (createEntity).
 * @link https://api.norcapsecurities.com/admin_v3/documentation?mid=MQ==
 * @param {string} clientID - Transact API Client ID
 * @param {string} developerAPIKey - Transact API Developer Key
 * @param {string} accountRegistration - Investor Account Name - the exact registration of the account, such as "John Doe and Jane Doe JTWROS" or "John Doe IRA" or "Doe Family Trust"
 * @param {string} type - Individual, Entity, TIC, JTWROS, IRA, SepIRA, ROTH, or Joint
 * @param {string} entityType - Revocable Trust, Irrevocable Trust, Limited Partnership, LLC, Corporation
 * @param {string} domesticYN - Domestic or International Account
 * @param {string} streetAddress1 - Street Address Line 1
 * @param {string} streetAddress2 - Street Address Line 2
 * @param {string} city - Account Country
 * @param {string} state - Account State (Optional for non-U.S. parties)
 * @param {string} country - Account Country
 * @param {string} zip - Account Zip/Postal Code
 * @param {string} phone - Account Primary Phone Number
 * @param {string} KYCstatus - Know Your Customer(KYC) Status: Pending, Auto Approved, Manually Approved, Disapproved. Default status is "Pending"
 * @param {string} AMLstatus - Anti-Money Laundering(AML) Status: Pending, Auto Approved, Manually Approved, Disapproved. Default status is "Pending"
 * @param {string} AccreditedStatus -
 * @param {string} approvalStatus - Principal Approval Status: Pending, Approved, Not Approved
 * @returns {string} statusCode - API Status Code
 * @returns {string} statusDesc - API Status Description
 * @returns {string} accountId - Unique identifier code for the Account
 */
export default async function ({
  clientID,
  developerAPIKey,
  accountRegistration,
  type,
  entityType,
  domesticYN,
  streetAddress1,
  streetAddress2,
  city,
  state,
  zip,
  country,
  phone,
  KYCstatus,
  AMLstatus,
  AccreditedStatus,
  ApprovalStatus,
}: CreateAccountRequest): Promise<CreateAccountResponse> {
  try {
    const payload: CreateAccountRequest = {
      clientID,
      developerAPIKey,
      accountRegistration,
      type,
      domesticYN,
      streetAddress1,
      city,
      state,
      zip,
      country,
      phone,
      KYCstatus,
      AMLstatus,
      AccreditedStatus,
      ApprovalStatus,
    };
    if (type === AccountType.ENTITY) payload.entityType = entityType;
    if (streetAddress2) payload.streetAddress2 = streetAddress2;
    return await baseApi("POST", "createAccount", payload);
  } catch (error) {
    throw new Error(error.message);
  }
}

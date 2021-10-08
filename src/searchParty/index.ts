import { baseApi } from "../base";
import { SearchPartyRequest, SearchPartyResponse } from "./types";

/**
 * This method is used to search all individual parties for a specific keyword within the party information and will return all matches for that keyword.
 * @link https://api.norcapsecurities.com/admin_v3/documentation?mid=MTQy
 * @param {string} clientID - Transact API Client ID
 * @param {string} developerAPIKey - Transact API Developer Key
 * @param {string} searchKeyword - Keyword to search within all parties
 * @returns {string} statusCode - API Status Code
 * @returns {string} statusDesc - API Status Description
 * @returns {Array} partyDetails - Array of party includes all information of the matched party( partyId, firstName, middleInitial, lastName, domicile, socialSecurityNumber, dob, primAddress1, primAddress2, primCity, primState, primZip, primCountry, emailAddress, emailAddress2, phone, phone2, occupation, associatedPerson, empCountry, empAddress1, empAddress2, empCity, empState, empZip, currentAnnIncome, avgAnnIncome, currentHouseholdIncome, avgHouseholdIncome, householdNetworth, kycStatus, kycDate, amlStatus, amlDate, tags, notes)
 */
export default async function ({
  clientID,
  developerAPIKey,
  searchKeyword,
}: SearchPartyRequest): Promise<SearchPartyResponse> {
  try {
    const payload: SearchPartyRequest = {
      clientID,
      developerAPIKey,
      searchKeyword,
    };
    return await baseApi("searchParty", payload);
  } catch (error) {
    throw new Error(error.message);
  }
}

import { baseApi } from "../base";
import { CreateLinkRequest, CreateLinkResponse } from "./types";

/**
 * This method is used to create a link between parties and accounts.
 * @link https://api.norcapsecurities.com/admin_v3/documentation?mid=MQ==
 * @param {string} clientID - Transact API Client ID
 * @param {string} developerAPIKey - Transact API Developer Key
 * @param {string} firstEntryType - The first entry type for createLink is an Account
 * @param {string} firstEntry - Account ID to be linked to an Entity or Individual Party or another Account
 * @param {string} relatedEntryType - The second entry type for createLink: Account, IndivACParty, or EntityACParty
 * @param {string} relatedEntry - Account ID or individual/entity party ID to be linked to the account(first entry)
 * @param {string} linkType - Link description: owner, manager, member, officer, director, spouse, beneficiary, trustee, custodian, parentco, subsidiary, other, acgroup,advisor,attorney,proxy
 * @param {string} notes - Describe relationship between parties
 * @param {int} primary_value - Yes/No - you should enter either 1 (yes) or 0 (no)
 */
export default async function ({
  clientID,
  developerAPIKey,
  firstEntryType,
  firstEntry,
  relatedEntryType,
  relatedEntry,
  linkType,
  notes,
  primary_value
}: CreateLinkRequest): Promise<CreateLinkResponse> {
  try {
    const payload: CreateLinkRequest = {
      clientID,
      developerAPIKey,
      firstEntryType,
      firstEntry,
      relatedEntryType,
      relatedEntry,
      linkType,
      notes,
      primary_value
    };
    return await baseApi("POST", "createLink", payload);
  } catch (error) {
    throw new Error(error.message);
  }
}

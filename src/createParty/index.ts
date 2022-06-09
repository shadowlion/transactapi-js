import { baseApi } from "../base";
import { Domicile } from "./enums";
import { CreatePartyRequest, CreatePartyResponse } from "./types";

/**
 * This method is used to create a party
 * @link https://api.norcapsecurities.com/admin_v3/documentation?mid=MQ==
 */

export default async function ({
  clientID,
  developerAPIKey,
  domicile,
  firstName,
  lastName,
  dob,
  primCountry,
  primAddress1,
  primCity,
  primState,
  primZip,
  emailAddress,
}: CreatePartyRequest): Promise<CreatePartyResponse> {
  try {
    const payload: CreatePartyRequest = {
        clientID,
        developerAPIKey,
        domicile,
        firstName,
        lastName,
        dob,
        primCountry,
        primAddress1,
        primCity,
        primState,
        primZip,
        emailAddress,
    };
    return await baseApi("POST", "createParty", payload);
  } catch (error) {
    throw new Error(error.message);
  }
}

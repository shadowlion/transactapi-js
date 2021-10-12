import axios, { AxiosResponse } from "axios";

export const BASE_URL = "https://api.norcapsecurities.com/tapiv3/index.php/v3/";

/**
 * Base API call to Transact API
 * @param endpoint API endpoint, referenced from documentation
 * @param payload Object of parameters, referenced from documentation
 * @returns JSON response
 */
export async function baseApi<Payload, Response>(
  endpoint: string,
  payload: Payload,
): Promise<Response> {
  try {
    const res: AxiosResponse<Response> = await axios.post(
      BASE_URL + endpoint,
      payload,
    );
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

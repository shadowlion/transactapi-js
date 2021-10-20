import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";

export const BASE_URL = "https://api.norcapsecurities.com/tapiv3/index.php/v3/";

/**
 * Base API call to Transact API
 * @param {string} method - HTTP method
 * @param {string} endpoint - API endpoint, referenced from documentation
 * @param {object} payload - Object of request parameters, referenced from documentation
 * @returns AxiosResponse
 */
export async function baseApi<Payload, Response>(
  method: Method,
  endpoint: string,
  payload: Payload,
): Promise<Response> {
  try {
    const config: AxiosRequestConfig = {
      method: method,
      url: BASE_URL + endpoint,
      data: payload,
    }
    const res: AxiosResponse<Response> = await axios(config);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

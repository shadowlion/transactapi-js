import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";

export const BASE_URL = "https://api.norcapsecurities.com/tapiv3/index.php/v3/";

/**
 * Base API call to Transact API
 * @param {string} method - HTTP method
 * @param {string} endpoint - API endpoint, referenced from documentation
 * @param {object} payload - Object of request parameters, referenced from documentation
 * @return AxiosResponse
 */
export async function baseApi<Payload, Response>(
  method: Method,
  endpoint: string,
  payload: Payload,
): Promise<Response> {
  try {
    let res: AxiosResponse<Response>;
    const url = BASE_URL + endpoint;
    const config: AxiosRequestConfig<Payload> = { data: payload };
    if (method === "GET") res = await axios.get(url);
    if (method === "POST") res = await axios.post(url, config);
    if (method === "PUT") res = await axios.put(url, config);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

import axios from "axios";
import getAccount from ".";
import { payload, response } from "./mocks";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

test("should fetch an account that exists", async () => {
  mockedAxios.post.mockResolvedValue({ data: response });
  const mockedResponse = await getAccount(payload);
  expect(mockedResponse).toEqual(response);
});

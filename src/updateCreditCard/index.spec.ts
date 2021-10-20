import axios from "axios";
import updateCreditCard from ".";
import { CardType } from "./enums";
import { UpdateCreditCardRequest, UpdateCreditCardResponse } from "./types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("/updateCreditCard endpoint", () => {
  test("trade exists", async () => {
    const payload: UpdateCreditCardRequest = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperkey",
      accountId: "A12345",
      creditCardName: "Bank Card",
      creditCardNumber: "1234567890123456",
      expirationDate: "1212",
      cvvNumber: "123",
      cardType: CardType.VI,
    };
    const response: UpdateCreditCardResponse = {
      statusCode: "101",
      statusDesc: "Ok",
      creditCardDetails: "credit card updated.",
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await updateCreditCard(payload);
    expect(mockedResponse).toEqual(response);
  });
});

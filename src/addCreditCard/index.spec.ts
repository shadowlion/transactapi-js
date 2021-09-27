import axios from "axios";
import addCreditCard from ".";
import { CreditCardType } from "./enums";
import { AddCreditCardPayload, AddCreditCardResponse } from "./types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("/getAccount", () => {
  test("account exists", async () => {
    const payload: AddCreditCardPayload = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperkey",
      accountId: "AXXXXX",
      creditCardName: "somebank",
      creditCardNumber: "4242424242424242",
      expirationDate: "1212",
      cvvNumber: "123",
      cardType: CreditCardType.VISA,
    };
    const response: AddCreditCardResponse = {
      statusCode: "101",
      statusDesc: "Ok",
      creditcardDetails: "Credit Card details added successfully",
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await addCreditCard(payload);
    expect(mockedResponse).toEqual(response);
  });

  test("account not found", async () => {
    const payload: AddCreditCardPayload = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperkey",
      accountId: "AXXXXX",
      creditCardName: "somebank",
      creditCardNumber: "4242424242424242",
      expirationDate: "1212",
      cvvNumber: "123",
      cardType: CreditCardType.MASTERCARD,
    };
    const response: AddCreditCardResponse = {
      statusCode: "148",
      statusDesc: "Account is not exist/active.",
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await addCreditCard(payload);
    expect(mockedResponse).toEqual(response);
  });

  // TODO: mock responses for invalid credit card credentials
});

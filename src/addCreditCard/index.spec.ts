import axios from "axios";
import addCreditCard from ".";
import { CreditCardType } from "./enums";
import { AddCreditCardPayload, AddCreditCardResponse } from "./types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("/getAccount", () => {
  test("credit card creation successful", async () => {
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

  test("invalid base credentials", async () => {
    const payload: AddCreditCardPayload = {
      clientID: "",
      developerAPIKey: "somedeveloperkey",
      accountId: "AXXXXX",
      creditCardName: "somebank",
      creditCardNumber: "4242424242424242",
      expirationDate: "1212",
      cvvNumber: "123",
      cardType: CreditCardType.VISA,
    };
    const response: AddCreditCardResponse = {
      statusCode: "103",
      statusDesc: "Invalid Developer Key/Client ID OR Developer Key not Active",
    };
    mockedAxios.post.mockResolvedValue({ data: response });
    const mockedResponse = await addCreditCard(payload);
    expect(mockedResponse).toEqual(response);

    const payload2: AddCreditCardPayload = {
      clientID: "someclientid",
      developerAPIKey: "",
      accountId: "AXXXXX",
      creditCardName: "somebank",
      creditCardNumber: "4242424242424242",
      expirationDate: "1212",
      cvvNumber: "123",
      cardType: CreditCardType.VISA,
    };
    const response2: AddCreditCardResponse = {
      statusCode: "103",
      statusDesc: "Invalid Developer Key/Client ID OR Developer Key not Active",
    };
    mockedAxios.post.mockResolvedValue({ data: response2 });
    const mockedResponse2 = await addCreditCard(payload2);
    expect(mockedResponse2).toEqual(response2);
  });

  test("account not found", async () => {
    const payload: AddCreditCardPayload = {
      clientID: "someclientid",
      developerAPIKey: "somedeveloperkey",
      accountId: "",
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
});

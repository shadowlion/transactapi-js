# TransactAPI Javascript SDK

TransactAPI is a RESTful API that enables broker-dealers, funding platforms, and issuers to conduct online private securities offerings. Our standards-based API toolkit can be quickly and easily integrated with proprietary platforms, saving development time and money. Issuers, intermediaries, and advisors can benefit from TransactAPI’s straight-through processing of private placement transactions, which enables higher transaction volumes, expands access to investors, and reduces processing times.

This is a javascript API wrapper that functions for endpoints as specified in the [documentation](https://api.norcapsecurities.com/documentation) of Transact API, provided by [North Capital Private Securities](https://www.northcapital.com/) (NCPS).

## Author's Notes

This is in no way an official SDK provided by the company itself. However, since I use a lot of javascript in my daily work life, I figured I could create a library and share it with others in a more open-source format.

For those who wish to help during Hacktoberfest (or any time else!), please submit a PR. Check the [contribution section](CONTRIBUTE.md) for more information.

## Development

You will need to acquire both a `clientID` and `developerAPIKey` from NCPS in order to use this for actual financial services - this happens when you subscribe to them as a customer of their services. However, you DO NOT need a `clientID` nor `developerAPIKey` from NCPS to develop this library, as we use mocks from their documentation to test each endpoint.

## Installation

```bash
npm install transactapi-js --save
yarn add transactapi-js
pnpm add transactapi-js
```

## Usage

```javascript
// Javascript, CJS
const transactapi = require("transactapi-js");

(function () {
  const getAccount = transactapi.getAccount;
  const payload = {
    clientID: "",
    developerAPIKey: "",
    accountId: "",
  };
  getAccount(payload).then((account) => {
    const name = account.accountName;
    console.log(name);
  });
})();
```

```javascript
// Javascript, ES6
import getAccount from "transactapi-js/getAccount";

(async () => {
  const payload = {
    clientID: "",
    developerAPIKey: "",
    accountId: "",
  };
  const account = await getAccount(payload);
  const name = account.accountName;
  console.log(name);
})();
```

```typescript
// Typescript
import getAccount, { GetAccountPayload } from "transactapi-js/getAccount";

(async () => {
  const payload: GetAccountPayload = {
    clientID: "",
    developerAPIKey: "",
    accountId: "",
  };
  const account = await getAccount(payload);
  const name = account.accountName;
  console.log(name);
})();
```

## How to Contribute

Please use the [CONTRIBUTE.md](CONTRIBUTE.md) file to learn more.

# TransactAPI Javascript SDK

This is a library javascript wrapper functions for endpoints as specified in the [documentation](transactapi-docs) of Transact API, provided by [North Capital Private Securities](ncps) (NCPS).

TransactAPI is a RESTful API that enables broker-dealers, funding platforms, and issuers to conduct online private securities offerings. Our standards-based API toolkit can be quickly and easily integrated with proprietary platforms, saving development time and money. Issuers, intermediaries, and advisors can benefit from TransactAPI’s straight-through processing of private placement transactions, which enables higher transaction volumes, expands access to investors, and reduces processing times.

## Author's Notes

This is in no way an official SDK provided by the company itself. However, since I use a lot of javascript in my daily work life, I figured I could create a library and share it with others in a more open-source format.

For those who wish to help during Hacktoberfest (or any time else!), please submit a PR. Check the [contribution section](#how-to-contribute) for more information.

## Setup

You will need to acquire both a `clientId` and `developerAPIKey` from NCPS - this happens when you subscribe to them as a custom of their services.

Each API endpoint will require both in order to get the response to fully work.

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
});
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

Take a look at the [documentation](transactapi-docs), find which endpoint hasn't been covered yet. Normally, you will want to do the following on github:

1. Open an issue

2. Open a pull request addressing the issue

3. Create a folder in `/src` with the name of the `ENDPOINT`. Create the following files:

    - `/src/ENDPOINT/index.ts` - function file to call the api endpoint
    - `/src/ENDPOINT/index.spec.ts` - test file to mock the api calls
    - `/src/ENDPOINT/types.ts` - types file just for this specific endpoint
    - `/src/ENDPOINT/enums.ts` - enums file (optional)

[ncps]: https://www.northcapital.com/
[transactapi-docs]: https://api.norcapsecurities.com/admin_v3/documentation

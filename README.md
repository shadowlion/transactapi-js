# TransactAPI Javascript SDK

This is a library for creating javascript wrapper functions for APIs as specified in the [documentation](https://api.norcapsecurities.com/admin_v3/documentation), provided by North Capital Private Securities (NCPS).

TransactAPI is a RESTful API that enables broker-dealers, funding platforms, and issuers to conduct online private securities offerings. Our standards-based API toolkit can be quickly and easily integrated with proprietary platforms, saving development time and money. Issuers, intermediaries, and advisors can benefit from TransactAPI’s straight-through processing of private placement transactions, which enables higher transaction volumes, expands access to investors, and reduces processing times.

## Installation

```bash
npm install transactapi-js --save
yarn add transactapi-js
pnpm add transactapi-js
```

## Usage

```javascript
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

## License

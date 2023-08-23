
# amnis-sdk

This is a Javascript (Node & Web) API wrapper SDK for Amnis Treasury's public API. The purpose is to wrap the API and provide a fully typed Typescript interface around it. 

## Installation

Install with npm

```bash
npm install --save @maten/amnis-sdk
```
Or with yarn
```bash
yarn add @maten/amnis-sdk
```
    
## Examples

#### Initialize the client

```javascript
import { AmnisClient } from "@maten/amnis-sdk";

const client = new AmnisClient({
    client_id: "id",
    client_secret: "secret",
});
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `client_id` | `string` | **Required**. Your amnis api client id |
| `client_secret` | `string` | **Required**. Your amnis api client secret |

#### Get a resource collection

```javascript
const transactions = await client.transactions.getAllResources();
```

Collections are are always paginated. The response contains all the pagination info. By default the `itemsPerPage`is set to 30 by the API, it can be overwritten by providing parameters for the method, eg:

```javascript
const transaction = await client.transactions.getAllResources({
    itemsPerPage: 5,
    page: 1,
});
```

Collections can be requested with provided filters too. The filters are different for each resource types, although they are always the same as the public API has them, and the options are provided by Typescript types.

Example filters for transactions collection
```javascript
// Filter for transactions with amount greater than 1000
const transaction = await client.transactions.getAllResources({
    abs_amount: {
      gt: '1000.00'
    }    
});

// Filter for transactions that are executed
const transaction = await client.transactions.getAllResources({
    executed: true 
});
```

#### Get a single resource

```javascript
const transaction = await client.transactions.getResourceById(1);
```

Every resource request (both collections and single) is returning with a Promise, so you can use `.then().catch()` on them, or `async/await`.

All the available resource types are fully typed, and available through the client object. 

For full API documentation, please refer to the [original API docs](https://developer.amnistreasury.com/).
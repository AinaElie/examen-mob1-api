# Wallet

## Properties

| Name          | Type    |
| ------------- | ------- |
| `name`        | string  |
| `description` | string  |
| `id`          | string  |
| `isActive`    | boolean |
| `amount`      | number  |

## Example

```typescript
import type { Wallet } from "";

// TODO: Update the object below with actual values
const example = {
  name: Personal,
  description: null,
  id: null,
  isActive: null,
  amount: null,
} satisfies Wallet;

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Wallet;
console.log(exampleParsed);
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# LabelApi

All URIs are relative to _http://localhost:8080_

| Method                                 | HTTP request                                 | Description                                          |
| -------------------------------------- | -------------------------------------------- | ---------------------------------------------------- |
| [**createOne**](LabelApi.md#createone) | **POST** /account/{accountId}/label          | Create new label for the specified account           |
| [**getAll**](LabelApi.md#getall)       | **GET** /account/{accountId}/label           | Get all disponibles lables for the specified account |
| [**getOne**](LabelApi.md#getone)       | **GET** /account/{accountId}/label/{labelId} | Get get one label by id for the specified account    |
| [**updateOne**](LabelApi.md#updateone) | **PUT** /account/{accountId}/label/{labelId} | Update one label by id for the specified account     |

## createOne

> Label createOne(accountId, creationLabel)

Create new label for the specified account

### Example

```ts
import {
  Configuration,
  LabelApi,
} from '';
import type { CreateOneRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LabelApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // CreationLabel (optional)
    creationLabel: ...,
  } satisfies CreateOneRequest;

  try {
    const data = await api.createOne(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name              | Type                              | Description | Notes                     |
| ----------------- | --------------------------------- | ----------- | ------------------------- |
| **accountId**     | `string`                          |             | [Defaults to `undefined`] |
| **creationLabel** | [CreationLabel](CreationLabel.md) |             | [Optional]                |

### Return type

[**Label**](Label.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | OK          | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

## getAll

> Array&lt;Label&gt; getAll(accountId)

Get all disponibles lables for the specified account

### Example

```ts
import {
  Configuration,
  LabelApi,
} from '';
import type { GetAllRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LabelApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetAllRequest;

  try {
    const data = await api.getAll(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name          | Type     | Description | Notes                     |
| ------------- | -------- | ----------- | ------------------------- |
| **accountId** | `string` |             | [Defaults to `undefined`] |

### Return type

[**Array&lt;Label&gt;**](Label.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | OK          | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

## getOne

> Label getOne(accountId, labelId)

Get get one label by id for the specified account

### Example

```ts
import {
  Configuration,
  LabelApi,
} from '';
import type { GetOneRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LabelApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    labelId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetOneRequest;

  try {
    const data = await api.getOne(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name          | Type     | Description | Notes                     |
| ------------- | -------- | ----------- | ------------------------- |
| **accountId** | `string` |             | [Defaults to `undefined`] |
| **labelId**   | `string` |             | [Defaults to `undefined`] |

### Return type

[**Label**](Label.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | OK          | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

## updateOne

> Label updateOne(accountId, labelId, label)

Update one label by id for the specified account

### Example

```ts
import {
  Configuration,
  LabelApi,
} from '';
import type { UpdateOneRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LabelApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    labelId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Label (optional)
    label: ...,
  } satisfies UpdateOneRequest;

  try {
    const data = await api.updateOne(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name          | Type              | Description | Notes                     |
| ------------- | ----------------- | ----------- | ------------------------- |
| **accountId** | `string`          |             | [Defaults to `undefined`] |
| **labelId**   | `string`          |             | [Defaults to `undefined`] |
| **label**     | [Label](Label.md) |             | [Optional]                |

### Return type

[**Label**](Label.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | OK          | -                |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

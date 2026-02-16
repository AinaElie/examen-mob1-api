# GoalApi

All URIs are relative to _http://localhost:8080_

| Method                                        | HTTP request                               | Description                                 |
| --------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
| [**createOneGoal**](GoalApi.md#createonegoal) | **POST** /account/{accountId}/goal         | create new goal for one account             |
| [**getAllGoals**](GoalApi.md#getallgoals)     | **GET** /account/{accountId}/goal          | Get all disponibles goal of one account     |
| [**getOneGoal**](GoalApi.md#getonegoal)       | **GET** /account/{accountId}/goal/{goalId} | Get one goal of one account by it\&#39;s id |
| [**updateOneGoal**](GoalApi.md#updateonegoal) | **PUT** /account/{accountId}/goal/{goalId} | update one goal of one account              |

## createOneGoal

> GetAllGoals200Response createOneGoal(accountId, creationGoal)

create new goal for one account

### Example

```ts
import {
  Configuration,
  GoalApi,
} from '';
import type { CreateOneGoalRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new GoalApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // CreationGoal (optional)
    creationGoal: ...,
  } satisfies CreateOneGoalRequest;

  try {
    const data = await api.createOneGoal(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name             | Type                            | Description | Notes                     |
| ---------------- | ------------------------------- | ----------- | ------------------------- |
| **accountId**    | `string`                        |             | [Defaults to `undefined`] |
| **creationGoal** | [CreationGoal](CreationGoal.md) |             | [Optional]                |

### Return type

[**GetAllGoals200Response**](GetAllGoals200Response.md)

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

## getAllGoals

> GetAllGoals200Response getAllGoals(accountId, walletId, name, startingDate, endingDate)

Get all disponibles goal of one account

### Example

```ts
import {
  Configuration,
  GoalApi,
} from '';
import type { GetAllGoalsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new GoalApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    walletId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    name: name_example,
    // Date (optional)
    startingDate: 2013-10-20T19:20:30+01:00,
    // Date (optional)
    endingDate: 2013-10-20T19:20:30+01:00,
  } satisfies GetAllGoalsRequest;

  try {
    const data = await api.getAllGoals(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name             | Type     | Description | Notes                                |
| ---------------- | -------- | ----------- | ------------------------------------ |
| **accountId**    | `string` |             | [Defaults to `undefined`]            |
| **walletId**     | `string` |             | [Optional] [Defaults to `undefined`] |
| **name**         | `string` |             | [Optional] [Defaults to `undefined`] |
| **startingDate** | `Date`   |             | [Optional] [Defaults to `undefined`] |
| **endingDate**   | `Date`   |             | [Optional] [Defaults to `undefined`] |

### Return type

[**GetAllGoals200Response**](GetAllGoals200Response.md)

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

## getOneGoal

> Goal getOneGoal(accountId)

Get one goal of one account by it\&#39;s id

### Example

```ts
import {
  Configuration,
  GoalApi,
} from '';
import type { GetOneGoalRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new GoalApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetOneGoalRequest;

  try {
    const data = await api.getOneGoal(body);
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

[**Goal**](Goal.md)

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

## updateOneGoal

> Goal updateOneGoal(accountId, goal)

update one goal of one account

### Example

```ts
import {
  Configuration,
  GoalApi,
} from '';
import type { UpdateOneGoalRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new GoalApi();

  const body = {
    // string
    accountId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // Goal (optional)
    goal: ...,
  } satisfies UpdateOneGoalRequest;

  try {
    const data = await api.updateOneGoal(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

| Name          | Type            | Description | Notes                     |
| ------------- | --------------- | ----------- | ------------------------- |
| **accountId** | `string`        |             | [Defaults to `undefined`] |
| **goal**      | [Goal](Goal.md) |             | [Optional]                |

### Return type

[**Goal**](Goal.md)

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

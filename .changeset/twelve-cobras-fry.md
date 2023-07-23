---
'melper': minor
---

feat(camel-case): add camelCase function to convert a given string to camel case

This commit adds a new file `camel-case.ts` under `src/string/cases` directory. The file contains a function `camelCase` that takes a string as input and converts it to camel case using the `change-case` library.

The function has the following signature:

```typescript
function camelCase(input: string): string
```

A new test file `camel-case.test.ts` is also added under `tests/string/cases` directory. The test file contains a test case that verifies the correctness of the `camelCase` function by comparing the output with an expected value.

The test case asserts that the input string "hello world" is converted to "helloWorld" when passed to the `camelCase` function.

- Added `isTransformerFunction` function to check if a parameter is a transformer function.
- Added `isTransformerFunction` function to check if a parameter is a transformer function.

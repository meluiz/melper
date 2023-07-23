---
'melper': minor
---

feat(snake-case): add snakeCase function to convert a string to snake case

This commit adds a new file `snake-case.ts` under `src/string/cases` directory. The file contains a function `snakeCase` that takes a string as input and converts it to snake case using the `change-case` library.

The function has the following signature:

```typescript
snakeCase(input: string): string
```

A new test file `snake-case.test.ts` is also added under `tests/string/cases` directory. The test verifies that the `snakeCase` function correctly converts a given input string to snake case.

The test case in the added test file asserts that the input string "hello world" is converted to "hello_world" when passed to the `snakeCase` function.

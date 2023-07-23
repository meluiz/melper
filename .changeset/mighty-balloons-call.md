---
'melper': patch
---

feat(sentence-case): add sentenceCase function to transform input string to sentence case

This commit adds a new file `sentence-case.ts` under `src/string/cases` directory. The file contains a function `sentenceCase` that takes an input string and transforms it to sentence case using the `change-case` library.

The function is documented with JSDoc comments explaining its purpose and usage.

Additionally, this commit adds a new test file `sentence-case.test.ts` under `tests/string/cases` directory. The test file includes a test case to verify the correctness of the `sentenceCase` function. It checks if the function correctly transforms the input string "hello world" to "Hello world".

This feature is useful for cases where we need to convert strings to sentence case, such as formatting user input or generating human-readable text.

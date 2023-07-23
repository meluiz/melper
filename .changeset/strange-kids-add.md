---
'melper': minor
---

feat(no-case): add `noCase` function to convert a string to no case format

This commit adds a new file `no-case.ts` under `src/string/cases` directory. The file contains a function `noCase` that takes a string as input and converts it to no case format using the `change-case` library.

The `noCase` function generates a function comment for the given function body in a markdown code block with the correct language syntax. It accepts an additional `options` parameter for generating the comment.

A new test file `no-case.test.ts` is also added under `tests/string/cases` directory. The test file contains a test case for the `noCase` function. It tests whether the function is able to generate a noCase string from the given input string.

The test case asserts that when the input string is 'helloWorld', the expected output should be 'hello world'. The `noCase` function is called with the input string and the result is compared with the expected output using the `expect` assertion.

This feature is added to provide a convenient way to convert strings to no case format, which can be useful in various scenarios such as generating function comments.

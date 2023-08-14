# melper

## 3.1.6

### Patch Changes

- ac7c90a: refactor(singularize.ts): import entire 'pluralize' module as Singularize for better code readability and potential future use of other module functions

## 3.1.5

### Patch Changes

- 636f5a3: refactor(pluralize.ts): change import style from named import to namespace import for 'pluralize' library to ensure all functions are available for use

## 3.1.4

### Patch Changes

- dbfffc0: chore(tsconfig.json): add "type" field with value "es2020" ts specify the ECMAScript version used in the project.

## 3.1.3

### Patch Changes

- 1db6a3e: chore(package.json): rearrange exports in package.json to improve readability and consistency

## 3.1.2

### Patch Changes

- a7dc7a4: docs(README.md): fix typo in code example, change Typ.isDate to Typ.isClass for accurate description

## 3.1.1

### Patch Changes

- 7aff92a: docs(README.md): fix incorrect method names in Number section

## 3.1.0

### Minor Changes

- f24d50b: feat(capital-case): add capitalCase function to convert input string to capitalized form
- f24d50b: feat(title-case): add titleCase function to convert a string to title case

## 3.0.3

### Patch Changes

- 05ac93b: chore(README.md): update npm package name and license badge URLs

  The npm package name and license badge URLs in the README.md file were outdated. This commit updates the package name to "melper" and updates the npm and license badge URLs accordingly.

## 3.0.2

### Patch Changes

- 20564a8: chore(README.md): remove unnecessary synk badge docs(README.md): update description to emphasize code reusability and maintainability docs(README.md): remove unused import statement

## 3.0.1

### Patch Changes

- 3b5bab7: chore(README.md): update installation instructions and add table of contents for easier navigation feat(README.md): add comprehensive description of the melper module and its benefits feat(README.md): add installation instructions and usage example feat(README.md): add documentation for Number utilities feat(README.md): add documentation for String utilities feat(README.md): add documentation for Types utilities

## 3.0.0

### Major Changes

- b6a13bf: feat(types): add various utility functions for type checks

  - Add `isFunction` utility function to check if a value is a function
  - Add `isObject` function to check whether the input is an object
  - Add `isClass` function to check if the input is a class
  - Add `isError` function to check if the input is an error
  - Add `isBuffer` function to check if the input is a Buffer
  - Add `isArray` function to determine whether the input is an array of a specific type
  - Add `isUndefined` function to check if a value is undefined
  - Add `isDate` function to determine whether the input is a Date object
  - Add `isRegExp` function to check if the input is a regular expression
  - Add `isNull` function to check if input is null
  - Add `isString` function to check if the given input is a string
  - Add `isNumber` function to check if the input is a number
  - Add `typeof` module to determine the type of an input value

  These utility functions are added to improve the type checking capabilities of the codebase.

### Minor Changes

- f04bf5e: feat(types): add isFunction utility function to check if a value is a function
- f04bf5e: feat(is-object.ts): add isObject function to check whether the input is an object
- f04bf5e: feat(is-class): add isClass function to check if the input is a class
- f04bf5e: feat(types): add type definitions for various type checks
- f04bf5e: feat(types): add function `isError` to check if the input is an error
- f04bf5e: feat(types): add isBuffer function to check if the input is a Buffer
- f04bf5e: feat(types): add isArray function to determine whether the input is an array of a specific type
- f04bf5e: feat(types): add isUndefined function to check if a value is undefined
- f04bf5e: feat(is-date.ts): add `isDate` function to determine whether the input is a Date object
- f04bf5e: feat(types): add new type files for various data types
- f04bf5e: feat(types): add isInteger function to check if a number is an integer
- f04bf5e: feat(is-regexp): add `isRegExp` function to check if the input is a regular expression
- f04bf5e: feat(types): add isNull function to check if input is null
- f04bf5e: feat(is-string.ts): add isString function to check if the given input is a string
- f04bf5e: feat(is-number.ts): add isNumber function to check if the input is a number
- f04bf5e: feat(typeof.ts): add typeof module to determine the type of an input value

## 2.0.1

### Patch Changes

- 6ddf9d3: test(escape-html.test.ts): add test case to ensure that Str.escapeHTML correctly escapes HTML characters
- 6ddf9d3: test(dash-case.test.ts): add test case to generate a dash-case string with capitalize option

  The test case was added to ensure that the `Str.dashCase` function is able to generate a dash-case string with capitalize option from the given input string. The input string "hello world" should be transformed into "Hello-World".

## 2.0.0

### Major Changes

- 45d159c: feat(number/format.ts): add new module for formatting numbers according to locale and options

  feat(to-ms.ts): add utility function to convert string or number value to milliseconds

  feat(to-bytes.ts): add new utility function to convert input to bytes

  These changes were made to introduce new utility functions and modules to improve the functionality and flexibility of the codebase. The new modules and functions will allow for better number formatting, conversion of values to milliseconds, and conversion of input to bytes.

### Minor Changes

- 5140ce0: feat(number/format.ts): add new module for formatting numbers according to locale and options
- 5140ce0: feat(to-ms.ts): add utility function to convert string or number value to milliseconds
- 5140ce0: feat(to-bytes.ts): add new utility function to convert input to bytes

## 1.0.0

### Major Changes

- 94e6ece: feat(string): add various utility functions for string manipulation

  This commit introduces several new utility functions for string manipulation:

  1. `pluralize`: Adds a function to pluralize a word. This function is implemented in the `pluralize.ts` file.
  2. `upper`: Adds a function to convert a string to uppercase. This function is implemented in the `upper.ts` file.
  3. `prettyBytes`: Adds a function to convert a number value to a human-readable string representing a file size. This function is implemented in the `pretty-bytes.ts` file.
  4. `dashCase`: Adds a function to convert a string to dash-case. This function is implemented in the `dash-case.ts` file.
  5. `encodeSymbols`: Adds a function to encode symbols in a string using the `he` library. This function is implemented in the `encode-symbols.ts` file.
  6. `pascalCase`: Adds a function to convert a string to pascal case. This function is implemented in the `pascal-case.ts` file.
  7. `capitalize`: Adds a function to capitalize the first letter of a string. This function is implemented in the `capitalize.ts` file.
  8. `sentenceCase`: Adds a function to transform a string

### Minor Changes

- 15519ff: feat(pluralize.ts): add function to pluralize a word
- 15519ff: feat(upper.ts): add `upper` function to convert input string to uppercase
- 15519ff: feat(pretty-bytes.ts): add new utility function `prettyBytes` to convert a number value to a human-readable string representing a file size
- 15519ff: feat(dash-case.ts): add `dashCase` function to convert input string to dash-case
- 15519ff: feat(encode-symbols.ts): add function to encode symbols in a string using he library
- 15519ff: feat(pascal-case): add pascalCase function to convert a string to pascal case

  Add a new file `pascal-case.ts` under `src/string/cases` directory to implement the `pascalCase` function. This function uses the `change-case` library to convert the given string to pascal case. The function takes a string as input and returns the converted string in pascal case.

  Add a new test file `pascal-case.test.ts` under `tests/string/cases` directory to test the `pascalCase` function. The test verifies that the function is able to generate the expected pascal case string from the given input string.

- 15519ff: feat(capitalize.ts): add capitalize function to capitalize the first letter of a string
- 15519ff: feat(generate-random.ts): add function to generate a random string of specified length
- 15519ff: feat(snake-case): add snakeCase function to convert a string to snake case

  This commit adds a new file `snake-case.ts` under `src/string/cases` directory. The file contains a function `snakeCase` that takes a string as input and converts it to snake case using the `change-case` library.

  The function has the following signature:

  ```typescript
  snakeCase(input: string): string
  ```

  A new test file `snake-case.test.ts` is also added under `tests/string/cases` directory. The test verifies that the `snakeCase` function correctly converts a given input string to snake case.

  The test case in the added test file asserts that the input string "hello world" is converted to "hello_world" when passed to the `snakeCase` function.

- 15519ff: feat(escape-html.ts): add escapeHTML function to escape HTML characters in a given input string
- 15519ff: feat(singularize.ts): add new function `singularize` to singularize a word
- 15519ff: feat(no-case): add `noCase` function to convert a string to no case format

  This commit adds a new file `no-case.ts` under `src/string/cases` directory. The file contains a function `noCase` that takes a string as input and converts it to no case format using the `change-case` library.

  The `noCase` function generates a function comment for the given function body in a markdown code block with the correct language syntax. It accepts an additional `options` parameter for generating the comment.

  A new test file `no-case.test.ts` is also added under `tests/string/cases` directory. The test file contains a test case for the `noCase` function. It tests whether the function is able to generate a noCase string from the given input string.

  The test case asserts that when the input string is 'helloWorld', the expected output should be 'hello world'. The `noCase` function is called with the input string and the result is compared with the expected output using the `expect` assertion.

  This feature is added to provide a convenient way to convert strings to no case format, which can be useful in various scenarios such as generating function comments.

- 15519ff: feat(truncate.ts): add new utility function `truncate` to truncate a given string to a specified length
- 15519ff: feat(lower.ts): add `lower` function to convert input string to lowercase
- 15519ff: feat(dot-case): add dotCase function to convert a string to dot case
- 15519ff: feat(camel-case): add camelCase function to convert a given string to camel case

  This commit adds a new file `camel-case.ts` under `src/string/cases` directory. The file contains a function `camelCase` that takes a string as input and converts it to camel case using the `change-case` library.

  The function has the following signature:

  ```typescript
  function camelCase(input: string): string
  ```

  A new test file `camel-case.test.ts` is also added under `tests/string/cases` directory. The test file contains a test case that verifies the correctness of the `camelCase` function by comparing the output with an expected value.

  The test case asserts that the input string "hello world" is converted to "helloWorld" when passed to the `camelCase` function.

  - Added `isTransformerFunction` function to check if a parameter is a transformer function.
  - Added `isTransformerFunction` function to check if a parameter is a transformer function.

- 15519ff: feat(pretty-ms.ts): add new module for formatting milliseconds into a human-readable string representation
- 15519ff: feat(excerpt.ts): add new utility function `excerpt` to generate truncated excerpts of input strings

### Patch Changes

- 15519ff: feat(sentence-case): add sentenceCase function to transform input string to sentence case

  This commit adds a new file `sentence-case.ts` under `src/string/cases` directory. The file contains a function `sentenceCase` that takes an input string and transforms it to sentence case using the `change-case` library.

  The function is documented with JSDoc comments explaining its purpose and usage.

  Additionally, this commit adds a new test file `sentence-case.test.ts` under `tests/string/cases` directory. The test file includes a test case to verify the correctness of the `sentenceCase` function. It checks if the function correctly transforms the input string "hello world" to "Hello world".

  This feature is useful for cases where we need to convert strings to sentence case, such as formatting user input or generating human-readable text.

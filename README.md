# melper

Explore a versatile assortment of helper utility functions.

## Installation

```bash
bun add melper
# or
npm install melper
```

## Usage

```ts
import { guard, number, string, Extrapolate } from 'melper'
```

### guard

Type and environment helpers.

```ts
guard.isString('hi') // true
guard.hasOwnProp({ foo: 1 }, 'foo') // true
```

Available functions:

- `guard.hasOwnProp(obj, key)`
- `guard.isArray(value)`
- `guard.isBool(value)`
- `guard.isCallable(value)`
- `guard.isDev()` / `guard.isProd()`
- `guard.isNull(value)`
- `guard.isNumber(value)`
- `guard.isObject(value)`
- `guard.isObjectLike(value)`
- `guard.isPlainObject(value)`
- `guard.isString(value)`
- `guard.lookup(value)`

### number

Utilities for numeric ranges.

```ts
number.clamp(10, { min: 0, max: 5 }) // 5
number.interpolate(5, { input: [0, 10], output: [0, 100] }, Extrapolate.Clamp) // 50
```

### string

General string helpers.

#### `capitalize`
```ts
string.capitalize('hello') // "Hello"
```

#### Case conversion

| Function | Example |
| --- | --- |
| `toCamelCase` | `string.toCamelCase('hello world') // 'helloWorld'` |
| `toPascalCase` | `string.toPascalCase('hello world') // 'HelloWorld'` |
| `toKebabCase` | `string.toKebabCase('hello world') // 'hello-world'` |
| `toSnakeCase` | `string.toSnakeCase('hello world') // 'hello_world'` |
| `toSpaceCase` | `string.toSpaceCase('hello-world') // 'hello world'` |
| `toDotNotationCase` | `string.toDotNotationCase('hello world') // 'hello.world'` |
| `toConstantCase` | `string.toConstantCase('hello world') // 'HELLO_WORLD'` |
| `toTrainCase` | `string.toTrainCase('hello world') // 'HelloWorld'` |
| `toAdaCase` | `string.toAdaCase('hello world') // 'HelloWorld'` |
| `toCobolCase` | `string.toCobolCase('hello world') // 'HELLO-WORLD'` |
| `toPathCase` | `string.toPathCase('folder name file') // 'folder/-name/-file'` |
| `toCapitalCase` | `string.toCapitalCase('hello world') // 'HelloWorld'` |
| `toLowerCaseCase` | `string.toLowerCaseCase('Hello World') // 'hello world'` |
| `toUpperCase` | `string.toUpperCase('Hello World') // 'HELLO WORLD'` |
| `toTitleCase` | `string.toTitleCase('an example of title case') // 'An Example of Title Case'` |
| `toSentenceCase` | `string.toSentenceCase('HELLO WORLD') // 'Hello world'` |
| `toNoCase` | `string.toNoCase('Hello-World_Test') // 'Hello World Test'` |

#### Duration helpers

```ts
string.fromMilliseconds(3600000) // '1h'
string.toMilliseconds('1h') // 3600000
string.fromSeconds(60) // '1m'
string.toSeconds('2h') // 7200
```

#### `excerpt`
```ts
string.excerpt('Lorem ipsum dolor sit amet', 11) // 'Lorem ipsum...'
```

#### `interpolate`
```ts
string.interpolate('hello {{ user.name }}', { user: { name: 'John' } })
// 'hello John'
```

#### `random`
```ts
string.random(8) // e.g. 'aG4_Kl9P'
```

#### `sentence`
```ts
string.sentence(['apple', 'banana', 'cherry']) // 'apple, banana, and cherry'
```

#### `slug`
```ts
string.slug('Hello, World!') // 'hello-world'
```

#### `truncate`
```ts
string.truncate('Hello World', 5) // 'Hello...'
```

## License

[MIT](LICENSE)


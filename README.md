# melper

> Explore a versatile assortment of helper utility functions

[![typescript-image]][typescript-url] [![npm-image]][npm-url] [![license-image]][license-url]

This module is a powerful resource that offers a comprehensive collection of reusable utilities, eliminating the need to rewrite redundant code across multiple packages. By leveraging these utilities, developers can significantly enhance their productivity and streamline their coding process. Say goodbye to the hassle of duplicating code, as this module provides an efficient and elegant solution for promoting code reusability and maintainability. Embrace the convenience and versatility of these utilities, and take your software development to the next level.

## Table of contents

- [Installation](#installation)
- [Helpers](#helpers)
  - [number](#number)
    - [format](#numformat)
    - [toBytes](#numtobytes)
    - [toMs](#numtoms)
  - [string](#string)
    - [camelCase](#strcamelcase)
    - [dashCase](#strdashcase)
    - [dotCase](#strdotcase)
    - [noCase](#strnocase)
    - [pascalCase](#strpascalcase)
    - [sentenceCase](#strsentencecase)
    - [snakeCase](#strsnakecase)
    - [capialize (Under Construction)](#strcapitalize)
    - [encodeSymbols (Under Construction)](#strencodesymbols)
    - [escapeHTML (Under Construction)](#strescapehtml)
    - [excerpt (Under Construction)](#strexcerpt)
    - [generateRandom (Under Construction)](#strgeneraterandom)
    - [lower (Under Construction)](#strlower)
    - [pluralize (Under Construction)](#strpluralize)
    - [prettyBytes (Under Construction)](#strprettybytes)
    - [prettyMs (Under Construction)](#strprettyms)
    - [singularize (Under Construction)](#strsingularize)
    - [truncate (Under Construction)](#strtruncate)
    - [upper (Under Construction)](#strupper)
  - [Types](#strtypes)
    - [typeOf](#typtypeof)
    - [isArray](#typisarray)
    - [isBoolean](#typisboolean)
    - [isBuffer](#typisbuffer)
    - [isClass](#typisclass)
    - [isDate](#typisdate)
    - [isError](#typiserror)
    - [isFloat](#typisfloat)
    - [isFunction](#typisfunction)
    - [isInteger](#typisinteger)
    - [isNull](#typisnull)
    - [isNumber](#typisnumber)
    - [isObject](#typisobject)
    - [isRegexp](#typisregexp)
    - [isString](#typisstring)

## Installation

Install the package from npm registry as follows:

```sh
npm i melper

# yarn
yarn add melper

# pnpm
pnpm add melper
```

and then use it as follows:

```ts
import { Str } from 'melper'

const camelCase = Str.camelCase('Hello World') // helloWorld
```

### Number

#### format

Simple alias to

Format numbers. Simple alias to `Intl.NumberFormat`

```ts
import { Num } from 'melper'

Num.format(123456.789, 'de-DE', { style: 'currency', currency: 'EUR' }) // '123.456,79 €'
```

#### toBytes

Convert human readable string to bytes. This method is the opposite of the `Str.prettyBytes` method.

```ts
import { Num } from 'melper'

Num.toBytes('1KB') // 1024
```

#### toMs

Convert human readable string to milliseconds. This method is the opposite of the `Str.prettyMs` method.

```ts
import { Num } from 'melper'

Num.toMs('1min') // 60000
```

### String

#### Str.camelCase

Convert a string to its `camelCase` version.

```ts
import { Str } from 'melper'

Str.camelCase('hello-world') // helloWorld
```

#### Str.dashCase

Convert a string to its `dash-case` version. Optionally, you can also capitalize the first letter of each segment.

```ts
import { Str } from 'melper'

Str.dashCase('helloWorld') // hello-world
Str.dashCase('helloWorld', { capitalize: true }) // Hello-World
```

#### Str.dotCase

Convert string to its `dot.case` version.

```ts
import { Str } from 'melper'

Str.dotCase('hello-world') // hello.world
```

#### Str.noCase

Remove all sorts of casing

```ts
import { Str } from 'melper'

Str.noCase('hello-world') // hello world
Str.noCase('hello_world') // hello world
Str.noCase('helloWorld') // hello world
```

#### Str.pascalCase

Convert a string to its `PascalCase` version.

```ts
import { Str } from 'melper'

Str.pascalCase('helloWorld') // HelloWorld
```

#### Str.sentenceCase

Convert string to a sentence

```ts
import { Str } from 'melper'

Str.sentenceCase('hello-world') // Hello world
```

#### Str.snakeCase

Convert a string to its `snake_case` version.

```ts
import { Str } from 'melper'

Str.snakeCase('helloWorld') // hello_world
```

### Types

The types module allows distinguishing between different Javascript dataTyp. The `typeof` returns the same type for many different values. For example:

```ts
typeof {} // object
typeof [] // object
typeof null // object
```

Everything is an object in Javascript. To have better control, you can make use of the `Typ.typeOf` method.

#### Typ.typeOf

Returns a more accurate type for a given value.

```ts
import { Typ } from 'melper'

Typ.lookup({}) // object
Typ.lookup([]) // array
Typ.lookup(Object.create(null)) // object
Typ.lookup(null) // null
Typ.lookup(function () {}) // function
Typ.lookup(class Foo {}) // class
Typ.lookup(new Map()) // map
```

#### Typ.isArray

Find if the given value is an array

```ts
import { Typ } from 'melper'

Typ.isArray([1, 2, 3]) // true
```

#### Typ.isBoolean

Find if the given value is a boolean

```ts
import { Typ } from 'melper'

Typ.isBoolean(true) // true
```

#### Typ.isBuffer

Find if the given value is a buffer

```ts
import { Typ } from 'melper'

Typ.isBuffer(new Buffer()) // true
```

#### Typ.isClass

Find if the given value is a class

```ts
import { Typ } from 'melper'

Typ.isDate(class A {}) // true
```

#### Typ.isDate

Find if the given value is a date object

```ts
import { Typ } from 'melper'

Typ.isDate(new Date()) // true
```

#### Typ.isError

Find if the given value is an instance of the error object

```ts
import { Typ } from 'melper'
import { Exception } from 'melper'

Typ.isError(new Error('foo')) // true
Typ.isError(new Exception('foo')) // true
```

#### Typ.isFloat

Find if the given value is an float number.

```ts
import { Typ } from 'melper'

Typ.isFloat(22.1) // true
Typ.isFloat(-22.1) // true
Typ.isFloat(0.3) // true
Typ.isFloat(-0.3) // true

Typ.isFloat(22.0) // false
Typ.isFloat(-22.0) // false
Typ.isFloat(-22) // false
```

#### Typ.isFunction

Find if the given value is a function

```ts
import { Typ } from 'melper'

Typ.isFunction(function foo() {}) // true
```

#### Typ.isInteger

Find if the given value is an integer.

```ts
import { Typ } from 'melper'

Typ.isInteger(22.0) // true
Typ.isInteger(22) // true
Typ.isInteger(-1) // true
Typ.isInteger(-1.0) // true

Typ.isInteger(22.1) // false
Typ.isInteger(0.3) // false
Typ.isInteger(-0.3) // false
```

#### Typ.isNull

Find if the given value is null

```ts
import { Typ } from 'melper'

Typ.isNull(null) // true
```

#### Typ.isNumber

Find if the given value is a number

```ts
import { Typ } from 'melper'

Typ.isNumber(100) // true
```

#### Typ.isObject

Find if the given value is a plain object

```ts
import { Typ } from 'melper'

Typ.isObject({}) // true
```

#### Typ.isRegExp

Find if the given value is an regular expression

```ts
import { Typ } from 'melper'

Typ.isRegexp(/[a-z]+/) // true
```

#### Typ.isString

Find if the given value is a string

```ts
import { Typ } from 'melper'

Typ.isString('hello') // true
```

#### Typ.isUndefined

Find if the given value is undefined

```ts
import { Typ } from 'melper'

Typ.isNull(undefined) // true
```

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]: "typescript"
[npm-image]: https://img.shields.io/npm/v/melper.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/melper 'npm'
[license-image]: https://img.shields.io/npm/l/melper?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md 'license'

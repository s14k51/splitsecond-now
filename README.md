# @splitsecond/now

Returns the current datetime stamp.

`splitsecond` is a simple date manipulation library for Node. This library always returns ISO 8601 datetime stamps in UTC.

# Installation

```bash
npm i -S @splitsecond/now
```

or 

```bash
yarn add @splitsecond/now
```

# Usage

`now(): string`

```javascript
const now = require('@splitsecond/now')

now() // '2020-03-26T20:41:15.791Z'
```
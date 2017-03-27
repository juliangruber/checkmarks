
# checkmarks

ANSI checkmarks, useful for CLIs and such.

## Usage

```js
const checkmarks = require('checkmarks')

checkmarks.normal(true)
// => ✓
checkmarks.normal(false)
// => ×

checkmarks.heavy(true)
// => ✔
checkmarks.heavy(false)
// => ✖

checkmarks.ballot(true)
// => ☑
checkmarks.ballot(false)
// => ☒
```

## Installation

```bash
$ npm install checkmarks
```

## License

MIT

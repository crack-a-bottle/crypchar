# crypchar
Encryption and decryption of characters using arithmetic operations.

## Installation
```bash
$ npm install crypchar
```

## Importing
This library can be imported using the following syntax:
```js
const crypchar = require("crypchar");
const { add, subtract, xor, not } = require("crypchar");
const xor = require("crypchar/xor");
```
```js
import * as crypchar from "crypchar";
import { add, subtract, xor, not } from "crypchar";
import xor from "crypchar/xor";
```

## Usage
```js
const crypchar = require("crypchar");
crypchar.add("Hello World!", 5, "utf8"); // "Mjqqt%\twqi&"
crypchar.subtract("Mjqqt%\\twqi&", 5, "utf8"); // "Hello World!"
crypchar.xor("Hello World!", 11, "utf8"); // "Cnggd+\dygo*"
crypchar.xor("Cnggd+\\dygo*", 11, "utf8"); // "Hello World!"
crypchar.not("Hello World!"); // <Buffer b7 9a 93 93 90 df a8 90 8d 93 9b de>
crypchar.not(Buffer.of(183, 154, 147, 147, 144, 223, 168, 144, 141, 147, 155, 222), "utf8"); // "Hello World!"
```

## Documentation
The documentation can be found [here](https://crackabottle.js.org/crypchar).

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

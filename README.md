
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/halva-suite/spec-builder">
    <img src="https://i.imgur.com/mJQhWZA.jpg" alt="Logo" width="300" height="300">
  </a>

  <h3 align="center">Halva Spec Builder</h3>

  <p align="center">
    <br />
    <a href="https://github.com/halva-suite/spec-builder/issues">Report Bug</a> |
    <a href="https://github.com/halva-suite/spec-builder/pulls">Request Feature</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->


## Spec-Builder


This npm module is a chain specification file modifier for a Substrate node.


### Features
---

* Key generation type sr25519 and ed25519
* Custom middleware support
* Built-in cli

### Installation
---

```bash
npm install @halva-suite/halva-spec-builder
```
### Use Module
---

 **Use middleware runner**

  ```javascript
  const spec = await HalvaSpecModifier.init('path/to/spec.json', 100, 10)
    .apply(auraMiddleware)
    .apply(balanceMiddleware)
    .apply(grandpaMiddleware)
    .run();
  spec.output('/path/from/save/shc.json');
  ```

 **Create custom middleware**

 ```javascript
  .apply((context: HalvaMiddlewareContext): any => {
  const ed25519pairs = context.ed25519Keys.getPairs();
  for (let i = 0; i < ed25519pairs.length; i++) {
    context.jsonSchema.genesis.runtime.customObject.customField.push(ed25519pairs[i].address);
  }
  return context.jsonSchema;
})
 ```

 **Context structure**

  ```javascript
interface HalvaMiddlewareContext {
  jsonSchema: any;
  ed25519Keys: Keyring;
  sr25519Keys: Keyring;
  customArgs: any;
  path: string;
  mnemonic: string;
  balance: number;
  count: number;
}
  ```


  **Use cli**
  ```bash
  spec-builder -i /path/to/spec.json 
  ```
  
  ```bash
  spec-builder -i /path/to/spec.json -a 100 -b 1152921504606847000
  ```

  ```bash
  spec-builder -i /path/to/spec.json -a 100 -b 1152921504606847000 -m clip organ olive upper oak void inject side suit toilet stick narrow
  ```


 **You can also use separate middleware when working with cli**
  ```bash
  spec-builder -i /path/to/spec.json --am --bm # am - AuraMiddleware bm - BalanceMiddleware 
                                               #The grandpa block will not be filled, because the --gm argument is missing
  ```


### Script Commands
--- 

* `yarn test` -- Runs tests.
* `yarn typecheck` -- Checks TypeScript types for correctness. This is disabled during tests for performance reasons.
* `yarn lint` -- Runs linting.
* `yarn format` -- Reformats all of the `.ts` and `.tsx` files with Prettier.
* `yarn build` -- Regenerates `dist` folder that gets included into NPM module.

### Contributing
---

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

### License
[MIT](https://choosealicense.com/licenses/mit/)

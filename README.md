# Client matrix

The intentation of this package is to provide client capabilities when running UI tests against third party providers
like browserstack and saucelabs

## Build status

[![CircleCI](https://circleci.com/gh/uktrade/client-matrix-js/tree/master.svg?style=svg)](https://circleci.com/gh/uktrade/client-matrix-js/tree/master)

## Build and test package

Install dependencies:

`$ npm install`

Build locally:

`$ npm run build`

Run the tests:

`$ npm run test`

## WebdriverIO config setup

In your `wdio.conf.js` file, after you have the list of browsers you would like to run your tests
against, provide it in the `capabilities` key in the conf file:

```
// wdio.conf.js
const clientMatrix = require('@uktrade/client-matrix-js')
const clientMatrixList = clientMatrix.requestedClients(['chrome_latest', 'firefox_latest'])
export.config = {
// ...
  capabilities: [...clientMatrixList],
// ...
}
```

## Package usage

Add the package to your test suite using the following command:

`npm install --save-dev @uktrade/client-matrix-js`

Then import the function from the exposed module to have the ability to get a list of capabilities:

`const clientMatrix = require('@uktrade/client-matrix-js')`

To fetch capabilities for a given device or browser for your wdio test suite,
use the functiondo the following way:

`clientMatrix.requestedClients(['chrome_latest', 'firefox_latest'])`

To fetch capabilities for nightwatch, ensure the flag is set to true:

`clientMatrix.requestedClients(['chrome_latest', 'firefox_latest'], true)`

The package currently has its own maintaned client matrix, see [here](https://github.com/uktrade/client-matrix-js/blob/master/src/cross-platform-matrix/browserstack-client-matrix.js)

You can maintain your own client matrix and inject it to the function the following way:

```
const clientMatrix = {
  FIREFOX: {
    BROWSER_NAME: 'firefox',
  },
  CHROME: {
    BROWSER_NAME: 'chrome',
  },
  CHROME_EMULATOR: {
    BROWSER_NAME: 'edge',
  },
}

// If you'd like nightwatch capabilities output
// ensure the flag is set to true
clientMatrix.requestedClients(['chrome', 'edge'], false, clientMatrix)
```

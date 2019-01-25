# Client matrix

The intentation of this package is to provide client capabilities when running UI tests against third party providers
like browserstack and saucelabs

## Setup

Install dependencies:

`$ npm install`

Build locally:

`$ npm run build`

Run the tests:

`$ npm run test`

## Usage

In your `package.json` add `client-matrix-js` as a dev dependency for example.

Then use anything you wish that is exposed in `src/index.js`

Example:

Within your module import the client matrix:

`const clientMatrix = require('client-matrix-js')`

## Capabilities

To fetch capabilities for a given device or browser use the exposed function as seen below:

`clientMatrix.requestedClients(['chrome', 'Android7.0'])`

To fetch capabilities for nightwatch:

`clientMatrix.requestedClients(['chrome', 'Android7.0'], true)`

If you maintain your own client matrix, you can inject it and request it the following way:

```
const clientMatrix = {
  FIREFOX: {
    BROWSER_NAME: 'firefox',
  },
  CHROME: {
    BROWSER_NAME: 'chrome',
  },
  CHROME_EMULATOR: {
    BROWSER_NAME: 'chromeEmulator',
  },
}

clientMatrix.requestedClients(['chrome', 'Android7.0'], false, clientMatrix)
```
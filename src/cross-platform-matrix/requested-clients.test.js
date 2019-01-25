import requestedClients from './requested-clients'

jest.mock('./browserstack-client-matrix', () => (
  {
    FIREFOX: {
      BROWSER_NAME: 'firefox',
    },
    CHROME: {
      BROWSER_NAME: 'chrome',
    },
    CHROME_EMULATOR: {
      BROWSER_NAME: 'chromeEmulator',
    },
  })
)

describe('When fetching capaibilities', () => {
  test('empty list is provided when no capability is found', () => {
    const client = requestedClients(['invalidCapability'])
    expect(client).toEqual([])
  })

  test('single capability is provided', () => {
    const client = requestedClients(['CHROME_EMULATOR'])
    expect(client).toMatchObject([{ 'BROWSER_NAME': 'chromeEmulator' }])
  })

  test('two capabilities are provided', () => {
    const client = requestedClients(['CHROME_EMULATOR', 'CHROME'])
    expect(client).toMatchObject([{ 'BROWSER_NAME': 'chrome' }, { 'BROWSER_NAME': 'chromeEmulator' }])
  })
})

describe('When fetching capaibilities for nightwatch', () => {
  test('empty list is provided when no capability is found', () => {
    const client = requestedClients([''], true)
    expect(client).toEqual({})
  })

  test('single capability is provided', () => {
    const client = requestedClients(['CHROME_EMULATOR'], true)
    expect(client).toMatchObject({ 'CHROME_EMULATOR': { 'desiredCapabilities': { 'BROWSER_NAME': 'chromeEmulator' } } })
  })

  test('two capabilities are provided', () => {
    const client = requestedClients(['CHROME_EMULATOR', 'CHROME'], true)
    expect(client).toMatchObject({ 'CHROME': { 'desiredCapabilities': { 'BROWSER_NAME': 'chrome' } }, 'CHROME_EMULATOR': { 'desiredCapabilities': { 'BROWSER_NAME': 'chromeEmulator' } } })
  })
})

export const clients = {
  firefox_latest: {
    browserName: 'Firefox',
    os: 'Windows',
    os_version: '7',
  },
  chrome_latest: {
    browserName: 'Chrome',
    os: 'Windows',
    os_version: '10',
  },
  ie11: {
    browserName: 'IE',
    os: 'Windows',
    os_version: '7',
    browser_version: '11.0',
    'browserstack.selenium_version': '3.8.0',
  },
  edge_latest: {
    browserName: 'Edge',
    os: 'Windows',
    os_version: '10'
  },
  firefox_latest_macos: {
    browserName: 'Firefox',
    os: 'OS X',
    os_version: 'Mojave',
  },
  chrome_latest_macos: {
    browserName: 'Chrome',
    os: 'OS X',
    os_version: 'Mojave',
  },
  safari_latest_macos: {
    browserName: 'Safari',
    os: 'OS X',
    os_version: 'Mojave',
  },
  iphone_8: {
    device: 'iPhone 8',
    os_version: '12.1',
    real_mobile: 'true',
  },
  samsung_galaxy_8: {
    device: 'Samsung Galaxy S8',
    os_version: '7.0',
    real_mobile: 'true',
  },
}

export default clients

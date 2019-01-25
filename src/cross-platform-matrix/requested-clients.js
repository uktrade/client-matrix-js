import clients from './browserstack-client-matrix'

export const requestedClients = (clientList, nightwatch = false, clientMatrix = clients) => {
  if (nightwatch) {
    return nwClients(clientList, clientMatrix)
  }
  return wdioClients(clientList, clientMatrix)
}

const wdioClients = (clientList, clientMatrix) => {
  return filteredClientKeys(clientList, clientMatrix).reduce(
    (acc, key) => {
      acc.push(clientMatrix[key])
      return acc
    }, [])
}

const nwClients = (clientList, clientMatrix) => {
  return filteredClientKeys(clientList, clientMatrix).reduce((acc, key) => {
    acc[key] = { desiredCapabilities: clientMatrix[key] }
    return acc
  }, {})
}

const filteredClientKeys = (clientList, clientMatrix) => {
  return Object.keys(clientMatrix)
    .filter(key => clientList.includes(key))
}

export default requestedClients

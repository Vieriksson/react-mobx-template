const devConfig = {
  API_URL: 'https://localhost:1337',
}

const testConfig = {
  API_URL: 'https://api-test.random.se',
}

const preprodConfig = {
  API_URL: 'https://api-preprod.random.se',
}

const prodConfig = {
  API_URL: 'https://api.random.se',
}

function getConfigFromHostname() {
  switch (window.location.hostname) {
    case 'localhost':
    case '127.0.0.1':
      return devConfig

    case 'app-test.random.se':
      return testConfig

    case 'app-preprod.random.se':
      return preprodConfig

    case 'app.random.se':
      return prodConfig

    default:
      throw new Error(
        `Could not determine environment based on hostname "${window.location.hostname}"`
      )
  }
}

export type Config = typeof prodConfig
export const config = getConfigFromHostname() as Config

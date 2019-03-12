import { Config } from '../config'

export class RandomApi {
  config: Config

  constructor(config: Config) {
    this.config = config
  }

  fetchRandomStuff(): Promise<string[]> {
    return mockFetch<string[]>(['a', 'b', 'c'])
  }
}

const mockFetch = <T>(response: T) => {
  return new Promise<T>(resolve => setTimeout(() => resolve(response), Math.random() * 2000))
}

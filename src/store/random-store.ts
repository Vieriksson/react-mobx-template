import { action, observable } from 'mobx'
import { createContext } from 'react'
import { RandomApi } from '../api/random.api'
import { config } from '../config'

const randomApi = new RandomApi(config)
export class RandomStore {
  api: RandomApi

  @observable randomToggle: boolean = false
  @observable randomProperty: string = 'JANNE'
  @observable loading: boolean = false
  @observable randomResult: string[] = []

  constructor(api: RandomApi) {
    this.api = api
  }

  @action
  async fetchRandomStuff() {
    this.loading = true
    this.randomResult = await this.api.fetchRandomStuff()
    this.loading = false
  }

  @action
  toggle = () => {
    this.randomToggle = !this.randomToggle
  }
}

export const RandomStoreContext = createContext(new RandomStore(randomApi))

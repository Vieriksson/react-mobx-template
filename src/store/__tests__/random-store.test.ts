import { RandomStore } from '../random-store'

describe('randomToggle', () => {
  it('should default to false', () => {
    const api = {} as any
    const store = new RandomStore(api)

    expect(store.randomToggle).toBe(false)
  })

  it('should toggle', () => {
    const api = {} as any
    const store = new RandomStore(api)

    store.toggle()

    expect(store.randomToggle).toBe(true)
  })
})

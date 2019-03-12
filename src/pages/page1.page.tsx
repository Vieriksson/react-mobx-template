import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { RandomStoreContext } from '../store/random-store'

const ONCE = []

export const Page1 = observer(() => {
  const randomStore = useContext(RandomStoreContext)

  useEffect(() => {
    randomStore.fetchRandomStuff()
  }, ONCE)

  return (
    <div>
      <div>Route1</div>
      {randomStore.loading ? <div>Loading...</div> : <div>{randomStore.randomResult.length}</div>}
    </div>
  )
})

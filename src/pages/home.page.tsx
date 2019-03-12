import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Button } from '../components/button'
import { RandomStoreContext } from '../store/random-store'

export const Home = observer(() => {
  const randomStore = useContext(RandomStoreContext)
  return (
    <div>
      <div>Home</div>
      <div>{randomStore.randomProperty}</div>
      <div>Toggle value: {randomStore.randomToggle.toString()}</div>
      <Button title="Toggle me" onClick={randomStore.toggle} />
    </div>
  )
})

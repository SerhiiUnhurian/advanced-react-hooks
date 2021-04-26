// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })

  function countReducer(state, newState) {
    return {...state, ...newState}
  }

  const {count} = state
  const increment = () => setState({count: count + step})
  return <button onClick={increment}>{state.count}</button>
}

function App() {
  return <Counter />
}

export default App

import { useState } from 'react'
import Home from './Components/Home'
import Quiz from './Components/Quiz'

function App() {

  const [quizStarted, setQuizStarted] = useState(false)

  return quizStarted ? <Quiz /> : <Home handleClick={() => setQuizStarted(true)} />
}

export default App

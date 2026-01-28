
import { useState } from 'react'
import Home from './Components/Home'
import Quiz from './Components/Quiz'

/* App Component - Root component that manages the quiz application state
 * Conditionally renders Home or Quiz component based on whether the quiz has started
 */
function App() {

  // Tracks whether the quiz has been started
  const [quizStarted, setQuizStarted] = useState(false)

  // Render Quiz component if started, otherwise render Home component with start handler
  return quizStarted ? <Quiz /> : <Home handleClick={() => setQuizStarted(true)} />
}

export default App

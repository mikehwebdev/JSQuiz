import { FaArrowRotateLeft } from "react-icons/fa6";
import { useState } from "react";
// Import data 
import { progressData } from "../data/progressData";
import { questionsData } from '../data/questionsData'

import Footer from "./Footer";
import AnswersSummary from "./AnswersSummary";

/** Quiz Component - Main quiz interface that manages:
 * - Question display and answer selection
 * - Answer shuffling and validation
 * - Progress tracking through 10 questions
 * - Results summary and game restart
 */
export default function Quiz() {

    // All possible permutations for shuffling 3 answers (1 x correct and 2 x plausible but false answers)
    const randomArrays = [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

    /**
     * Shuffles the answer options for a question
     * Returns array with correct answer and two false answers in random order
     */
    function getShuffledAnswers(questionData) {
        return randomArrays[Math.floor(Math.random() * randomArrays.length)].map(item =>
            item === 1 ? questionData.answer : item === 2 ? questionData.falseAnswer1 : questionData.falseAnswer2
        )
    }

    // Selects a random question from the questions data
    function getRandomQuestion() {
        return questionsData[Math.floor(Math.random() * questionsData.length)]
    }

    // Current question object
    const [currentquestion, setCurrentQuestion] = useState(getRandomQuestion())
    const { question, answer } = currentquestion

    // Shuffled array of answer options for current question
    const [shuffledAnswersArray, setShuffledAnswersArray] = useState(getShuffledAnswers(currentquestion))

    // User's currently chosen answer (not yet commited)
    const [selectedAnswer, setSelectedAnswer] = useState(null)

    // Committed answer with result data
    const [commitedAnswer, setCommitedAnswer] = useState(false)

    // Generate clickable answer elements with appropriate styling = including disablign answers if an answer has been commited
    const answerElements = shuffledAnswersArray.map((element, index) =>
        <p
            className={`answer${selectedAnswer === element ? ' clicked-answer' : ''} ${classCalculator(element)} ${commitedAnswer ? 'disabled' : null}`}
            key={index + 1} onClick={e => setSelectedAnswer(e.target.textContent)}
            disabled={commitedAnswer ? true : false}
        >{element}
        </p>)

    // Current question number 
    const [turnCount, setTurnCount] = useState(0)

    // Array tracking all answered questions with results
    const [answeredQuestions, setAnsweredQuestions] = useState(progressData)


    // Resets all state to start a new quiz game
    function startNewGame() {
        const newQuestion = getRandomQuestion()
        setCurrentQuestion(newQuestion)
        setShuffledAnswersArray(getShuffledAnswers(newQuestion))
        setSelectedAnswer(null)
        setCommitedAnswer(false)
        setTurnCount(0)
        setAnsweredQuestions(progressData)
    }

    /* Calculates CSS class for answer elements based on game state
     * Shows correct/incorrect styling after answer is committed
     */
    function classCalculator(el) {
        if (commitedAnswer && !selectedAnswer) {
            return ''
        }
        if (commitedAnswer) {
            // Highlight the correct answer in green
            if (el === answer) {
                return ' correct-answer'
                // Highlight the user's incorrect selection in red
            } else if (selectedAnswer === el && el !== answer) {
                return ' incorrect-answer'
            } else {
                return ''
            }
        }
    }

    /* Handles commit answer and next question actions
     * Commits selected answer OR advances to next question depending on state */
    function actionButton() {
        // If answer is already committed, move to next question
        if (commitedAnswer) {

            // Advance to next question
            setSelectedAnswer(null)
            // Delay to allow transitions to complete for good UX
            setTimeout(() => {
                setTurnCount(prev => prev + 1)
                setCommitedAnswer(null)
                // Update progress array with committed answer data
                setAnsweredQuestions(prev => prev.map((item, idx) => idx === commitedAnswer.id ? { id: item.id, ...commitedAnswer } : item))
                // Load new random question
                const newQuestion = getRandomQuestion()
                setCurrentQuestion(newQuestion)
                setShuffledAnswersArray(getShuffledAnswers(newQuestion))
            }, 600)
            // If answer is selected but not committed, commit it
        } else if (selectedAnswer) {
            // Create answer result object
            setCommitedAnswer({ id: turnCount, questionText: question, answerResult: answer === selectedAnswer ? 'correct' : 'incorrect', correctAnswertext: answer, incorrectAnswertext: answer !== selectedAnswer ? selectedAnswer : null })
        }
    }


    return (
        <>
            {/* Show quiz questions if not completed (less than 10 questions answered) */}
            {turnCount < 10 ?
                <>
                    <section className="question-section">
                        <h2 className="title">Question {turnCount + 1}</h2>
                        <div className="question-container">
                            {/* Display current question text */}
                            <p className="question">{question}</p>
                            {/* Render clickable answer options */}
                            {answerElements}
                        </div>

                    </section>
                </>
                :
                // Show completion screen after 10 questions
                <section className="completion-screen">
                    <h2 className="title">Quiz completed!</h2>

                    {/* Display review of all answered questions */}
                    <div className="questions-review-section">
                        <AnswersSummary
                            array={answeredQuestions}
                        />
                    </div>
                    {/* Restart button to begin a new quiz */}
                    <button
                        onClick={startNewGame}
                        className="restart-btn">
                        START NEW GAME
                        <FaArrowRotateLeft />
                    </button>
                </section>
            }
            {/* Footer with progress tracker and action button */}
            <Footer
                answeredQuestions={answeredQuestions}
                commitedAnswer={commitedAnswer}
                selectedAnswer={selectedAnswer}
                turnCount={turnCount}
                actionButton={actionButton}
                gameCompleted={turnCount >= 10}
            />
        </>
    )
}

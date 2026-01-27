import { FaHouse, FaCheck, FaXmark, FaArrowRotateLeft, FaAnglesRight } from "react-icons/fa6";
import { useState } from "react";

import { progressData } from "../data/progressData";
import { questionsData } from '../data/questionsData'

import Footer from "./Footer";
import AnswersSummary from "./AnswersSummary";

export default function Quiz() {

    const randomArrays = [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

    function getShuffledAnswers(questionData) {
        return randomArrays[Math.floor(Math.random() * randomArrays.length)].map(item => 
            item === 1 ? questionData.answer : item === 2 ? questionData.falseAnswer1 : questionData.falseAnswer2
        )
    }

    const randomQuestion = questionsData[Math.floor(Math.random() * questionsData.length)]
    
    const [currentquestion, setCurrentQuestion] = useState(randomQuestion)
    const { question, answer, falseAnswer1, falseAnswer2 } = currentquestion
    const [shuffledAnswersArray, setShuffledAnswersArray] = useState(getShuffledAnswers(randomQuestion))
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [commitedAnswer, setCommitedAnswer] = useState(false)
    const answerElements = shuffledAnswersArray.map((element, index) => <p className={`answer${selectedAnswer === element ? ' clicked-answer' : commitedAnswer === element ? 'correct' : ''} ${classCalculator(element)}`} key={index + 1} onClick={e => setSelectedAnswer(e.target.textContent)}>{element}</p>)
    const [turnCount, setTurnCount] = useState(0)
    const [answeredQuestions, setAnsweredQuestions] = useState(progressData)
    const [incorrectAnswers, setIncorrectAnswers] = useState([])

    function startNewGame(){
        const newQuestion = questionsData[Math.floor(Math.random() * questionsData.length)]
        setCurrentQuestion(newQuestion)
        setShuffledAnswersArray(getShuffledAnswers(newQuestion))
        setSelectedAnswer(null)
        setCommitedAnswer(false)
        setTurnCount(0)
        setAnsweredQuestions(progressData)
    }

    // function convertToSearchQuery(string) {
    //     return string.replace(/ /g, '+')
    // }  

    function classCalculator(el) {
        if (commitedAnswer) {
            if (el === answer) {
                return ' correct-answer'
            } else if (selectedAnswer === el && el !== answer) {
                return ' incorrect-answer'
            } else {
                return ''
            }
        }
    }


    function actionButton() {
        if (commitedAnswer) {
            if (commitedAnswer.answerResult === 'incorrect') {
                setIncorrectAnswers(prev => [...prev, commitedAnswer])
            }
            
            setTurnCount(prev => prev + 1)
            setSelectedAnswer(null)
            setCommitedAnswer(null)
            setAnsweredQuestions(prev => prev.map((item, idx) => idx === commitedAnswer.id ? { id: item.id, ...commitedAnswer } : item))
            const newQuestion = questionsData[Math.floor(Math.random() * questionsData.length)]
            setCurrentQuestion(newQuestion)
            setShuffledAnswersArray(getShuffledAnswers(newQuestion))
        } else if (selectedAnswer) {
            setCommitedAnswer({ id: turnCount, questionText: question, answerResult: answer === selectedAnswer ? 'correct' : 'incorrect', correctAnswertext: answer, incorrectAnswertext: answer !== selectedAnswer ? selectedAnswer : null })
            console.log(incorrectAnswers)
        }
    }

    
    return (
        <>
            {turnCount < 10 ?
            <>
                <section className="question-section">
                    <a href="./" className="home-link"><FaHouse /></a>
                    <h2 className="title">Question time!</h2>
                    <div className="question-container">
                        <p className="question">{question}</p>
                        {answerElements}
                    </div>
                
                </section>
                </>
                :
                <section className="completion-screen">
                        <h2 className="title">Quiz completed!</h2>
                        
                    <div className="questions-review-section">
                        <AnswersSummary
                        array={answeredQuestions}
                        />
                    </div>
                    <button
                                        onClick={startNewGame}
                                        className="restart-btn">
                                        START NEW GAME
                                        <FaArrowRotateLeft />
                                    </button>
                </section>
            }
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

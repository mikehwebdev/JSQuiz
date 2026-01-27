import { FaCheck, FaXmark } from "react-icons/fa6";

export default function Footer({answeredQuestions, selectedAnswer, actionButton, turnCount, commitedAnswer, gameCompleted}) {

    const progressElements = answeredQuestions.map((el, index) => <div className={`progress-element ${el.answerResult === 'correct' ? 'correct-answer' : el.answerResult === 'incorrect' ? 'incorrect-answer' : ''}`} key={index}>{el.answerResult === 'correct' ? <FaCheck /> : el.answerResult === 'incorrect' ? <FaXmark /> : null}</div>)

    return (

        <footer className="footer">
            { !gameCompleted && <button
                className={`commit-btn ${selectedAnswer ? 'opacity-full' : ''}`}
                onClick={actionButton}>
                {commitedAnswer ? 'NEXT QUESTION' : selectedAnswer ? 'COMMIT ANSWER' : ''}?</button>}
            <div className="progress-container">
                {progressElements}
            </div>
            { !gameCompleted && <p className="question-number-text">{`Question ${turnCount + 1} of 10`}</p>}
        </footer>

    )
}
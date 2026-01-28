import { FaCheck, FaXmark } from "react-icons/fa6";

/* Footer Component - Displays quiz progress and controls including:
 * - Action button (commit answer/next question)
 * - Visual progress tracker showing answered questions with correct/incorrect indicators
 */
export default function Footer({ answeredQuestions, selectedAnswer, actionButton, turnCount, commitedAnswer, gameCompleted }) {

    // Create progress indicator elements for each answered question

    const progressElements = answeredQuestions.map((el, index) => {
        // Determine if the answer was correct or incorrect
        const isCorrect = el.answerResult === 'correct';
        const isIncorrect = el.answerResult === 'incorrect';
        
        return (
            <div 
                className={`progress-element ${isCorrect ? 'correct-answer' : isIncorrect ? 'incorrect-answer' : ''}`} 
                key={index}
            >
                {/* Display appropriate icon for the answer i.e "Check" for correct */}
                {isCorrect ? <FaCheck /> : isIncorrect ? <FaXmark /> : null}
            </div>
        );
    });

    return (

        <footer className="footer">
            {/* Show commit/next button only when game is not completed */}
            {!gameCompleted && <button
                className={`commit-btn ${selectedAnswer ? 'opacity-full' : ''}`}
                onClick={actionButton}>
                {/* Button text changes based on current state */}
                {commitedAnswer ? 'NEXT QUESTION' : selectedAnswer ? 'COMMIT ANSWER' : ''} ?</button>}
            {/* Progress tracker showing all answered questions */}
            <div className="progress-container">
                {progressElements}
            </div>
            {/* Display current question number (only during active game) */}
            {!gameCompleted && <p className="question-number-text">{`Question ${turnCount + 1} of 10`}</p>}
        </footer>

    )
}
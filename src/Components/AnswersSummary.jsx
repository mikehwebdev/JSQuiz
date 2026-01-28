import { FaXmark, FaCheck, FaAnglesRight } from "react-icons/fa6";

/* AnswersSummary Component
 * Displays a summary of question results showing each question with:
 * - The question text with correct/incorrect icon
 * - The correct answer
 * - The user's incorrect answer (if they answered incorrectly)
 * - A "Learn more" link to Google search (for incorrect answers only)
 * 
*/
export default function AnswersSummary({ array }) {

    // Map through each question in the array to create review sections

    const quizResults = array.map((question, index) => (
        <div key={index} className="review-question-container">
            {/* Display question text with corresponding icon  */}
            <p className="review-question">{question.questionText} {question.answerResult === 'incorrect' ? <FaXmark className="incorrect-answer-icon" /> : <FaCheck className="correct-answer-icon" />}</p>

            {/* Shows the correct answer */}
            <p className="review-correct-answer">
                {question.correctAnswertext}
            </p>

            {/* Show user's incorrect answer and learn more link if they answered incorrectly */}
            {question.answerResult === 'incorrect' && (
                <>
                    <p className="review-incorrect-answer">
                        {question.incorrectAnswertext}
                    </p>
                    {/* Pre-populated/generated google search for more info on question */}
                    <a
                        className="find-out-more"
                        href={`https://www.google.com/search?q=${encodeURIComponent(question.questionText)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn more <FaAnglesRight />
                    </a>
                </>
            )}
        </div>
    ))
    return (
        <>
            {/* Render result of quiz */}
            {quizResults}
        </>
    )
}
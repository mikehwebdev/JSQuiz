import { FaXmark, FaCheck, FaAnglesRight } from "react-icons/fa6";

export default function AnswersSummary({ array }) {

    function convertToSearchQuery(string) {
        return string.replace(/ /g, '+')
    }

    const quizResults = array.map((question, index) => (
        <div key={index} className="review-question-section">
            <p className="review-question">{question.questionText} {question.answerResult === 'incorrect' ? <FaXmark className="incorrect-answer-icon" /> : <FaCheck className="correct-answer-icon" />}</p>

            <p className="review-correct-answer">
                <span>{question.correctAnswertext}</span>
            </p>

            {question.answerResult === 'incorrect' && (
                <>
                    <p className="review-incorrect-answer">
                        <span>{question.incorrectAnswertext}</span>
                    </p>
                    <a
                        className="find-out-more"
                        href={`https://www.google.com/search?q=${convertToSearchQuery(question.questionText)}`}
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
            {quizResults}
        </>
    )
}
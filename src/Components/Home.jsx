import { FaAnglesRight } from "react-icons/fa6"

/* Home Component - Landing page that displays quiz introduction and instructions
 * Includes a start button to begin the quiz
 */
export default function Home({ handleClick }) {

    return (
        <>
            <section className="intro-section">
                <h1 className="title">Mikey's web development quiz</h1>
                <p className="text">
                    Welcome to my web development quiz! This app is designed to test your knowledge of JavaScript and help reinforce what you've already learned.
                </p>
                <p className="text">
                    Simply click on 'Start' and choose your answer from the three options - but be careful! One answer is correct but the other two answers are plausible sounding but incorrect.
                </p>
                <p className="text">
                    You'll get a score at the end and you can review your answered questions. For any incorrect answers you're welcome to follow the link to find out more about that particular question.
                </p>
                
                {/* Start button triggers the quiz to begin */}
                <button
                    onClick={handleClick}
                    className="start-btn">
                    START GAME
                    <FaAnglesRight />
                </button>
            </section>
        </>

    )
}
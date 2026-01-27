import { useState } from "react";
import { FaAnglesRight, FaHouse, FaStairs, FaQuestion, FaAlignJustify } from "react-icons/fa6";
import IncorrectAnswersModal from "./IncorrectAnswersModal";

export default function Home({ handleClick }) {

    const [menuExpanded, setMenuExpanded] = useState(false)

    // state added for menu - need to add transitions for menu items when state is toggled

    const [progressSection, setProgressSection] = useState(false)
    const [incorrectAnswersSection, setIncorrectAnswersSection] = useState(false)

    return (
        <>
            <section className="intro-section">
                <div className="menu-container" onClick={() => setMenuExpanded(prev => !prev)}>
                    <FaAlignJustify />
                    <FaHouse className="start-position"/>
                    <FaStairs className="start-position" />
                    <FaQuestion className="start-position" />
                    {/* change this - do tabs instead */}
                </div>
                <h1 className="title">Mikey's web development quiz</h1>
                <p className="text">
                    Welcome to my web development quiz! This app is designed to test your knowledge of JavaScript and help reinforce what you've already learned.
                </p>
                <p className="text">
                    Simply click on 'Start' and choose your answer from the three options - but be careful! One answer is correct but the other two answers are plausible sounding but incorrect.
                </p>
                <p className="text">
                    You'll get a score at the end and you can review your answered questions. For any incorrect answers you're wwelcome 
                </p>
                <button
                    onClick={handleClick}
                    className="start-btn">
                    START GAME
                    <FaAnglesRight />
                </button>
            </section>
            {progressSection && <h1>Progress Section</h1>}
            {/* use context to bring in the incorect answers from Quiz  */}
            {incorrectAnswersSection && <IncorrectAnswersModal />}
        </>

    )
}
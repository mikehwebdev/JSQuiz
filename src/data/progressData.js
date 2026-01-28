// Create an array of 10 objects to track quiz progress for each question using a for loop to generate objects instead of manually repeating code

const progressData = []
for (let i = 0; i < 10; i++) {
    progressData.push({
        id: i,                      // Unique identifier for each question (0-9)
        questionText: null,         // The question that was asked (populated during quiz)
        answerResult: null,         // Whether the answer was 'correct' or 'incorrect'
        correctAnswertext: null,    // The correct answer text
        incorrectAnswertext: null   // The incorrect answer the user selected (null if correct)
    })
}

export {progressData}
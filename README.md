# Mikey's Web Development Quiz

A React-based flashcard quiz that helps reinforce JavaScript fundamentals through randomized questions, immediate feedback, and a review summary at the end.

## Live Project

- Live Demo: https://mikeyswebdevelopmentquiz.netlify.app/
- Source Code: https://github.com/mikehwebdev/JSQuiz

## Features

- Randomized questions from a large question bank
- Shuffled answer choices to prevent pattern learning
- Immediate correctness feedback after committing an answer
- Progress tracker with correct/incorrect indicators
- End-of-quiz summary with links to learn more about missed topics
- Restart flow to replay a fresh set of questions

## Tech Stack

- React
- Vite
- JavaScript (ES6+)
- CSS
- React Icons

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

npm install

### Run locally

npm run dev

### Build for production

npm run build

## Technical Decisions

- Question flow: Random selection plus per-question answer shuffling to keep each run unique.
- State model: Local component state tracks the current question, selection, and game progress.
- Review UX: A post-game summary lists correct answers and provides a fast path to learn more.

## Accessibility & UX

- Clear visual feedback for correct vs. incorrect answers.
- Consistent button labeling for commit/next actions.
- Readable layout and spacing across desktop and mobile sizes.

## Challenges & Learnings

- Coordinating answer selection with commit state without premature feedback.
- Keeping quiz progress accurate while swapping in new random questions.
- Balancing quick gameplay with a useful review experience.

## Future Improvements

- Add categories and difficulty levels.
- Track score history and streaks across sessions.
- Improve keyboard navigation and focus states.

## About Me

I’m a junior frontend developer focused on building practical, user-friendly interfaces with React. This project reflects my approach to clean component structure, resilient state handling, and iterative improvement through real-world problem solving.

- LinkedIn: https://www.linkedin.com/in/michael-hatton-29927b95/
- Portfolio: https://www.mikehatton.net/

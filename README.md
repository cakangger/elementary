# BrainyKid! - Elementary School Quiz App

A vibrant, interactive, Kahoot-style web application designed for elementary school students. This app tests knowledge across multiple subjects with engaging animations, a countdown timer, and bilingual support.

## Features

- **Four Subject Categories**: Includes questions for Math, Bahasa Indonesia, English, and Professions (General Knowledge).
- **Bilingual Interface**: Seamlessly switch between English (EN) and Bahasa Indonesia (ID) for both the user interface and the quiz questions.
- **Interactive Gameplay**:
  - 20-second countdown timer for each question.
  - Visual feedback for correct and incorrect answers.
  - Screen shake effect when time is running out.
- **Sound Effects**: Simple audio cues to indicate success or failure.
- **Dynamic Scoring**: Score is calculated based on correct answers and remaining time.
- **Fully Responsive**: Works beautifully on desktops, tablets, and mobile devices.

## Tech Stack

This project is built using standard web technologies with zero dependencies, meaning it can run entirely in any modern web browser without a backend server.

- **HTML5**: Semantic structure.
- **CSS3**: Variables, Flexbox/Grid layouts, Keyframe animations, and Glassmorphism effects.
- **Vanilla JavaScript**: State management, DOM manipulation, timer logic, and internationalization (i18n).

## How to Run

1. Clone this repository or download the files.
2. Open `index.html` in any modern web browser.
3. Select your preferred language (EN/ID) from the top right corner.
4. Click **Play Now!** to start a quiz.

## Customizing Questions

The question database is hardcoded in `app.js` for simplicity. To add or modify questions, open `app.js` and locate the `questionsDb` object at the top of the file. You can easily add new objects following the existing bilingual format:

```javascript
{ 
    q: {
        en: "Your English Question?", 
        id: "Pertanyaan Bahasa Indonesia Anda?"
    }, 
    options: {
        en: ["Opt 1", "Opt 2", "Opt 3", "Opt 4"], 
        id: ["Pilih 1", "Pilih 2", "Pilih 3", "Pilih 4"]
    }, 
    answer: 0 // Index of the correct option (0-3)
}
```

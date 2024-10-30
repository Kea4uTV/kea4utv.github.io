const questions = [
    {
        question: "តើអ្វីគឺគ្រឿងផ្សំដ៏សំខាន់នៅក្នុងទឹក?",
        answers: ["ទឹកដោះគោ", "ទឹកអាំង", "ទឹកប្រេង", "ទឹកខ្មេះ"],
        correct: 0
    },
    {
        question: "តើខ្លោងកណ្តាលគឺជាអ្វី?",
        answers: ["ផ្លូវ", "តំបន់សាធារណៈ", "បន្ទប់", "ការិយាល័យ"],
        correct: 1
    },
    {
        question: "តើប្រទេសដែលមានទីក្រុងផ្ទាំងនោះគឺជាអ្វី?",
        answers: ["សៀមរាប", "ភ្នំពេញ", "កំពត", "បាត់ដំបង"],
        correct: 2
    },
    {
        question: "តើសត្វដែលមិនអាចហែលទឹកគឺជាអ្វី?",
        answers: ["ត្រី", "ខ្យល់", "ក្តាម", "ខ្ទុះ"],
        correct: 3
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    const buttons = document.querySelectorAll(".quiz-container button");

    buttons.forEach((button, index) => {
        button.innerText = currentQuestion.answers[index];
        button.onclick = () => checkAnswer(index === currentQuestion.correct);
    });
}

function checkAnswer(isCorrect) {
    const popup = document.getElementById('popup');
    const message = document.getElementById('popup-message');
    const correctSound = document.getElementById('correct-sound');
    const incorrectSound = document.getElementById('incorrect-sound');

    if (isCorrect) {
        message.textContent = "🎉 ចម្លើយត្រូវ!";
        correctSound.play();
    } else {
        message.textContent = "❌ ចម្លើយខុស!";
        incorrectSound.play();
    }

    popup.style.display = 'flex';

    // Wait for the popup to close and load the next question
    setTimeout(() => {
        closePopup();
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        loadQuestion();
    }, 2000); // Change question after 2 seconds
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Load the first question on page load
loadQuestion();

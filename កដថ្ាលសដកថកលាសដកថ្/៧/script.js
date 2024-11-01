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
        
        // បន្ថែម event listener ដើម្បីអានអក្សរ
        button.addEventListener('mouseenter', () => speak(button.innerText));
    });

    // បន្ថែម event listener ដើម្បីអានសំណួរ
    document.getElementById("question").addEventListener('mouseenter', () => speak(currentQuestion.question));
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'km-KH'; // កំណត់ភាសាជាខ្មែរ
    speechSynthesis.speak(utterance);
}

function checkAnswer(isCorrect) {
    const popup = document.getElementById('popup');
    const message = document.getElementById('popup-message');
    const correctSound = document.getElementById('correct-sound');
    const incorrectSound = document.getElementById('incorrect-sound');
    const buttons = document.querySelectorAll(".quiz-container button");

    if (isCorrect) {
        message.textContent = "🎉 ចម្លើយត្រូវ!";
        correctSound.play();
        document.body.style.backgroundColor = "lightblue";
    } else {
        message.textContent = "❌ ចម្លើយខុស!";
        incorrectSound.play();
        document.body.style.backgroundColor = "lightcoral";
    }

    popup.style.display = 'flex';

    setTimeout(() => {
        closePopup();
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        loadQuestion();
        document.body.style.backgroundColor = "#e9ecef";
    }, 2000);
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

loadQuestion();

// សម្លេងចាប់អារម្មណ៍
const buttons = document.querySelectorAll(".quiz-container button");
const hoverSound = document.getElementById("hover-sound");

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });
});
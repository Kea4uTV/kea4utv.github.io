const questions = [
    {
        question: "Would you rather fight 100 duck-sized horses or 1 horse-sized duck?",
        options: ["100 duck-sized horses", "1 horse-sized duck"],
        responses: [0, 0],  // To keep track of the responses for each option
        totalVotes: 0
    },
    {
        question: "Would you rather always be 10 minutes late or always 20 minutes early?",
        options: ["10 minutes late", "20 minutes early"],
        responses: [0, 0],
        totalVotes: 0
    },
    {
        question: "Would you rather have the ability to teleport or the ability to fly?",
        options: ["Teleport", "Fly"],
        responses: [0, 0],
        totalVotes: 0
    },
    {
        question: "Would you rather be able to read minds or be invisible?",
        options: ["Read minds", "Invisible"],
        responses: [0, 0],
        totalVotes: 0
    }
];

let currentQuestionIndex = 0;
const questionElement = document.getElementById("question");
const option1Button = document.getElementById("option1");
const option2Button = document.getElementById("option2");
const resultElement = document.getElementById("result");
const percentageElement = document.getElementById("percentage");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = `<p>${currentQuestion.question}</p>`;
    option1Button.textContent = currentQuestion.options[0];
    option2Button.textContent = currentQuestion.options[1];
    resultElement.textContent = "";
    percentageElement.style.display = "none";
}

// Function to show the result and update the percentage
function showResult(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];

    // Increment the vote for the selected option
    const selectedIndex = currentQuestion.options.indexOf(selectedOption);
    currentQuestion.responses[selectedIndex]++;
    currentQuestion.totalVotes++;

    // Save the updated data in LocalStorage
    localStorage.setItem('questionsData', JSON.stringify(questions));

    // Calculate percentages
    const option1Percentage = Math.round((currentQuestion.responses[0] / currentQuestion.totalVotes) * 100);
    const option2Percentage = Math.round((currentQuestion.responses[1] / currentQuestion.totalVotes) * 100);

    // Display the result
    resultElement.textContent = `You chose: ${selectedOption}`;

    // Display percentages
    percentageElement.style.display = "block";
    percentageElement.innerHTML = `
        <p>Option 1: ${option1Percentage}%</p>
        <p>Option 2: ${option2Percentage}%</p>
    `;

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            questionElement.innerHTML = "<p>Game Over! Thanks for playing!</p>";
            option1Button.style.display = "none";
            option2Button.style.display = "none";
            percentageElement.style.display = "none";
        }
    }, 1500); // 1.5 seconds before loading the next question
}

// Add event listeners to options
option1Button.addEventListener("click", () => {
    showResult(option1Button.textContent);
});

option2Button.addEventListener("click", () => {
    showResult(option2Button.textContent);
});

// Initial question load or load data from LocalStorage
function initializeGame() {
    const storedData = localStorage.getItem('questionsData');
    if (storedData) {
        // Load the stored data if it exists
        const parsedData = JSON.parse(storedData);
        questions.forEach((q, index) => {
            q.responses = parsedData[index].responses;
            q.totalVotes = parsedData[index].totalVotes;
        });
    }
    loadQuestion();
}

initializeGame();

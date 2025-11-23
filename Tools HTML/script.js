const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'សូមអភ័យទោសផង      សំណួរអស់ត្រឹមនេះ           យើងខ្ញុំកុំពុងបញ្ចូលបន្ថែម              សូមរង់ចាំ'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
{
    question: 'បុរេប្រវត្តិ	',
    answers: [
        { text: 'សតវត្សទី១-៥៥០', correct: false },
        { text: 'មុនគ្រិស្តសករាជ', correct: true },
        { text: 'សតវត្សទី ៦-៨០២', correct: false },
        { text: '១៩៨៩-១៩៩៣', correct: false }
    ]
},


{
    question: 'នគរភ្នំ ឬហ៊្វូណន',
    answers: [
        { text: 'សតវត្សទី១-៥៥០', correct: true },
        { text: 'មុនគ្រិស្តសករាជ', correct: false },
        { text: '១៩៤១-១៩៤៥', correct: false },
        { text: '១៥១៦-១៦២០', correct: false }
    ]
},


{
    question: 'ចេនឡា',
    answers: [
        { text: 'សតវត្សទី ៦-៨០២', correct: true },
        { text: '៨០២-១៤៣១', correct: false },
        { text: '១៨៦៣-១៩៥៣', correct: false },
        { text: 'សតវត្សទី១-៥៥០', correct: false }
    ]
},


{
    question: 'អង្គរ',
    answers: [
        { text: '១៩៤១-១៩៤៥', correct: false },
        { text: 'សតវត្សទី ៦-៨០២', correct: false },
        { text: '១៥១៦-១៦២០', correct: false },
        { text: '៨០២-១៤៣១', correct: true }
    ]
},


{
    question: 'ចតុមុខ',
    answers: [
        { text: '១៤៣១-១៥១៦', correct: true },
        { text: '១៩៤១-១៩៤៥', correct: false },
        { text: '១៩៧០-១៩៧៥', correct: false },
        { text: '១៥១៦-១៦២០', correct: false }
    ]
},


{
    question: 'លង្វែក',
    answers: [
        { text: '១៩៤១-១៩៤៥', correct: false },
        { text: '១៩៥៥-១៩៧០', correct: false },
        { text: '១៦២០-១៨៦៣', correct: false },
        { text: '១៥១៦-១៦២០', correct: true }
    ]
},


{
    question: 'ឧដុង្គ',
    answers: [
        { text: '១៨៦៣-១៩៥៣', correct: false },
        { text: '១៩៥៥-១៩៧០', correct: false },
        { text: '១៤៣១-១៥១៦', correct: false },
        { text: '១៦២០-១៨៦៣', correct: true }
    ]
},


{
    question: 'អាណានិគមនិយមបារាំង',
    answers: [
        { text: '១៨៦៣-១៩៥៣', correct: true },
        { text: '១៩៤១-១៩៤៥', correct: false },
        { text: '១៤៣១-១៥១៦', correct: false },
        { text: '៨០២-១៤៣១', correct: false }
    ]
},


{
    question: 'អាណានិគមជប៉ុន',
    answers: [
        { text: '១៩៤១-១៩៤៥', correct: true },
        { text: '៨០២-១៤៣១', correct: false },
        { text: '១៦២០-១៨៦៣', correct: false },
        { text: '១៨៦៣-១៩៥៣', correct: false }
    ]
},


{
    question: 'សង្គមរាស្ត្រនិយម',
    answers: [
        { text: '១៩៥៥-១៩៧០', correct: true },
        { text: '១៩៨៩-១៩៩៣', correct: false },
        { text: '១៥១៦-១៦២០', correct: false },
        { text: '១៩៤១-១៩៤៥', correct: false }
    ]
},


{
    question: 'សាធារណរដ្ឋខ្មែរ (លន់ នល់)',
    answers: [
        { text: '១៩៧០-១៩៧៥', correct: true },
        { text: '១៩៧៩-១៩៨៩', correct: false },
        { text: '១៤៣១-១៥១៦', correct: false },
        { text: '១៩៤១-១៩៤៥', correct: false }
    ]
},


{
    question: 'កម្ពុជាប្រជាធិបតេយ្យ (ប៉ុល ពត)',
    answers: [
        { text: '១៨៦៣-១៩៥៣', correct: false },
        { text: 'សតវត្សទី ៦-៨០២', correct: false },
        { text: '១៥១៦-១៦២០', correct: false },
        { text: '១៩៧៥-១៩៧៩', correct: true }
    ]
},


{
    question: 'សាធារណរដ្ឋប្រជាមានិតកម្ពុជា',
    answers: [
        { text: '៨០២-១៤៣១', correct: false },
        { text: '១៤៣១-១៥១៦', correct: false },
        { text: '១៩៧៩-១៩៨៩', correct: true },
        { text: '១៦២០-១៨៦៣', correct: false }
    ]
},


{
    question: 'អ៊ុនតាក់ (អង្គការសហប្រជាជាតិ)',
    answers: [
        { text: '១៦២០-១៨៦៣', correct: false },
        { text: '៨០២-១៤៣១', correct: false },
        { text: '១៩៨៩-១៩៩៣', correct: false },
        { text: '១៩៩២-១៩៩៣', correct: true }
    ]
},


{
    question: 'ព្រះរាជាណាចក្រកម្ពុជា',
    answers: [
        { text: 'សាធារណរដ្ឋខ្មែរ (លន់ នល់) ១៩៧០-១៩៧៥', correct: false },
        { text: '១៩៩៣-បច្ចុប្បន្ន', correct: true },
        { text: 'សាធារណរដ្ឋប្រជាមានិតកម្ពុជា ១៩៧៩-១៩៨៩', correct: false },
        { text: 'អាណានិគមជប៉ុន ១៩៤១-១៩៤៥', correct: false }
    ]
  },
]
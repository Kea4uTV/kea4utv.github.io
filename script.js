const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

const correctBtn = document.getElementById('correctBtn');
const incorrectBtn = document.getElementById('incorrectBtn');
const correctSound = document.getElementById('correctSound');
const incorrectSound = document.getElementById('incorrectSound');

correctBtn.addEventListener('click', function() {
    correctSound.play();
    alert("ចម្លើយត្រឹមត្រូវ!");
});

incorrectBtn.addEventListener('click', function() {
    incorrectSound.play();
    alert("ចម្លើយខុស!");
});

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
    question: ' ព្រះសម្មាសម្ពុទ្ធ ទ្រង់​បរិនិព្វាន​នៅ​ថ្ងៃ ខែ​​ ឆ្នាំណា?',
    answers: [
      	{ text: '​​ នៅ​ថ្ងៃ​ ពុធ ពេញបូណ៌មី ខែអាសាធ ឆ្នាំរកា  ', correct: false },
      	{ text: '​​ នៅ​ថ្ងៃ ព្រហស្បតិ៍ ពេញបូណ៌មី ខែអាសាធ ឆ្នាំរកា  ', correct: false },
	{ text: ' នៅ​ថ្ងៃ អង្គារ ពេញបូណ៌មី ខែ​ពិសាខ ឆ្នាំម្សាញ់  ', correct: true },
      	{ text: '​​ នៅ​ថ្ងៃ អង្គារ ពេញបូណ៌មី ខែអាសាធ ឆ្នាំរកា  ', correct: false }
    ]
  }, 
 {
    question: ' ព្រះ​សិទ្ធត្ថ ទ្រង់​ចេញ សាង​ព្រះ​ផ្នួសព្រះ​ជន្ម​ប៉ុន្មានវស្សា?',
    answers: [
	{ text: '​​ ព្រះ​ជន្ម​៣០​វស្សា  ', correct: false },
	{ text: ' ព្រះ​ជន្ម​២៩​វស្សា ', correct: true },
    { text: '​​ ព្រះ​ជន្ម​២៨វស្សា  ', correct: false },
	{ text: '​​ ព្រះ​ជន្ម​២៥​វស្សា  ', correct: false }
    ]
  }, 
 {
    question: ' ព្រះសម្មាសម្ពុទ្ធ ទ្រង់​បំពេញ​ពុទ្ធកិច្ច​ទាំង ៥​យ៉ាង​អស់​ប៉ុន្មាន​ព្រះ​វស្សា?',
    answers: [
	{ text: '​​ អស់​៥៥​ព្រះ​វស្សា ', correct: false },
	{ text: ' អស់​៤៥​ព្រះ​វស្សា ', correct: true },
	{ text: '​​ អស់​៤៤​ព្រះ​វស្សា ', correct: false },
    { text: '​​ អស់​៣៥​ព្រះ​វស្សា ', correct: false }
    ]
  }, 
{
    question: ' រាជបុត្រី​នៃ​ព្រះបាទ សុប្បពុទ្ធ ព្រះនាមអ្វី?',
    answers: [
	{ text: '​​ ព្រះ​នាង ​សិរិ​មហាមាយា​ទេវី ', correct: false }	,
	{ text: '​​ ព្រះនាង​ ប​ជាប​តិ​គោត​មី', correct: false },
	{ text: ' ព្រះនាង ​យសោធរា (ពិម្ពា) ', correct: true },
      	{ text: '​​ ព្រះនាង ​ព្រះនាង បមិត្តា ', correct: false }
    ]
  },
 {
    question: ' ព្រះនាង​មាយា បាន​​ទ្រង់​គភ៌​អស់​ចំនួន​ប៉ុន្មានខែ​?',
    answers: [
	{ text: '​​ ​ចំនួន​៧​ខែ​គត់ ', correct: false },
	{ text: ' ​ចំនួន​១០​ខែ​គត់ ', correct: true },
      	{ text: '​​ ​ចំនួន​៩​ខែ​គត់ ', correct: false },
	{ text: '​​ ​ចំនួន​១២​ខែ​គត់ ', correct: false }
    ]
  },
{
    question: 'ព្រះគោតម​សម្មា​សម្ពុទ្ធ​គឺ​ជា​ព្រះ​ពុទ្ធ​អង្គ​ទី​ប៉ុន្មាននៅ​ក្នុង​ភទ្ទកប្ប​នេះ?',
    answers: [
      	{ text: 'ព្រះ​ពុទ្ធ​អង្គ​ទី​៥', correct: false },
      	{ text: 'ព្រះ​ពុទ្ធ​អង្គ​ទី​២៩', correct: false },
	{ text: 'ព្រះ​ពុទ្ធ​អង្គ​ទី​៤', correct: true },
      	{ text: 'ព្រះ​ពុទ្ធ​អង្គ​ទី​៣', correct: false }
    ]
  },
{
    question: 'តើ វិនយបិដក​ — វិន័យរបស់ភិក្ខុ និង ភិក្ខុនី ចាប់ពីសៀវភៅលេខណាដល់លេងណា?',
    answers: [
      	{ text: 'ចាប់​ពី​សៀវភៅ​លេខ ៥ ដល់​ ១២', correct: false },
      	{ text: 'ចាប់​ពី​សៀវភៅ​លេខ ១ ដល់​ ១៥', correct: false },
      	{ text: 'ចាប់​ពី​សៀវភៅ​លេខ ១ ដល់​ ១២', correct: false },
      	{ text: 'ចាប់​ពី​សៀវភៅ​លេខ ១ ដល់​ ១៣', correct: true }
    ]
  },
{
    question: 'តើ សុត្តន្តបិដក​ — ព្រះសូត្រ ចាប់ពីសៀវភៅលេខណាដល់លេងណា?',
    answers: [
      	{ text: 'ចាប់​ពី​សៀវភៅ​លេខ ១១ ដល់​ ៧១', correct: false },
      	{ text: 'ចាប់​ពី​សៀវភៅ​លេខ ១៤ ដល់​ ៧៧', correct: true },
      	{ text: 'ចាប់​ពី​សៀវភៅ​លេខ ១៥ ដល់​ ៨៧', correct: false },
      	{ text: 'ចាប់​ពី​សៀវភៅ​លេខ ១៤ ដល់​ ៧០', correct: false }
    ]
  },
{
    question: 'តើ អភិធម្មបិដក — ធម៌និយាយអំពីចិត្ត, ចេតសិក, រូប, និព្វាន ចាប់ពីសៀវភៅលេខណាដល់លេងណា?',
    answers: [
      	{ text: 'ចាប់​ពី​សៀវភៅ​លេខ ៧៨ ដល់​ ១២០', correct: false },
      	{ text: 'ចាប់​ពី​សៀវភៅ​លេខ ៧២ ដល់​ ១១០', correct: false },
      	{ text: 'ចាប់​ពី​សៀវភៅ​លេខ ៧៨ ដល់​ ១១០', correct: true },
      	{ text: 'ចាប់​ពី​សៀវភៅ​លេខ ៧០ ដល់​ ១៥០', correct: false }
    ]
  },
{
    question: 'តើព្រះ​ត្រៃ​បិដក​ខ្មែ​រមានប៉ុន្មានក្បាល​?',
    answers: [
      	{ text: 'ព្រះ​ត្រៃ​បិដក​ខ្មែ​រមាន​ ១២០​ក្បាល​', correct: false },
      	{ text: 'ព្រះ​ត្រៃ​បិដក​ខ្មែ​រមាន​ ១១០​ក្បាល​', correct: true },
      	{ text: 'ព្រះ​ត្រៃ​បិដក​ខ្មែ​រមាន​ ១១១​ក្បាល​', correct: false },
      	{ text: 'ព្រះ​ត្រៃ​បិដក​ខ្មែ​រមាន​ ២១០​ក្បាល​', correct: false }
    ]
  },
{
    question: 'តើព្រះ​ត្រៃ​បិដក​ខ្មែ​រដែលជាភាសាបាលីមានប៉ុន្មានទំព័រ?',
    answers: [
      	{ text: 'ព្រះ​ត្រៃ​បិដក​ខ្មែ​រដែលជាភាសាបាលីមាន ៣៤៦៣០ទំព័រ​', correct: false },
      	{ text: 'ព្រះ​ត្រៃ​បិដក​ខ្មែ​រដែលជាភាសាបាលីមាន ៣៦៦៣០ទំព័រ​', correct: true },
      	{ text: 'ព្រះ​ត្រៃ​បិដក​ខ្មែ​រដែលជាភាសាបាលីមាន ៣៦៦២០ទំព័រ​', correct: false },
      	{ text: 'ព្រះ​ត្រៃ​បិដក​ខ្មែ​រដែលជាភាសាបាលីមាន ៣៦៦៣៣ទំព័រ​', correct: false }
    ]
  },
{
    question: 'តើព្រះ​ត្រៃ​បិដក​ដែលប្រែជាភាសាខ្មែ​រមានប៉ុន្មានទំព័រ?',
    answers: [
      	{ text: 'ព្រះ​ត្រៃ​បិដក​ដែលប្រែជាភាសាខ្មែ​រមាន​ ៣១៦៣០​​ទំព័រ', correct: false },
      	{ text: 'ព្រះ​ត្រៃ​បិដក​ដែលប្រែជាភាសាខ្មែ​រមាន​ ៣៦៧៣០​​ទំព័រ', correct: false },
      	{ text: 'ព្រះ​ត្រៃ​បិដក​ដែលប្រែជាភាសាខ្មែ​រមាន​ ៣៣៦៣០​​ទំព័រ', correct: false },
      	{ text: 'ព្រះ​ត្រៃ​បិដក​ដែលប្រែជាភាសាខ្មែ​រមាន​ ៣៦៦៣០​​ទំព័រ', correct: true }
    ]
  },
{
    question: 'តើព្រះវិន័យបិដកមានប៉ុន្មានក្បាល?',
    answers: [
      	{ text: 'ព្រះវិន័យបិដកមាន ១១ក្បាល', correct: false },
      	{ text: 'ព្រះវិន័យបិដកមាន ១២ក្បាល', correct: false },
      	{ text: 'ព្រះវិន័យបិដកមាន ១៣ក្បាល', correct: true },
      	{ text: 'ព្រះវិន័យបិដកមាន ១៥ក្បាល', correct: false }
    ]
  },
{
    question: 'តើព្រះសុត្តន្តបិដកមានប៉ុន្មានក្បាល?',
    answers: [
      	{ text: 'ព្រះសុត្តន្តបិដកមាន ៦៤ក្បាល', correct: true },
      	{ text: 'ព្រះសុត្តន្តបិដកមាន ៦៦ក្បាល', correct: false },
      	{ text: 'ព្រះសុត្តន្តបិដកមាន ៥៤ក្បាល', correct: false },
      	{ text: 'ព្រះសុត្តន្តបិដកមាន ៨៤ក្បាល', correct: false }
    ]
  },
{
    question: 'តើព្រះអភិធម្មបិដកមានប៉ុន្មានក្បាល?',
    answers: [
      	{ text: 'ព្រះអភិធម្មមាន ៣១ក្បាល', correct: false },
      	{ text: 'ព្រះអភិធម្មមាន ១៣ក្បាល', correct: false },
      	{ text: 'ព្រះអភិធម្មមាន ២៣ក្បាល', correct: false },
      	{ text: 'ព្រះអភិធម្មមាន ៣៣ក្បាល', correct: true }
    ]
  },
  {
    question: 'តើព្រះពុទ្ធមានព្រះនាមដើមជានាមអ្វីដែរ?',
    answers: [
	{ text: 'រាហុល', correct: false },
	{ text: 'បមិត្តា', correct: false },
	{ text: 'សិទ្ធត្ថគោតម', correct: true },
	{ text: 'សុទ្ធោទនៈ', correct: false }
    ]
  },
{
    question: 'តើព្រះពោធិសត្វចុះចាប់បដិសន្ធិនៅ ថ្ងៃខែឆ្នាំណាដែរ?',
    answers: [
	{ text: 'ថ្ងៃពុធ ១៥ កើតពេញបូណ៌មី ខែពិសាខ ឆ្នាំរកា', correct: false },
	{ text: 'វស្សាទី ៤៥ ថ្ងៃ ១៥ កើតពេញបូណ៌មី ខែមាឃ ឆ្នាំម្សាញ់', correct: false },
	{ text: 'ថ្ងៃអង្គារ ១៥ កើតពេញបូណ៌មី ខែពិសាខ ឆ្នាំម្សាញ់', correct: false },
	{ text: 'ថ្ងៃព្រហស្បន៍ ១៥កើត ខែអាសាឍ ឆ្នាំរការ', correct: true }
    ]
  },
{
    question: 'តើព្រះសិទ្ធត្ថ ចេញសាងព្រះផ្នួសនៅថ្ងៃ ថ្ងៃខែឆ្នាំណាដែរ?',
    answers: [
	{ text: 'ថ្ងៃពុធ ១៥ កើតពេញបូណ៌មី ខែពិសាខ ឆ្នាំរកា', correct: false },
	{ text: 'វស្សាទី ៤៥ ថ្ងៃ ១៥ កើតពេញបូណ៌មី ខែមាឃ ឆ្នាំម្សាញ់', correct: false },
	{ text: 'ថ្ងៃអង្គារ ១៥ កើតពេញបូណ៌មី ខែពិសាខ ឆ្នាំម្សាញ់', correct: false },
	{ text: 'ថ្ងៃចន្ទ ១៥កើត ខែអាសាឍ ក្នុងជន្មយុ២៩វស្សារ', correct: true }
    ]
  },
{
    question: 'តើព្រះសម្មាសម្ពុទ្ធទ្រង់បំពេញពុទ្ធកិច្ច ពេលប្រលឹមទ្រង់ធ្វើអ្វី?',
    answers: [
	{ text: 'ទ្រង់និមន្តបិណ្ឌបាត', correct: true },
	{ text: 'ទ្រង់សំដែងធម៌ប្រោសសាធារណជន', correct: false },
	{ text: 'ទ្រង់ប្រទានឳវាទដល់ភិក្ខុទាំងឡាយ', correct: false },
	{ text: 'ទ្រង់ដោះប្រស្នាទេវតា', correct: false }
    ]
  },
{
    question: 'តើព្រះសម្មាសម្ពុទ្ធទ្រង់បំពេញពុទ្ធកិច្ច ពេលរសៀលទ្រង់ធ្វើអ្វី?',
    answers: [
	{ text: 'ទ្រង់និមន្តបិណ្ឌបាត', correct: false },
	{ text: 'ទ្រង់សំដែងធម៌ប្រោសសាធារណជន', correct: true },
	{ text: 'ទ្រង់ប្រទានឳវាទដល់ភិក្ខុទាំងឡាយ', correct: false },
	{ text: 'ទ្រង់ប្រមើមើលសត្វលោក', correct: false }
    ]
  },
{
    question: 'តើព្រះសម្មាសម្ពុទ្ធទ្រង់បំពេញពុទ្ធកិច្ច ពេលព្រលប់ទ្រង់ធ្វើអ្វី?',
    answers: [
	{ text: 'ទ្រង់និមន្តបិណ្ឌបាត', correct: false },
	{ text: 'ទ្រង់ប្រទានឳវាទដល់ភិក្ខុទាំងឡាយ', correct: true },
	{ text: 'ទ្រង់ដោះប្រស្នាទេវតា', correct: false },
	{ text: 'ទ្រង់ប្រមើមើលសត្វលោក', correct: false }
    ]
  },
{
    question: 'តើព្រះសម្មាសម្ពុទ្ធទ្រង់បំពេញពុទ្ធកិច្ច ពេលកណ្តាលអទ្រាធទ្រង់ធ្វើអ្វី?',
    answers: [
	{ text: 'ទ្រង់សំដែងធម៌ប្រោសសាធារណជន', correct: false },
	{ text: 'ទ្រង់ប្រទានឳវាទដល់ភិក្ខុទាំងឡាយ', correct: false },
	{ text: 'ទ្រង់ដោះប្រស្នាទេវតា', correct: true },
	{ text: 'ទ្រង់ប្រមើមើលសត្វលោក', correct: false }
    ]
  },
{
    question: 'តើព្រះសម្មាសម្ពុទ្ធទ្រង់បំពេញពុទ្ធកិច្ច ពេលជិតភ្លឺទ្រង់ធ្វើអ្វី?',
    answers: [
	{ text: 'ទ្រង់សំដែងធម៌ប្រោសសាធារណជន', correct: false },
	{ text: 'ទ្រង់ប្រទានឳវាទដល់ភិក្ខុទាំងឡាយ', correct: false },
	{ text: 'ទ្រង់ដោះប្រស្នាទេវតា', correct: false },
	{ text: 'ទ្រង់ប្រមើមើលសត្វលោក', correct: true }
    ]
  },
{
    question: 'តើព្រះសិទ្ធត្ថទ្រង់ទ្រង់ប្រសូតនៅថ្ងៃខែឆ្នាំណាដែរ',
    answers: [
	{ text: 'ថ្ងៃសុក្រ ១៥ កើតពេញបូណ៌មី ខែពិសាខ ឆ្នាំច', correct: true },
	{ text: 'ថ្ងៃពុធ ១៥ កើតពេញបូណ៌មី ខែពិសាខ ឆ្នាំរកា', correct: false },
	{ text: 'វស្សាទី ៤៥ ថ្ងៃ ១៥ កើតពេញបូណ៌មី ខែមាឃ ឆ្នាំម្សាញ់', correct: false },
	{ text: 'ថ្ងៃអង្គារ ១៥ កើតពេញបូណ៌មី ខែពិសាខ ឆ្នាំម្សាញ់', correct: false }
    ]
  },
{
    question: 'តើព្រះសម្មាសម្ពុទ្ធទ្រង់ត្រាស់ដឹង នៅថ្ងៃខែឆ្នាំណាដែរ',
    answers: [
	{ text: 'ថ្ងៃសុក្រ ១៥ កើតពេញបូណ៌មី ខែពិសាខ ឆ្នាំច', correct: false },
	{ text: 'ថ្ងៃពុធ ១៥ កើតពេញបូណ៌មី ខែពិសាខ ឆ្នាំរកា', correct: true },
	{ text: 'វស្សាទី ៤៥ ថ្ងៃ ១៥ កើតពេញបូណ៌មី ខែមាឃ ឆ្នាំម្សាញ់', correct: false },
	{ text: 'ថ្ងៃអង្គារ ១៥ កើតពេញបូណ៌មី ខែពិសាខ ឆ្នាំម្សាញ់', correct: false }
    ]
  },
{
    question: 'តើព្រះសម្មាសម្ពុទ្ធទ្រង់ដាក់ព្រះជន្មាយុសង្ខារនៅពេលណាដែរ',
    answers: [
	{ text: 'ថ្ងៃសុក្រ ១៥ កើតពេញបូណ៌មី ខែពិសាខ ឆ្នាំច', correct: false },
	{ text: 'ថ្ងៃពុធ ១៥ កើតពេញបូណ៌មី ខែពិសាខ ឆ្នាំរកា', correct: false },
	{ text: 'វស្សាទី ៤៥ ថ្ងៃ ១៥ កើតពេញបូណ៌មី ខែមាឃ ឆ្នាំម្សាញ់', correct: true },
	{ text: 'ថ្ងៃអង្គារ ១៥ កើតពេញបូណ៌មី ខែពិសាខ ឆ្នាំម្សាញ់', correct: false }
    ]
  },
{
    question: 'តើព្រះសម្មាសម្ពុទ្ធទ្រង់បរិនិពា្វន នៅថ្ងៃខែឆ្នាំណាដែរ',
    answers: [
	{ text: 'ថ្ងៃសុក្រ ១៥ កើតពេញបូណ៌មី ខែពិសាខ ឆ្នាំច', correct: false },
	{ text: 'ថ្ងៃពុធ ១៥ កើតពេញបូណ៌មី ខែពិសាខ ឆ្នាំរកា', correct: false },
	{ text: 'វស្សាទី ៤៥ ថ្ងៃ ១៥ កើតពេញបូណ៌មី ខែមាឃ ឆ្នាំម្សាញ់', correct: false },
	{ text: 'ថ្ងៃអង្គារ ១៥ កើតពេញបូណ៌មី ខែពិសាខ ឆ្នាំម្សាញ់', correct: true }
    ]
  },
{
    question: 'តើព្រះសិទ្ធត្ថទ្រង់ទតឃើញនិមិត្ត៤យ៉ាងនោះយ៉ាងណាខ្លះ?',
    answers: [
	{ text: 'បុរសចាស់ បុរសឈឺ បុរសស្លាប់  បុរសចាស់', correct: false },
	{ text: 'បុរសចាស់ អ្នកបួស បុរសស្លាប់  អ្នកបួស', correct: false },
	{ text: 'បុរសស្លាប់ បុរសឈឺ បុរសស្លាប់  អ្នកបួស', correct: false },
	{ text: 'បុរសចាស់ បុរសឈឺ បុរសស្លាប់  អ្នកបួស', correct: true }
    ]
  },
{
    question: 'តើព្រះសិទ្ធត្ថទ្រង់ទតឃើញនិមិត្តទី១ជានិមិត្តអ្វី?',
    answers: [
	{ text: 'អ្នកបួស', correct: false },
	{ text: 'បុរសស្លាប់', correct: false },
	{ text: 'បុរសឈឺ', correct: false },
	{ text: 'បុរសចាស់', correct: true }
    ]
  },
{
    question: 'តើព្រះសិទ្ធត្ថទ្រង់ទតឃើញនិមិត្តទី២ជានិមិត្តអ្វី?',
    answers: [
	{ text: 'អ្នកបួស', correct: false },
	{ text: 'បុរសស្លាប់', correct: false },
	{ text: 'បុរសឈឺ', correct: true },
	{ text: 'បុរសចាស់', correct: false }
    ]
  },
{
    question: 'តើព្រះសិទ្ធត្ថទ្រង់ទតឃើញនិមិត្តទី៣ជានិមិត្តអ្វី?',
    answers: [
	{ text: 'អ្នកបួស', correct: false },
	{ text: 'បុរសស្លាប់', correct: true },
	{ text: 'បុរសឈឺ', correct: false },
	{ text: 'បុរសចាស់', correct: false }
    ]
  },
{
    question: 'តើព្រះសិទ្ធត្ថទ្រង់ទតឃើញនិមិត្តទី៤ជានិមិត្តអ្វី?',
    answers: [
	{ text: 'អ្នកបួស', correct: true },
	{ text: 'បុរសស្លាប់', correct: false },
	{ text: 'បុរសឈឺ', correct: false },
	{ text: 'បុរសចាស់', correct: false }
    ]
  },
{
    question: 'តើព្រះពោធិសត្វចុះចាប់បដិសន្ធិក្នុងថ្ងៃណាដែរ?',
    answers: [
	{ text: 'ថ្ងៃពុធ', correct: false },
	{ text: 'ថ្ងៃចន្ទ', correct: false },
	{ text: 'ថ្ងៃសុក្រ', correct: false },
	{ text: 'ថ្ងៃព្រហស្បត៍', correct: true }
    ]
  },
{
    question: 'តើព្រះសិទ្ធត្ថទ្រង់ប្រសូតក្នុងថ្ងៃណាដែរ?',
    answers: [
	{ text: 'ថ្ងៃអង្គារ', correct: false },
	{ text: 'ថ្ងៃចន្ទ', correct: false },
	{ text: 'ថ្ងៃសុក្រ', correct: true },
	{ text: 'ថ្ងៃព្រហស្បន៍', correct: false }
    ]
  },
{
    question: 'តើព្រះសិទ្ធត្ថទ្រង់សាងផ្នួសក្នុងថ្ងៃណាដែរ?',
    answers: [
	{ text: 'ថ្ងៃអង្គារ', correct: false },
	{ text: 'ថ្ងៃពុធ', correct: false },
	{ text: 'ថ្ងៃចន្ទ', correct: true },
	{ text: 'ថ្ងៃព្រហស្បន៍', correct: false }
    ]
  },
{
    question: 'តើព្រះសម្មាសម្ពុទ្ធទ្រង់ត្រាស់ដឹងក្នុងថ្ងៃណាដែរ?',
    answers: [
	{ text: 'ថ្ងៃអង្គារ', correct: false },
	{ text: 'ថ្ងៃពុធ', correct: true },
	{ text: 'ថ្ងៃចន្ទ', correct: false },
	{ text: 'ថ្ងៃសុក្រ', correct: false }
    ]
  },
{
    question: 'តើព្រះសម្មាសម្ពុទ្ធទ្រង់បរិនិពា្វនក្នុងថ្ងៃណាដែរ?',
    answers: [
	{ text: 'ថ្ងៃអង្គារ', correct: true },
	{ text: 'ថ្ងៃចន្ទ', correct: false },
	{ text: 'ថ្ងៃសុក្រ', correct: false },
	{ text: 'ថ្ងៃព្រហស្បត៍', correct: false }
    ]
  },
{
    question: 'តើព្រះពោធិសត្វចុះចាប់បដិសន្ធិក្នុងខែណាដែរ?',
    answers: [
	{ text: 'ខែចេត្រ', correct: false },
	{ text: 'ខែបុស្ស', correct: false },
	{ text: 'ខែពិសាខ', correct: false },
	{ text: 'ខែអាសាឍ', correct: true }
    ]
  },
{
    question: 'តើព្រះសិទ្ធត្ថទ្រង់ប្រសូតក្នុងខែណាដែរ?',
    answers: [
	{ text: 'ខែចេត្រ', correct: false },
	{ text: 'ខែអាសាឍ', correct: false },
	{ text: 'ខែពិសាខ', correct: true },
	{ text: 'ខែភទ្របទ', correct: false }
    ]
  },
{
    question: 'តើព្រះសិទ្ធត្ថទ្រង់សាងផ្នួសក្នុងខែណាដែរ?',
    answers: [
	{ text: 'ខែពិសាខ', correct: false },
	{ text: 'ខែមាឃ', correct: false },
	{ text: 'ខែភទ្របទ', correct: false },
	{ text: 'ខែអាសាឍ', correct: true }
    ]
  },
{
    question: 'តើព្រះសម្មាសម្ពុទ្ធទ្រង់ត្រាស់ដឹងក្នុងខែណាដែរ?',
    answers: [
	{ text: 'ខែភទ្របទ', correct: false },
	{ text: 'ខែមាឃ', correct: false },
	{ text: 'ខែពិសាខ', correct: true },
	{ text: 'ខែអាសាឍ', correct: false }
    ]
  },
{
    question: 'តើព្រះសម្មាសម្ពុទ្ធទ្រង់ដាក់ព្រះជន្មាយុសង្ខារក្នុងខែណាដែរ?',
    answers: [
	{ text: 'ខែភទ្របទ', correct: false },
	{ text: 'ខែមាឃ', correct: true },
	{ text: 'ខែពិសាខ', correct: false },
	{ text: 'ខែអាសាឍ', correct: false }
    ]
  },
{
    question: 'តើព្រះសម្មាសម្ពុទ្ធទ្រង់បរិនិពា្វនក្នុងខែណាដែរ?',
    answers: [
	{ text: 'ខែពិសាខ', correct: true },
	{ text: 'ខែមាឃ', correct: false },
	{ text: 'ខែភទ្របទ', correct: false },
	{ text: 'ខែអាសាឍ', correct: false }
    ]
  },
{
    question: 'តើព្រះពោធិសត្វចុះចាប់បដិសន្ធិក្នុងឆ្នាំណាដែរ?',
    answers: [
	{ text: 'ឆ្នាំ​ ម្សាញ់', correct: false },
	{ text: 'ឆ្នាំ ខាល', correct: false },
	{ text: 'ឆ្នាំ​ ច', correct: false },
	{ text: 'ឆ្នាំ រការ', correct: true }
    ]
  },
{
    question: 'តើព្រះសិទ្ធត្ថទ្រង់ប្រសូតក្នុងឆ្នាំណាដែរ?',
    answers: [
	{ text: 'ឆ្នាំ​ ម្សាញ់', correct: false },
	{ text: 'ឆ្នាំ ខាល', correct: false },
	{ text: 'ឆ្នាំ​ ច', correct: true },
	{ text: 'ឆ្នាំ រការ', correct: false }
    ]
  },
{
    question: 'តើព្រះសិទ្ធត្ថទ្រង់សាងផ្នួសក្នុងឆ្នាំណាដែរ?',
    answers: [
	{ text: 'ឆ្នាំ វក', correct: false },
	{ text: 'ឆ្នាំ ខាល', correct: true },
	{ text: 'ឆ្នាំ​ ច', correct: false },
	{ text: 'ឆ្នាំ រការ', correct: false }
    ]
  },
{
    question: 'តើព្រះសម្មាសម្ពុទ្ធទ្រង់ត្រាស់ដឹងក្នុងឆ្នាំណាដែរ?',
    answers: [
	{ text: 'ឆ្នាំ​ ម្សាញ់', correct: false },
	{ text: 'ឆ្នាំ វក', correct: true },
	{ text: 'ឆ្នាំ​ ច', correct: false },
	{ text: 'ឆ្នាំ រការ', correct: false }
    ]
  },
{
    question: 'តើព្រះសម្មាសម្ពុទ្ធទ្រង់ដាក់ព្រះជន្មាយុសង្ខារក្នុងឆ្នាំណាដែរ?',
    answers: [
	{ text: 'ឆ្នាំ​ ម្សាញ់', correct: true },
	{ text: 'ឆ្នាំ វក', correct: false },
	{ text: 'ឆ្នាំ ខាល', correct: false },
	{ text: 'ឆ្នាំ​ ច', correct: false }
    ]
  },
{
    question: 'តើព្រះសម្មាសម្ពុទ្ធទ្រង់បរិនិពា្វនក្នុងឆ្នាំណាដែរ?',
    answers: [
	{ text: 'ឆ្នាំ​ ម្សាញ់', correct: true },
	{ text: 'ឆ្នាំ ខាល', correct: false },
	{ text: 'ឆ្នាំ​ ច', correct: false },
	{ text: 'ឆ្នាំ រការ', correct: false }
    ]
  },
]

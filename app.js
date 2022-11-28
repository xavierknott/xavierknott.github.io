const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame),
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
    startButton.innerText = 'Restart'
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
    question: 'How do you say Merry Christmas in Spanish?',
    answers: [
      { text: 'Feliz Navidad', correct: true },
      { text: 'Joyeux Noël', correct: false },
      { text: 'Feliz Natal', correct: false},
      { text: 'Buon Natale', correct: false}

    ]
  },
  {
    question: 'How many Reinder does Santa have?',
    answers: [
      { text: '9', correct: true },
      { text: '7.5', correct: false },
      { text: '8', correct: false },
      { text: '6', correct: false }
    ]
  },
  {
    question: 'Which ocean is Christmas Island situated in?',
    answers: [
      { text: 'Pacific', correct: false },
      { text: 'Indian', correct: true },
      { text: 'North Atlantic', correct: false },
      { text: 'South Atlantic', correct: false }
    ]
  },
  {
    question: 'What was the best-selling Christmas toy in 2006?',
    answers: [
      { text: 'Rubix Cube', correct: false },
      { text: 'BMX Bike', correct: false },
      { text: 'Nintendo Wii', correct: false },
      { text: 'XBox 360', correct: true },
    ]
  },
  {
    question: 'Where do candy canes come from?',
    answers: [
      { text: 'Denmark', correct: false },
      { text: 'USA', correct: false },
      { text: 'Poland', correct: false },
      { text: 'Germany', correct: true },
    ]
  },
  {
    question: 'What do they call Santa Claus in Italain?',
    answers: [
      { text: 'Papa Noel', correct: false },
      { text: 'Babbo Natale', correct: true },
      { text: 'Santa Claus', correct: false },
      { text: 'Jólasveinn', correct: false },
    ]
  },
  {
  question: 'What is the highest grossing Christmas movie of all time?',
  answers: [
    { text: 'Home Alone', correct: false },
    { text: 'The Grinch Who Stole Christmas', correct: true },
    { text: 'Muppets Christmas Carol', correct: false },
    { text: 'Home Alone 2', correct: false },
  ]
},
{
    question: 'In Home Alone 1 where does the McCallister family go on vacation?',
    answers: [
      { text: 'London', correct: false },
      { text: 'Miami', correct: false },
      { text: 'Paris', correct: true },
      { text: 'New York', correct: false },
    ]
},
{
    question: 'In which country did eggnog originate in?',
    answers: [
      { text: 'Germany', correct: false },
      { text: 'Poland', correct: false },
      { text: 'England', correct: true },
      { text: 'Scotland', correct: false },
    ]
},
]
